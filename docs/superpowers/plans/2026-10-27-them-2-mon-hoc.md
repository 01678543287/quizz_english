# Thêm 2 môn Dược học cổ truyền & Dược lâm sàng — Kế hoạch triển khai

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Thêm 2 môn học mới (DHCT 217 câu, DLS 305 câu) vào ứng dụng quiz, giữ thứ tự câu khi refresh và chỉ đảo lại khi bấm "Reset kết quả", không làm mất đáp án khi refresh.

**Architecture:** Giữ nguyên mô hình tĩnh hiện tại: mỗi môn là một thư mục gồm `index.html`, `exam.html`, `main.js`, `exam.js`, `quiz_data.js`. Tách logic thuần (shuffle, thứ tự câu, chuẩn hoá đáp án) vào `shared/quiz-core.js` để test bằng Node; mỗi môn copy template Dược Lý 2 và thay phần đọc dữ liệu. Thứ tự câu lưu trong localStorage; đáp án lưu theo `id` câu + key gốc A–D, không theo vị trí mảng.

**Tech Stack:** HTML/CSS/JS thuần (không build step), Node 22 (`node:test`, `vm`), Python 3 cho chuyển đổi dữ liệu một lần.

**Spec:** `docs/superpowers/specs/2026-10-27-them-2-mon-hoc-design.md`

## Global Constraints

- Không thêm dependency, không build step; mọi file chạy trực tiếp trên trình duyệt.
- `duoc_hoc_co_truyen/quiz_data.js` đúng **217** câu; `duoc_lam_sang/quiz_data.js` đúng **305** câu.
- Schema câu hỏi: `id`, `question`, `option_a`..`option_d`, `answer` (A–D), không field thừa.
- `id` duy nhất, tuần tự 1..N; `answer` chỉ là chữ cái.
- Storage key: `quiz_question_order_dhct_v1` / `quiz_question_order_dls_v1`; `quiz_user_answers_dhct_v1` / `quiz_user_answers_dls_v1`; exam dùng `quiz_exam_*_dhct_v1` và `quiz_exam_*_dls_v1`.
- Trang kiểm tra: đúng 40 câu, giữ đề qua refresh.
- Không sửa file của các môn cũ; không sửa `shared/style.css`.
- Toàn bộ UI text tiếng Việt, giữ văn phong hiện tại.
- Trang luyện tập giữ nguyên order khi tải lại; chỉ nút "Reset kết quả" mới đảo câu, xoá đáp án và về trang 1.
- Đáp án phải gắn đúng câu và đúng nội dung phương án sau refresh.
- Giao diện bám `docs/design/mobile-ui.md`: mobile-first 430×932, safe area, vùng chạm ≥44px, 20 câu/trang, bottom sheet.
- Không dùng gradient tím/glassmorphism/emoji icon/card bo 24px; icon là inline SVG.
- Motion theo spec: press stamp, card enter, success underline, shake, streak, sheet; tôn trọng `prefers-reduced-motion`.
- Lobby render từ `shared/subjects.js`, có tiến độ + "Tiếp tục học".

## Review Focus

1. **Refresh giữa lúc làm bài:** thứ tự câu không đổi, đáp án đã chọn vẫn ở đúng câu và đúng phương án; bấm "Reset kết quả" thì order đổi, đáp án bị xoá, về trang 1.
2. **localStorage hỏng hoặc dữ liệu kiểu cũ:** object rỗng, mảng, JSON lỗi, `id` lạ → trang vẫn render, không crash, không lưu rác.
3. **Dedupe quá tay:** các câu gần giống nhưng khác nghĩa (tân ôn vs tân lương; "chậm lớn" của DLS) phải được giữ.
4. **Câu thiếu phương án/trùng nhãn:** DHCT PHẦN 1 câu 18, PHẦN 2 câu 1; DLS Bài 8 câu 4 — phải có 4 phương án khác nhau và đáp án đúng.
5. **Trang kiểm tra:** refresh không được tạo đề mới; "Tạo đề mới" phải xoá đúng 3 key.
6. **iPhone 14 Pro Max:** app bar không bị Dynamic Island che, bottom bar không bị home indicator che, nội dung cuối không bị che, không tràn ngang ở 430×932.
7. **Reduced motion:** bật lên không còn translate/shake/confetti/sheet trượt; vẫn phân biệt đúng/sai bằng màu + icon.
8. **Lobby:** card môn đúng số câu/tiến độ; "Tiếp tục học" chọn môn có tiến độ cao nhất; localStorage lỗi không làm trắng trang.

