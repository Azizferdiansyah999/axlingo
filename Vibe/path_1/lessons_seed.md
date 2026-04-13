# Seed Data – Lessons

Setiap unit memiliki **4–5 lesson**. Dokumen ini mencakup pola seed lesson untuk seluruh unit.
Untuk efisiensi, lesson A1 dibuat lengkap per unit sebagai **referensi pola**,
level A2–C2 menggunakan **template kompak** yang mengikuti pola yang sama.

Konvensi:
- `type` : `regular` | `practice` | `test` | `story` | `conversation`
- `crown_level` : lesson diurutkan dari crown 1 (termudah) hingga crown 5 (tersulit)
- `pass_threshold` : A1–A2 = `0.7`, B1–B2 = `0.75`, C1–C2 = `0.8`
- `xp_reward` : meningkat seiring crown level dan level CEFR

---

## A1 – Unit 1: Sapaan Pertama

```json
[
  {
    "id": "les-a1u1-001",
    "unit_id": "unit-a1s1-001",
    "title": "Hello & Hi",
    "type": "regular",
    "order_index": 1,
    "crown_level": 1,
    "xp_reward": 10,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 5
  },
  {
    "id": "les-a1u1-002",
    "unit_id": "unit-a1s1-001",
    "title": "Good Morning & Good Night",
    "type": "regular",
    "order_index": 2,
    "crown_level": 1,
    "xp_reward": 10,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 5
  },
  {
    "id": "les-a1u1-003",
    "unit_id": "unit-a1s1-001",
    "title": "Formal vs Informal Greetings",
    "type": "regular",
    "order_index": 3,
    "crown_level": 2,
    "xp_reward": 12,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 6
  },
  {
    "id": "les-a1u1-004",
    "unit_id": "unit-a1s1-001",
    "title": "Latihan Sapaan",
    "type": "practice",
    "order_index": 4,
    "crown_level": 3,
    "xp_reward": 15,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 7
  },
  {
    "id": "les-a1u1-005",
    "unit_id": "unit-a1s1-001",
    "title": "Cerita: Hari Pertama di Kelas",
    "type": "story",
    "order_index": 5,
    "crown_level": 4,
    "xp_reward": 20,
    "pass_threshold": 0.7,
    "is_bonus": true,
    "estimated_minutes": 8
  }
]
```

---

## A1 – Unit 2: Nama & Asal

```json
[
  {
    "id": "les-a1u2-001",
    "unit_id": "unit-a1s1-002",
    "title": "My Name Is…",
    "type": "regular",
    "order_index": 1,
    "crown_level": 1,
    "xp_reward": 10,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 5
  },
  {
    "id": "les-a1u2-002",
    "unit_id": "unit-a1s1-002",
    "title": "I'm From…",
    "type": "regular",
    "order_index": 2,
    "crown_level": 1,
    "xp_reward": 10,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 5
  },
  {
    "id": "les-a1u2-003",
    "unit_id": "unit-a1s1-002",
    "title": "Nice to Meet You",
    "type": "regular",
    "order_index": 3,
    "crown_level": 2,
    "xp_reward": 12,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 5
  },
  {
    "id": "les-a1u2-004",
    "unit_id": "unit-a1s1-002",
    "title": "Latihan Perkenalan",
    "type": "practice",
    "order_index": 4,
    "crown_level": 3,
    "xp_reward": 15,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 7
  },
  {
    "id": "les-a1u2-005",
    "unit_id": "unit-a1s1-002",
    "title": "Uji Unit: Nama & Asal",
    "type": "test",
    "order_index": 5,
    "crown_level": 5,
    "xp_reward": 25,
    "pass_threshold": 0.7,
    "is_bonus": false,
    "estimated_minutes": 10
  }
]
```

---

## A1 – Unit 3: Basa-basi Umum

