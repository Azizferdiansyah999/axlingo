# Seed Data – Units

Setiap section memiliki **4–5 unit** bertema. Total: **108 unit** di seluruh kursus.

Konvensi:
- `id` : placeholder, ganti UUID v4 di production
- `order_index` : urutan dalam section (mulai dari 1)
- `is_bonus` : `true` untuk unit tambahan di luar alur utama
- `max_crown_level` : selalu `5`
- `xp_per_crown` : makin tinggi level CEFR, makin besar reward

---

## A1 – Section 1: Salam & Perkenalan Diri

```json
[
  {
    "id": "unit-a1s1-001",
    "section_id": "sect-a1-001",
    "title": "Sapaan Pertama",
    "topic": "greetings",
    "description": "Hello, Hi, Good morning – ungkapan sapaan dasar.",
    "order_index": 1,
    "icon_emoji": "👋",
    "skill_tags": ["speaking", "listening"],
    "is_locked": false,
    "unlock_condition": { "type": "always_open" },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s1-002",
    "section_id": "sect-a1-001",
    "title": "Nama & Asal",
    "topic": "introductions",
    "description": "My name is…, I'm from…, Nice to meet you.",
    "order_index": 2,
    "icon_emoji": "🪪",
    "skill_tags": ["speaking", "reading"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s1-001", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s1-003",
    "section_id": "sect-a1-001",
    "title": "Basa-basi Umum",
    "topic": "small_talk",
    "description": "How are you? Fine, thanks. See you later!",
    "order_index": 3,
    "icon_emoji": "💬",
    "skill_tags": ["speaking", "listening"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s1-002", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s1-004",
    "section_id": "sect-a1-001",
    "title": "Alfabet & Ejaan",
    "topic": "alphabet",
    "description": "Mengeja nama dan kata menggunakan alfabet.",
    "order_index": 4,
    "icon_emoji": "🔤",
    "skill_tags": ["reading", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s1-003", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s1-005",
    "section_id": "sect-a1-001",
    "title": "Percakapan Pertama",
    "topic": "first_conversation",
    "description": "Simulasi percakapan lengkap pertemuan pertama.",
    "order_index": 5,
    "icon_emoji": "🎭",
    "skill_tags": ["speaking", "listening", "reading"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s1-004", "min_score": 0.7 },
    "is_bonus": true,
    "max_crown_level": 5,
    "xp_per_crown": 15
  }
]
```

---

## A1 – Section 2: Angka, Warna & Bentuk

```json
[
  {
    "id": "unit-a1s2-001",
    "section_id": "sect-a1-002",
    "title": "Angka 1–20",
    "topic": "numbers_basic",
    "description": "Membaca, menulis, dan mengucapkan angka 1 hingga 20.",
    "order_index": 1,
    "icon_emoji": "🔢",
    "skill_tags": ["reading", "listening"],
    "is_locked": false,
    "unlock_condition": { "type": "always_open" },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s2-002",
    "section_id": "sect-a1-002",
    "title": "Angka 21–100",
    "topic": "numbers_advanced",
    "description": "Puluhan dan ratusan – membaca harga dan jumlah.",
    "order_index": 2,
    "icon_emoji": "💯",
    "skill_tags": ["reading", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s2-001", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s2-003",
    "section_id": "sect-a1-002",
    "title": "Warna Dasar",
    "topic": "colors",
    "description": "Red, blue, green, yellow – nama warna dan penggunaannya.",
    "order_index": 3,
    "icon_emoji": "🎨",
    "skill_tags": ["reading", "speaking"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s2-002", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s2-004",
    "section_id": "sect-a1-002",
    "title": "Bentuk & Ukuran",
    "topic": "shapes_sizes",
    "description": "Circle, square, big, small – bentuk dan deskripsi ukuran.",
    "order_index": 4,
    "icon_emoji": "🔷",
    "skill_tags": ["reading", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s2-003", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  }
]
```

---

## A1 – Section 3: Keluarga & Orang-orang