---

### Task 1: Quiz core + test

**Files:**
- Create: `shared/quiz-core.js`
- Test: `scripts/test-quiz-core.mjs`

**Interfaces:**
- Produces:
  - `QuizCore.shuffleInPlace(array, random = Math.random) -> array`
  - `QuizCore.shuffledCopy(array, random = Math.random) -> array`
  - `QuizCore.normalizeText(text) -> string`
  - `QuizCore.normalizeAnswers(raw, validIds) -> { [id: string]: "A"|"B"|"C"|"D" }`
  - `QuizCore.normalizeOrder(raw, validIds) -> number[] | null`
  - `QuizCore.countAnswered(raw, total) -> number`
  - `QuizCore.shuffleOptions(question, random = Math.random) -> Array<{ key: "A"|"B"|"C"|"D", text: string }>`
  - `QuizCore.displayLetter(options, originalKey) -> "A"|"B"|"C"|"D"|""`

- [ ] **Step 1: Viết test thất bại**

Tạo `scripts/test-quiz-core.mjs`:

```js
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
```

- [ ] **Step 2: Chạy test để thấy fail**

Run: `node --test scripts/test-quiz-core.mjs`
Expected: FAIL — `Cannot find module '../shared/quiz-core.js'`.

- [ ] **Step 3: Implement `shared/quiz-core.js`**

UMD để dùng được cả browser và Node:

```js
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.QuizCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  // Fisher-Yates; random mặc định Math.random
  function shuffleInPlace(array, random = Math.random) { /* ... */ }
  function shuffledCopy(array, random = Math.random) { return shuffleInPlace(array.slice(), random); }
  function normalizeText(text) { /* NFD, bỏ dấu, lowercase, gộp khoảng trắng */ }
  function normalizeAnswers(raw, validIds) { /* object, id hợp lệ, value A-D */ }
  function normalizeOrder(raw, validIds) { /* mảng đủ id, không trùng, đúng kiểu */ }
  function countAnswered(raw, total) { /* array/object/JSON string -> số đã làm, cap total */ }
  function shuffleOptions(question, random = Math.random) { /* 4 cặp key-text, shuffle */ }
  function displayLetter(options, originalKey) { /* index -> A/B/C/D */ }
  return { shuffleInPlace, shuffledCopy, normalizeText, normalizeAnswers, normalizeOrder, countAnswered, shuffleOptions, displayLetter };
});
```

Chi tiết bắt buộc:
- `normalizeAnswers`: trả `{}` nếu `raw` không phải plain object hoặc là array; value được `String(...).toUpperCase()`; chỉ nhận `A|B|C|D`; key phải nằm trong `validIds` (so sánh chuỗi).
- `normalizeOrder`: trả `null` nếu `raw` không phải array, sai độ dài, có `id` lạ, hoặc trùng; ngược lại trả bản sao mảng số.
- `countAnswered`: nhận array, object hoặc JSON string; array đếm phần tử truthy; object đếm key; JSON lỗi/kiểu khác trả 0; kết quả cap ở `total`.
- `normalizeText`: `String(text).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()`.

- [ ] **Step 4: Chạy test để thấy pass**

Run: `node --test scripts/test-quiz-core.mjs`
Expected: PASS — 11 test.

- [ ] **Step 5: Commit**

```bash
git add shared/quiz-core.js scripts/test-quiz-core.mjs
git commit -m "feat: add quiz core shuffle and answer normalization"
```

---

### Task 2: Validator dữ liệu + test

**Files:**
- Create: `scripts/validate-quiz-data.mjs`
- Test: `scripts/test-validate-quiz-data.mjs`
- Consumes: `QuizCore.normalizeText`

**Interfaces:**
- Produces: `validateQuizData(data, expectedCount) -> { ok: boolean, errors: string[] }`
- CLI: `node scripts/validate-quiz-data.mjs <file> <expectedCount>`; exit code 1 nếu lỗi.

- [ ] **Step 1: Viết test thất bại**

`scripts/test-validate-quiz-data.mjs`:

```js
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
```

- [ ] **Step 2: Chạy test để thấy fail**

Run: `node --test scripts/test-validate-quiz-data.mjs`
Expected: FAIL — không tìm thấy module `validate-quiz-data.mjs`.

- [ ] **Step 3: Implement validator**

