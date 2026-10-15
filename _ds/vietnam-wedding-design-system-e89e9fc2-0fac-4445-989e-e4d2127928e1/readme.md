# Vietnam Wedding — Design System

A design system for a **static online wedding invitation (thiệp cưới online)** for a wedding in Vietnam. The brief from the couple: *light, formal, luxury, soft, thin, simple*.

**Product surface:** one — a mobile-first, single-page web invitation shared by link (Zalo, Messenger, SMS). Guests open an "envelope", read the invitation, see ceremony times and places, browse photos, RSVP and (optionally) send a gift by bank transfer.

**Sources:** none were provided — no logo, codebase, Figma or photography. Everything here was authored from the written brief. Fonts are Google Fonts chosen for full Vietnamese diacritic support; icons are Lucide. **There is no logo**: the couple's names in script (and the `Monogram`) take its place. Do not invent one.

---

## Content fundamentals

- **Language:** Vietnamese for all meaningful content; English used only as decorative script eyebrows ("Save the date", "With love", "Thank you", "R.S.V.P"). Never translate the Vietnamese body into English side-by-side.
- **Register:** formal and respectful (văn phong trang trọng). Address guests as **quý khách** / **bạn** in RSVP microcopy; the families speak as **gia đình chúng tôi**; the couple, in warmer moments, as **chúng mình**.
- **Customary phrases** (use verbatim):
  - "Trân trọng kính mời" · "Trân trọng báo tin lễ thành hôn của con chúng tôi"
  - "Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi."
  - "Vào lúc 10:00 · Chủ nhật" · "Tức ngày 27 tháng 10 năm Bính Ngọ" (lunar date line — always verify)
  - Ceremony names: **Lễ Vu Quy** (bride's side), **Lễ Thành Hôn** / **Lễ Tân Hôn** (groom's side), **Tiệc cưới**, **Lễ Gia Tiên**.
- **Family order:** parents listed as "Ông …" then "Bà …", with **Nhà trai** left, **Nhà gái** right.
- **Casing:** sentence case in prose; labels/buttons are written in sentence case in source and rendered UPPERCASE with wide tracking by CSS. Titles in serif may be uppercase (EventCard) or sentence case (SectionHeading).
- **Buttons:** short verbs — "Mở thiệp", "Chỉ đường", "Gửi xác nhận", "Mừng cưới", "Sao chép".
- **Dates:** `06 · 12 · 2026` (middle dots, zero-padded) in display; `06.12.2026` in prose; weekday spelled out ("Chủ nhật", "Thứ bảy").
- **Tone of feedback:** gentle and grateful — "Cảm ơn bạn đã xác nhận", "Đã sao chép số tài khoản". One sentence, no stacked exclamation marks.
- **Emoji:** never. **Unicode symbols:** only `囍` (Song Hỷ) via the `SongHy` component, `&`, and `·`.

## Visual foundations

- **Colour:** **lacquer red (đỏ son) leads.** `--red-600` is the accent (buttons, script names, accent text, tags), `--red-200` the hairline, `--red-50` the tinted section ground. The envelope cover and footer are full **red brand surfaces** (`--surface-brand`) carrying a gold double frame, ivory script and gold labels. Body sections stay on ivory paper (`--ivory-50` page, `--ivory-0` cards) so the card remains light and airy. **Champagne gold** is secondary: ornaments and type on red. **Blush** and **sage** are pale washes (secondary tags, success). Text is warm brown-black ink (`--ink-900/700/500`), never #000.
- **Type:** three families, all with Vietnamese subsets, self-hosted in `assets/fonts/`.
  - *Great Vibes* — couple names (52–88px) and English eyebrows (32px). Never for Vietnamese body text.
  - *Cormorant Garamond* 300 — titles and body (17–19px, line-height 1.65). Italic for asides.
  - *Be Vietnam Pro* 400 at 10–13px, uppercase, tracking `.28em` — labels, buttons, dates.
