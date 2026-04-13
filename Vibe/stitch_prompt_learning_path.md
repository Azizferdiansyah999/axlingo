# STITCH PROMPT — AXLINGO LEARNING PATH SCREEN
# Gunakan prompt ini di Stitch AI untuk generate mobile dan desktop version.
# Baca Convert_to_nextjs.md untuk panduan implementasi ke Next.js setelahnya.

================================================================
## PROMPT: MOBILE VERSION (390px)
================================================================

Design a mobile learning path screen for "Axlingo" — a cyberpunk-themed English slang learning app. Apply "The Neon Pulse" design system strictly.

**DESIGN SYSTEM (NON-NEGOTIABLE):**
- Background: #0e0e0e (near-black, midnight)
- Primary color: #5cb8fd (Electric Blue) — for active/interactive elements
- Secondary color: #e67aff (Neon Purple) — for achievements and accents
- Tertiary color: #c3ffcd (Neon Emerald) — for completed/success states
- Surface container: #1a1a1a for cards, #262626 for nested containers
- Typography: Space Grotesk (bold headlines), Be Vietnam Pro (body text)
- NO solid divider lines — use tonal background shifts instead
- All shadows must be neon glows (e.g. box-shadow using primary/secondary colors)
- Rounded corners: 12px for cards, 8px for buttons

---

**SCREEN: LEARNING PATH (Mobile)**

Layout: Full-screen scrollable vertical path with cyberpunk HUD overlays.

