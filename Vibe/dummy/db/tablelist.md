# Axlingo Database - Table List

Berikut adalah daftar tabel yang telah direncanakan dan dibuat (berdasarkan roadmap Fase 1):

## 1. `profiles`
Data profil pengguna utama.
- `id`: UUID (Primary Key, linked to auth.users)
- `username`: Text
- `avatar_url`: Text
- `bio`: Text

## 2. `user_stats`
Statistik progres dan mata uang pengguna.
- `user_id`: UUID (Foreign Key to profiles.id)
- `xp`: Integer (Pengalaman)
- `level`: Integer
- `diamonds`: Integer (Mata uang premium)
- `current_streak`: Integer (Jumlah hari login berturut-turut)
- `total_lessons_completed`: Integer (Jumlah pelajaran yang telah diselesaikan)

## 3. `user_hearts`
Sistem nyawa/energi untuk memulai pelajaran.
- `user_id`: UUID (Foreign Key to profiles.id)
- `current_hearts`: Integer (Maksimal 5)
- `last_recharge_at`: Timestamp (Digunakan untuk kalkulasi pemulihan nyawa)

## 4. `user_progress`
Pelacakan progres pelajaran pengguna.
- `user_id`: UUID (Foreign Key to profiles.id)
- `lesson_id`: Text
- `status`: Text
- `score`: Integer

## 5. `achievements`
Master data pencapaian (Trofi).
- `id`: UUID (Primary Key)
- `name`: Text
- `description`: Text
- `icon_url`: Text
- `reward_xp`: Integer

## 6. `user_achievements`
Catatan pencapaian yang telah diraih pengguna.
- `user_id`: UUID (Foreign Key to profiles.id)
- `achievement_id`: UUID (Foreign Key to achievements.id)
- `earned_at`: Timestamp

## 7. `inventory`
Barang-barang yang dimiliki pengguna dari Shop.
- `user_id`: UUID (Foreign Key to profiles.id)
- `item_id`: Text (ID Barang, misal: 'streak_freeze')
- `quantity`: Integer

---
*Dokumen ini dibuat otomatis sebagai referensi struktur database Axlingo.*
