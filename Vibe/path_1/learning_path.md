# Learning Path Schema – Aplikasi Belajar Bahasa (Duolingo-style)

Dokumen ini mendeskripsikan skema data lengkap untuk setiap entitas dalam sistem learning path. Dirancang agar dapat dibaca oleh agent, developer, maupun LLM untuk keperluan code generation, validasi, atau integrasi.

---

## Hierarki Entitas

```
Course
└── Section
    └── Unit
        ├── Lesson
        │   └── Exercise
        └── UnitCrownProgress (per user)

User
├── UserProgress (per lesson)
├── Streak
├── Hearts
├── XPProfile
├── League
├── Achievement
└── DailyGoal
```

---

## 1. Course

Entitas root yang merepresentasikan satu kursus bahasa.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `language_target` | string | ✅ | Bahasa yang dipelajari, misal `"en"`, `"ja"` |
| `language_source` | string | ✅ | Bahasa antarmuka user, misal `"id"`, `"en"` |
| `cefr_level` | enum | ✅ | `A1` \| `A2` \| `B1` \| `B2` \| `C1` \| `C2` |
| `title` | string | ✅ | Nama kursus, misal `"Bahasa Inggris untuk Pemula"` |
| `description` | string | — | Deskripsi singkat kursus |
| `icon_url` | string | — | URL ikon bendera/bahasa |
| `total_xp` | int | — | Total XP yang bisa diraih di seluruh kursus |
| `is_active` | bool | ✅ | Status kursus aktif atau diarsipkan |
| `created_at` | timestamp | ✅ | Waktu pembuatan |
| `updated_at` | timestamp | ✅ | Waktu pembaruan terakhir |

---

## 2. Section

Kelompok unit yang membentuk satu fase pembelajaran (misal "Pemula", "Menengah").

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `course_id` | UUID (FK → Course) | ✅ | Relasi ke Course |
| `title` | string | ✅ | Nama section, misal `"Pemula"` |
| `description` | string | — | Deskripsi tujuan pembelajaran section |
| `order_index` | int | ✅ | Urutan tampil (mulai dari 1) |
| `theme_color` | string (hex) | — | Warna tema UI section, misal `"#58CC02"` |
| `is_locked` | bool | ✅ | Default `true` kecuali section pertama |
| `xp_required` | int | — | Minimum XP untuk membuka section ini |
| `created_at` | timestamp | ✅ | Waktu pembuatan |

---

## 3. Unit

Kelompok lesson dengan satu topik tematik dalam sebuah section.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `section_id` | UUID (FK → Section) | ✅ | Relasi ke Section |
| `title` | string | ✅ | Nama unit, misal `"Salam & Perkenalan"` |
| `topic` | string | ✅ | Tag topik, misal `greetings`, `numbers`, `food` |
| `description` | string | — | Deskripsi singkat isi unit |
| `order_index` | int | ✅ | Urutan tampil dalam section |
| `icon_emoji` | string | — | Emoji ikon unit, misal `👋`, `🔢`, `🍎` |
| `thumbnail_url` | string | — | URL gambar ilustrasi unit |
| `skill_tags` | string[] | — | Skill yang dilatih: `speaking`, `reading`, `listening`, `writing` |
| `is_locked` | bool | ✅ | Status terkunci |
| `unlock_condition` | JSON | — | Logika unlock (lihat format di bawah) |
| `guidebook_url` | string | — | Link materi referensi / tips grammar |
| `is_bonus` | bool | ✅ | `true` untuk unit bonus (Stories, Podcast) |
| `max_crown_level` | int | ✅ | Level mahkota maksimum, biasanya `5` |
| `xp_per_crown` | int | ✅ | XP reward per crown level yang diselesaikan |
| `created_at` | timestamp | ✅ | Waktu pembuatan |

### Format `unlock_condition`

```json
// Berdasarkan penyelesaian unit sebelumnya
{
  "type": "complete_unit",
  "unit_id": "<uuid>",
  "min_score": 0.7
}

// Berdasarkan threshold XP
{
  "type": "xp_threshold",
  "xp_required": 500
}

// Selalu terbuka
{
  "type": "always_open"
}
```

---

## 4. Lesson

