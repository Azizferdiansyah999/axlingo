# Seed Data – Sections (24 Section)

Dokumen ini berisi data seed lengkap untuk seluruh section dalam kursus belajar bahasa.
Field `theme_color` diisi dengan **saran warna** — sesuaikan dengan tema desain aplikasi Anda.

---

## Konvensi

- `id` : UUID v4, generate saat seeding
- `order_index` : urutan global (1–24)
- `xp_required` : XP minimum untuk membuka section (section pertama selalu 0)
- `is_locked` : `true` kecuali section 1
- `theme_color` : **saran** berdasarkan nuansa level CEFR, ganti sesuai tema Anda

---

## Level A1 – Pemula Mutlak

> Saran warna: **Hijau cerah** — memberi kesan segar, ramah, dan mudah. Cocok untuk level paling awal.

```json
[
  {
    "id": "sect-a1-001",
    "course_id": "<course_id>",
    "title": "Salam & Perkenalan Diri",
    "description": "Belajar menyapa, memperkenalkan diri, dan ungkapan basa-basi dasar.",
    "order_index": 1,
    "theme_color": "#4CAF50",
    "is_locked": false,
    "xp_required": 0,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-a1-002",
    "course_id": "<course_id>",
    "title": "Angka, Warna & Bentuk",
    "description": "Mengenal angka 1–100, nama warna, dan bentuk geometri dasar.",
    "order_index": 2,
    "theme_color": "#66BB6A",
    "is_locked": true,
    "xp_required": 50,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-a1-003",
    "course_id": "<course_id>",
    "title": "Keluarga & Orang-orang",
    "description": "Kosakata anggota keluarga, deskripsi orang, dan hubungan sosial.",
    "order_index": 3,
    "theme_color": "#81C784",
    "is_locked": true,
    "xp_required": 120,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-a1-004",
    "course_id": "<course_id>",
    "title": "Makanan & Minuman",
    "description": "Nama makanan, minuman, ungkapan di restoran, dan preferensi makan.",
    "order_index": 4,
    "theme_color": "#A5D6A7",
    "is_locked": true,
    "xp_required": 200,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

---

## Level A2 – Pemula

> Saran warna: **Biru muda / toska** — memberi kesan mulai berkembang, tenang, dan percaya diri.

```json
[
  {
    "id": "sect-a2-001",
    "course_id": "<course_id>",
    "title": "Rumah & Benda Sehari-hari",
    "description": "Kosakata ruangan, perabot, dan benda-benda umum di rumah.",
    "order_index": 5,
    "theme_color": "#29B6F6",
    "is_locked": true,
    "xp_required": 300,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-a2-002",
    "course_id": "<course_id>",
    "title": "Rutinitas Harian & Waktu",
    "description": "Ungkapan waktu, hari, bulan, dan mendeskripsikan aktivitas harian.",
    "order_index": 6,
    "theme_color": "#4FC3F7",
    "is_locked": true,
    "xp_required": 420,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-a2-003",
    "course_id": "<course_id>",
    "title": "Belanja & Uang",
    "description": "Percakapan di toko, menanyakan harga, dan transaksi sederhana.",
    "order_index": 7,
    "theme_color": "#80DEEA",
    "is_locked": true,
    "xp_required": 560,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-a2-004",
    "course_id": "<course_id>",
    "title": "Transportasi & Arah",
    "description": "Nama transportasi, memberi dan meminta petunjuk arah.",
    "order_index": 8,
    "theme_color": "#B2EBF2",
    "is_locked": true,
    "xp_required": 720,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

---

## Level B1 – Menengah Bawah

> Saran warna: **Kuning / amber** — memberi kesan semangat, pertengahan perjalanan, dan energi.

```json
[
  {
    "id": "sect-b1-001",
    "course_id": "<course_id>",
    "title": "Pekerjaan & Karier",
    "description": "Kosakata profesi, wawancara kerja, dan lingkungan kantor.",
    "order_index": 9,
    "theme_color": "#FFC107",
    "is_locked": true,
    "xp_required": 900,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-b1-002",
    "course_id": "<course_id>",
    "title": "Kesehatan & Tubuh",
    "description": "Nama anggota tubuh, keluhan kesehatan, dan percakapan di klinik.",
    "order_index": 10,
    "theme_color": "#FFD54F",
    "is_locked": true,
    "xp_required": 1100,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-b1-003",
    "course_id": "<course_id>",
    "title": "Hobi & Waktu Luang",
    "description": "Mengekspresikan minat, kegiatan favorit, dan mengajak orang lain.",
    "order_index": 11,
    "theme_color": "#FFE082",
    "is_locked": true,
    "xp_required": 1320,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-b1-004",
    "course_id": "<course_id>",
    "title": "Cuaca & Alam",
    "description": "Kosakata cuaca, musim, fenomena alam, dan deskripsi lingkungan.",
    "order_index": 12,
    "theme_color": "#FFF176",
    "is_locked": true,
    "xp_required": 1560,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

---

## Level B2 – Menengah Atas

> Saran warna: **Oranye** — memberi kesan tantangan meningkat, aktif, dan dinamis.

```json
[
  {
    "id": "sect-b2-001",
    "course_id": "<course_id>",
    "title": "Perjalanan & Pariwisata",
    "description": "Perencanaan perjalanan, reservasi hotel, dan percakapan di bandara.",
    "order_index": 13,
    "theme_color": "#FF9800",
    "is_locked": true,
    "xp_required": 1800,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-b2-002",
    "course_id": "<course_id>",
    "title": "Teknologi & Media Sosial",
    "description": "Kosakata teknologi terkini, internet, dan komunikasi digital.",
    "order_index": 14,
    "theme_color": "#FFA726",
    "is_locked": true,
    "xp_required": 2060,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-b2-003",
    "course_id": "<course_id>",
    "title": "Pendidikan & Ilmu Pengetahuan",
    "description": "Diskusi akademik, istilah ilmiah, dan mengungkapkan pendapat.",
    "order_index": 15,
    "theme_color": "#FFB74D",
    "is_locked": true,
    "xp_required": 2340,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-b2-004",
    "course_id": "<course_id>",
    "title": "Berita & Isu Sosial",
    "description": "Membaca berita, debat sederhana, dan mengutarakan argumen.",
    "order_index": 16,
    "theme_color": "#FFCC80",
    "is_locked": true,
    "xp_required": 2640,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

---

## Level C1 – Mahir

> Saran warna: **Ungu / indigo** — memberi kesan premium, dalam, dan serius.

```json
[
  {
    "id": "sect-c1-001",
    "course_id": "<course_id>",
    "title": "Bisnis & Negosiasi",
    "description": "Bahasa formal bisnis, presentasi, negosiasi, dan korespondensi.",
    "order_index": 17,
    "theme_color": "#7E57C2",
    "is_locked": true,
    "xp_required": 2960,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-c1-002",
    "course_id": "<course_id>",
    "title": "Seni, Budaya & Sastra",
    "description": "Mengapresiasi karya seni, membahas budaya, dan teks sastra pendek.",
    "order_index": 18,
    "theme_color": "#9575CD",
    "is_locked": true,
    "xp_required": 3300,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-c1-003",
    "course_id": "<course_id>",
    "title": "Hukum & Politik",
    "description": "Terminologi hukum, sistem pemerintahan, dan diskusi kebijakan.",
    "order_index": 19,
    "theme_color": "#B39DDB",
    "is_locked": true,
    "xp_required": 3660,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-c1-004",
    "course_id": "<course_id>",
    "title": "Lingkungan & Keberlanjutan",
    "description": "Isu lingkungan, perubahan iklim, dan solusi berkelanjutan.",
    "order_index": 20,
    "theme_color": "#CE93D8",
    "is_locked": true,
    "xp_required": 4040,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

---

## Level C2 – Sangat Mahir

> Saran warna: **Merah marun / rose gold** — memberi kesan prestis, pencapaian tertinggi, dan eksklusif.

```json
[
  {
    "id": "sect-c2-001",
    "course_id": "<course_id>",
    "title": "Filsafat & Etika",
    "description": "Argumen filosofis, dilema etika, dan diskusi mendalam.",
    "order_index": 21,
    "theme_color": "#E91E63",
    "is_locked": true,
    "xp_required": 4440,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-c2-002",
    "course_id": "<course_id>",
    "title": "Ekonomi & Keuangan Global",
    "description": "Istilah ekonomi makro, pasar keuangan, dan analisis tren global.",
    "order_index": 22,
    "theme_color": "#EC407A",
    "is_locked": true,
    "xp_required": 4860,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-c2-003",
    "course_id": "<course_id>",
    "title": "Sains & Teknologi Mutakhir",
    "description": "Terminologi sains terkini, AI, bioteknologi, dan riset ilmiah.",
    "order_index": 23,
    "theme_color": "#F06292",
    "is_locked": true,
    "xp_required": 5300,
    "created_at": "2024-01-01T00:00:00Z"
  },
  {
    "id": "sect-c2-004",
    "course_id": "<course_id>",
    "title": "Idiom, Humor & Ekspresi Kultural",
    "description": "Idiom tingkat lanjut, humor linguistik, dan nuansa budaya asli.",
    "order_index": 24,
    "theme_color": "#F48FB1",
    "is_locked": true,
    "xp_required": 5760,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

---

## Ringkasan XP Threshold per Level

| Level | Section | XP Awal | XP Akhir | Kenaikan per Section |
|---|---|---|---|---|
| A1 | 1–4   | 0     | 200   | ~67 XP |
| A2 | 5–8   | 300   | 720   | ~140 XP |
| B1 | 9–12  | 900   | 1.560 | ~220 XP |
| B2 | 13–16 | 1.800 | 2.640 | ~280 XP |
| C1 | 17–20 | 2.960 | 4.040 | ~360 XP |
| C2 | 21–24 | 4.440 | 5.760 | ~440 XP |

> XP threshold sengaja dibuat **makin besar** seiring level naik untuk mencerminkan kurva kesulitan yang meningkat.

---

## Catatan untuk Agent

- Ganti semua `<course_id>` dengan UUID course yang sesuai saat seeding.
- `id` pada seed ini (`sect-a1-001`, dst.) adalah placeholder — ganti dengan UUID v4 di production.
- `theme_color` adalah **saran** dan harus diganti sesuai design system aplikasi.
- `is_locked: false` hanya untuk `sect-a1-001` (section pertama).
- Nilai `xp_required` bisa disesuaikan berdasarkan hasil playtesting engagement user.