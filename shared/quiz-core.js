(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.QuizCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function shuffleInPlace(array, random = Math.random) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function shuffledCopy(array, random = Math.random) {
    return shuffleInPlace(array.slice(), random);
  }

  function normalizeText(text) {
    return String(text)
      .toLowerCase()
      .replace(/đ/g, 'd')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();
  }

  function normalizeAnswers(raw, validIds) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
    const valid = new Set((validIds || []).map(String));
    const out = {};
    for (const key of Object.keys(raw)) {
      if (!valid.has(String(key))) continue;
      const value = String(raw[key]).toUpperCase();
      if (value === 'A' || value === 'B' || value === 'C' || value === 'D') {
        out[key] = value;
      }
    }
    return out;
  }

  function normalizeOrder(raw, validIds) {
    if (!Array.isArray(raw)) return null;
    const valid = (validIds || []).map(Number);
    const validSet = new Set(valid);
    if (raw.length !== valid.length) return null;
    const seen = new Set();
    for (const value of raw) {
      if (!Number.isInteger(value) || !validSet.has(value) || seen.has(value)) return null;
      seen.add(value);
    }
    return raw.slice();
  }

  function countAnswered(raw, total) {
    const cap = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : 0;
    let value = raw;
    if (typeof value === 'string') {
      try {
        value = JSON.parse(value);
      } catch {
        return 0;
      }
    }
    let count = 0;
    if (Array.isArray(value)) {
      count = value.filter(Boolean).length;
    } else if (value && typeof value === 'object') {
      count = Object.keys(value).length;
    } else {
      return 0;
    }
    return Math.min(count, cap);
  }

  function shuffleOptions(question, random = Math.random) {
    const options = [
      { key: 'A', text: question.option_a },
      { key: 'B', text: question.option_b },
      { key: 'C', text: question.option_c },
      { key: 'D', text: question.option_d }
    ];
    return shuffleInPlace(options, random);
  }

  function displayLetter(options, originalKey) {
    const index = (options || []).findIndex(option => option.key === originalKey);
    return index >= 0 ? String.fromCharCode(65 + index) : '';
  }

  return {
    shuffleInPlace,
    shuffledCopy,
    normalizeText,
    normalizeAnswers,
    normalizeOrder,
    countAnswered,
    shuffleOptions,
    displayLetter
  };
});
