# Thiết kế UI/UX mobile-first — "Sổ ôn bài"

**Ngày:** 2026-10-27
**Phạm vi:** lobby menu + 2 trang luyện tập mới (DHCT, DLS)
**Thiết bị ưu tiên:** iPhone 14 Pro Max (430 × 932 CSS px), sau đó mở rộng lên tablet/desktop.

## 1. Hướng thị giác

Lấy cảm hứng từ dữ liệu ui-ux-pro-max:

- **E-Ink / Paper**: nền giấy ấm, tương phản cao, không gradient bóng loáng.
- **Anti-Polish / Raw**: nét viền mảnh, bóng offset như thẻ giấy xếp lớp, cảm giác "đồ thật".
- **Editorial Grid**: tiêu đề serif, nhãn mono, nhịp chữ rõ ràng.
- **LMS palette**: teal làm màu chính, amber làm highlight, xanh lá cho đúng, đỏ gạch cho sai.

Skill gợi ý **Claymorphism + Baloo 2/Comic Neue** cho "playful learning". Mình không chọn hướng đó vì rất dễ trông như template AI/đồ chơi. Mình giữ nguyên tắc tactile/micro-interaction của skill nhưng đổi sang giấy + mực + highlight + con dấu, phù hợp sinh viên Dược và có cá tính hơn.

Không dùng:

- gradient tím/xanh kiểu template AI, glassmorphism, blur nền;
- emoji làm icon điều hướng;
- card bo 24px + bóng mờ khắp nơi;
- hero căn giữa với hai pill CTA;
- hiệu ứng bay toàn màn hình, confetti rực rỡ, parallax vô hạn;
- illustration 3D blob, avatar giả, leaderboard giả.

Từ khóa cảm giác: **giấy, mực, highlight, con dấu, thẻ mục lục, gọn, thủ công**.

## 2. Design tokens

### 2.1 Màu

```css
:root {
  --paper: #FAF6EE;
  --paper-2: #F3EDE2;
  --surface: #FFFFFF;
  --ink: #1B1A17;
  --ink-2: #57534E;
  --ink-3: #6F665C;   /* nhãn nhỏ, vẫn ≥4.5:1 trên paper */
  --line: #E3DACB;
  --line-strong: #C9BDA9;

  --teal: #0F766E;          /* chữ/link/CTA, contrast ~5.4:1 trên paper */
  --teal-strong: #115E59;
  --teal-soft: #CCFBF1;

  --amber: #B45309;         /* chữ amber đậm, contrast ~4.8:1 */
  --amber-bright: #F59E0B;
  --highlighter: #FDE68A;

  --success: #15803D;
  --success-soft: #DCFCE7;
  --coral: #BE123C;
  --coral-soft: #FFE4E6;
  --focus: #1D4ED8;

  /* accent riêng cho tab môn */
  --accent-teal: #0F766E;
  --accent-amber: #B45309;
  --accent-indigo: #4338CA;
  --accent-olive: #4D7C0F;
  --accent-coral: #BE123C;
}
```

Quy tắc:

- Nền chính `--paper`; card `--surface`; không dùng trắng tinh cho toàn trang.
- Màu accent của môn chỉ dùng cho **tab 6px** + icon, không tô cả card.
- Không dùng chữ nhỏ trên `--amber-bright`/`--teal` nếu chưa đạt 4.5:1; dùng bản đậm.
- Đúng/sai không chỉ dựa vào màu: kèm icon + nhãn chữ.

### 2.2 Typography

```css
--font-display: ui-serif, "New York", Georgia, "Times New Roman", serif;
--font-body: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
--font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
```

- H1 lobby: `clamp(2rem, 8vw, 2.75rem)`, weight 600, letter-spacing -0.02em.
- Câu hỏi: serif 19px/1.45 trên mobile; desktop 21px.
- Đáp án: sans 16px/1.4.
- Nhãn nhỏ (CÂU 12, MÔN HỌC): mono 11–12px, uppercase, letter-spacing 0.08em.
- Số đếm/progress: mono, `font-variant-numeric: tabular-nums`.
- Input (nếu có): `font-size: 16px` để iOS không auto-zoom.