Yêu cầu:
- Export `validateQuizData`.
- Kiểm tra: `Array.isArray`, đúng `expectedCount`, `id` là number duy nhất và bằng `index + 1`, đủ 4 option không rỗng, `answer` thuộc `A|B|C|D`, không có 2 option trùng theo `normalizeText`.
- Trùng câu chỉ tính khi **cùng nội dung câu + cùng bộ phương án + cùng đáp án**; cùng stem nhưng khác phương án/đáp án là hợp lệ.
- CLI đọc file bằng `new Function(code + '; return quizData;')()`; bắt lỗi cú pháp; in từng lỗi; `process.exit(1)` nếu fail.

- [ ] **Step 4: Chạy test để thấy pass**

Run: `node --test scripts/test-validate-quiz-data.mjs`
Expected: PASS — 8 test.

- [ ] **Step 5: Commit**

```bash
git add scripts/validate-quiz-data.mjs scripts/test-validate-quiz-data.mjs
git commit -m "test: add quiz data validator"
```

---

### Task 3: Dữ liệu Dược học cổ truyền (217 câu)

**Files:**
- Create: `duoc_hoc_co_truyen/quiz_data.js`
- Input: `duoc_hoc_co_truyen/DHCT f.docx`
- Reference: `docs/subjects/duoc-hoc-co-truyen.md`

**Interfaces:**
- Produces: global `const quizData` — mảng 217 object đúng schema, `id` 1..217.

- [ ] **Step 1: Chạy validator để thấy fail**

Run: `node scripts/validate-quiz-data.mjs duoc_hoc_co_truyen/quiz_data.js 217`
Expected: FAIL — file không tồn tại.

- [ ] **Step 2: Bóc text nguồn**

```bash
textutil -convert txt -output /tmp/dhct.txt "duoc_hoc_co_truyen/DHCT f.docx"
```

- [ ] **Step 3: Parse + dedupe + sửa lỗi**

Quy tắc parse:
- Câu bắt đầu bằng `**Câu N.**`, `**N.**`, hoặc `Câu N.`.
- Phương án `A.`..`D.`.
- Đáp án `**Đáp án: X. ...**` hoặc `Đáp án: X. ...`; bỏ phần `*(...)*` ở cuối.
- Section đánh dấu bởi `###`, `PHẦN`, `Trang`.

Xử lý:
- Bỏ 45 câu trùng khít theo `normalizeText`.
- Bỏ PHẦN 3 câu 21 (gần trùng PHẦN 2 câu 23).
- PHẦN 1 câu 18: thêm `option_d = "Tâm, Can, Tỳ, Phế, Thận, Tam tiêu"`.
- PHẦN 2 câu 1: đổi `option_c = "Vọng (nhìn) - Văn (nghe) - Thiết (sờ) - Vấn (hỏi)."`.
- Giữ nguyên đáp án của 6 câu ghi chú "dấu đỏ" (xem `docs/subjects/duoc-hoc-co-truyen.md`).
- Gán `id` 1..217 theo thứ tự xuất hiện sau dedupe.
- Ghi file theo đúng schema, kết thúc `];`.

- [ ] **Step 4: Chạy validator**

Run: `node scripts/validate-quiz-data.mjs duoc_hoc_co_truyen/quiz_data.js 217`
Expected: PASS — `OK: 217 questions`.

- [ ] **Step 5: Spot-check**

```bash
grep -c '"question"' duoc_hoc_co_truyen/quiz_data.js   # 217
grep -n 'Tam tiêu' duoc_hoc_co_truyen/quiz_data.js     # có option D mới
```

Kiểm tra tay 6 câu trong bảng đáp án nguồn ở `docs/subjects/duoc-hoc-co-truyen.md`.

- [ ] **Step 6: Commit**

```bash
git add duoc_hoc_co_truyen/quiz_data.js
git commit -m "feat: add duoc hoc co truyen question bank"
```

---

### Task 4: Dữ liệu Dược lâm sàng (305 câu)

**Files:**
- Create: `duoc_lam_sang/quiz_data.js`
- Input: `duoc_lam_sang/DLS.docx`
- Reference: `docs/subjects/duoc-lam-sang.md`

**Interfaces:**
- Produces: global `const quizData` — mảng 305 object đúng schema, `id` 1..305.

- [ ] **Step 1: Chạy validator để thấy fail**

Run: `node scripts/validate-quiz-data.mjs duoc_lam_sang/quiz_data.js 305`
Expected: FAIL — file không tồn tại.

- [ ] **Step 2: Bóc text nguồn**

```bash
textutil -convert txt -output /tmp/dls.txt "duoc_lam_sang/DLS.docx"
```

- [ ] **Step 3: Parse + sửa lỗi**