```json
[
  {
    "id": "unit-a1s3-001",
    "section_id": "sect-a1-003",
    "title": "Anggota Keluarga",
    "topic": "family_members",
    "description": "Mother, father, sister, brother – kosakata keluarga inti.",
    "order_index": 1,
    "icon_emoji": "👨‍👩‍👧‍👦",
    "skill_tags": ["reading", "speaking"],
    "is_locked": false,
    "unlock_condition": { "type": "always_open" },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s3-002",
    "section_id": "sect-a1-003",
    "title": "Deskripsi Fisik",
    "topic": "physical_description",
    "description": "Tall, short, young, old – mendeskripsikan penampilan orang.",
    "order_index": 2,
    "icon_emoji": "🧍",
    "skill_tags": ["reading", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s3-001", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s3-003",
    "section_id": "sect-a1-003",
    "title": "Kepribadian & Sifat",
    "topic": "personality",
    "description": "Kind, funny, shy, brave – mengekspresikan karakter seseorang.",
    "order_index": 3,
    "icon_emoji": "😊",
    "skill_tags": ["reading", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s3-002", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s3-004",
    "section_id": "sect-a1-003",
    "title": "Membicarakan Keluarga",
    "topic": "talking_about_family",
    "description": "Kalimat: I have two sisters. My mom is a teacher.",
    "order_index": 4,
    "icon_emoji": "🏡",
    "skill_tags": ["speaking", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s3-003", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  }
]
```

---

## A1 – Section 4: Makanan & Minuman

```json
[
  {
    "id": "unit-a1s4-001",
    "section_id": "sect-a1-004",
    "title": "Makanan Pokok",
    "topic": "staple_foods",
    "description": "Rice, bread, egg, meat – nama makanan sehari-hari.",
    "order_index": 1,
    "icon_emoji": "🍚",
    "skill_tags": ["reading", "listening"],
    "is_locked": false,
    "unlock_condition": { "type": "always_open" },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s4-002",
    "section_id": "sect-a1-004",
    "title": "Buah & Sayuran",
    "topic": "fruits_vegetables",
    "description": "Apple, banana, carrot, spinach – kosakata buah dan sayur.",
    "order_index": 2,
    "icon_emoji": "🥦",
    "skill_tags": ["reading", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s4-001", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s4-003",
    "section_id": "sect-a1-004",
    "title": "Minuman",
    "topic": "drinks",
    "description": "Water, juice, coffee, tea – minuman umum dan preferensi.",
    "order_index": 3,
    "icon_emoji": "☕",
    "skill_tags": ["reading", "speaking"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s4-002", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s4-004",
    "section_id": "sect-a1-004",
    "title": "Di Restoran",
    "topic": "at_restaurant",
    "description": "Memesan makanan, meminta tagihan, dan ungkapan di restoran.",
    "order_index": 4,
    "icon_emoji": "🍽️",
    "skill_tags": ["speaking", "listening"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s4-003", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 10
  },
  {
    "id": "unit-a1s4-005",
    "section_id": "sect-a1-004",
    "title": "Suka & Tidak Suka",
    "topic": "food_preferences",
    "description": "I like pizza. I don't like spicy food. Do you like…?",
    "order_index": 5,
    "icon_emoji": "❤️",
    "skill_tags": ["speaking", "writing"],
    "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a1s4-004", "min_score": 0.7 },
    "is_bonus": false,
    "max_crown_level": 5,
    "xp_per_crown": 15
  }
]
```

---

## A2 – Section 5: Rumah & Benda Sehari-hari