Tham chiếu ui-ux-pro-max: pairing **Academic/Research** (Crimson Pro + Atkinson Hyperlegible). Mình giữ tinh thần serif + sans dễ đọc nhưng dùng system font để chạy offline và hiển thị native trên iPhone (New York + SF Pro), tránh cảm giác template.

### 2.3 Khoảng cách, bo góc, bóng

```css
--space-1: 4px;  --space-2: 8px;  --space-3: 12px;
--space-4: 16px; --space-5: 20px; --space-6: 24px;
--space-8: 32px; --space-10: 40px; --space-12: 48px;

--radius-tag: 4px;
--radius-card: 10px;
--radius-pill: 999px;

--shadow-card: 0 1px 0 var(--line), 3px 3px 0 rgba(27, 26, 23, 0.06);
--shadow-press: 0 1px 0 var(--line), 1px 1px 0 rgba(27, 26, 23, 0.08);
--shadow-lift: 0 1px 0 var(--line), 5px 5px 0 rgba(27, 26, 23, 0.08);
```

- Mobile gutter: 20px; desktop max-width 1080px.
- Card không bo quá 12px; nút hành động chính có thể pill.
- Bóng là **offset cứng**, không phải bóng mờ lan tỏa.

## 3. Layout & iPhone 14 Pro Max

### 3.1 Viewport

Mọi trang mới và lobby:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

```css
html { -webkit-text-size-adjust: 100%; }
body {
  min-height: 100vh;
  min-height: 100dvh;
  background: var(--paper);
  color: var(--ink);
  overscroll-behavior-y: contain;
}
```

- Safe area:
  ```css
  .app-bar { padding-top: max(12px, env(safe-area-inset-top)); }
  .bottom-bar { padding-bottom: max(12px, env(safe-area-inset-bottom)); }
  ```
- Nội dung không bị che:
  ```css
  .practice-main { padding-bottom: calc(88px + env(safe-area-inset-bottom)); }
  ```
- Không dùng `100vh` đơn thuần; luôn có `100dvh` fallback.
- Không đặt nút sát mép Dynamic Island.
- `touch-action: manipulation` trên nút; tắt tap highlight mặc định.
- Vùng chạm tối thiểu **44 × 44px**, khoảng cách giữa các target ≥ 8px.

### 3.2 Breakpoints

| Breakpoint | Layout |
|---|---|
| < 600px | 1 cột; bottom bar; sheet danh sách câu |
| 600–899px | 1 cột rộng hơn; card lobby 2 cột |
| ≥ 900px | Practice 2 cột: sidebar grid 300px + nội dung; lobby 3 cột |
| ≥ 1200px | max-width 1080px, vẫn giữ nhịp giấy |

Test bắt buộc: **430×932** (14 Pro Max), 393×852 (14 Pro), 375×812, 768×1024, 932×430 landscape.

## 4. Lobby menu

### 4.1 Cấu trúc

```
┌──────────────────────────────────┐
│ SỔ ÔN BÀI            DƯỢC · 5 môn│
│                                  │
│ Hôm nay,                         │
│ học gì?                          │
│ ‾‾‾‾‾‾‾‾ (highlight vàng)        │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ TIẾP TỤC                     │ │
│ │ Dược Lý 2            42/150  │ │
│ │ ▓▓▓▓▓▓░░░░░░░░░░        →    │ │
│ └──────────────────────────────┘ │
│                                  │
│ MÔN HỌC                          │
│ ┌──────────────────────────────┐ │
│ │▎ [icon] Dược Lý 2            │ │
│ │         150 câu · đã làm 42  │ │
│ │         ▓▓▓▓▓░░░░░        →  │ │
│ └──────────────────────────────┘ │
│ ...                              │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ MẸO NHỎ                      │ │
│ │ 25 phút học, 5 phút nghỉ.    │ │
│ │ Đều đặn dễ hơn là dồn.       │ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘
```

### 4.2 Thành phần

