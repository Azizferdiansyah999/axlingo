# AXLINGO — EXPANDED LEARNING PATH v2.0 (Slang Course)
**Dokumen Desain Konten | Revisi: April 2026**

---

## DAFTAR ISI

0. [Database Schema Model](#0-database-schema-model)
1. [Struktur Sistem](#1-struktur-sistem)
2. [TIER 1 — Street Level (Beginner)](#2-tier-1--street-level-beginner)
3. [TIER 2 — Grid Master (Intermediate)](#3-tier-2--grid-master-intermediate)
4. [TIER 4 — Cyber Legend (Advanced)](#4-tier-3--cyber-legend-advanced)
5. [Format Penjelasan Materi (Template Node)](#5-format-penjelasan-materi-template-node)
6. [Contoh Lengkap Per Chapter](#6-contoh-lengkap-per-chapter)

---

## 0. DATABASE SCHEMA MODEL

Schema ini mengikuti model path_1 (Course → Section → Unit → Lesson → Exercise)
dengan adaptasi untuk Slang Course.

### Pemetaan Terminologi

| path_1 (Formal Course) | path_2 (Slang Course) | Keterangan |
|---|---|---|
| Course | Course (type: 'slang') | 1 row di tabel `courses` |
| Section | Tier | TIER 1/2/3 → rows di `sections` |
| Unit | Chapter | Ch. 1–28 → rows di `units` |
| Lesson | Node | Node 1–6 + Boss → rows di `lessons` |
| Exercise | Soal | Soal individual → rows di `exercises` |

### Hierarki Entitas (Slang Course)

```
courses (type='slang', title='Axlingo Slang')
└── sections (tier: street_level / grid_master / cyber_legend)
    └── units (chapter: "The Streets", "The Gaming Zone", ...)
        └── lessons (node type: vocab_intro / context_check / slang_wild /
                     confusion_buster / rapid_fire / deep_dive / boss)
            └── exercises (type: multiple_choice / fill_blank / true_false /
                           match_pairs / reorder_words)
```

### Lesson Types (Node Types) untuk Slang Course

| lesson.type | Node | Isi |
|---|---|---|
| `vocab_intro` | Node 1 | Tabel kata + penjelasan + contoh kalimat |
| `context_check` | Node 2 | Kata dalam situasi nyata |
| `slang_wild` | Node 3 | Contoh dari medsos/TikTok asli |
| `confusion_buster` | Node 4 | Perbandingan kata yang sering salah |
| `rapid_fire` | Node 5 | 15 soal cepat campuran |
| `deep_dive` | Node 6 | Konteks budaya & asal-usul |
| `boss` | Boss | 20 soal final chapter |

### Exercise Types per Tier

| Tier | Exercise Types yang Dipakai |
|---|---|
| Tier 1 (Street Level) | `multiple_choice`, `true_false` |
| Tier 2 (Grid Master) | `fill_blank`, `match_pairs` |
| Tier 3 (Cyber Legend) | `reorder_words`, `translate` |

### pass_threshold per Tier

| Tier | Node biasa | Boss Node |
|---|---|---|
| Tier 1 | 0.60 | 0.70 |
| Tier 2 | 0.65 | 0.75 |
| Tier 3 | 0.70 | 0.80 |

### XP & Diamond per Tier

| Tier | XP/node | 💎/node | XP/boss | 💎/boss |
|---|---|---|---|---|
| Tier 1 | +30 | +3 | +80 | +10 |
| Tier 2 | +50 | +5 | +120 | +15 |
| Tier 3 | +80 | +8 | +200 | +20 |

---

## 1. STRUKTUR SISTEM

```
TIER 1 — STREET LEVEL     (Beginner)     → 10 Chapter | 60 Node | ±360 Soal
TIER 2 — GRID MASTER      (Intermediate) → 10 Chapter | 70 Node | ±420 Soal
TIER 3 — CYBER LEGEND     (Advanced)     →  8 Chapter | 56 Node | ±336 Soal
─────────────────────────────────────────────────────────────────────────────
TOTAL                                    → 28 Chapter | 186 Node | ±1.116 Soal
```

### Hierarki Konten

```
CHAPTER
  └─ NODE
       ├─ Node 1: Vocab Intro         → Pengenalan kosakata baru (5–7 kata)
       ├─ Node 2: Context Check       → Kosakata dalam kalimat & situasi
       ├─ Node 3: Slang in the Wild   → Contoh dari media sosial/game/film nyata
       ├─ Node 4: Confusion Buster    → Kata yang sering salah dipahami
       ├─ Node 5: Rapid Fire          → Kuis cepat campuran materi chapter
       ├─ Node 6: Deep Dive           → Konteks budaya + nuance (Tier 2 & 3)
       └─ 🏆 CHAPTER BOSS             → Quiz final chapter
```

### Difficulty Per Tier

| Aspek | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| Tipe soal | Pilihan ganda, true/false | Fill-in-blank, match | Open-ended, reorder |
| Waktu/soal | 30 detik | 20 detik | 15 detik |
| Skor lulus node | 60% | 65% | 70% |
| Skor lulus boss | 70% | 75% | 80% |
| XP per node | +30 XP | +50 XP | +80 XP |
| 💎 per node | +3 💎 | +5 💎 | +8 💎 |

---

## 2. TIER 1 — STREET LEVEL (Beginner)

| No | Chapter | Node | Tema |
|---|---|---|---|
| 1 | The Streets | 6 | Sapaan informal, slang sehari-hari dasar |
| 2 | The Social Grid | 6 | Bahasa medsos, caption, hashtag dasar |
| 3 | The Gaming Zone | 6 | Istilah gaming dasar |
| 4 | The Hustle Basics | 6 | Bahasa kerja santai, startup ringan |
| 5 | The Internet Culture | 6 | Meme klasik, viral phrases populer |
| 6 | The Vibes | 6 | Bahasa musik pop, ekspresi emosi |
| 7 | The Reaction Pack | 6 | Ekspresi reaksi sehari-hari |
| 8 | The Small Talk | 6 | Percakapan ringan, filler words |
| 9 | The Emoji World | 6 | Makna emoji dalam konteks percakapan |
| 10 | T1 Final Boss | 6 | Review semua Tier 1 |

---

## 3. TIER 2 — GRID MASTER (Intermediate)

| No | Chapter | Node | Tema |
|---|---|---|---|
| 11 | The Deep Streets | 7 | Slang regional & konteks sosial lanjutan |
| 12 | The Creator Economy | 7 | Bahasa YouTuber, podcaster, streamer |
| 13 | The Esports Arena | 7 | Meta gaming, strategi, callout phrases |
| 14 | The Startup Grind | 7 | Pitch deck language, hustle culture |
| 15 | The Meme Lab | 7 | Meme generasi baru, irony |
| 16 | The Pop Culture Vault | 7 | Referensi film, series, musik viral |
| 17 | The Relationship Lingo | 7 | Bahasa percintaan modern |
| 18 | The Cancel Culture | 7 | Bahasa opini publik, discourse online |
| 19 | The Sarcasm Zone | 7 | Sarkasme, ironi, tone dalam teks |
| 20 | T2 Final Boss | 7 | Review semua Tier 2 |

---

## 4. TIER 3 — CYBER LEGEND (Advanced)

| No | Chapter | Node | Tema |
|---|---|---|---|
| 21 | The Deep Lingo | 7 | Slang tingkat lanjut, idiom modern |
| 22 | The Code Switcher | 7 | Campur kode (Inggris-Indonesia) alami |
| 23 | The Gen Alpha Zone | 7 | Bahasa generasi terbaru |
| 24 | The Corporate Speak | 7 | Formal korporat vs informal |
| 25 | The Academic Slang | 7 | Slang dunia kampus |
| 26 | The Global Street | 7 | Slang internasional (UK, AAVE) |
| 27 | The Master Grid | 7 | Gabungan semua + analisis konteks |
| 28 | THE AXLINGO FINAL | 7 | Grand Final — semua materi 3 tier |

---

## 5. FORMAT PENJELASAN MATERI (Template Node)

Setiap node menggunakan template berikut sebagai panduan konten pengajar / kurikulum.

```
### [Nama Node] — [Tag Sub-topic]

**Kata/Frasa yang Dipelajari:**
Daftar 5–7 kata atau frasa baru lengkap dengan artinya.

**Hal yang Dibahas:**
Penjelasan singkat konteks penggunaan — kapan, di mana, dan oleh siapa kata ini dipakai.

**Contoh Kalimat:**
3–5 contoh kalimat otentik seperti yang muncul di media sosial, chat, atau percakapan nyata.

**Penerapan / Latihan:**
Skenario percakapan pendek yang memperlihatkan kata-kata dalam konteks nyata.

**Jebakan Umum (Confusion Buster):**
Kesalahan yang sering dilakukan pemelajar dan cara menghindarinya.
```

---

## 6. CONTOH LENGKAP PER CHAPTER

---

### CHAPTER 1: THE STREETS
**Tier:** 1 — Street Level | **Tema:** Sapaan informal & slang sehari-hari

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Tingkat Formalitas |
|---|---|---|
| What's up? | Apa kabar? / Lagi ngapain? | Sangat informal |
| Sup | Versi singkat "What's up?" | Sangat informal |
| How's it going? | Gimana kabarnya? | Informal–netral |
| Yo | Panggilan / sapaan umum | Sangat informal |
| Hey | Hai / hei | Informal |
| Catch you later | Sampai ketemu lagi | Informal |
| Lemme know | Let me know — kabarin aku | Informal |

**Hal yang Dibahas:**
Sapaan informal dalam bahasa Inggris sehari-hari yang dipakai oleh teman sebaya, di media sosial, grup chat, dan percakapan santai. Kata-kata ini TIDAK cocok untuk situasi formal seperti wawancara kerja atau email ke atasan.

**Contoh Kalimat:**
- *"Yo, what's up? Haven't seen you in a while!"*
- *"Sup bro, you coming tonight?"*
- *"How's it going? You seem stressed."*
- *"Hey, lemme know when you're free, yeah?"*
- *"Alright, catch you later!"*

**Penerapan / Percakapan:**
```
Alex: Yo! What's up?
Jordan: Not much, just chilling. How's it going with you?
Alex: Pretty good. You coming to the party later?
Jordan: Maybe, lemme know the address.
Alex: Cool, catch you later then!
```

**Jebakan Umum:**
- "What's up?" bukan pertanyaan literal tentang apa yang ada di atas. Jawaban yang benar bukan "The sky" tapi "Not much" atau "Pretty good."
- "Sup" hanya cocok dengan teman dekat. Jangan pakai ke orang yang baru kenal.

---

#### Node 2 — Context Check | `#context`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Konteks |
|---|---|---|
| Chill | Santai / tidak panik | Sifat orang atau situasi |
| Hang out | Nongkrong bersama | Aktivitas sosial |
| Vibe | Suasana / perasaan tempat/orang | Deskripsi energi |
| Lowkey | Sedikit / agak / diam-diam | Penguat kata sifat |
| Highkey | Sangat / terang-terangan | Penguat kata sifat |
| For real | Serius? / Beneran nih | Ekspresi konfirmasi |
| No cap | Tidak bohong / serius | Penegasan kebenaran |

**Hal yang Dibahas:**
Kata-kata ini dipakai untuk mendeskripsikan orang, suasana, dan perasaan dalam percakapan sehari-hari. "Lowkey" dan "highkey" adalah penguat yang sangat populer di kalangan Gen Z dan sering muncul di caption Instagram.

**Contoh Kalimat:**
- *"This place has such a good vibe, I love it here."*
- *"He's so chill, never gets angry about anything."*
- *"I'm lowkey obsessed with this song."*
- *"I highkey need a vacation right now."*
- *"No cap, that was the best food I've ever had."*

**Penerapan / Percakapan:**
```
Sari: How was the party last night?
Dani: Bro, no cap, the vibe was incredible.
Sari: For real? I heard it was just okay.
Dani: Nah, it was highkey one of the best nights ever.
Sari: Okay okay, I'm lowkey jealous now.
```

**Jebakan Umum:**
- "Vibe" bisa jadi kata benda ("good vibe") atau kata kerja ("we really vibe together"). Perhatikan posisinya dalam kalimat.
- "No cap" ≠ "no hat." Ini sama sekali tidak ada hubungannya dengan topi.

---

#### Node 3 — Slang in the Wild | `#culture`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Asal / Konteks |
|---|---|---|
| Bet | Oke / setuju / siap | Konfirmasi singkat |
| Say less | Sudah mengerti, tidak perlu dijelaskan lagi | Ekspresi paham |
| Facts | Benar sekali / setuju 100% | Respon persetujuan |
| It's giving... | Ini kesannya... / nuansanya seperti... | Deskripsi kesan |
| Slay | Tampil keren / melakukan sesuatu dengan luar biasa | Pujian |
| That hits different | Terasa lebih bermakna / beda dari biasanya | Ekspresi perasaan |
| Period / Periodt | Titik. Selesai. Tidak ada bantahan. | Penegasan akhir |

**Hal yang Dibahas:**
Ekspresi-ekspresi ini sangat sering muncul di Twitter/X, TikTok, dan Instagram. Banyak berasal dari budaya AAVE (African American Vernacular English) dan menyebar ke seluruh internet. Penting untuk memahami konteks asalnya agar tidak dipakai sembarangan.

**Contoh dari Media Sosial:**
- *"New fit just dropped. Slay or nay?"* (caption Instagram)
- *"This song hits different at 2am no cap"* (komentar YouTube)
- *"It's giving main character energy."* (TikTok comment)
- *"A: Let's meet at 7. B: Bet."* (WhatsApp chat)
- *"She passed her exam on the first try. Facts, she studied so hard. Period."*

**Penerapan / Percakapan:**
```
Raka: Bro I just got promoted.
Dito: No way, facts?? That slaps dude, you deserve it.
Raka: Thanks man, it hits different after all the late nights.
Dito: Say less, let's celebrate. Dinner tonight?
Raka: Bet. 7pm?
Dito: Slay. Period.
```

**Jebakan Umum:**
- "Bet" bukan tawaran taruhan di sini. Ini hanya konfirmasi setuju.
- "It's giving" selalu diikuti kata benda/frasa: *"It's giving vacation vibes"* ✅ — bukan *"It's giving good"* ❌

---

#### Node 4 — Confusion Buster | `#compare`

**Fokus:** Kata-kata yang bentuknya mirip tapi maknanya berbeda

| Pasangan | Perbedaan |
|---|---|
| **Lit** vs **Fire** | Keduanya artinya "keren/kece", tapi "lit" lebih ke suasana/pesta, "fire" lebih ke objek/karya |
| **Sick** vs **Ill** | "Sick" dalam slang = luar biasa keren. "Ill" dalam slang juga bisa artinya keren (lebih tua, hip-hop). Dalam bahasa formal keduanya = sakit. |
| **Dead** vs **I'm dead** | "Dead" sebagai reaksi = lucu banget sampai "mati". Bukan berarti seseorang benar-benar meninggal. |
| **Sus** vs **Shady** | "Sus" (suspicious) = mencurigakan dalam konteks game/situasi. "Shady" = mencurigakan dengan konotasi lebih negatif/gelap. |
| **Salty** vs **Bitter** | "Salty" = kesal karena kalah atau tidak dapat sesuatu. "Bitter" = dendam jangka panjang. |

**Contoh Kalimat Perbandingan:**
- *"That party was LIT!"* (suasananya seru) vs *"That track is FIRE."* (lagunya keren)
- *"Bro I'm literally DEAD 💀"* (ketawa banget) — bukan darurat medis
- *"Why is he being so sus today?"* vs *"That guy looks kinda shady, I don't trust him."*
- *"She's salty because she didn't win."* vs *"He's still bitter about that breakup from 3 years ago."*

**Jebakan Umum:**
- Kalau temanmu bilang *"I'm dead"* sambil kirim meme lucu, jangan panik. Itu ekspresi humor.
- "Sick" dalam konteks "That trick was SICK!" adalah pujian tertinggi, bukan keluhan.

---

#### Node 5 — Rapid Fire | `#rapid`

**Format:** 15 soal dalam 5 menit — campuran semua materi Chapter 1.

Contoh soal:
1. Apa arti "no cap" dalam kalimat *"No cap, this is the best pizza ever"*?
   - A. Tanpa topi  B. Serius/tidak bohong  C. Tidak ada batas  D. Tidak jelas
2. Pilih respons yang paling natural untuk "What's up?":
   - A. "The ceiling."  B. "I'm fine thank you."  C. "Not much, just chilling."  D. "Yes."
3. *"This song hits _____ at midnight."* — isi kata yang tepat.
4. Manakah yang BUKAN ekspresi persetujuan?
   - A. Bet  B. Facts  C. Salty  D. Say less
5. *"It's giving _____ energy."* — frasa ini dipakai untuk...?

---

#### Node 6 — Deep Dive | `#deepdive`

**Topik:** Asal-usul slang dan kenapa penting memahami konteks budayanya

**Hal yang Dibahas:**

Banyak slang populer yang kamu pelajari di chapter ini berasal dari **AAVE (African American Vernacular English)** — dialek bahasa Inggris yang berkembang di komunitas Afrika-Amerika. Kata seperti "slay", "no cap", "bet", "it's giving", dan "period" semuanya punya akar di sana sebelum menyebar ke internet.

Kenapa ini penting?
- Memahami asal kata membuat kamu lebih paham *kapan* dan *di mana* kata itu tepat dipakai.
- Pemakaian yang sadar = komunikasi yang lebih otentik.
- Hindari memakai kata-kata ini untuk merendahkan atau meniru-niru budaya yang bukan milikmu secara berlebihan.

**Timeline Singkat Beberapa Kata:**

| Kata | Komunitas Asal | Masuk Mainstream |
|---|---|---|
| Slay | Ballroom culture, LGBTQ+ | ~2013 via social media |
| No cap | Hip-hop, AAVE | ~2018 via rap lyrics |
| Bet | AAVE street slang | ~2019 via TikTok |
| It's giving | AAVE / ballroom | ~2021 via TikTok |
| Vibe | Musik funk/soul | ~2016 via pop culture |

---

#### 🏆 CHAPTER BOSS — The Streets Final

**Format:** 20 soal campuran | Waktu: 10 menit | Skor minimum: 70%

Mencakup semua materi dari Node 1–6:
- 5 soal pilihan ganda (vocab)
- 5 soal fill-in-blank (context)
- 5 soal true/false (culture facts)
- 3 soal match kata dengan definisi
- 2 soal skenario percakapan (pilih respons terbaik)

**Reward:** Badge 🥉 "Street Smart" + 80 XP + 10 💎

---
---

### CHAPTER 2: THE SOCIAL GRID
**Tier:** 1 — Street Level | **Tema:** Bahasa media sosial, caption, hashtag

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Platform Utama |
|---|---|---|
| Aesthetic | Gaya visual yang konsisten dan menarik | Instagram, Pinterest |
| Feed | Halaman utama / tampilan beranda | Instagram, Twitter |
| Grid | Susunan foto di profil Instagram | Instagram |
| Caption | Teks yang menyertai foto/video | Instagram, TikTok |
| Dm / Slide into DMs | Kirim pesan langsung / mendekati lewat DM | Instagram, Twitter |
| Ratio | Mendapat lebih banyak reply/retweet daripada likes (biasanya berarti opini kontroversial) | Twitter/X |
| Clout | Pengaruh / popularitas online | Umum |

**Hal yang Dibahas:**
Kosakata inti yang dipakai untuk membicarakan pengalaman bermedia sosial. Kata-kata ini muncul dalam caption, komentar, dan percakapan tentang konten online sehari-hari.

**Contoh Kalimat:**
- *"Your feed aesthetic is so clean, I love it."*
- *"She has a really nice Instagram grid — all warm tones."*
- *"Bro he slid into her DMs after one post, that's wild."*
- *"That tweet got ratioed so hard, 500 replies with only 12 likes."*
- *"He only does it for the clout, not because he actually cares."*

**Penerapan / Percakapan:**
```
Nadia: Have you seen Rani's new Instagram?
Putri: Yes! Her aesthetic is insane — all pastel and minimalist.
Nadia: Right? Her grid is so consistent.
Putri: I'm thinking of sliding into her DMs to collab.
Nadia: Do it! She definitely has the clout to boost your page.
```

**Jebakan Umum:**
- "Aesthetic" bisa kata benda ("her aesthetic is dark academia") atau kata sifat ("this place is so aesthetic"). Keduanya benar.
- "Ratio" di sini bukan operasi matematika. Di Twitter, di-"ratio" itu memalukan — artinya lebih banyak orang yang mendebat daripada setuju.

---

#### Node 2 — Context Check | `#context`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Contoh Penggunaan |
|---|---|---|
| POV | Point of View — sudut pandang | Caption TikTok/IG Reels |
| GRWM | Get Ready With Me | Format video populer |
| OOTd | Outfit of the Day | Caption fashion |
| Collab | Kolaborasi antara dua kreator | Kemitraan konten |
| Viral | Menyebar sangat cepat di internet | Deskripsi konten |
| Algorithm | Sistem rekomendasi platform | Diskusi strategi konten |
| Engagement | Interaksi (like, comment, share) pada konten | Metrik konten |

**Hal yang Dibahas:**
Kosakata yang sering muncul dalam caption konten kreator dan diskusi tentang strategi media sosial. Cocok untuk siapa saja yang aktif membuat atau mengonsumsi konten online.

**Contoh Caption Nyata:**
- *"POV: You just found your new comfort playlist 🎵"*
- *"GRWM for a first date ✨ (nervous edition)"*
- *"OOTD ft. this thrifted jacket that went viral last week"*
- *"So grateful for this collab, we really fed the algorithm today 😂"*
- *"Engagement on this post was insane, thank you guys fr"*

**Penerapan / Percakapan:**
```
Rio: My GRWM video finally went viral!
Zara: No way, how many views?
Rio: 2 million overnight. The algorithm just picked it up.
Zara: That's insane. Are you gonna do a collab now?
Rio: Yeah, three brands already DM'd. The engagement is crazy.
Zara: OOTD video next? People love your aesthetic.
Rio: Already planned. Content calendar is FULL.
```

---

#### Node 3 — Slang in the Wild | `#culture`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Asal |
|---|---|---|
| Main character | Merasa/bertindak seperti protagonis hidupnya sendiri | TikTok trend |
| NPC | Non-Playable Character — orang yang tampak tidak punya kepribadian/tujuan | Gaming → meme |
| Gatekeeping | Menyembunyikan informasi bagus agar orang lain tidak tahu | Umum di medsos |
| Understood the assignment | Berhasil melakukan sesuatu dengan sempurna sesuai ekspektasi | Twitter/TikTok |
| Rent free | Terus memikirkan seseorang/sesuatu tanpa bisa berhenti | Twitter |
| Roman Empire | Sesuatu yang sering kamu pikirkan tanpa alasan jelas | TikTok trend 2023 |
| Delulu | Delusional — berfantasi tentang sesuatu yang tidak realistis (tapi fun) | TikTok |

**Hal yang Dibahas:**
Ekspresi-ekspresi ini lahir dari tren TikTok dan Twitter dan menjadi bagian dari bahasa internet global. Banyak berasal dari dunia gaming dan film yang kemudian dipakai dalam konteks kehidupan nyata secara humoris.

**Contoh dari Media Sosial:**
- *"She walked in like she understood the assignment. Dress code was chaos and she delivered."*
- *"Stop gatekeeping that café, where is it??"*
- *"He lives rent free in my head, I don't even like him that much."*
- *"My Roman Empire? IKEA meatballs."*
- *"Being delulu is the only solulu 💅"* (delulu is the solulu = menjadi delusional adalah solusinya — humor)
- *"Why is everyone in this comment section acting like NPCs??"*

**Penerapan / Percakapan:**
```
Fara: You've been listening to that one song for 3 weeks straight.
Kiki: It literally lives rent free in my head, I can't.
Fara: What's your Roman Empire right now?
Kiki: Honestly? That one person from the event last month.
Fara: Oh you're so delulu 😭
Kiki: Delulu is the solulu bestie. I'm the main character of my own story.
Fara: The way you understood the assignment of being delusional 💀
```

---

#### Node 4 — Confusion Buster | `#compare`

**Fokus:** Caption language — formal vs informal

| Situasi | Jangan tulis | Tulis ini |
|---|---|---|
| Caption foto bagus | "This is a nice photo of me." | "understood the assignment 💅" |
| Foto makanan | "I ate this food today." | "eating well no matter what 🍜✨" |
| Foto dengan teman | "Me and my friends." | "these are my people, no cap 🖤" |
| Foto outfit | "I am wearing new clothes." | "OOTD ft. my wallet crying 💸" |
| Foto liburan | "I went on vacation." | "main character era loading... 🌊" |

**Jebakan Umum:**
- Caption yang terlalu formal di foto kasual terasa canggung di Instagram. Pelajari *tone* platform tempat kamu posting.
- Hashtag terlalu banyak (30+) terlihat spammy. Pilih 5–10 yang relevan.
- "POV:" harus diikuti situasi, bukan opini: *"POV: you finally found your vibe"* ✅ — bukan *"POV: I think this is nice"* ❌

---

#### Node 5 — Rapid Fire | `#rapid`

Contoh soal:
1. Apa arti "she understood the assignment"?
2. Bedakan "NPC" dan "main character" dalam konteks medsos.
3. *"He lives ___ free in my head."* — isi kata yang tepat.
4. Platform mana yang paling identik dengan "OOTD" dan "Grid aesthetic"?
5. True/False: "Ratio" di Twitter selalu hal yang positif.

---

#### Node 6 — Deep Dive | `#deepdive`

**Topik:** Bahasa media sosial sebagai cermin budaya

Media sosial menciptakan bahasa baru lebih cepat dari kamus bisa mengejar. Setiap platform punya "dialect"-nya sendiri:

| Platform | Ciri Khas Bahasa |
|---|---|
| TikTok | Singkat, kalimat pendek, banyak POV, trend-driven, self-aware humor |
| Instagram | Aesthetic language, OOTD, aesthetic labels, aspirational tone |
| Twitter/X | Dry humor, ratio culture, thread, discourse, sarkasme tinggi |
| YouTube | Parasocial language (bestie, fam), GRWM, long-form storytelling |
| Reddit | Irony berlapis, inside jokes komunitas, heavy self-deprecation |

Memahami platform berarti memahami *nada* yang benar untuk tempat itu.

---

#### 🏆 CHAPTER BOSS — The Social Grid Final

**Reward:** Badge 🥉 "Influencer Mode" + 80 XP + 10 💎

---
---

### CHAPTER 3: THE GAMING ZONE
**Tier:** 1 — Street Level | **Tema:** Istilah gaming dasar

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Dipakai di |
|---|---|---|
| GG | Good Game — ucapan setelah pertandingan | Semua game online |
| Noob / Newbie | Pemain baru yang belum berpengalaman | Semua game |
| AFK | Away From Keyboard — tidak aktif sementara | Game online, chat |
| Clutch | Berhasil menyelamatkan situasi di detik terakhir | FPS, battle royale |
| Feed / Feeding | Mati berulang kali dan membantu musuh | MOBA, FPS |
| Camp / Camping | Bersembunyi di satu tempat menunggu musuh | FPS |
| Respawn | Muncul kembali setelah mati dalam game | Semua game |

**Hal yang Dibahas:**
Kosakata gaming dasar yang muncul di hampir semua game online dan sudah mulai merambah ke percakapan sehari-hari di luar konteks gaming. Banyak remaja dan dewasa muda memakai istilah ini dalam percakapan normal.

**Contoh Kalimat:**
- *"GG everyone, good match."*
- *"Don't be such a noob, just practice more."*
- *"Sorry, I was AFK for a bit, had to eat dinner."*
- *"That was the most clutch play I've ever seen!"*
- *"Stop feeding the enemy! You've died 7 times already."*
- *"He's just camping the whole game, so boring."*

**Penerapan / Percakapan (in-game chat):**
```
Player1: GG guys, that was close.
Player2: Nah, Player3 kept feeding 😭
Player3: Sorry I was AFK for a sec, lost focus.
Player1: It's okay. That clutch at the end saved us tho.
Player2: Facts. Respect.
Player1: Let's run it again?
Player3: Bet. No more feeding this time I promise.
```

**Jebakan Umum:**
- "GG" di awal game (sebelum selesai) sering dianggap provokasi atau sikap sombong. Sebaiknya hanya di akhir game.
- "Noob" bisa terasa kasar. Gunakan dengan hati-hati — lebih baik pakai "new player" jika tidak kenal orang tersebut.

---

#### Node 2 — Context Check | `#context`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Konteks |
|---|---|---|
| Meta | Strategi/karakter terkuat saat ini berdasarkan game balance | Diskusi strategi |
| OP | Overpowered — terlalu kuat, tidak seimbang | Kritik game balance |
| Nerf | Melemahkan karakter/senjata lewat update | Update game |
| Buff | Memperkuat karakter/senjata lewat update | Update game |
| Grind | Bermain berulang-ulang untuk menaikkan level/item | Progress game |
| Tryhard | Bermain terlalu serius di situasi yang santai | Kritik perilaku |
| RNG | Random Number Generator — faktor keberuntungan dalam game | Game mechanics |

**Contoh Kalimat:**
- *"This character is way too OP, they need to nerf him next patch."*
- *"The meta right now is all about aggressive early plays."*
- *"I've been grinding for 3 days to get this skin."*
- *"Stop being a tryhard, it's just a casual match."*
- *"I lost because of RNG, nothing I could do."*

**Penerapan di luar gaming:**
Istilah gaming sekarang dipakai dalam kehidupan nyata:
- *"I'm in my gym grind era."* (sedang serius latihan)
- *"Stop tryharding at the team dinner bro, it's not a competition."*
- *"Her persuasion skills are buffed today, she convinced everyone."*
- *"The RNG of blind dates is real."* (keberuntungan)

---

#### Node 3 — Slang in the Wild | `#culture`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Contoh Nyata |
|---|---|---|
| Carry | Pemain kuat yang "membawa" tim menang | "He literally carried us" |
| Toxic | Perilaku tidak menyenangkan, negatif | "This lobby is so toxic" |
| Grief / Griefer | Sengaja mengganggu permainan rekan tim | "Stop griefing me!" |
| Speedrun | Menyelesaikan sesuatu secepat mungkin | Bisa dipakai di luar gaming |
| Loot | Item/hadiah yang didapat dari musuh/kotak | "The loot in this area is great" |
| Rank | Tingkat kemampuan dalam game kompetitif | "I finally hit Diamond rank!" |
| Queue | Antrian matchmaking | "The queue is 15 minutes long" |

**Contoh Penggunaan di Luar Gaming:**
- *"I'm about to speedrun this assignment, due in 2 hours."* (mengerjakan cepat)
- *"The loot at that flea market was insane."* (barang-barang bagus)
- *"She's been toxic in the group chat all week."* (bersikap negatif)
- *"He always carries the team presentation."* (paling berkontribusi)

---

#### Node 4 — Confusion Buster | `#compare`

| Pasangan | Perbedaan |
|---|---|
| **Noob** vs **Bot** | Noob = baru/tidak berpengalaman. Bot = bermain seperti robot, tanpa inisiatif/strategi. Bot lebih kasar. |
| **Lag** vs **Rubberbanding** | Lag = koneksi lambat umum. Rubberbanding = karakter terasa ditarik mundur karena packet loss. |
| **Clutch** vs **Lucky** | Clutch = skill tinggi di situasi tertekan. Lucky = beruntung tanpa skill. Menyebut clutch play sebagai "lucky" adalah penghinaan. |
| **GG** vs **GG EZ** | GG = sopan, menghormati lawan. GG EZ = sombong, menghina lawan. Jangan pakai GG EZ. |
| **AFK** vs **Idle** | AFK = pergi dari keyboard (sementara). Idle = tidak bergerak tapi masih di game. |

---

#### Node 5 — Rapid Fire | `#rapid`

Contoh soal:
1. Apa yang dimaksud dengan "meta" dalam gaming?
2. Jika karakter favoritmu di-"nerf", itu berarti dia...?
3. *"Stop ___, we're supposed to be a team!"* — kata apa yang tepat untuk pemain yang sengaja mengganggu?
4. Benar/Salah: "GG EZ" adalah cara yang sopan untuk menutup pertandingan.
5. Di luar gaming, "speedrun" artinya...?

---

#### Node 6 — Deep Dive | `#deepdive`

**Topik:** Bahasa gaming sebagai bahasa global anak muda

Gaming adalah salah satu industri terbesar di dunia dan komunitasnya telah menciptakan bahasa yang melampaui batas negara. Istilah seperti "GG", "AFK", "meta" dimengerti oleh pemain dari Indonesia hingga Brasil tanpa terjemahan.

**Fakta Menarik:**
- Kata "noob" sudah masuk kamus Merriam-Webster sebagai slang informal.
- "Meta" dalam konteks gaming berbeda dari "meta" dalam filsafat (tentang dirinya sendiri) — tapi keduanya berakar dari bahasa Yunani *meta* (melampaui/tentang).
- Esports sekarang menghasilkan atleter profesional dengan gaji miliaran — bahasa yang mereka pakai dalam pertandingan adalah campuran Inggris teknis + slang komunitas.

**Istilah Gaming yang Sudah "Mainstream":**

| Istilah Gaming | Makna Mainstream Sekarang |
|---|---|
| Grinding | Bekerja keras berulang untuk tujuan tertentu |
| Leveling up | Berkembang / naik level dalam hidup |
| Respawn | Bangkit kembali setelah kegagalan |
| Toxic | Lingkungan/orang yang meracuni suasana |
| Endgame | Tujuan akhir / goal jangka panjang |

---

#### 🏆 CHAPTER BOSS — The Gaming Zone Final

**Reward:** Badge 🥈 "Pro Gamer" + 100 XP + 15 💎

---
---

### CHAPTER 4: THE HUSTLE BASICS
**Tier:** 1 — Street Level | **Tema:** Bahasa dunia kerja santai & startup

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Konteks |
|---|---|---|
| Hustle | Kerja keras / berusaha mendapat uang/kesempatan | Entrepreneurship, kerja keras |
| Side hustle | Pekerjaan sampingan selain pekerjaan utama | Keuangan personal |
| Grind | Bekerja terus-menerus tanpa henti | Motivasi kerja |
| Boss up | Bertindak lebih profesional / naik level mindset | Personal development |
| Network | Membangun koneksi profesional | Karir |
| Pitch | Mempresentasikan ide kepada investor/klien | Startup, bisnis |
| Pivot | Mengubah arah bisnis/strategi | Startup |

**Hal yang Dibahas:**
Bahasa ini populer di kalangan anak muda yang tertarik dunia startup, freelance, dan entrepreneurship. Sering muncul di LinkedIn, podcast bisnis, dan konten motivasi di TikTok.

**Contoh Kalimat:**
- *"Wake up and get your hustle on."*
- *"My side hustle makes more than my main job now."*
- *"The grind never stops, that's just how it is."*
- *"Time to boss up and stop making excuses."*
- *"You need to network more if you want to grow in this industry."*
- *"Our startup had to pivot after the first product failed."*

**Penerapan / Percakapan:**
```
Aldi: Bro, I've been grinding on this app idea for months.
Bima: Are you gonna pitch it to investors?
Aldi: Maybe. Still building my network first.
Bima: Smart. What's your side hustle meanwhile?
Aldi: Freelance design. It pays the bills while I boss up.
Bima: Respect the grind man, seriously.
```

---

#### Node 2 — Context Check | `#context`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Konteks |
|---|---|---|
| Bandwidth | Kapasitas/waktu yang tersedia untuk mengerjakan sesuatu | Meeting, project |
| Circle back | Kembali membahas topik nanti | Email, rapat |
| Touch base | Melakukan check-in singkat | Komunikasi tim |
| Move the needle | Membuat kemajuan nyata | Strategi bisnis |
| Low-hanging fruit | Peluang mudah yang bisa segera diambil | Strategi |
| Deliverable | Output/hasil kerja yang harus diserahkan | Project management |
| Disrupt | Mengacak-acak industri dengan inovasi baru | Startup culture |

**Hal yang Dibahas:**
Bahasa ini disebut "corporate speak" atau "startup lingo" — campuran bahasa bisnis formal dengan istilah kasual. Sering diparodikan tapi tetap umum dipakai di dunia profesional muda.

**Contoh:**
- *"I don't have the bandwidth for another project this week."*
- *"Let's circle back on this after the meeting."*
- *"Can we touch base tomorrow morning, say 9am?"*
- *"This campaign really moved the needle on our brand awareness."*
- *"Let's grab the low-hanging fruit first, then tackle the harder stuff."*

**Jebakan Umum:**
- Jangan terlalu banyak pakai corporate speak dalam percakapan kasual — terdengar tidak natural. Ada saatnya formal, ada saatnya santai.
- "Bandwidth" di sini bukan kecepatan internet. Ini metafora kapasitas kerja manusia.

---

#### Node 3 — Slang in the Wild | `#culture`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Asal |
|---|---|---|
| Hustle culture | Budaya memaksimalkan produktivitas, sering tidak sehat | Silicon Valley |
| Burnout | Kelelahan ekstrem akibat kerja berlebihan | Psikologi → mainstream |
| 9-to-5 | Pekerjaan kantoran biasa dengan jam tetap | Umum |
| Quit your 9-to-5 | Slogan konten entrepreneurship | TikTok, YouTube |
| Passive income | Penghasilan tanpa bekerja aktif | Personal finance |
| Hustle smarter, not harder | Bekerja dengan strategi, bukan sekadar keras | Motivasi |
| Work-life balance | Keseimbangan antara kerja dan kehidupan pribadi | HR, wellness |

**Contoh dari Media Sosial:**
- *"I quit my 9-to-5 at 24 and never looked back. Here's how 🧵"* (Twitter thread)
- *"Hustle culture almost gave me burnout. Now I work smarter."* (LinkedIn post)
- *"Built 3 streams of passive income before 30."* (YouTube thumbnail)
- *"Your 9-to-5 is making someone else rich. Wake up."* (TikTok)

**Diskusi Kritis:**
Hustle culture dipuja-puja tapi juga banyak dikritik. "Burnout" adalah nyata dan diakui WHO sebagai fenomena kesehatan. Penting memahami *kedua sisi* dari bahasa ini — kapan motivasi, kapan manipulatif.

---

#### Node 4 — Confusion Buster | `#compare`

| Pasangan | Perbedaan |
|---|---|
| **Hustle** vs **Grind** | Hustle lebih ke *cari peluang* & entrepreneurship. Grind lebih ke *kerja keras repetitif* untuk progress. |
| **Pivot** vs **Quit** | Pivot = mengubah arah tapi tetap jalan. Quit = berhenti sepenuhnya. Startup "pivot" bukan "quit". |
| **Network** (kata benda) vs **Network** (kata kerja) | "My network is strong." (koneksi yang dimiliki) vs "I need to network more." (aktif membangun koneksi) |
| **Passive income** vs **Side hustle** | Passive income = uang masuk tanpa kerja aktif terus. Side hustle = masih butuh waktu & tenaga aktif. |

---

#### Node 5 — Rapid Fire | `#rapid`

Contoh soal:
1. *"I don't have the ___ to take on more tasks."* — isi kata yang tepat.
2. Apa bedanya "pivot" dan "quit" dalam konteks startup?
3. Benar/Salah: "Passive income" artinya kamu tidak perlu bekerja sama sekali selamanya.
4. Kalimat mana yang paling natural dalam email profesional?
   - A. "Yo, circle back on this later"  B. "Let's circle back on this after the review"
5. Apa yang dimaksud "hustle culture"?

---

#### Node 6 — Deep Dive | `#deepdive`

**Topik:** Bahasa startup Silicon Valley dan pengaruhnya ke dunia

Banyak istilah startup lahir di Silicon Valley — pusat teknologi dunia di California — dan menyebar ke seluruh dunia termasuk Indonesia. Kata seperti "pivot", "disrupt", "unicorn" (startup bernilai $1 miliar+) kini dipakai di ruang rapat Jakarta sampai Surabaya.

**Glossary Startup Lanjutan:**

| Istilah | Arti |
|---|---|
| Bootstrap | Membangun bisnis tanpa modal luar/investor |
| MVP | Minimum Viable Product — versi paling dasar produk untuk uji pasar |
| Unicorn | Startup dengan valuasi $1 miliar+ |
| Runway | Berapa lama uang startup cukup sebelum habis |
| Scaling | Memperbesar bisnis secara masif |
| Traction | Bukti awal bahwa produk diminati pasar |

---

#### 🏆 CHAPTER BOSS — The Hustle Basics Final

**Reward:** Badge 🥈 "Side Hustler" + 100 XP + 15 💎

---
---

### CHAPTER 5: THE INTERNET CULTURE
**Tier:** 1 — Street Level | **Tema:** Meme klasik, viral phrases

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Asal |
|---|---|---|
| Meme | Gambar/video/teks humoris yang menyebar di internet | Internet culture |
| Go viral | Menyebar sangat cepat ke jutaan orang | Media sosial |
| Trending | Sedang banyak dibicarakan saat ini | Twitter, TikTok |
| Thread | Rangkaian tweet/post yang berurutan | Twitter/X |
- Clickbait | Judul/thumbnail menipu untuk mendapat klik | YouTube, berita online |
| Reply all | Membalas ke semua penerima email (sering jadi masalah) | Email culture |
| Cancel | Memboikot seseorang secara massal di internet | Cancel culture |

---

#### Node 2 — Context Check | `#context`

**Frasa Populer Internet:**

| Frasa | Arti | Contoh |
|---|---|---|
| This is fine 🔥 | Menyangkal situasi buruk dengan tenang (ironi) | Dari meme anjing di ruangan terbakar |
| Not all heroes wear capes | Memuji seseorang yang melakukan kebaikan tak terduga | Umum di komentar |
| Aged well / Aged poorly | Sesuatu yang kini terbukti benar/salah dari waktu lalu | Twitter nostalgia |
| Plot twist | Kejutan yang tidak terduga | Berasal dari istilah narasi |
| Living rent free | Terus terpikir tanpa bisa dihentikan | Internet slang |
| I can't even | Terlalu terkejut/frustrasi untuk bereaksi | Tumblr → umum |
| Hits different | Terasa lebih bermakna dalam konteks tertentu | TikTok/Instagram |

---

#### Node 3 — Slang in the Wild | `#culture`

**Meme Klasik yang Harus Diketahui:**

| Meme | Artinya | Kapan Dipakai |
|---|---|---|
| *"This is fine"* | Menyangkal kekacauan dengan tenang | Situasi buruk yang diabaikan |
| *"I'm not crying, you're crying"* | Mengaku tidak tersentuh padahal jelas tersentuh | Konten emosional |
| *"We're not the same"* | Perbedaan pendapat/gaya yang mencolok | Perbandingan diri |
| *"Nobody: / Literally nobody: / Me:"* | Melakukan sesuatu tanpa diminta | Self-deprecating humor |
| *"How it started vs How it's going"* | Transformasi dari awal ke sekarang | Progress posts |
| *"POV: you're ___"* | Menempatkan penonton dalam skenario tertentu | TikTok caption |
| *"That's so real"* | Sangat relate/jujur sekali | Respon konten |

---

#### Node 4 — Confusion Buster | `#compare`

| Pasangan | Perbedaan |
|---|---|
| **Trending** vs **Viral** | Trending = sedang banyak dibahas sekarang. Viral = sudah menyebar ke jutaan orang, bisa sudah berlalu. |
| **Meme** vs **Viral content** | Semua meme bisa viral, tapi tidak semua viral content adalah meme. Video kucing yang lucu bisa viral tapi belum tentu jadi meme. |
| **Cancel** vs **Criticize** | Cancel = boikot massal, sering permanen. Criticize = mengkritik tapi tetap menghargai keberadaannya. |
| **Thread** vs **Post** | Thread = rangkaian beberapa tweet berurutan. Post = satu konten tunggal. |

---

#### Node 5 — Rapid Fire | `#rapid`

#### Node 6 — Deep Dive | `#deepdive`

**Topik:** Anatomi sebuah meme — kenapa meme menyebar?

Meme bukan sekadar gambar lucu. Mereka adalah unit budaya (Richard Dawkins pertama kali menggunakan kata "meme" dalam buku *The Selfish Gene*, 1976 — jauh sebelum internet). Internet meme menyebar karena:

1. **Relatable** — orang merasa "ini gue banget"
2. **Modifiable** — template bisa diisi konten baru
3. **Shareable** — mudah dikopi dan disebarkan
4. **Timely** — merespons momen budaya/berita saat ini

**Siklus Hidup Meme:**
```
Lahir (1 kreator) → Menyebar (komunitas kecil) → 
Mainstream (semua orang pakai) → Overused (mulai membosankan) → 
"Lame" (hanya dipakai yang ketinggalan) → Nostalgia (jadi referensi klasik)
```

---

#### 🏆 CHAPTER BOSS — The Internet Culture Final

**Reward:** Badge 🥇 "Viral King/Queen" + 200 XP + 20 💎

---
---

### CHAPTER 11: THE DEEP STREETS *(Tier 2 — Contoh)*
**Tier:** 2 — Grid Master | **Tema:** Slang regional & konteks sosial lanjutan

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Komunitas Asal |
|---|---|---|
| Cap / No cap | Bohong / Tidak bohong | AAVE, hip-hop |
| Sis / Bro | Panggilan akrab tanpa gender/gender | Gen Z universally |
| Drip | Gaya berpakaian yang sangat keren | Hip-hop, streetwear |
| Flex | Pamer sesuatu yang membanggakan | Hip-hop culture |
| Lowkey flex | Pamer tapi pura-pura tidak pamer | Internet irony |
| Pressed | Sangat kesal / defensif | AAVE |
| Caught in 4K | Terbukti melakukan sesuatu, ada buktinya | Internet slang |

**Peningkatan dari Tier 1:**
Di Tier 1 kamu mempelajari makna dasar. Di Tier 2, kamu mulai memahami *nuance* — kapan kata ini terdengar natural, kapan terdengar dipaksakan, dan konteks sosial di baliknya.

**Contoh Kalimat dengan Nuance:**
- *"He flexed that new watch so hard."* (flex terbuka)
- *"Oh, just casually wearing Gucci to class, no big deal."* (lowkey flex — ironis)
- *"Why is she so pressed about what I said? I didn't even @ her."*
- *"You got caught in 4K lying, the screenshot is right here."*

**Penerapan:**
```
Zara: Did you see her new car? She's been posting it everywhere.
Rina: Big flex energy. But I'm not even mad, she worked for it.
Zara: True. Some people are so pressed though.
Rina: That's because they cap about their own life, then get caught in 4K.
Zara: No cap, the drip on her outfit yesterday was immaculate though.
```

---

#### Node 4 — Confusion Buster | `#compare`

**Tier 2 Confusion Buster — Nuance Level**

| Kata | Basic Meaning (Tier 1) | Nuance (Tier 2) |
|---|---|---|
| **Flex** | Pamer | Ada "soft flex" (subtle, terhormat) dan "hard flex" (terbuka, kadang kasar). Konteks menentukan mana yang dimaksud. |
| **Salty** | Kesal karena kalah | Tingkat keparahannya: mildly salty → super salty → bitter. "Salty" masih bisa humor, "bitter" sudah serius. |
| **Cap** | Bohong | "Capping" = sedang berbohong. "No cap" = serius. "Big cap" = bohong besar sekali. |
| **Pressed** | Kesal/defensif | Pressed biasanya dipakai saat seseorang bereaksi berlebihan terhadap sesuatu yang bukan urusannya. Ada konotasi "kenapa kamu sibuk-sibuk?" |

---

### CHAPTER 17: THE RELATIONSHIP LINGO *(Tier 2 — Contoh)*
**Tier:** 2 — Grid Master | **Tema:** Bahasa percintaan modern

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Konteks |
|---|---|---|
| Ghosting | Menghilang tiba-tiba tanpa penjelasan | Hubungan romantis/sosial |
| Situationship | Hubungan romantis yang tidak resmi/tidak jelas statusnya | Gen Z dating |
| Talking stage | Fase sebelum pacaran resmi, PDKT | Dating culture |
| Rizz | Kemampuan alami menarik perhatian orang lain, pesona | Gen Z |
| Breadcrumbing | Memberi perhatian sedikit-sedikit agar orang tetap tertarik tanpa komitmen | Dating |
| Red flag | Tanda peringatan dalam seseorang/hubungan | Hubungan |
| Green flag | Tanda positif dalam seseorang/hubungan | Hubungan |

**Hal yang Dibahas:**
Bahasa percintaan Gen Z mencerminkan pola hubungan yang lebih kompleks di era digital — di mana orang bisa "ada" tapi tidak "hadir", berinteraksi tapi tidak berkomitmen.

**Contoh Kalimat:**
- *"We've been in the talking stage for 3 months, what even are we?"*
- *"He ghosted me after our third date with no explanation."*
- *"I think this is a situationship, not a real relationship."*
- *"She has natural rizz, everyone loves her instantly."*
- *"He's been breadcrumbing me for months — just enough to keep me interested."*
- *"Lying about his job on the first date? Big red flag."*
- *"He remembered my coffee order without asking. Green flag fr."*

**Penerapan / Percakapan:**
```
Mia: So what's the update with that guy?
Lia: Honestly? I think we're in a situationship.
Mia: Still in the talking stage after 4 months??
Lia: He breadcrumbs me just enough that I don't leave.
Mia: That's a red flag, Lia. He has zero rizz AND zero commitment.
Lia: I know, I know. I think I need to ghost him back.
Mia: Honestly? Green flag decision.
```

---

#### Node 6 — Deep Dive | `#deepdive`

**Topik:** Kenapa Gen Z butuh kosakata baru untuk hubungan?

Generasi sebelumnya punya pilihan sederhana: pacaran atau tidak. Gen Z menghadapi:
- **Dating apps** yang membuat orang jadi "pilihan" yang bisa di-swipe
- **Parasocial connections** yang mengaburkan batas teman/lebih dari teman
- **Commitment phobia** yang lebih terbuka dibicarakan
- **Hustle culture** yang membuat orang merasa tidak punya waktu untuk hubungan serius

Kosakata baru ini bukan hanya slang — ini adalah cara generasi muda mendefinisikan pengalaman yang belum punya nama sebelumnya.

**Tambahan Kosakata Lanjutan:**

| Kata | Arti |
|---|---|
| Soft launching | Memperkenalkan pasangan di medsos secara halus, tanpa pengumuman resmi |
| Hard launching | Mengumumkan hubungan secara terbuka di medsos |
| Orbiting | Masih menonton stories/melihat kontenmu tapi tidak menghubungi (mantan) |
| Benching | Menyimpan seseorang sebagai cadangan sambil mencari yang lebih baik |
| Ick | Sesuatu kecil yang tiba-tiba bikin tidak tertarik lagi |

---

### CHAPTER 23: THE GEN ALPHA ZONE *(Tier 3 — Contoh)*
**Tier:** 3 — Cyber Legend | **Tema:** Bahasa generasi terbaru

---

#### Node 1 — Vocab Intro | `#vocab`

**Kata/Frasa yang Dipelajari:**

| Kata/Frasa | Arti | Asal |
|---|---|---|
| Rizz | Kemampuan alami menarik perhatian/pesona (lihat juga Tier 2) | Kai Cenat, streamer |
| Sigma | Pria mandiri, tidak butuh validasi orang lain | Incel → meme |
| Skibidi | Tidak masuk akal / aneh (dari animasi YouTube) | Skibidi Toilet |
| Ohio | Tempat hal-hal aneh/tidak masuk akal terjadi (meme) | Internet meme |
| Gyatt | Ekspresi kagum terhadap seseorang yang menarik | Streamer culture |
| Bussin | Sangat enak (makanan) / sangat bagus | AAVE, TikTok |
| NPC behavior | Berperilaku tanpa inisiatif, seperti karakter game | Gaming → meme |

**Peringatan Tier 3:**
Banyak kata Gen Alpha berumur pendek sebagai trend. Tujuan mempelajarinya bukan untuk dipakai sehari-hari, tapi untuk **memahami** saat mendengar/membaca — terutama dalam konten digital, subtitle, atau percakapan dengan anak muda.

**Contoh Kalimat:**
- *"He has unspoken rizz, didn't even try and she was into him."*
- *"The sigma grindset: wake up at 5am, no distractions."* (sering diparodikan)
- *"That outfit is so Ohio it's actually funny."*
- *"This ramen is bussin no cap."*
- *"Stop acting like an NPC and make a decision."*

---

#### Node 4 — Confusion Buster | `#compare`

**Tier 3 — Cultural Context Deep Dive**

| Kata | Permukaan | Konteks Lebih Dalam |
|---|---|---|
| **Sigma** | Pria mandiri keren | Awalnya dari "sigma male" dalam hierarki incel/redpill online yang cukup toksik. Kini sudah dijadikan meme dan banyak dipakai secara ironis. Pahami asal muasalnya sebelum pakai. |
| **Skibidi** | Kata seru tanpa makna jelas | Dari animasi Skibidi Toilet yang viral — sengaja tidak masuk akal. Gen Alpha memakainya sebagai ekspresi kekaguman, kebingungan, atau sekedar filler. |
| **Ohio** | Negara bagian AS | Menjadi simbol keanehan karena rangkaian video "only in Ohio" yang viral. Tidak ada yang benar-benar spesifik soal Ohio — itu hanya meme yang melekat. |
| **Rizz** | Pesona | Ada "W rizz" (rizz yang baik/berhasil) dan "L rizz" (rizz yang gagal). "Unspoken rizz" = menarik orang tanpa bicara sama sekali — level tertinggi. |

---

#### Node 6 — Deep Dive | `#deepdive`

**Topik:** Seberapa cepat bahasa internet berubah?

Linguistik digital adalah bidang ilmu yang baru. Berikut perbandingan kecepatan perubahan bahasa:

| Era | Kata Baru per Dekade | Penyebaran |
|---|---|---|
| Pra-internet (sebelum 1990) | Ratusan | Terbatas wilayah, butuh bertahun-tahun |
| Era internet awal (1990–2010) | Ribuan | Menyebar per bulan via forum |
| Era medsos (2010–2020) | Puluhan ribu | Menyebar per minggu via Twitter/Tumblr |
| Era TikTok (2020–sekarang) | Ratusan ribu | Menyebar per hari, global serentak |

**Implikasinya:**
- Tidak ada yang bisa menguasai semua slang baru — dan itu tidak perlu.
- Yang penting: **kemampuan membaca konteks** agar bisa memahami makna dari clue yang ada.
- Bahasa yang kamu pelajari di Axlingo memberimu *fondasi* untuk mendekode slang baru yang belum pernah kamu dengar sekalipun.

---

## LAMPIRAN: RINGKASAN TOTAL KONTEN V2

| | V1 | V2 |
|---|---|---|
| Total Chapter | 8 | 28 |
| Total Node | 42 | 186 |
| Total Soal (estimasi) | ±252 | ±1.116 |
| Difficulty Tier | 1 | 3 |
| Node Status | 4 | 6 |
| Sub-topic Tag | ❌ | ✅ 8 tag |
| Tier Boss | ❌ | ✅ 3 boss |
| Grand Final | ❌ | ✅ |
| Contoh Chapter Lengkap (dokumen ini) | — | Chapter 1–5, 11, 17, 23 |

---

*Dokumen ini adalah bagian dari Axlingo Core Design Document v2.0*
*Revisi terakhir: April 2026*