```json
[
  {
    "id": "unit-a2s5-001", "section_id": "sect-a2-001",
    "title": "Ruangan Rumah", "topic": "rooms",
    "description": "Bedroom, kitchen, bathroom – nama ruangan dan fungsinya.",
    "order_index": 1, "icon_emoji": "🏠",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s5-002", "section_id": "sect-a2-001",
    "title": "Perabot & Furnitur", "topic": "furniture",
    "description": "Table, chair, bed, sofa – kosakata furnitur umum.",
    "order_index": 2, "icon_emoji": "🛋️",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s5-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s5-003", "section_id": "sect-a2-001",
    "title": "Benda di Dapur", "topic": "kitchen_items",
    "description": "Spoon, fork, pan, fridge – peralatan dapur.",
    "order_index": 3, "icon_emoji": "🍳",
    "skill_tags": ["reading", "speaking"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s5-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s5-004", "section_id": "sect-a2-001",
    "title": "Posisi & Lokasi", "topic": "prepositions_place",
    "description": "On, in, under, next to – preposisi tempat dalam kalimat.",
    "order_index": 4, "icon_emoji": "📍",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s5-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  }
]
```

---

## A2 – Section 6: Rutinitas Harian & Waktu

```json
[
  {
    "id": "unit-a2s6-001", "section_id": "sect-a2-002",
    "title": "Hari & Bulan", "topic": "days_months",
    "description": "Monday to Sunday, January to December.",
    "order_index": 1, "icon_emoji": "📅",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s6-002", "section_id": "sect-a2-002",
    "title": "Membaca Jam", "topic": "telling_time",
    "description": "What time is it? It's 3 o'clock. Half past five.",
    "order_index": 2, "icon_emoji": "🕐",
    "skill_tags": ["reading", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s6-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s6-003", "section_id": "sect-a2-002",
    "title": "Kegiatan Pagi–Malam", "topic": "daily_activities",
    "description": "Wake up, eat breakfast, go to work, sleep – rutinitas harian.",
    "order_index": 3, "icon_emoji": "🌅",
    "skill_tags": ["speaking", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s6-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s6-004", "section_id": "sect-a2-002",
    "title": "Frekuensi & Kebiasaan", "topic": "frequency_adverbs",
    "description": "Always, usually, sometimes, never – kata keterangan frekuensi.",
    "order_index": 4, "icon_emoji": "🔁",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s6-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s6-005", "section_id": "sect-a2-002",
    "title": "Jadwal & Rencana", "topic": "schedules",
    "description": "I have a meeting at 9. She finishes work at 5.",
    "order_index": 5, "icon_emoji": "📋",
    "skill_tags": ["reading", "speaking"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s6-004", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  }
]
```

---

## A2 – Section 7: Belanja & Uang

```json
[
  {
    "id": "unit-a2s7-001", "section_id": "sect-a2-003",
    "title": "Mata Uang & Harga", "topic": "money_prices",
    "description": "Dollar, cent, How much is this? It costs…",
    "order_index": 1, "icon_emoji": "💰",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s7-002", "section_id": "sect-a2-003",
    "title": "Di Toko & Supermarket", "topic": "shopping",
    "description": "Ungkapan belanja: Can I help you? I'm looking for…",
    "order_index": 2, "icon_emoji": "🛒",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s7-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s7-003", "section_id": "sect-a2-003",
    "title": "Ukuran & Jumlah", "topic": "sizes_quantities",
    "description": "Small, medium, large. A dozen, a kilogram.",
    "order_index": 3, "icon_emoji": "⚖️",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s7-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s7-004", "section_id": "sect-a2-003",
    "title": "Tawar-menawar", "topic": "bargaining",
    "description": "Can you give me a discount? That's too expensive.",
    "order_index": 4, "icon_emoji": "🤝",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s7-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  }
]
```

---

## A2 – Section 8: Transportasi & Arah

```json
[
  {
    "id": "unit-a2s8-001", "section_id": "sect-a2-004",
    "title": "Nama Transportasi", "topic": "transport_types",
    "description": "Bus, train, taxi, plane, bicycle – moda transportasi.",
    "order_index": 1, "icon_emoji": "🚌",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s8-002", "section_id": "sect-a2-004",
    "title": "Arah & Lokasi", "topic": "directions",
    "description": "Turn left, go straight, next to the bank.",
    "order_index": 2, "icon_emoji": "🗺️",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s8-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s8-003", "section_id": "sect-a2-004",
    "title": "Di Stasiun & Bandara", "topic": "stations_airports",
    "description": "Ticket, platform, departure, arrival – di terminal perjalanan.",
    "order_index": 3, "icon_emoji": "✈️",
    "skill_tags": ["reading", "speaking"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s8-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  },
  {
    "id": "unit-a2s8-004", "section_id": "sect-a2-004",
    "title": "Jarak & Durasi", "topic": "distance_duration",
    "description": "How far? How long does it take? About 20 minutes.",
    "order_index": 4, "icon_emoji": "📏",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-a2s8-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 15
  }
]
```