- **Wordmark**: "SỔ ÔN BÀI" (serif, chữ thường hoa đầu), bên phải là tag "DƯỢC · 5 môn".
- **Greeting**: "Hôm nay, / học gì?" với highlight vàng dưới "học gì?" (pseudo-element `background: linear-gradient(transparent 60%, var(--highlighter) 60%)`).
- **Continue card**: chỉ hiện khi có môn đã làm > 0 câu; hiện tên môn, `answered/total`, progress line, mũi tên. Bấm mở đúng môn.
- **Subject card**:
  - `<a>` full card, min-height 84px;
  - tab màu 6px bên trái;
  - icon SVG 24px trong ô 40px nền `--paper-2`;
  - tên môn 17px weight 600;
  - meta mono 12px: `217 câu · đã làm 12`;
  - progress line 3px;
  - chevron SVG 20px.
- **Tip card**: tĩnh, không phải quote ngẫu nhiên; nội dung học tập cụ thể.
- **Footer**: dòng nhỏ "Dữ liệu lưu trên máy bạn" + phiên bản.

### 4.3 Dữ liệu menu

`shared/subjects.js` export registry:

```js
window.SUBJECTS = [
  {
    id: 'dhct',
    name: 'Dược Học Cổ Truyền',
    path: '../duoc_hoc_co_truyen/index.html',
    icon: 'book-open',
    accent: 'var(--accent-olive)',
    count: 217,
    storageKey: 'quiz_user_answers_dhct_v1'
  }
];
```

`shared/menu.js`:

- render card từ registry;
- đọc localStorage, đếm số đáp án (hỗ trợ cả array cũ và object mới);
- chọn "Tiếp tục" = môn có tỉ lệ đã làm cao nhất > 0, nếu không có thì môn đầu tiên;
- không crash nếu localStorage lỗi.

Các môn đang ẩn (comment cũ) không tự bật lại; muốn hiện thì thêm vào registry.

### 4.4 Motion lobby

| Trigger | Motion | Duration | Reduced motion |
|---|---|---|---|
| Tải trang | header fade-up 8px; card stagger 40ms | 220ms ease-out | opacity 120ms, không translate |
| Nhấn card | scale .985, bóng thu về | 90ms | đổi màu nền nhẹ |
| Hover (pointer) | lift 2px, bóng 5px | 150ms | không áp dụng |
| Progress | width từ 0 → giá trị | 320ms | hiện ngay |

Không có animation lặp vô hạn ở lobby.

## 5. Trang luyện tập

### 5.1 Mô hình

- **Một câu một màn hình** (không còn 20 câu/trang) cho 2 môn mới.
- Desktop ≥900px: sidebar grid câu hỏi cố định bên trái, nội dung bên phải.
- Mobile: sheet "Danh sách câu" mở từ bottom bar.
- Order câu lấy từ `quiz_question_order_<subject>_v1`; refresh giữ nguyên; Reset mới đảo.
- Đáp án lưu theo `id` + key gốc.

### 5.2 Cấu trúc

```
┌──────────────────────────────────┐
│ ←   Dược Lý 2            12/150  │
│ ▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ CÂU 12                       │ │
│ │ Phát biểu nào dưới đây ...   │ │
│ │                              │ │
│ │ ┌──────────────────────────┐ │ │
│ │ │ A  Cloratadin ...        │ │ │
│ │ └──────────────────────────┘ │ │
│ │ ┌──────────────────────────┐ │ │
│ │ │ B  Đối kháng cạnh tranh  │ │ │
│ │ └──────────────────────────┘ │ │
│ │ ...                          │ │
│ └──────────────────────────────┘ │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ Trước    Danh sách    Sau    │ │
│ └──────────────────────────────┘ │
└──────────────────────────────────┘
```

### 5.3 App bar

- Nút back 44×44, icon arrow-left, `aria-label="Về menu"`.
- Tên môn 15px, truncate 1 dòng.
- Số `current/N` mono.
- Progress line 3px dưới app bar: `(currentIndex + 1) / N`.
- Nền `--paper`, viền dưới 1px `--line`; sticky top, có safe-area top.
- Không có tiêu đề H1 lớn trên mobile.

### 5.4 Question card