Satu sesi belajar yang berisi kumpulan exercise.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `unit_id` | UUID (FK → Unit) | ✅ | Relasi ke Unit |
| `title` | string | ✅ | Judul lesson, misal `"Menyapa Orang Baru"` |
| `type` | enum | ✅ | `regular` \| `practice` \| `test` \| `story` \| `conversation` |
| `order_index` | int | ✅ | Urutan dalam unit |
| `xp_reward` | int | ✅ | XP yang didapat jika selesai |
| `pass_threshold` | float | ✅ | Skor minimum lulus, misal `0.8` (80%) |
| `is_bonus` | bool | ✅ | Lesson bonus di luar alur utama |
| `estimated_minutes` | int | — | Estimasi waktu pengerjaan |
| `crown_level` | int | ✅ | Level mahkota lesson ini (1–5) |
| `created_at` | timestamp | ✅ | Waktu pembuatan |

### Nilai Enum `type`

| Nilai | Keterangan |
|---|---|
| `regular` | Lesson biasa dalam alur utama |
| `practice` | Latihan ulang materi sebelumnya |
| `test` | Ujian akhir unit / section |
| `story` | Lesson berbasis cerita interaktif |
| `conversation` | Latihan percakapan dengan AI |

---

## 5. Exercise

Satu butir soal dalam sebuah lesson.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `lesson_id` | UUID (FK → Lesson) | ✅ | Relasi ke Lesson |
| `type` | enum | ✅ | Tipe soal (lihat di bawah) |
| `order_index` | int | ✅ | Urutan dalam lesson |
| `difficulty` | int (1–5) | ✅ | Tingkat kesulitan |
| `score_weight` | float | ✅ | Bobot soal terhadap total skor lesson |
| `prompt` | string | ✅ | Pertanyaan / instruksi untuk user |
| `correct_answer` | string \| string[] | ✅ | Jawaban benar (bisa lebih dari satu) |
| `choices` | JSON[] | — | Pilihan jawaban (untuk multiple choice) |
| `media_url` | string | — | URL audio/gambar pendukung |
| `hint` | string | — | Petunjuk opsional |
| `explanation` | string | — | Penjelasan setelah menjawab |
| `tags` | string[] | — | Tag konten, misal `["verb", "present-tense"]` |
| `created_at` | timestamp | ✅ | Waktu pembuatan |

### Nilai Enum `type`

| Nilai | Keterangan |
|---|---|
| `translate` | Terjemahkan kalimat dari/ke bahasa target |
| `multiple_choice` | Pilih jawaban yang benar |
| `fill_blank` | Isi bagian kalimat yang kosong |
| `match_pairs` | Cocokkan kata dengan pasangannya |
| `listen_type` | Dengarkan audio, ketik apa yang didengar |
| `speak` | Ucapkan kalimat (speech recognition) |
| `reorder_words` | Susun kata menjadi kalimat yang benar |
| `select_image` | Pilih gambar yang sesuai dengan kata/kalimat |

### Format `choices` (untuk `multiple_choice`)

```json
[
  { "id": "a", "text": "Hello", "is_correct": true },
  { "id": "b", "text": "Goodbye", "is_correct": false },
  { "id": "c", "text": "Thank you", "is_correct": false }
]
```

---

## 6. UserProgress

Melacak kemajuan user per lesson.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `lesson_id` | UUID (FK → Lesson) | ✅ | Relasi ke Lesson |
| `status` | enum | ✅ | `locked` \| `active` \| `completed` |
| `score` | float | — | Skor akhir (0.0 – 1.0) |
| `xp_earned` | int | — | XP yang diperoleh |
| `hearts_used` | int | — | Jumlah hati yang terpakai |
| `attempts` | int | ✅ | Berapa kali mencoba lesson ini |
| `completed_at` | timestamp | — | Waktu pertama kali selesai |
| `updated_at` | timestamp | ✅ | Waktu pembaruan terakhir |

---

## 7. UnitCrownProgress

Melacak level mahkota user per unit.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `unit_id` | UUID (FK → Unit) | ✅ | Relasi ke Unit |
| `crown_level` | int | ✅ | Level saat ini (0–5) |
| `lessons_completed` | int | ✅ | Jumlah lesson yang telah diselesaikan di unit ini |
| `xp_earned` | int | ✅ | Total XP dari unit ini |
| `updated_at` | timestamp | ✅ | Waktu pembaruan terakhir |

---

## 8. Streak