---

## B1 – Section 9: Pekerjaan & Karier

```json
[
  {
    "id": "unit-b1s9-001", "section_id": "sect-b1-001",
    "title": "Nama Profesi", "topic": "professions",
    "description": "Doctor, engineer, teacher, chef – nama-nama profesi.",
    "order_index": 1, "icon_emoji": "👔",
    "skill_tags": ["reading", "speaking"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s9-002", "section_id": "sect-b1-001",
    "title": "Lingkungan Kantor", "topic": "office_environment",
    "description": "Meeting, deadline, colleague, manager – kosakata kantor.",
    "order_index": 2, "icon_emoji": "🏢",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s9-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s9-003", "section_id": "sect-b1-001",
    "title": "Wawancara Kerja", "topic": "job_interview",
    "description": "Tell me about yourself. What are your strengths?",
    "order_index": 3, "icon_emoji": "🤵",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s9-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s9-004", "section_id": "sect-b1-001",
    "title": "Email & Surat Formal", "topic": "formal_writing",
    "description": "Dear Sir/Madam, I am writing to… – korespondensi bisnis dasar.",
    "order_index": 4, "icon_emoji": "📧",
    "skill_tags": ["writing", "reading"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s9-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s9-005", "section_id": "sect-b1-001",
    "title": "CV & Lamaran", "topic": "resume_application",
    "description": "Menulis deskripsi pengalaman kerja dan keahlian dalam bahasa target.",
    "order_index": 5, "icon_emoji": "📄",
    "skill_tags": ["writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s9-004", "min_score": 0.7 },
    "is_bonus": true, "max_crown_level": 5, "xp_per_crown": 25
  }
]
```

---

## B1 – Section 10: Kesehatan & Tubuh

```json
[
  {
    "id": "unit-b1s10-001", "section_id": "sect-b1-002",
    "title": "Anggota Tubuh", "topic": "body_parts",
    "description": "Head, shoulder, knee, toe – nama bagian tubuh lengkap.",
    "order_index": 1, "icon_emoji": "🧠",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s10-002", "section_id": "sect-b1-002",
    "title": "Gejala & Keluhan", "topic": "symptoms",
    "description": "I have a headache. I feel dizzy. My throat hurts.",
    "order_index": 2, "icon_emoji": "🤒",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s10-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s10-003", "section_id": "sect-b1-002",
    "title": "Di Dokter & Apotek", "topic": "doctor_pharmacy",
    "description": "Percakapan konsultasi dokter dan membeli obat.",
    "order_index": 3, "icon_emoji": "🏥",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s10-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s10-004", "section_id": "sect-b1-002",
    "title": "Gaya Hidup Sehat", "topic": "healthy_lifestyle",
    "description": "Exercise, diet, sleep, mental health – kosakata gaya hidup.",
    "order_index": 4, "icon_emoji": "🥗",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s10-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  }
]
```

---

## B1 – Section 11: Hobi & Waktu Luang