- Card `--surface`, viền 1px `--line`, shadow-card, radius 10px, padding 20px.
- Nhãn `CÂU 12` mono 11px, màu `--ink-3`.
- Câu hỏi serif 19px/1.45, weight 500.
- Không đặt quá nhiều badge trong card.

### 5.5 Option button

- Full width, min-height 56px, padding 14px 16px.
- Layout: letter stamp 28×28 (mono, viền 1px) + text 16px.
- Chữ cái hiển thị theo **vị trí** (A–D); đáp án lưu theo key gốc của dữ liệu, không theo chữ cái hiển thị.
- Nền `--surface`, viền 1px `--line`, radius 8px.
- Chạm: translateY(1px), shadow-press, 90ms.
- Đã chọn: viền `--teal`, nền `--teal-soft`, letter stamp đảo màu.
- Đúng: viền `--success`, nền `--success-soft`, icon check SVG, highlighter sweep 320ms.
- Sai: viền `--coral`, nền `--coral-soft`, icon x SVG, shake 240ms.
- Disabled sau khi chọn; không đổi layout khi thêm icon.
- Khoảng cách giữa các option 10px (≥8px).

### 5.6 Bottom bar

- Sticky bottom, nền `--paper` + viền trên 1px `--line`.
- 3 vùng: `Trước` (ghost), `Danh sách câu` (pill teal), `Sau` (primary).
- Nút min 44px; safe-area bottom.
- `Sau` disabled ở câu cuối; `Trước` disabled ở câu đầu.
- Nút "Danh sách câu" mở sheet.

### 5.7 Sheet danh sách câu

- Bottom sheet cao tối đa 70dvh, bo 16px trên, viền 1px.
- Handle 36×4px, tiêu đề "Danh sách câu" + nút đóng 44px.
- Grid 6 cột mobile / 10 cột desktop, ô 44×44, gap 8px.
- Desktop ≥900px: grid nằm trong `#desktop-sidebar` cố định; mobile dùng `#sheet-grid` trong sheet.
- Trạng thái: chưa làm (paper), đang xem (viền teal), đúng (success-soft + chữ success), sai (coral-soft + chữ coral).
- Chọn câu → đóng sheet, nhảy đúng câu.
- Backdrop `rgba(27,26,23,0.32)`.
- `aria-modal="true"`, `role="dialog"`, focus trap, Esc đóng.
- Reduced motion: sheet hiện ngay, không trượt.

### 5.8 Reset

- Nút "Reset kết quả" đặt trong sheet, kiểu ghost + icon rotate-ccw, chữ đỏ.
- Bấm: xác nhận inline (2 bước) để tránh xoá nhầm; sau đó xoá đáp án, đảo order, về câu 1.
- Không dùng `confirm()` của trình duyệt.

### 5.9 Motion practice

| Trigger | Motion | Duration | Reduced motion |
|---|---|---|---|
| Vào câu | card fade-up 8px | 180ms ease-out | opacity 120ms |
| Nhấn option | translateY(1px) + shadow | 90ms | đổi nền |
| Đúng | highlighter sweep + check stamp + 6 mảnh giấy nhỏ | 320ms / 260ms | đổi màu + icon ngay |
| Sai | shake ±5px 3 nhịp + underline vẽ | 240ms | đổi màu + icon ngay |
| Streak 3 | chip "3 đúng liên tiếp" stamp | 220ms, tự ẩn 1.6s | hiện/ẩn opacity |
| Progress | width + số | 240ms | hiện ngay |
| Sheet | trượt lên + backdrop | 240ms / 180ms | hiện ngay |

Nguyên tắc:

- Chỉ animate `transform`, `opacity`, `background-size`, `box-shadow`.
- Không animate layout (width/height của card) trừ progress line.
- Không dùng animation lặp; không parallax.
- Confetti giấy: 6 mảnh, bên trong card, 400–520ms, không phủ màn hình.

