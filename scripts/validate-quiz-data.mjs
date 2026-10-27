import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const QuizCore = require('../shared/quiz-core.js');

const OPTION_KEYS = ['option_a', 'option_b', 'option_c', 'option_d'];
const ANSWERS = new Set(['A', 'B', 'C', 'D']);

function optionFingerprint(value) {
  return String(value).trim().replace(/\s+/g, ' ').toLowerCase();
}

export function validateQuizData(data, expectedCount) {
  const errors = [];

  if (!Array.isArray(data)) {
    return { ok: false, errors: ['data is not an array'] };
  }
  if (data.length !== expectedCount) {
    errors.push(`expected ${expectedCount} questions, got ${data.length}`);
  }

  const seenIds = new Set();
  const seenQuestions = new Set();

  data.forEach((q, index) => {
    const where = `question #${index + 1}`;

    if (!q || typeof q !== 'object') {
      errors.push(`${where}: not an object`);
      return;
    }

    if (typeof q.id !== 'number' || !Number.isInteger(q.id)) {
      errors.push(`${where}: id must be an integer`);
    } else {
      if (seenIds.has(q.id)) errors.push(`${where}: duplicate id ${q.id}`);
      seenIds.add(q.id);
      if (q.id !== index + 1) {
        errors.push(`${where}: id ${q.id} does not match position ${index + 1}`);
      }
    }

    if (typeof q.question !== 'string' || !q.question.trim()) {
      errors.push(`${where}: question is empty`);
    }

    const optionFingerprints = [];
    for (const key of OPTION_KEYS) {
      const value = q[key];
      if (typeof value !== 'string' || !value.trim()) {
        errors.push(`${where}: ${key} is missing or empty`);
      } else {
        optionFingerprints.push(optionFingerprint(value));
      }
    }

    if (!ANSWERS.has(q.answer)) {
      errors.push(`${where}: answer must be A, B, C or D`);
    }

    if (optionFingerprints.length === OPTION_KEYS.length) {
      const uniqueOptions = new Set(optionFingerprints);
      if (uniqueOptions.size !== optionFingerprints.length) {
        errors.push(`${where}: duplicate option text`);
      }

      const signature = [
        QuizCore.normalizeText(q.question || ''),
        [...optionFingerprints].sort().join('|'),
        q.answer
      ].join('::');
      if (seenQuestions.has(signature)) {
        errors.push(`${where}: duplicate question`);
      }
      seenQuestions.add(signature);
    }
  });

  return { ok: errors.length === 0, errors };
}

function runCli() {
  const [file, expected] = process.argv.slice(2);
  if (!file || !expected) {
    console.error('usage: node scripts/validate-quiz-data.mjs <file> <expectedCount>');
    process.exit(2);
  }

  let code;
  try {
    code = readFileSync(resolve(file), 'utf8');
  } catch (error) {
    console.error(`cannot read ${file}: ${error.message}`);
    process.exit(1);
  }

  let data;
  try {
    data = new Function(`${code}\n; return quizData;`)();
  } catch (error) {
    console.error(`cannot evaluate ${file}: ${error.message}`);
    process.exit(1);
  }

  const result = validateQuizData(data, Number(expected));
  if (!result.ok) {
    for (const error of result.errors) console.error(`ERROR: ${error}`);
    process.exit(1);
  }
  console.log(`OK: ${data.length} questions`);
}

const entry = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : '';
if (entry === import.meta.url) {
  runCli();
}
