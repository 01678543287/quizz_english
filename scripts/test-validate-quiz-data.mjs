import test from 'node:test';
import assert from 'node:assert/strict';
import { validateQuizData } from './validate-quiz-data.mjs';

const q = (id, question, opts = ['a', 'b', 'c', 'd'], answer = 'A') => ({
  id, question,
  option_a: opts[0], option_b: opts[1], option_c: opts[2], option_d: opts[3],
  answer
});

test('dữ liệu hợp lệ pass', () => {
  const r = validateQuizData([q(1, 'Câu một'), q(2, 'Câu hai')], 2);
  assert.equal(r.ok, true, r.errors.join('; '));
});

test('sai số câu fail', () => {
  const r = validateQuizData([q(1, 'Câu một')], 2);
  assert.equal(r.ok, false);
  assert.match(r.errors.join(' '), /expected 2/i);
});

test('id trùng fail', () => {
  const r = validateQuizData([q(1, 'Câu một'), q(1, 'Câu hai')], 2);
  assert.equal(r.ok, false);
  assert.match(r.errors.join(' '), /duplicate id/i);
});

test('thiếu phương án fail', () => {
  const bad = q(1, 'Câu một');
  delete bad.option_d;
  const r = validateQuizData([bad], 1);
  assert.equal(r.ok, false);
  assert.match(r.errors.join(' '), /option_d/i);
});

test('đáp án ngoài A-D fail', () => {
  const r = validateQuizData([q(1, 'Câu một', undefined, 'E')], 1);
  assert.equal(r.ok, false);
  assert.match(r.errors.join(' '), /answer/i);
});

test('câu trùng hoàn toàn sau chuẩn hoá fail', () => {
  const r = validateQuizData([q(1, 'Vọng (nhìn) - Văn'), q(2, 'vọng nhìn văn!')], 2);
  assert.equal(r.ok, false);
  assert.match(r.errors.join(' '), /duplicate question/i);
});

test('cùng stem nhưng khác phương án/đáp án là hợp lệ', () => {
  const r = validateQuizData([
    q(1, 'Thuốc nào làm chậm lớn?', ['A1', 'B1', 'C1', 'D1'], 'C'),
    q(2, 'Thuốc nào làm chậm lớn?', ['A2', 'B2', 'C2', 'D2'], 'A')
  ], 2);
  assert.equal(r.ok, true, r.errors.join('; '));
});

test('hai phương án trùng nội dung fail', () => {
  const r = validateQuizData([q(1, 'Câu một', ['a', 'a', 'c', 'd'])], 1);
  assert.equal(r.ok, false);
  assert.match(r.errors.join(' '), /duplicate option/i);
});

test('phương án khác dấu < > không bị coi là trùng', () => {
  const r = validateQuizData([q(1, 'Câu một', ['< 1/100', '> 1/100', 'a', 'b'])], 1);
  assert.equal(r.ok, true, r.errors.join('; '));
});