### 5.10 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  .subject-card,
  .question-card,
  .option-btn,
  .streak-chip,
  .sheet {
    animation: none !important;
    transition-duration: 120ms !important;
    transition-property: background-color, border-color, color, opacity !important;
    transform: none !important;
  }
}
```

- Vẫn giữ phản hồi đúng/sai bằng màu + icon + text.
- Không có mảnh giấy bay, không shake, không stamp scale.
- Sheet và progress hiện ngay.

## 6. Iconography

- Inline SVG 24×24, stroke 1.75, `stroke-linecap="round"`, `stroke-linejoin="round"`, `currentColor`.
- Bộ icon tối thiểu:
  - UI: `arrow-left`, `chevron-right`, `list`, `x`, `check`, `rotate-ccw`, `flame`.
  - Môn: `languages`, `pill`, `flask-conical`, `book-open`, `stethoscope`.
- Không dùng emoji trong HTML điều hướng.
- Icon trang trí: `aria-hidden="true"`; icon đứng một mình: `aria-label` trên nút.
- Kích thước cố định theo token: 20px (meta), 24px (action), 28px (subject).

## 7. Nội dung & giọng văn

- Xưng "bạn", câu ngắn, không corporate.
- Ví dụ:
  - "Hôm nay, học gì?"
  - "Ôn tiếp nào"
  - "Câu 12/217"
  - "3 đúng liên tiếp"
  - "Sai rồi, xem lại nhé"
  - "Đã làm 42/150"
- Không dùng: "Chào mừng bạn đến với nền tảng học tập...", "Hãy bắt đầu hành trình tri thức", "AI-powered".
- Không hiển thị số liệu giả (streak, leaderboard) khi chưa có dữ liệu thật.

## 8. Accessibility

- Tương phản chữ ≥ 4.5:1; chữ lớn ≥ 3:1.
- Focus visible 3px `--focus`, offset 2px.
- Toàn bộ hành động dùng được bằng bàn phím: `Tab`, `Enter/Space`, `ArrowLeft/Right`, `Esc` đóng sheet.
- `aria-live="polite"` cho thông báo đúng/sai và streak (không đọc lại toàn bộ câu).
- Option là `<button>`; card môn là `<a>`.
- Không khoá zoom; không `user-scalable=no`.
- Reduced motion theo mục 5.10.
- Bàn phím không bị che bởi bottom bar; sheet có focus trap.

## 9. Checklist QA iPhone 14 Pro Max

- [ ] Mở 430×932: không tràn ngang, không cắt chữ.
- [ ] Tai thỏ/Dynamic Island không che app bar.
- [ ] Bottom bar không bị home indicator che; nội dung cuối không bị che.
- [ ] Tất cả nút ≥ 44×44px, cách nhau ≥ 8px.
- [ ] Chọn đáp án, refresh: order giữ nguyên, đáp án vẫn đúng câu.
- [ ] Bấm Reset: đáp án xoá, order đảo, về câu 1.
- [ ] Sheet mở/đóng bằng chạm, Esc, và nút đóng; focus không thoát ra ngoài.
- [ ] Reduced motion: không có chuyển động translate/shake/confetti; vẫn thấy đúng/sai.
- [ ] Landscape 932×430: bottom bar và sheet vẫn dùng được.
- [ ] Độ tương phản: chữ trên paper, teal, amber, coral đạt 4.5:1.
- [ ] Không có emoji thay icon; SVG hiển thị sắc nét ở DPR 3.
- [ ] Không có gradient tím/glass/bo góc 24px hàng loạt.

## 10. Ghi chú triển khai

- File mới: `shared/mobile.css` (practice), `shared/menu.css` (lobby), `shared/subjects.js`, `shared/menu.js`.
- Không sửa `shared/style.css`; các trang mới load thêm CSS riêng sau `style.css`.
- Trong CSS mới phải override các style cũ gây lệch hướng giấy:
  - `body { background: var(--paper); }`
  - `body::before { display: none; }` (bỏ wave SVG tím)
  - `h1 { background: none; -webkit-text-fill-color: var(--ink); color: var(--ink); text-shadow: none; }`
  - `#main-layout` chỉ dùng cho exam; practice dùng grid riêng.
- Trang cũ giữ nguyên giao diện; lobby mới là điểm vào chung.
- Trang kiểm tra (`exam.html`) giữ logic 20 câu/trang; chỉ áp dụng app bar, option full-width, safe-area. Nếu muốn one-question cho exam, tách task sau.
