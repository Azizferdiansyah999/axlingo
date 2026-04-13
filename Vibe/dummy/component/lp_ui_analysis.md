# Analysis UI: Learning Path (LP) Components

Dokumen ini mendetailkan komponen-komponen yang diperlukan untuk membangun halaman Learning Path Axlingo berdasarkan mockup `mobile.html` dan `dekstop.html`.

## 1. Atoms (Dasar)

### [NodeOctagon](file:///c:/axlingo/Vibe/dummy/LP_page/mobile.html)
Komponen inti simpul pembelajaran berbentuk oktagon.
- **States**:
  - `completed`: Background Hijau Neon (#c3ffcd), ikon Centang.
  - `active`: Background Biru Neon (#5cb8fd), ikon Play, border putih transparan.
  - `perfect`: Gradien Emas, ikon Bintang, badge mahkota.
  - `locked`: Abu-abu (#262626), ikon Gembok, opasitas 40%.
  - `boss`: Ukuran lebih besar (1.5x), warna Ungu (#e67aff), efek pulse.
- **Interaksi**: Klik membuka modal detail lesson.

### [XPBar](file:///c:/axlingo/Vibe/dummy/LP_page/mobile.html)
Progress bar horizontal dengan efek glow.
- **Warna**: Gradien Biru ke Ungu.
- **Shadow**: Neon Blue Glow.

### [NeonButton](file:///c:/axlingo/Vibe/dummy/LP_page/dekstop.html)
Tombol dengan gaya cyberpunk.
- **Varian**: Solid, Outline, Ghost.
- **Animasi**: Glitch kecil pada hover atau scaling 0.95 pada klik.

---

## 2. Molecules (Kombinasi)

### [TierBanner](file:///c:/axlingo/Vibe/dummy/LP_page/mobile.html)
Banner untuk memisahkan tingkatan course.
- **Elemen**: Judul Tier (e.g., STREET LEVEL), chapter progress, Beginner/Expert badge.
- **Styling**: Glassmorphism dengan border atas neon.

### [HUDStats](file:///c:/axlingo/Vibe/app/dashboard/layout.js)
Kumpulan statistik user di Topbar.
- **Items**: Flame (Streak), Diamond, Heart.
- **Styling**: Kotak kaca gelap dengan border tipis berwarna sesuai kategori.

### [BountyCard](file:///c:/axlingo/Vibe/dummy/LP_page/dekstop.html)
Item mini untuk list misi harian.
- **Elemen**: Titik indikator warna (status), Nama misi, Progress bar mini.

---

## 3. Organisms (Kompleks)

### [PathMap](file:///c:/axlingo/Vibe/dummy/LP_page/mobile.html)
Pengatur tata letak zig-zag untuk node-node lesson.
- **Logika**: 
  - Iterasi data lessons dari DB.
  - Menempatkan node di posisi kiri-tengah-kanan secara bergantian.
  - Mengatur *status* node berdasarkan data progres user.
- **Rendering**: Menggunakan `CSS Grid` atau `Flexbox` dengan `offset`.

### [DecorativePath](file:///c:/axlingo/Vibe/dummy/LP_page/mobile.html)
Garis penghubung antar node menggunakan SVG.
- **Path**: Menggunakan kurva `Q` (Quadratic Bezier) untuk menghubungkan center node secara estetis.
- **Styling**: Putus-putus untuk area terkunci, solid untuk area terbuka.

### [ProfileWidget](file:///c:/axlingo/Vibe/dummy/LP_page/dekstop.html)
Sidebar kanan di desktop.
- **Komponen**: Avatar, Rank name, Rank progress bar, "Elite promotion" text.

---

## 4. Templates (Page Layout)

### [LearningPathTemplate]
Integrasi penuh untuk halaman `/dashboard/path`.
- **Desktop**: Layout 3 kolom (Sidebar - Path Map - Rank/Bounties).
- **Mobile**: Layout 1 kolom (Top HUD - Tier Banner - Path Map - Bottom Nav).

---

## Teknis Pelaksanaan
- **Library**: Framer Motion (untuk animasi muncul node & pulse).
- **Icons**: Material Symbols Outlined & Lucide React.
- **Fonts**: Space Grotesk (Headline) & Be Vietnam Pro (Body).