Melacak konsistensi belajar harian user.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `streak_count` | int | ✅ | Jumlah hari berturut-turut belajar |
| `longest_streak` | int | ✅ | Rekor streak terpanjang |
| `last_active_date` | date | ✅ | Tanggal terakhir user menyelesaikan goal harian |
| `freeze_count` | int | ✅ | Jumlah streak freeze yang tersisa |
| `updated_at` | timestamp | ✅ | Waktu pembaruan |

---

## 9. Hearts

Sistem nyawa yang membatasi kesalahan user per hari.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `hearts_current` | int | ✅ | Jumlah hati saat ini (0–5) |
| `hearts_max` | int | ✅ | Maksimum hati, default `5` |
| `refill_at` | timestamp | — | Waktu hati penuh kembali (refill otomatis) |
| `unlimited_until` | timestamp | — | Aktif saat user punya unlimited hearts |
| `updated_at` | timestamp | ✅ | Waktu pembaruan |

---

## 10. XPProfile

Menyimpan total XP dan level user.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `total_xp` | int | ✅ | Total XP sepanjang waktu |
| `current_level` | int | ✅ | Level saat ini |
| `xp_to_next_level` | int | ✅ | XP yang dibutuhkan untuk naik level |
| `updated_at` | timestamp | ✅ | Waktu pembaruan |

---

## 11. League

Kompetisi mingguan antar user berdasarkan XP.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `league_tier` | enum | ✅ | `Bronze` \| `Silver` \| `Gold` \| `Sapphire` \| `Ruby` \| `Emerald` \| `Amethyst` \| `Pearl` \| `Obsidian` \| `Diamond` |
| `weekly_xp` | int | ✅ | XP yang dikumpulkan minggu ini |
| `rank` | int | ✅ | Posisi dalam liga minggu ini |
| `promotion_status` | enum | — | `promoted` \| `demoted` \| `safe` |
| `week_start` | date | ✅ | Tanggal mulai periode liga |
| `updated_at` | timestamp | ✅ | Waktu pembaruan |

---

## 12. Achievement

Badge / pencapaian yang bisa diraih user.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `badge_type` | string | ✅ | Identifier badge, misal `first_lesson`, `streak_7` |
| `title` | string | ✅ | Nama badge |
| `description` | string | — | Deskripsi cara mendapatkan badge |
| `icon_url` | string | — | URL ikon badge |
| `condition` | JSON | ✅ | Kondisi untuk unlock (lihat format di bawah) |
| `unlocked_at` | timestamp | — | Waktu badge diraih (`null` jika belum) |

### Format `condition`

```json
{ "type": "streak", "value": 7 }
{ "type": "complete_lessons", "value": 10 }
{ "type": "xp_total", "value": 1000 }
{ "type": "complete_unit", "unit_id": "<uuid>" }
```

---

## 13. DailyGoal

Target XP harian yang bisa disesuaikan user.

| Field | Tipe | Wajib | Keterangan |
|---|---|---|---|
| `id` | UUID | ✅ | Primary key |
| `user_id` | UUID (FK → User) | ✅ | Relasi ke User |
| `xp_goal` | int | ✅ | Target XP harian (misal 10, 20, 30, 50) |
| `xp_today` | int | ✅ | XP yang sudah dikumpulkan hari ini |
| `is_completed` | bool | ✅ | Apakah goal hari ini sudah tercapai |
| `reset_at` | timestamp | ✅ | Waktu reset ke hari berikutnya (biasanya tengah malam) |
| `updated_at` | timestamp | ✅ | Waktu pembaruan |

---

## Relasi Antar Entitas (Ringkasan)

```
Course      1 ──── N  Section
Section     1 ──── N  Unit
Unit        1 ──── N  Lesson
Lesson      1 ──── N  Exercise

User        1 ──── N  UserProgress        (per Lesson)
User        1 ──── N  UnitCrownProgress   (per Unit)
User        1 ──── 1  Streak
User        1 ──── 1  Hearts
User        1 ──── 1  XPProfile
User        1 ──── N  League              (per minggu)
User        1 ──── N  Achievement
User        1 ──── 1  DailyGoal
```

---

## Catatan untuk Agent

- Semua `id` menggunakan format UUID v4.
- Field `order_index` selalu dimulai dari `1`.
- Enum values bersifat case-sensitive dan menggunakan `snake_case`.
- Field `is_locked` default `true` kecuali ditentukan lain oleh `unlock_condition`.
- `score` dan `pass_threshold` menggunakan skala `0.0` – `1.0` (bukan persentase).
- Timestamp menggunakan ISO 8601 format dengan timezone UTC.