- **Thinness:** everything is drawn with **0.75px hairlines** (`--hairline`) in red-200 (gold-300 on red surfaces); 1px red-500 only for focus/active. Fields are underline-only. Icons are stroked at 1.25px.
- **Frames:** the signature is the **double hairline frame** — outer red-200, inner red-100 (gold on red surfaces), 6px apart (`Card variant="frame"`, Envelope, Dialog). Use one or two per screen.
- **Ornament:** built from geometry only — hairline · dot · rotated square · dot · hairline (`Divider`). No illustrated florals, no lace, no textures (none were supplied; add only if the couple provides artwork).
- **Backgrounds:** flat ivory, alternating `--ivory-50` / `--red-50` per section; solid `--red-600` only for the envelope cover and footer. No gradients, no patterns. Photography is the only imagery.
- **Imagery:** warm, high-key, natural light, cream/white palette with red accents (áo dài, flowers) welcome; soft highlights, no heavy filters or vignettes. Photos sit in **arch**, **circle** or square frames, optionally with an 8px hairline mat.
- **Layout:** a single centered column, `--width-card` 480px, at every breakpoint; desktop just adds ivory margin. Sections have 96px vertical padding; content is centered. Fixed elements: only the glass music button (bottom-right) and toasts (bottom-center).
- **Corner radii:** square (0) for cards, buttons, inputs, dialogs. Pills only for tags, icon buttons, toasts. Arch (`--radius-arch`) and circle for photos only.
- **Cards:** ivory-0 fill + hairline frame; no rounded corners; shadow only for floating layers.
- **Shadows:** warm and diffuse (`--shadow-paper`, `--shadow-float`, tinted with gold-700 at ≤22%). Used for dialogs, toasts, the glass button. Hairlines do the separating elsewhere.
- **Transparency & blur:** `--surface-glass` (ivory 72% + 10px blur) for floating controls and toasts; `--surface-overlay` (ink 38% + 4px blur) behind dialogs. Nowhere else.
- **Motion:** slow and soft. Scroll-reveal = opacity 0→1 + 14px rise over 1100ms with `--ease-soft`, staggered 100–150ms. Dialog rises 14px over 700ms; envelope fades/scales out over 900ms. No bounce, no spin, no parallax.
- **Hover:** colour deepens one step (red-600→700) or a red-50 wash fills outline elements; underlines go red-200→red-500. 180–320ms.
- **Press:** opacity .82; no scale/shrink.
- **Focus:** 3px `--focus-ring` (red at 28%) halo; inputs darken their underline.

## Iconography

- **Set:** [Lucide](https://lucide.dev) v0.460 (ISC), 36 glyphs copied programmatically into `components/core/iconData.js` and `assets/icons/*.svg` (SVGs re-saved at 1.25px stroke). Rendered via the `Icon` component at 1.25px stroke so they match the hairline system. *Substitution flag:* no icon set was provided; Lucide was chosen for its thin, round-capped line style.
- **Usage:** functional only — clock, map-pin, gift, copy, music/volume, chevrons, camera, qr-code, heart. Sizes 12–22px, colour `--accent` (red-600) or currentColor. Never filled, never in coloured circles, never as decoration in headings.
- **No icon font, no PNG icons, no emoji.** `囍` is the only symbolic glyph.

## Index

```
styles.css            entry — @imports only
tokens/               fonts.css · colors.css · typography.css · spacing.css · effects.css · base.css
assets/fonts/         self-hosted woff2 (latin, latin-ext, vietnamese)
assets/icons/         Lucide SVGs, 1.25px stroke
components/           React primitives (see below), one @dsCard per folder
guidelines/           foundation specimen cards (Colors, Type, Spacing, Brand)
ui_kits/wedding_card/ the full online invitation (index.html + screens)
thumbnail.html        project tile
SKILL.md              Agent Skill manifest
```

### Components

- **core/** — `Icon`, `Button`, `IconButton`, `Tag`, `Divider`, `Tabs`
- **forms/** — `Input` (+ `FieldLabel`), `Select`, `RadioGroup`, `Checkbox`
- **layout/** — `Card`, `SectionHeading`, `PhotoFrame`
- **invitation/** — `DateBlock`, `EventCard`, `Countdown`, `Monogram`, `SongHy`
- **feedback/** — `Dialog`, `Toast`

No source defined a component inventory, so this is a from-scratch set sized to a wedding card. Invitation-specific additions (`DateBlock`, `EventCard`, `Countdown`, `Monogram`, `SongHy`, `PhotoFrame`, `SectionHeading`) cover the recurring blocks of Vietnamese wedding cards. Omitted from the generic set as unneeded: Switch, Badge (covered by `Tag`), Tooltip (IconButton uses native `title`).

### UI kits

- **ui_kits/wedding_card/** — envelope → hero → families → events → album → RSVP → gift box → thank-you. See its README.