```json
[
  {
    "id": "unit-b1s11-001", "section_id": "sect-b1-003",
    "title": "Jenis Hobi", "topic": "hobby_types",
    "description": "Reading, cooking, gaming, hiking – nama-nama hobi.",
    "order_index": 1, "icon_emoji": "🎯",
    "skill_tags": ["reading", "speaking"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s11-002", "section_id": "sect-b1-003",
    "title": "Olahraga & Aktivitas", "topic": "sports_activities",
    "description": "Play football, go swimming, do yoga – kata kerja olahraga.",
    "order_index": 2, "icon_emoji": "⚽",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s11-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s11-003", "section_id": "sect-b1-003",
    "title": "Musik & Seni", "topic": "music_arts",
    "description": "Play guitar, paint, draw, sing – ekspresi seni dan musik.",
    "order_index": 3, "icon_emoji": "🎸",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s11-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s11-004", "section_id": "sect-b1-003",
    "title": "Mengajak & Merespons", "topic": "invitations",
    "description": "Would you like to…? I'd love to! Sorry, I can't.",
    "order_index": 4, "icon_emoji": "📩",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s11-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  }
]
```

---

## B1 – Section 12: Cuaca & Alam

```json
[
  {
    "id": "unit-b1s12-001", "section_id": "sect-b1-004",
    "title": "Kondisi Cuaca", "topic": "weather_conditions",
    "description": "Sunny, rainy, cloudy, windy, snowy – deskripsi cuaca.",
    "order_index": 1, "icon_emoji": "🌤️",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s12-002", "section_id": "sect-b1-004",
    "title": "Musim", "topic": "seasons",
    "description": "Spring, summer, autumn, winter – karakteristik setiap musim.",
    "order_index": 2, "icon_emoji": "🍂",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s12-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s12-003", "section_id": "sect-b1-004",
    "title": "Alam & Lingkungan", "topic": "nature",
    "description": "Mountain, river, forest, ocean – kosakata alam.",
    "order_index": 3, "icon_emoji": "🏔️",
    "skill_tags": ["reading", "speaking"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s12-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  },
  {
    "id": "unit-b1s12-004", "section_id": "sect-b1-004",
    "title": "Bencana Alam", "topic": "natural_disasters",
    "description": "Earthquake, flood, storm, drought – istilah bencana alam.",
    "order_index": 4, "icon_emoji": "🌊",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b1s12-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 20
  }
]
```

---

## B2 – Section 13: Perjalanan & Pariwisata

```json
[
  {
    "id": "unit-b2s13-001", "section_id": "sect-b2-001",
    "title": "Merencanakan Perjalanan", "topic": "trip_planning",
    "description": "Booking flights, choosing destinations, travel itinerary.",
    "order_index": 1, "icon_emoji": "🗓️",
    "skill_tags": ["reading", "writing"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s13-002", "section_id": "sect-b2-001",
    "title": "Hotel & Akomodasi", "topic": "accommodation",
    "description": "Check-in, check-out, room service, complaints.",
    "order_index": 2, "icon_emoji": "🏨",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s13-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s13-003", "section_id": "sect-b2-001",
    "title": "Wisata & Atraksi", "topic": "sightseeing",
    "description": "Museum, landmark, guided tour – aktivitas wisata.",
    "order_index": 3, "icon_emoji": "🗽",
    "skill_tags": ["reading", "speaking"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s13-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s13-004", "section_id": "sect-b2-001",
    "title": "Darurat saat Perjalanan", "topic": "travel_emergencies",
    "description": "Lost passport, medical emergency, asking for help abroad.",
    "order_index": 4, "icon_emoji": "🆘",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s13-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  }
]
```

---

## B2 – Section 14: Teknologi & Media Sosial

```json
[
  {
    "id": "unit-b2s14-001", "section_id": "sect-b2-002",
    "title": "Perangkat & Gadget", "topic": "devices",
    "description": "Smartphone, laptop, charger, app – kosakata teknologi.",
    "order_index": 1, "icon_emoji": "📱",
    "skill_tags": ["reading", "writing"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s14-002", "section_id": "sect-b2-002",
    "title": "Internet & Media Sosial", "topic": "social_media",
    "description": "Post, share, follow, trending, viral – bahasa media sosial.",
    "order_index": 2, "icon_emoji": "📲",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s14-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s14-003", "section_id": "sect-b2-002",
    "title": "Keamanan Digital", "topic": "digital_safety",
    "description": "Password, privacy, scam, phishing – keamanan online.",
    "order_index": 3, "icon_emoji": "🔐",
    "skill_tags": ["reading", "speaking"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s14-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s14-004", "section_id": "sect-b2-002",
    "title": "Tren AI & Otomasi", "topic": "ai_automation",
    "description": "Artificial intelligence, automation, data – tren teknologi masa kini.",
    "order_index": 4, "icon_emoji": "🤖",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s14-003", "min_score": 0.7 },
    "is_bonus": true, "max_crown_level": 5, "xp_per_crown": 30
  }
]
```