**TOP HUD BAR (fixed, glassmorphism):**
- Left: Flame icon 🔥 + streak number "12" in bold white
- Center: XP progress bar (thin, gradient from #5cb8fd to #e67aff) with "1,240 XP" label
- Right: Heart icons ❤️❤️❤️❤️❤️ (5 hearts, Electric Blue)
- Diamond counter 💎 "340" in top-right corner
- Blur backdrop: backdrop-filter blur(20px), background rgba(14,14,14,0.85)
- Top neon stroke: 2px top border gradient from #5cb8fd to #e67aff

**TIER BANNER (Section Header):**
Show 3 tier banners as the user scrolls:
- TIER 1: "🏙️ STREET LEVEL" — Electric Blue (#5cb8fd) theme, badge "BEGINNER"
- TIER 2: "🌐 GRID MASTER" — Neon Purple (#e67aff) theme, badge "INTERMEDIATE", locked
- TIER 3: "💎 CYBER LEGEND" — Gold/amber theme, badge "ADVANCED", locked
- Each banner is a full-width glassmorphism card with:
  - Gradient background: radial glow from tier color at 15% opacity
  - Bold tier name in display font (Space Grotesk, 22px)
  - Subtitle: "10 Chapter • 60 Node" in smaller Be Vietnam Pro text
  - Progress bar showing completion: "Chapter 2 of 10"

**LEARNING PATH NODES (zig-zag vertical layout):**
Show Chapter 1 nodes fully visible, Chapter 2 partially, rest locked.

Each NODE is an OCTAGON shape (CSS clip-path octagon):
- Size: 72x72px
- 4 states with visual distinction:

  STATE 1 — COMPLETED (Node 1 "Vocab Intro"):
  - Fill: #c3ffcd (Neon Emerald)
  - Border: 2px solid #c3ffcd with green glow shadow
  - Center icon: ✓ checkmark, bold white
  - Below: small label "Vocab Intro" in Be Vietnam Pro 11px
  - Side connector line: dashed green downward

  STATE 2 — ACTIVE/CURRENT (Node 2 "Context Check"):
  - Fill: #5cb8fd (Electric Blue) with inner radial glow
  - Pulsing animation hint (note: "add subtle pulse glow animation")
  - Border: 2px solid white at 50% opacity
  - Center: Play icon ▶ in white
  - Below: label "Context Check"
  - Small "PLAY" pill button underneath in #5cb8fd
  - Side: animated dashed connector going down

  STATE 3 — LOCKED (Nodes 3-6):
  - Fill: #262626 (dark surface)
  - Border: 2px solid #484847 (outline_variant)
  - Center: 🔒 lock icon in red (#ff6e84) with faint red pulse glow
  - Below: label in #adaaaa (muted)

  STATE 4 — PERFECT (example next to Node 1):
  - Fill: radial gradient from #ffd700 to #ffb347 (gold)
  - Star ⭐ icon in center
  - Gold glow box-shadow
  - Crown badge overlay on top-right corner

**CHAPTER BOSS NODE (larger, at bottom of each chapter):**
- Size: 90x90px octagon
- Color: deep gradient from #e67aff to #7c0599 (secondary → secondary_container)
- Center: skull/trophy icon 🏆 in white
- Label below: "CHAPTER BOSS" in caps, 10px, #e67aff
- Purple neon glow box-shadow
- "LOCKED" overlay with red diagonal stripe pattern if not available yet

**CHAPTER LABEL (between nodes):**
- Small floating pill above first node of each chapter:
  "Chapter 1: The Streets" — background #262626, border 1px #5cb8fd at 30% opacity
  - Left: emoji icon (🏙️ for The Streets)
  - Text in Space Grotesk, 13px

**BOTTOM NAV BAR (fixed, glassmorphism):**
5 icons: Home 🏠 | Path ⚡ | Chat 🤖 | Shop 💎 | Profile 👤
- Active: Path icon highlighted in #5cb8fd with neon underline
- Inactive: #767575

---

**VISUAL EXAMPLES TO SHOW (show these 3 states in the screen):**
1. Chapter 1 nodes — Node 1 (Completed), Node 2 (Active), Nodes 3-6 (Locked), Boss (Locked)
2. Chapter 1 Tier Banner at top
3. Chapter 2 Tier banner partially visible (locked, dimmed)

---

================================================================
## PROMPT: DESKTOP VERSION (1280px)
================================================================

Design the desktop version of the same Axlingo Learning Path screen. Same "The Neon Pulse" design system applies.

**LAYOUT: 3-COLUMN DASHBOARD**
- Left Sidebar (280px): Navigation + user profile summary
- Main Content (flexible): The learning path map (scrollable)
- Right Panel (320px): Chapter detail + current node info

---

**LEFT SIDEBAR (glassmorphism, fixed):**
- Top: Axlingo logo (neon glitch effect text: "AX↯LINGO")
- User avatar (circular, neon blue border glow) + username + level badge
- XP bar with level number
- Navigation links (with neon left-border indicator on active):
  - ⚡ Learning Path (active)
  - 🏠 Dashboard
  - 🤖 AI Chat
  - 💎 Shop
  - 📊 Leaderboard
  - 👤 Profile
- Bottom: Hearts display ❤️❤️❤️❤️❤️ + timer "Next heart in: 00:42:18"
- Diamond balance: 💎 340

**MAIN CONTENT AREA — LEARNING PATH MAP:**
- Background: subtle dark grid pattern on #0e0e0e (like a command center grid)
- Tier banners displayed as horizontal section headers spanning full width
- Nodes arranged in zig-zag pattern (wider spread than mobile)
- Node size: 88x88px octagons
- Connector lines between nodes: animated dashed lines (CSS animation)
  - Completed path: solid green (#c3ffcd) line
  - Active path: blue dashed animated (#5cb8fd)
  - Locked path: dark dashed (#484847)
- Chapter labels floating above chapter groups as neon-bordered pills
- Show full TIER 1 (10 chapters) with scroll, TIER 2 blurred/locked below

**RIGHT PANEL (glassmorphism card, 320px):**
Shows detail of the currently selected/active node:

- Top: Chapter name "Chapter 2: The Social Grid" with emoji
- Tier badge: "TIER 1 — STREET LEVEL" pill in #5cb8fd
- Currently Active Node card:
  - Node type icon + "Context Check" title
  - Description: "Kata dalam situasi nyata — media sosial, percakapan, caption"  
  - Rewards: +30 XP | +3 💎
  - Time: ~5 minutes
  - Pass threshold: 60%
  - Big CTA button: "START NODE ▶" — full-width, #5cb8fd background, neon glow on hover
- Below: Chapter progress "2 of 7 nodes completed" with progress bar
- Boss status: "🏆 Boss Locked — Complete all nodes to unlock"
- Achievement preview: "Complete this chapter to earn: 🥉 Street Smart (+80 XP, +10 💎)"

**TOP HEADER BAR (across full width):**
- Left: Page title "⚡ LEARNING PATH" in Space Grotesk bold 24px
- Right: Streak 🔥12 | Diamonds 💎340 | Hearts ❤️❤️❤️❤️❤️ | Notification bell

---

**OVERALL STYLE NOTES FOR BOTH VERSIONS:**
- Use "The Digital Kineticist" philosophy: dynamic, asymmetric, forward motion
- All glows must use RGBA of accent colors, never solid black shadows
- Glassmorphism panels: rgba(26,26,26,0.8) + backdrop-blur(20px)
- Neon top-stroke on all major cards: 2px gradient line at top edge only
- Typography must feel editorial: extreme size contrast between headline and body
- Intentional empty space — don't crowd elements; the dark background IS the design
- Progress connectors between nodes should feel like circuit board traces

================================================================
## IMPLEMENTASI KE NEXT.JS (baca Convert_to_nextjs.md)
================================================================

Setelah Stitch generate screen ini, implementasikan ke Next.js dengan:
1. File path: `app/dashboard/path/page.js` (mobile-first, responsive ke desktop)
2. Component: `components/learning-path/PathMap.js` — zig-zag node renderer
3. Component: `components/learning-path/NodeOctagon.js` — single node dengan 4 states
4. Component: `components/learning-path/TierBanner.js` — section header per tier
5. Component: `components/learning-path/ChapterBoss.js` — boss node variant
6. Hook: `hooks/useLearningPath.js` — fetch dari Supabase (courses→sections→units→lessons)
7. Data: ambil dari tabel `units` (chapters) + `lessons` (nodes) + `user_progress`

Ikuti panduan di Convert_to_nextjs.md untuk:
- Migrasi CSS ke globals.css (jangan inline styles)
- Konversi class → className
- Animasi pulse → gunakan CSS @keyframes di globals.css
- Glassmorphism → gunakan utility class .vibe-glass yang sudah ada
