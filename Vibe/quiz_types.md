# 12 JENIS KUIS AXLINGO (ENGLISH CORE)

Dokumen ini mendefinisikan alur interaksi dan struktur data untuk mesin kuis Axlingo.

## 1. Multiple Choice Text (mc_text)
- **Data:** `prompt` (kata/kalimat), `choices` (array string).
- **Flow:** User memilih 1 dari 4 opsi teks.
- **Konteks:** Mengetes kosakata dasar.

## 2. Multiple Choice Image (mc_image)
- **Data:** `prompt` (kata), `choices` (array objek URL gambar & ID).
- **Flow:** User memilih gambar yang paling merepresentasikan kata tersebut.
- **Konteks:** Membangun memori visual.

## 3. Translation (translate)
- **Data:** `prompt` (kalimat bahasa asal), `correct_answer` (string).
- **Flow:** User mengetik jawaban lengkap di text input.
- **Konteks:** Mengetes kemampuan menulis & tata bahasa.

## 4. Word Bank / Scramble (word_bank)
- **Data:** `prompt` (kalimat), `choices` (array kata acak).
- **Flow:** User menyusun kata-kata dengan cara klik/drag ke kotak jawaban.
- **Konteks:** Melatih struktur kalimat (S-P-O-K).

## 5. Fill in the Blank (fill_blank)
- **Data:** `prompt` (kalimat dengan "___"), `choices` (pilihan kata).
- **Flow:** User memilih kata yang tepat untuk melengkapi kalimat.
- **Konteks:** Mengetes part of speech (verb, noun, adj).

## 6. Listening Choice (listening_mc)
- **Data:** `media_url` (audio), `choices` (array kata).
- **Flow:** Klik tombol audio, lalu pilih teks yang didengar.
- **Konteks:** Melatih pendengaran (listening).

## 7. Matching Pairs (match_pairs)
- **Data:** `choices` (JSON dengan key `left` dan `right`).
- **Flow:** User memasangkan 4-5 pasang kata (Inggris <-> Indonesia).
- **Konteks:** Drill kosakata cepat.

## 8. True/False (true_false)
- **Data:** `prompt` (pernyataan), `correct_answer` (boolean).
- **Flow:** User menentukan apakah pernyataan tersebut benar/salah.
- **Konteks:** Review cepat fakta bahasa/tata bahasa.

## 9. Dictation (listening_type)
- **Data:** `media_url` (audio), `correct_answer` (string).
- **Flow:** Dengar audio, lalu ketik tepat seperti yang didengar.
- **Konteks:** Melatih pendengaran & spelling.

## 10. Dialogue Completion (dialogue)
- **Data:** `prompt` (teks percakapan A), `choices` (respon B).
- **Flow:** User memilih respon yang paling logis dalam percakapan.
- **Konteks:** Melatih percakapan sehari-hari.

## 11. Flashcard (flashcard)
- **Data:** `prompt` (depan), `correct_answer` (belakang).
- **Flow:** User melihat kata, membalikkan, dan menilai diri sendiri (Easy/Hard).
- **Konteks:** Spaced Repetition dasar.

## 12. AI Speak (speak)
- **Data:** `prompt` (kalimat target).
- **Flow:** User menekan mic, berbicara, dan AI menghitung skor akurasi.
- **Konteks:** Melatih pelafalan (pronunciation).
