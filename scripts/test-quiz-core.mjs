import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const QuizCore = require('../shared/quiz-core.js');

test('shuffledCopy giữ đủ phần tử và không đổi mảng gốc', () => {
  const input = [1, 2, 3, 4];
  const out = QuizCore.shuffledCopy(input, () => 0);
  assert.deepEqual([...input], [1, 2, 3, 4]);
  assert.deepEqual([...out].sort(), [1, 2, 3, 4]);
});

test('shuffleInPlace giữ đủ phần tử', () => {
  const input = [1, 2, 3, 4];
  QuizCore.shuffleInPlace(input, () => 0);
  assert.deepEqual(input.sort(), [1, 2, 3, 4]);
});

test('normalizeText bỏ dấu, ký tự đặc biệt, gộp khoảng trắng', () => {
  assert.equal(QuizCore.normalizeText('  Vọng (nhìn) - Văn  '), 'vong nhin van');
});

test('normalizeAnswers bỏ id lạ, giá trị sai; chuẩn hoá chữ thường', () => {
  const out = QuizCore.normalizeAnswers({ 1: 'B', 2: 'Z', 3: 'a', 9: 'C' }, [1, 2, 3]);
  assert.deepEqual(out, { 1: 'B', 3: 'A' });
});

test('normalizeAnswers trả object rỗng với dữ liệu hỏng', () => {
  assert.deepEqual(QuizCore.normalizeAnswers(null, [1]), {});
  assert.deepEqual(QuizCore.normalizeAnswers([1, 2], [1, 2]), {});
  assert.deepEqual(QuizCore.normalizeAnswers('x', [1]), {});
});

test('normalizeOrder giữ order hợp lệ', () => {
  assert.deepEqual(QuizCore.normalizeOrder([3, 1, 2], [1, 2, 3]), [3, 1, 2]);
});

test('normalizeOrder trả null với order thiếu/thừa/trùng/sai kiểu', () => {
  assert.equal(QuizCore.normalizeOrder([1, 2], [1, 2, 3]), null);
  assert.equal(QuizCore.normalizeOrder([1, 2, 3, 4], [1, 2, 3]), null);
  assert.equal(QuizCore.normalizeOrder([1, 1, 2], [1, 2, 3]), null);
  assert.equal(QuizCore.normalizeOrder('x', [1, 2, 3]), null);
  assert.equal(QuizCore.normalizeOrder(null, [1, 2, 3]), null);
});

test('countAnswered đếm array, object và cap total', () => {
  assert.equal(QuizCore.countAnswered([null, 'A', null, 'B'], 4), 2);
  assert.equal(QuizCore.countAnswered({ 1: 'A', 3: 'B' }, 4), 2);
  assert.equal(QuizCore.countAnswered({ 1: 'A', 3: 'B' }, 1), 1);
});

test('countAnswered trả 0 với dữ liệu hỏng', () => {
  assert.equal(QuizCore.countAnswered(null, 10), 0);
  assert.equal(QuizCore.countAnswered('not json', 10), 0);
  assert.equal(QuizCore.countAnswered(42, 10), 0);
});

test('shuffleOptions giữ cặp key-text', () => {
  const q = { option_a: 'a', option_b: 'b', option_c: 'c', option_d: 'd' };
  const out = QuizCore.shuffleOptions(q, () => 0);
  assert.deepEqual(out.map(o => o.key).sort(), ['A', 'B', 'C', 'D']);
  for (const o of out) assert.equal(o.text, q[`option_${o.key.toLowerCase()}`]);
});

test('displayLetter ánh xạ key gốc sang vị trí hiển thị', () => {
  const options = [{ key: 'C' }, { key: 'A' }, { key: 'D' }, { key: 'B' }];
  assert.equal(QuizCore.displayLetter(options, 'A'), 'B');
  assert.equal(QuizCore.displayLetter(options, 'D'), 'C');
  assert.equal(QuizCore.displayLetter(options, 'Z'), '');
});