Quy tắc parse:
- Câu bắt đầu bằng dòng `Câu N`, nội dung câu ở dòng kế tiếp (có thể sau dòng trống).
- Phương án `A.`..`D.`; một số câu có phương án A nằm cùng dòng câu hỏi (ví dụ `...? A. Glucid`).
- Đáp án `Đáp án: X. ...` hoặc chỉ `Đáp án: X`.

Xử lý:
- Không dedupe toàn bộ; giữ cả 2 câu "chậm lớn" (Bài 14 câu 4 và 7).
- Bài 8 câu 1: đáp án nguồn chỉ ghi `A`; data dùng `option_a = "Glucid"` (đã có) và `answer = "A"`, chỉ ghi chú vào docs.
- Bài 8 câu 4: `option_a = "≥ 126mg/dl"`, `option_b = "< 126mg/dl"`, giữ `answer = "A"`.
- Gán `id` 1..305 theo thứ tự nguồn.

- [ ] **Step 4: Chạy validator**

Run: `node scripts/validate-quiz-data.mjs duoc_lam_sang/quiz_data.js 305`
Expected: PASS — `OK: 305 questions`.

- [ ] **Step 5: Spot-check**

```bash
grep -c '"question"' duoc_lam_sang/quiz_data.js     # 305
grep -n 'chậm lớn ở trẻ em' duoc_lam_sang/quiz_data.js  # 2 kết quả
```

- [ ] **Step 6: Commit**

```bash
git add duoc_lam_sang/quiz_data.js
git commit -m "feat: add duoc lam sang question bank"
```

---

### Task 5: Mobile practice + exam cho DHCT

**Files:**
- Create: `shared/mobile.css`
- Create: `duoc_hoc_co_truyen/index.html`
- Create: `duoc_hoc_co_truyen/exam.html`
- Create: `duoc_hoc_co_truyen/main.js`
- Create: `duoc_hoc_co_truyen/exam.js`
- Consumes: `QuizCore` (Task 1), `quizData` (Task 3), spec `docs/design/mobile-ui.md`

**Interfaces:**
- `main.js` đọc global `quizData` và `QuizCore`.
- Storage: `quiz_question_order_dhct_v1` (mảng id), `quiz_user_answers_dhct_v1` (object), exam dùng 3 key `quiz_exam_*_dhct_v1`.
- DOM IDs: `question-card`, `current-num`, `total-num`, `progress-fill`, `prev-btn`, `next-btn`, `sheet-btn`, `question-sheet`, `sheet-backdrop`, `sheet-grid`, `reset-btn`.

- [ ] **Step 1: Tạo `shared/mobile.css`**

Triển khai đúng spec `docs/design/mobile-ui.md` mục 2, 3, 5:

- tokens màu/typography/spacing/radius/shadow/motion;
- override `body` sang `--paper`; tắt `body::before` (wave SVG cũ); reset gradient/`text-fill` của `h1`;
- app bar + progress line + safe-area top;
- question card + option button 56px + states selected/correct/wrong;
- bottom bar 3 nút + safe-area bottom;
- bottom sheet + grid 44px + backdrop;
- keyframes: card enter, success underline, check stamp, shake, streak chip, paper confetti;
- `@media (prefers-reduced-motion: reduce)` theo mục 5.10;
- `@media (min-width: 900px)`: grid `300px 1fr` với `.desktop-sidebar`, app bar span 2 cột, ẩn `#sheet-btn`; `.desktop-sidebar` render grid câu 10 cột.

Không dùng gradient tím, glass, emoji; icon SVG.

- [ ] **Step 2: Tạo `index.html`**

Cấu trúc semantic (không copy layout 20 câu/trang):

```html
<body class="practice-page">
  <header class="app-bar">
    <a class="icon-btn" href="../shared/menu.html" aria-label="Về menu">…svg…</a>
    <div class="app-bar-title">Dược Học Cổ Truyền</div>
    <div class="app-bar-count"><span id="current-num">1</span>/<span id="total-num">217</span></div>
    <div class="progress-track"><div id="progress-fill"></div></div>
  </header>
  <main class="practice-main"><div id="question-card"></div></main>
  <aside id="desktop-sidebar" class="desktop-sidebar" aria-label="Danh sách câu"></aside>
  <p id="live-region" class="visually-hidden" aria-live="polite"></p>
  <nav class="bottom-bar" aria-label="Điều hướng câu hỏi">
    <button id="prev-btn" class="btn-ghost">Trước</button>
    <button id="sheet-btn" class="btn-pill">Danh sách câu</button>
    <button id="next-btn" class="btn-primary">Sau</button>
  </nav>
  <div id="sheet-backdrop" class="sheet-backdrop" hidden></div>
  <section id="question-sheet" class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" hidden>
    <div class="sheet-handle"></div>
    <div class="sheet-head"><h2 id="sheet-title">Danh sách câu</h2><button id="sheet-close" aria-label="Đóng">…svg…</button></div>
    <div id="sheet-grid" class="sheet-grid"></div>
    <button id="reset-btn" class="btn-danger">Reset kết quả</button>
  </section>
  <script src="../shared/quiz-core.js"></script>
  <script src="quiz_data.js"></script>
  <script src="main.js"></script>
</body>
```

- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.
- Load `../shared/style.css` rồi `../shared/mobile.css`.
- Không load `enhance-ux.js` (tránh double keyboard/scroll).
- Không có H1 lớn, hint đảo câu đặt trong sheet hoặc app bar (không chiếm màn hình).

- [ ] **Step 3: Tạo `main.js` (20 câu/trang)**

State:

```js
const QUESTIONS_PER_PAGE = 20;
const ids = quizData.map(q => q.id);
const byId = new Map(quizData.map(q => [q.id, q]));
let questionOrder = QuizCore.normalizeOrder(readJson(ORDER_KEY), ids);
if (!questionOrder) { questionOrder = QuizCore.shuffledCopy(ids); writeJson(ORDER_KEY, questionOrder); }
let userAnswers = QuizCore.normalizeAnswers(readJson(ANSWERS_KEY), ids);
let currentPage = 1;
const optionCache = new Map();
let streak = 0;
```

Bắt buộc:

- `renderPage()`: lấy `start = (currentPage - 1) * 20`, render tối đa 20 `.question-card` vào `#question-card`; mỗi card có `data-index`, label `Câu N`, câu hỏi, 4 option.
- `buildOptionButton`: chữ cái hiển thị theo vị trí (`A–D`), `dataset.key` là key gốc; so đúng/sai bằng `option.key === question.answer`; đã trả lời thì disable + `.is-correct` / `.is-wrong`.
- `selectOption`: lưu `userAnswers[q.id] = option.key`, `writeJson(ANSWERS_KEY, ...)`, disable 4 option của câu đó, cập nhật grid; correct thì streak++, sai thì streak=0.
- `updateAppBar()`: `current-num = currentPage`, `total-num = ceil(N/20)`, progress width = page/totalPages; `prev`/`next` theo trang.
- `renderGrids()`: render vào `#sheet-grid` và `#desktop-sidebar`; ô của trang hiện tại có `.is-current`; click gọi `goToQuestion(index)`.
- `goToQuestion(index)`: tính page, render nếu khác trang, đóng sheet, scroll tới `[data-index]` và focus block.
- `goToPage(page)`: clamp, render, đóng sheet, scroll top.
- Sheet: mở/đóng, focus trap, `Esc`; app bar reset icon, inline reset và sheet reset.
- Reset: **popup xác nhận** `#reset-dialog` (Huỷ/Reset), focus trap, `Esc`; confirm mới xoá đáp án, đảo order, về trang 1.
- Toolbar `Làm kiểm tra 40 câu` link `exam.html` ở đầu `practice-main`.
- Keyboard: `ArrowLeft/Right` chuyển trang; bỏ qua khi sheet/dialog mở hoặc có modifier.
- Motion: đúng → success underline + check stamp + 6 mảnh giấy trong card; sai → shake 240ms; streak 3 → chip; reduced motion chỉ đổi màu/icon.

- [ ] **Step 4: Tạo `exam.html` + `exam.js`**

Copy từ `duocly-2`, giữ nguyên `#main-layout`, `#sidebar`, `#quiz-container` để `exam.js` chạy:

- Thêm `class="exam-page"` + `shared/mobile.css`.
- Thêm app bar (back, tên môn, "40 câu") phía trên.
- Đổi title/H1: "KIỂM TRA DƯỢC HỌC CỔ TRUYỀN (40 câu ngẫu nhiên)".
- Đổi 3 storage key: `quiz_exam_indexes_dhct_v1`, `quiz_exam_shuffled_options_dhct_v1`, `quiz_exam_answers_dhct_v1`.
- Bọc `#sidebar` trong `<details class="exam-nav">`; render 40 ô một hàng ngang 1..40 (6 cột mobile / 10 desktop, 44px); giữ 20 câu/trang.
- Lưu đáp án ngay khi bấm, disable 4 option; bỏ delay 600ms chỉ để chạy hiệu ứng.
- Bỏ hiệu ứng tim/phân bay; `prefers-reduced-motion` tắt animation h1/main-layout/question-block.