```json
[
  { "id": "les-a1u3-001", "unit_id": "unit-a1s1-003", "title": "How Are You?", "type": "regular", "order_index": 1, "crown_level": 1, "xp_reward": 10, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 5 },
  { "id": "les-a1u3-002", "unit_id": "unit-a1s1-003", "title": "Fine, Thanks!", "type": "regular", "order_index": 2, "crown_level": 1, "xp_reward": 10, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 5 },
  { "id": "les-a1u3-003", "unit_id": "unit-a1s1-003", "title": "See You Later", "type": "regular", "order_index": 3, "crown_level": 2, "xp_reward": 12, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 5 },
  { "id": "les-a1u3-004", "unit_id": "unit-a1s1-003", "title": "Latihan Basa-basi", "type": "practice", "order_index": 4, "crown_level": 3, "xp_reward": 15, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 7 },
  { "id": "les-a1u3-005", "unit_id": "unit-a1s1-003", "title": "Percakapan: Bertemu Teman", "type": "conversation", "order_index": 5, "crown_level": 4, "xp_reward": 20, "pass_threshold": 0.7, "is_bonus": true, "estimated_minutes": 10 }
]
```

---

## A1 – Unit 4: Alfabet & Ejaan

```json
[
  { "id": "les-a1u4-001", "unit_id": "unit-a1s1-004", "title": "A sampai M", "type": "regular", "order_index": 1, "crown_level": 1, "xp_reward": 10, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 5 },
  { "id": "les-a1u4-002", "unit_id": "unit-a1s1-004", "title": "N sampai Z", "type": "regular", "order_index": 2, "crown_level": 1, "xp_reward": 10, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 5 },
  { "id": "les-a1u4-003", "unit_id": "unit-a1s1-004", "title": "Mengeja Nama", "type": "regular", "order_index": 3, "crown_level": 2, "xp_reward": 12, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 6 },
  { "id": "les-a1u4-004", "unit_id": "unit-a1s1-004", "title": "Latihan Ejaan", "type": "practice", "order_index": 4, "crown_level": 3, "xp_reward": 15, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 7 },
  { "id": "les-a1u4-005", "unit_id": "unit-a1s1-004", "title": "Uji Unit: Alfabet", "type": "test", "order_index": 5, "crown_level": 5, "xp_reward": 25, "pass_threshold": 0.7, "is_bonus": false, "estimated_minutes": 10 }
]
```

---

## A1 – Unit 5: Percakapan Pertama (Bonus)

```json
[
  { "id": "les-a1u5-001", "unit_id": "unit-a1s1-005", "title": "Simulasi: Kenalan di Kafe", "type": "conversation", "order_index": 1, "crown_level": 3, "xp_reward": 20, "pass_threshold": 0.7, "is_bonus": true, "estimated_minutes": 10 },
  { "id": "les-a1u5-002", "unit_id": "unit-a1s1-005", "title": "Simulasi: Kenalan di Kantor", "type": "conversation", "order_index": 2, "crown_level": 3, "xp_reward": 20, "pass_threshold": 0.7, "is_bonus": true, "estimated_minutes": 10 },
  { "id": "les-a1u5-003", "unit_id": "unit-a1s1-005", "title": "Cerita: Hari Pertama di Kota Baru", "type": "story", "order_index": 3, "crown_level": 4, "xp_reward": 25, "pass_threshold": 0.7, "is_bonus": true, "estimated_minutes": 12 }
]
```

---

## Pola Lesson per Unit (A1 Section 2–4 & Seluruh A2–C2)

> Pola ini berlaku seragam untuk semua unit. Generate lesson dengan mengikuti struktur berikut:

```json
[
  {
    "id": "les-{level}{section}{unit}-001",
    "unit_id": "{unit_id}",
    "title": "Kosakata Baru – Bagian 1",
    "type": "regular",
    "order_index": 1,
    "crown_level": 1,
    "xp_reward": "{base_xp}",
    "pass_threshold": "{threshold}",
    "is_bonus": false,
    "estimated_minutes": 5
  },
  {
    "id": "les-{level}{section}{unit}-002",
    "unit_id": "{unit_id}",
    "title": "Kosakata Baru – Bagian 2",
    "type": "regular",
    "order_index": 2,
    "crown_level": 1,
    "xp_reward": "{base_xp}",
    "pass_threshold": "{threshold}",
    "is_bonus": false,
    "estimated_minutes": 5
  },
  {
    "id": "les-{level}{section}{unit}-003",
    "unit_id": "{unit_id}",
    "title": "Tata Bahasa & Pola Kalimat",
    "type": "regular",
    "order_index": 3,
    "crown_level": 2,
    "xp_reward": "{base_xp + 2}",
    "pass_threshold": "{threshold}",
    "is_bonus": false,
    "estimated_minutes": 6
  },
  {
    "id": "les-{level}{section}{unit}-004",
    "unit_id": "{unit_id}",
    "title": "Latihan & Pengulangan",
    "type": "practice",
    "order_index": 4,
    "crown_level": 3,
    "xp_reward": "{base_xp + 5}",
    "pass_threshold": "{threshold}",
    "is_bonus": false,
    "estimated_minutes": 7
  },
  {
    "id": "les-{level}{section}{unit}-005",
    "unit_id": "{unit_id}",
    "title": "Uji Unit",
    "type": "test",
    "order_index": 5,
    "crown_level": 5,
    "xp_reward": "{base_xp * 2.5}",
    "pass_threshold": "{threshold}",
    "is_bonus": false,
    "estimated_minutes": 10
  }
]
```

---

## Tabel Konfigurasi XP & Threshold per Level CEFR

| Level CEFR | base_xp | xp_reward test | pass_threshold | Tipe Lesson Bonus |
|---|---|---|---|---|
| A1 | 10 | 25 | 0.70 | story, conversation |
| A2 | 12 | 30 | 0.70 | story, conversation |
| B1 | 15 | 40 | 0.75 | conversation, story |
| B2 | 18 | 45 | 0.75 | conversation, debate |
| C1 | 22 | 55 | 0.80 | conversation, writing |
| C2 | 28 | 70 | 0.80 | conversation, essay |

---

## Tipe Lesson per Crown Level

| Crown Level | Lesson Type | Catatan |
|---|---|---|
| 1 | `regular` | Pengenalan kosakata baru |
| 1 | `regular` | Perluasan kosakata |
| 2 | `regular` | Pola kalimat & grammar |
| 3 | `practice` | Latihan campuran |
| 4 | `story` / `conversation` | Aplikasi kontekstual (bonus) |
| 5 | `test` | Ujian unit |

---

## Ringkasan Estimasi Total Lesson

| Level | Unit | Lesson per Unit | Total Lesson |
|---|---|---|---|
| A1 | 18 unit | 4–5 | ~80 lesson |
| A2 | 17 unit | 4–5 | ~76 lesson |
| B1 | 17 unit | 5 | ~85 lesson |
| B2 | 16 unit | 5 | ~80 lesson |
| C1 | 16 unit | 5 | ~80 lesson |
| C2 | 16 unit | 5 | ~80 lesson |
| **Total** | **108 unit** | — | **~481 lesson** |

---

## Catatan untuk Agent

- Gunakan pola template di atas untuk generate lesson pada unit manapun secara otomatis.
- Substitusi `{level}{section}{unit}` dengan kode unit yang sesuai, misal `b1s9u1` untuk B1 Section 9 Unit 1.
- `crown_level` bukan urutan — satu unit bisa punya beberapa lesson di crown level yang sama sebelum naik ke crown berikutnya.
- Lesson `type: test` **selalu** berada di `order_index` terakhir dengan `crown_level: 5`.
- Lesson bonus (`is_bonus: true`) tidak wajib diselesaikan untuk membuka unit berikutnya.
- `estimated_minutes` adalah estimasi — sesuaikan setelah QA konten.