---

## B2 – Section 15: Pendidikan & Ilmu Pengetahuan

```json
[
  {
    "id": "unit-b2s15-001", "section_id": "sect-b2-003",
    "title": "Sistem Pendidikan", "topic": "education_system",
    "description": "Primary school, university, degree, scholarship.",
    "order_index": 1, "icon_emoji": "🎓",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s15-002", "section_id": "sect-b2-003",
    "title": "Mata Pelajaran & Disiplin Ilmu", "topic": "subjects",
    "description": "Mathematics, biology, history, philosophy – nama bidang ilmu.",
    "order_index": 2, "icon_emoji": "📚",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s15-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s15-003", "section_id": "sect-b2-003",
    "title": "Diskusi Akademik", "topic": "academic_discussion",
    "description": "In my opinion, evidence suggests, according to research.",
    "order_index": 3, "icon_emoji": "🗣️",
    "skill_tags": ["speaking", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s15-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s15-004", "section_id": "sect-b2-003",
    "title": "Riset & Metodologi", "topic": "research_methods",
    "description": "Hypothesis, experiment, data analysis, conclusion.",
    "order_index": 4, "icon_emoji": "🔬",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s15-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  }
]
```

---

## B2 – Section 16: Berita & Isu Sosial

```json
[
  {
    "id": "unit-b2s16-001", "section_id": "sect-b2-004",
    "title": "Membaca Berita", "topic": "reading_news",
    "description": "Headline, article, editorial, breaking news.",
    "order_index": 1, "icon_emoji": "📰",
    "skill_tags": ["reading", "listening"], "is_locked": false,
    "unlock_condition": { "type": "always_open" }, "is_bonus": false,
    "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s16-002", "section_id": "sect-b2-004",
    "title": "Menyampaikan Pendapat", "topic": "expressing_opinions",
    "description": "I believe, I disagree, on the other hand, to sum up.",
    "order_index": 2, "icon_emoji": "💭",
    "skill_tags": ["speaking", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s16-001", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s16-003", "section_id": "sect-b2-004",
    "title": "Isu Sosial & Kemanusiaan", "topic": "social_issues",
    "description": "Poverty, inequality, discrimination, human rights.",
    "order_index": 3, "icon_emoji": "✊",
    "skill_tags": ["reading", "writing"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s16-002", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  },
  {
    "id": "unit-b2s16-004", "section_id": "sect-b2-004",
    "title": "Debat & Argumentasi", "topic": "debate",
    "description": "For and against, rebuttal, counterargument, conclusion.",
    "order_index": 4, "icon_emoji": "⚖️",
    "skill_tags": ["speaking", "listening"], "is_locked": true,
    "unlock_condition": { "type": "complete_unit", "unit_id": "unit-b2s16-003", "min_score": 0.7 },
    "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 25
  }
]
```

---

## C1 – Section 17–20 & C2 – Section 21–24