- [ ] **Step 5: Kiểm tra cú pháp**

Run:
```bash
node --check duoc_hoc_co_truyen/main.js
node --check duoc_hoc_co_truyen/exam.js
```
Expected: exit 0.

- [ ] **Step 6: Kiểm tra tay 430×932 + desktop**

```bash
python3 -m http.server 8000
```

Mở `http://localhost:8000/duoc_hoc_co_truyen/index.html`:

- DevTools 430×932: không tràn ngang; `scrollWidth === innerWidth`; app bar/bottom bar không bị che.
- Mọi nút ≥44×44 (kiểm tra `getBoundingClientRect`).
- Có đúng 20 `.question-card`/trang; app bar hiện `Trang 1/11`.
- Chọn đáp án câu 1, ghi nội dung; refresh 3 lần: order giữ nguyên, đáp án đúng câu.
- Reset: bấm icon/nút → popup xác nhận; Huỷ giữ đáp án; Reset xoá đáp án, order đổi, về trang 1.
- Toolbar `Làm kiểm tra 40 câu` mở `exam.html`.
- Sheet: mở bằng nút, chọn câu nhảy đúng trang/câu, `Esc` đóng, focus về nút.
- Reduced motion: không còn shake/confetti/sheet trượt; vẫn thấy đúng/sai.
- Desktop ≥900px: sidebar grid hiện, bottom bar ẩn trigger sheet.
- `exam.html`: 40 câu, refresh giữ đề, "Tạo đề mới" đổi đề.

- [ ] **Step 7: Commit**

```bash
git add shared/mobile.css duoc_hoc_co_truyen/index.html duoc_hoc_co_truyen/exam.html duoc_hoc_co_truyen/main.js duoc_hoc_co_truyen/exam.js
git commit -m "feat: add mobile-first duoc hoc co truyen quiz pages"
```

---

### Task 6: Mobile practice + exam cho DLS

**Files:**
- Create: `duoc_lam_sang/index.html`
- Create: `duoc_lam_sang/exam.html`
- Create: `duoc_lam_sang/main.js`
- Create: `duoc_lam_sang/exam.js`
- Consumes: `QuizCore` (Task 1), `quizData` (Task 4), `shared/mobile.css` (Task 5)

**Interfaces:**
- Storage: `quiz_question_order_dls_v1`, `quiz_user_answers_dls_v1`, `quiz_exam_*_dls_v1`.

- [ ] **Step 1: Tạo 4 file**

Lặp lại Task 5 (Step 2–4) với các thay đổi:
- App bar: "Dược Lâm Sàng"; tổng câu 305.
- `<title>Quiz Dược Lâm Sàng</title>`; H1 exam "KIỂM TRA DƯỢC LÂM SÀNG (40 câu ngẫu nhiên)".
- Không tạo lại `shared/mobile.css`; dùng file của Task 5.
- Storage key hậu tố `dls_v1` cho order, answers và exam.
- Không cần nút liên kết chéo; app bar chỉ có back về menu.

- [ ] **Step 2: Kiểm tra cú pháp**

Run:
```bash
node --check duoc_lam_sang/main.js
node --check duoc_lam_sang/exam.js
```
Expected: exit 0.

- [ ] **Step 3: Kiểm tra tay**

Lặp checklist Task 5 Step 6 trên `http://localhost:8000/duoc_lam_sang/index.html`, thay số câu 305.

- [ ] **Step 4: Commit**

```bash
git add duoc_lam_sang/index.html duoc_lam_sang/exam.html duoc_lam_sang/main.js duoc_lam_sang/exam.js
git commit -m "feat: add mobile-first duoc lam sang quiz pages"
```

---

### Task 7: Lobby "Sổ ôn bài" + README

**Files:**
- Create: `shared/subjects.js`
- Create: `shared/menu.css`
- Create: `shared/menu.js`
- Modify: `shared/menu.html`
- Modify: `README.md`
- Modify: `docs/README.md`
- Consumes: `QuizCore.countAnswered` (Task 1), spec `docs/design/mobile-ui.md` mục 4

- [ ] **Step 1: Tạo `shared/subjects.js`**

Chỉ 5 môn đang bật:

```js
window.SUBJECTS = [
  { id: 'tienganh2', name: 'Tiếng Anh 2', path: '../tieng-anh-2/index.html',
    icon: 'languages', accent: 'var(--accent-indigo)', count: 161,
    storageKey: 'quiz2_user_answers_v1' },
  { id: 'baoche2', name: 'Bào Chế 2', path: '../baoche-2/index.html',
    icon: 'flask-conical', accent: 'var(--accent-amber)', count: 72,
    storageKey: 'quiz_user_answers_v1' },
  { id: 'duocly2', name: 'Dược Lý 2', path: '../duocly-2/index.html',
    icon: 'pill', accent: 'var(--accent-teal)', count: 150,
    storageKey: 'quiz_user_answers_duocly2_v1' },
  { id: 'dhct', name: 'Dược Học Cổ Truyền', path: '../duoc_hoc_co_truyen/index.html',
    icon: 'book-open', accent: 'var(--accent-olive)', count: 217,
    storageKey: 'quiz_user_answers_dhct_v1' },
  { id: 'dls', name: 'Dược Lâm Sàng', path: '../duoc_lam_sang/index.html',
    icon: 'stethoscope', accent: 'var(--accent-coral)', count: 305,
    storageKey: 'quiz_user_answers_dls_v1' }
];
```

Không tự bật lại các môn đang comment; muốn hiện thì thêm entry.

- [ ] **Step 2: Tạo `shared/menu.css`**

Theo `docs/design/mobile-ui.md` mục 2 + 4:

- override body sang `--paper`, chữ `--ink`; tắt `body::before`; reset gradient/`text-fill` của `h1`;
- `.lobby` max-width 1080px, gutter 20px, `padding-top: max(20px, env(safe-area-inset-top))`;
- `.lobby-top` wordmark serif + tag mono;
- `.lobby-hero` trái, highlight vàng dưới "học gì?";
- `.continue-card` + `.subject-card` (tab màu 6px, icon 40px, meta mono, progress 3px, shadow offset);
- grid 1 cột mobile, 2 cột ≥600px, 3 cột ≥1024px;
- press/hover/focus states; stagger entrance;
- reduced motion theo mục 5.10;
- không gradient tím/glass/emoji.

- [ ] **Step 3: Tạo `shared/menu.js`**

- Render `.subject-card` từ `window.SUBJECTS`.
- Tiến độ: `QuizCore.countAnswered(localStorage.getItem(s.storageKey), s.count)`.
- "Tiếp tục học": chọn môn có `answered > 0` và tỉ lệ cao nhất; nếu không có, chọn môn đầu tiên với nhãn "Bắt đầu".
- Cập nhật `#subject-count` = số môn; `#progress-summary` = tổng câu đã làm.
- Dùng DOM API; không `innerHTML` với dữ liệu localStorage.
- localStorage lỗi → coi như 0, không crash.

- [ ] **Step 4: Viết lại `shared/menu.html`**

- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.
- `<link rel="stylesheet" href="style.css">` + `<link rel="stylesheet" href="menu.css">`.
- Body `class="lobby-page"`, cấu trúc semantic:

```html
<main class="lobby">
  <header class="lobby-top">
    <div class="wordmark">Sổ Ôn Bài</div>
    <div class="lobby-tag">DƯỢC · <span id="subject-count">5</span> môn</div>
  </header>
  <section class="lobby-hero">
    <p class="eyebrow">HÔM NAY</p>
    <h1>Học <span class="hl">gì?</span></h1>
    <p class="hero-sub">Mỗi ngày một ít, đều hơn là dồn.</p>
  </section>
  <section id="continue-slot" aria-label="Tiếp tục học"></section>
  <section class="subject-section">
    <div class="section-head"><h2>Môn học</h2><span id="progress-summary"></span></div>
    <div id="subjects-list" class="subjects-list"></div>
  </section>
  <footer class="lobby-tip">…tip học tập…</footer>
</main>
<script src="quiz-core.js"></script>
<script src="subjects.js"></script>
<script src="menu.js"></script>
```

- Không còn inline `<style>`; không còn `onclick` hardcode.
- Có `<noscript>` với link danh sách môn.

- [ ] **Step 5: Cập nhật README**

- `README.md` gốc: thêm 2 môn, mô tả lobby/mobile, cây thư mục.
- `docs/README.md`: đổi trạng thái sang "đã triển khai", ghi số câu.

- [ ] **Step 6: Kiểm tra tay**

- 430×932: 1 cột, không tràn ngang, card ≥84px, tab màu đúng.
- Card "Tiếp tục học" mở đúng môn có tiến độ cao nhất.
- Chọn đáp án ở một môn, quay lại lobby: tiến độ tăng đúng.
- Xoá localStorage: lobby vẫn render, không crash, hiện "Bắt đầu".
- Desktop 1024px: 3 cột, vẫn giữ nhịp giấy.
- Reduced motion: card hiện ngay, không stagger/translate.
- Bàn phím: `Tab` qua từng card, `Enter` mở đúng môn.

- [ ] **Step 7: Commit**

```bash
git add shared/subjects.js shared/menu.css shared/menu.js shared/menu.html README.md docs/README.md
git commit -m "feat: redesign lobby with subject registry and progress"
```

---

### Task 8: Nghiệm thu tổng thể

**Files:** không tạo file mới.

- [ ] **Step 1: Chạy toàn bộ test + validator**

```bash
node --test scripts/test-quiz-core.mjs
node --test scripts/test-validate-quiz-data.mjs
node scripts/validate-quiz-data.mjs duoc_hoc_co_truyen/quiz_data.js 217
node scripts/validate-quiz-data.mjs duoc_lam_sang/quiz_data.js 305
```

Expected: tất cả PASS / `OK`.

- [ ] **Step 2: Kiểm tra không đụng môn cũ**

```bash
git status --short
git log --oneline -10
```

Expected: chỉ có file mới của 2 môn, `shared/menu.html`, `shared/menu.css`, `shared/menu.js`, `shared/subjects.js`, `shared/mobile.css`, `shared/quiz-core.js`, `scripts/`, `docs/`, `README.md`.

- [ ] **Step 3: Checklist tay cuối**

- Lobby 430×932: 1 cột, card đúng tên/số câu/tiến độ; "Tiếp tục học" đúng môn.
- Vào từng môn mới, làm 3 câu, refresh: order giữ nguyên, đáp án đúng câu.
- Bấm Reset: xác nhận 2 bước, đáp án xoá, order đổi, về trang 1.
- Sheet: mở/đóng bằng chạm, `Esc`, nút đóng; focus không thoát ra ngoài.
- Mọi nút ≥44×44; `document.documentElement.scrollWidth === window.innerWidth` ở 430, 393, 375.
- 430×932: app bar không bị Dynamic Island che; bottom bar không bị home indicator che.
- 768×1024 và 1024×768: layout chuyển đúng, không vỡ.
- Reduced motion: không translate/shake/confetti/sheet trượt; vẫn thấy đúng/sai.
- Trang kiểm tra: 40 câu, refresh giữ đề, "Tạo đề mới" đổi đề.
- Không còn gradient tím/glass/emoji icon/card bo 24px hàng loạt.

- [ ] **Step 4: Commit cuối (nếu còn thay đổi)**

```bash
git add -A
git commit -m "chore: finalize two new subjects"
```

---

## Self-Review

**Spec coverage:**
- Dữ liệu phẳng, không chọn chương → Task 3/4/5/6.
- Giữ order khi refresh; Reset mới đảo câu + xoá đáp án → Task 1/5/6.
- 217/305 câu, dedupe, sửa lỗi → Task 3/4.
- Mobile-first, 20 câu/trang, app bar, bottom bar, sheet → Task 5/6 + `docs/design/mobile-ui.md`.
- Motion (press, sweep, stamp, shake, streak, sheet) + reduced motion → Task 5/6.
- Lobby "Sổ ôn bài", registry, tiến độ, "Tiếp tục học" → Task 7.
- Exam 40 câu, giữ đề, mobile CSS → Task 5/6.
- Docs → đã tạo trước plan + Task 7 cập nhật README.
- Không đụng môn cũ → Global Constraints + Task 8.

**Type consistency:** `QuizCore.normalizeAnswers` trả object key string; `normalizeOrder` trả mảng số hoặc `null`; `countAnswered` trả number; `displayLetter` nhận mảng `{key,text}`; `shuffleOptions` trả cùng shape — Task 5/6/7 dùng đúng các tên này.

**Review Focus mapping:**
1 → Task 1 test `normalizeOrder` + Task 5 manual refresh/reset.
2 → Task 1 test normalizeAnswers hỏng + normalizeOrder null + Task 7 localStorage lỗi.
3 → Task 3/4 spot-check + validator.
4 → Task 3/4 fixes + validator.
5 → Task 5 manual exam refresh.
6 → Task 5/8 QA 430×932 + safe area.
7 → Task 5 reduced motion QA + Task 8.
8 → Task 7 manual lobby + `countAnswered` test.

**Proportion:** Plan mô tả quyết định và interface; phần code chỉ ở mức signature/test, không chép toàn bộ `main.js`.