```json
[
  { "id": "unit-c1s17-001", "section_id": "sect-c1-001", "title": "Negosiasi Bisnis", "topic": "business_negotiation", "order_index": 1, "icon_emoji": "🤝", "skill_tags": ["speaking", "listening"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s17-002", "section_id": "sect-c1-001", "title": "Presentasi Formal", "topic": "formal_presentation", "order_index": 2, "icon_emoji": "📊", "skill_tags": ["speaking", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s17-001", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s17-003", "section_id": "sect-c1-001", "title": "Bahasa Kontrak", "topic": "contract_language", "order_index": 3, "icon_emoji": "📝", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s17-002", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s17-004", "section_id": "sect-c1-001", "title": "Kepemimpinan & Manajemen", "topic": "leadership", "order_index": 4, "icon_emoji": "🧭", "skill_tags": ["speaking", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s17-003", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },

  { "id": "unit-c1s18-001", "section_id": "sect-c1-002", "title": "Analisis Karya Seni", "topic": "art_analysis", "order_index": 1, "icon_emoji": "🖼️", "skill_tags": ["reading", "writing"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s18-002", "section_id": "sect-c1-002", "title": "Sastra & Puisi", "topic": "literature_poetry", "order_index": 2, "icon_emoji": "📖", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s18-001", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s18-003", "section_id": "sect-c1-002", "title": "Film & Kritik", "topic": "film_criticism", "order_index": 3, "icon_emoji": "🎬", "skill_tags": ["listening", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s18-002", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s18-004", "section_id": "sect-c1-002", "title": "Tradisi & Ritual Budaya", "topic": "cultural_traditions", "order_index": 4, "icon_emoji": "🎎", "skill_tags": ["reading", "speaking"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s18-003", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },

  { "id": "unit-c1s19-001", "section_id": "sect-c1-003", "title": "Sistem Hukum", "topic": "legal_systems", "order_index": 1, "icon_emoji": "⚖️", "skill_tags": ["reading", "writing"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s19-002", "section_id": "sect-c1-003", "title": "Sistem Pemerintahan", "topic": "government_systems", "order_index": 2, "icon_emoji": "🏛️", "skill_tags": ["reading", "speaking"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s19-001", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s19-003", "section_id": "sect-c1-003", "title": "Kebijakan Publik", "topic": "public_policy", "order_index": 3, "icon_emoji": "📜", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s19-002", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s19-004", "section_id": "sect-c1-003", "title": "HAM & Keadilan Sosial", "topic": "human_rights", "order_index": 4, "icon_emoji": "🕊️", "skill_tags": ["speaking", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s19-003", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },

  { "id": "unit-c1s20-001", "section_id": "sect-c1-004", "title": "Perubahan Iklim", "topic": "climate_change", "order_index": 1, "icon_emoji": "🌡️", "skill_tags": ["reading", "writing"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s20-002", "section_id": "sect-c1-004", "title": "Energi Terbarukan", "topic": "renewable_energy", "order_index": 2, "icon_emoji": "☀️", "skill_tags": ["reading", "speaking"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s20-001", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s20-003", "section_id": "sect-c1-004", "title": "Konservasi & Biodiversitas", "topic": "conservation", "order_index": 3, "icon_emoji": "🌿", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s20-002", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },
  { "id": "unit-c1s20-004", "section_id": "sect-c1-004", "title": "Keberlanjutan & Gaya Hidup Hijau", "topic": "sustainability", "order_index": 4, "icon_emoji": "♻️", "skill_tags": ["speaking", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c1s20-003", "min_score": 0.75 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 30 },

  { "id": "unit-c2s21-001", "section_id": "sect-c2-001", "title": "Aliran Filsafat", "topic": "philosophy_schools", "order_index": 1, "icon_emoji": "🧐", "skill_tags": ["reading", "writing"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s21-002", "section_id": "sect-c2-001", "title": "Dilema Etika", "topic": "ethical_dilemmas", "order_index": 2, "icon_emoji": "🤔", "skill_tags": ["speaking", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s21-001", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s21-003", "section_id": "sect-c2-001", "title": "Logika & Argumen", "topic": "logic_argumentation", "order_index": 3, "icon_emoji": "🧩", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s21-002", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s21-004", "section_id": "sect-c2-001", "title": "Filsafat Bahasa", "topic": "philosophy_of_language", "order_index": 4, "icon_emoji": "🔭", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s21-003", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },

  { "id": "unit-c2s22-001", "section_id": "sect-c2-002", "title": "Sistem Ekonomi Global", "topic": "global_economy", "order_index": 1, "icon_emoji": "🌐", "skill_tags": ["reading", "writing"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s22-002", "section_id": "sect-c2-002", "title": "Pasar Saham & Investasi", "topic": "stock_market", "order_index": 2, "icon_emoji": "📈", "skill_tags": ["reading", "listening"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s22-001", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s22-003", "section_id": "sect-c2-002", "title": "Kebijakan Moneter & Fiskal", "topic": "monetary_policy", "order_index": 3, "icon_emoji": "🏦", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s22-002", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s22-004", "section_id": "sect-c2-002", "title": "Ekonomi Digital & Kripto", "topic": "digital_economy", "order_index": 4, "icon_emoji": "₿", "skill_tags": ["reading", "speaking"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s22-003", "min_score": 0.8 }, "is_bonus": true, "max_crown_level": 5, "xp_per_crown": 50 },

  { "id": "unit-c2s23-001", "section_id": "sect-c2-003", "title": "Kecerdasan Buatan", "topic": "artificial_intelligence", "order_index": 1, "icon_emoji": "🤖", "skill_tags": ["reading", "writing"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s23-002", "section_id": "sect-c2-003", "title": "Bioteknologi & Genetika", "topic": "biotechnology", "order_index": 2, "icon_emoji": "🧬", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s23-001", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s23-003", "section_id": "sect-c2-003", "title": "Eksplorasi Luar Angkasa", "topic": "space_exploration", "order_index": 3, "icon_emoji": "🚀", "skill_tags": ["reading", "listening"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s23-002", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s23-004", "section_id": "sect-c2-003", "title": "Etika Teknologi", "topic": "tech_ethics", "order_index": 4, "icon_emoji": "🛡️", "skill_tags": ["speaking", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s23-003", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },

  { "id": "unit-c2s24-001", "section_id": "sect-c2-004", "title": "Idiom & Ungkapan Sehari-hari", "topic": "idioms", "order_index": 1, "icon_emoji": "💡", "skill_tags": ["reading", "listening"], "is_locked": false, "unlock_condition": { "type": "always_open" }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s24-002", "section_id": "sect-c2-004", "title": "Humor & Wordplay", "topic": "humor_wordplay", "order_index": 2, "icon_emoji": "😂", "skill_tags": ["listening", "speaking"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s24-001", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s24-003", "section_id": "sect-c2-004", "title": "Register & Gaya Bahasa", "topic": "language_register", "order_index": 3, "icon_emoji": "🎩", "skill_tags": ["reading", "writing"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s24-002", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 },
  { "id": "unit-c2s24-004", "section_id": "sect-c2-004", "title": "Nuansa Kultural & Tabu", "topic": "cultural_nuance", "order_index": 4, "icon_emoji": "🌏", "skill_tags": ["reading", "speaking"], "is_locked": true, "unlock_condition": { "type": "complete_unit", "unit_id": "unit-c2s24-003", "min_score": 0.8 }, "is_bonus": false, "max_crown_level": 5, "xp_per_crown": 40 }
]
```

---

## Ringkasan

| Level | Section | Jumlah Unit | XP per Crown |
|---|---|---|---|
| A1 | 1–4   | 18 unit | 10–15 XP |
| A2 | 5–8   | 17 unit | 15 XP |
| B1 | 9–12  | 17 unit | 20–25 XP |
| B2 | 13–16 | 16 unit | 25–30 XP |
| C1 | 17–20 | 16 unit | 30 XP |
| C2 | 21–24 | 16 unit | 40–50 XP |
| **Total** | **24** | **108 unit** | — |

---

## Catatan untuk Agent

- Ganti semua `section_id` dengan UUID aktual dari seed sections.
- `id` placeholder (`unit-a1s1-001` dst.) harus diganti UUID v4 di production.
- `min_score` pada A1–A2 menggunakan `0.7`, B1–B2 menggunakan `0.7`, C1–C2 menggunakan `0.75–0.8` untuk mencerminkan standar yang lebih ketat.
- Unit dengan `is_bonus: true` tidak memblokir unlock unit berikutnya.
- `xp_per_crown` meningkat seiring level CEFR untuk mempertahankan motivasi user.
