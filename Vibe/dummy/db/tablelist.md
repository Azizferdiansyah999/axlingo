# Axlingo Database - Master Table List (Sync Source)

Daftar tabel yang mencakup skema dasar Supabase dan sistem Learning Path. Dokumen ini telah disinkronkan dengan `04_new_tables.sql`.

## 1. `profiles`
Data profil pengguna utama.
- `id`: UUID (Primary Key, linked to auth.users)
- `username`: Text
- `avatar_url`: Text
- `bio`: Text
- `created_at`: Timestamp

## 2. `user_stats`
- `user_id`: UUID (FK profiles.id)
- `xp`: Integer
- `level`: Integer [NEW COLUMN]
- `diamonds`: Integer
- `current_streak`: Integer
- `total_lessons_completed`: Integer

## 3. `user_hearts`
- `user_id`: UUID (FK profiles.id)
- `current_hearts`: Integer (Maksimal 5)
- `hearts_max`: Integer [NEW COLUMN]
- `last_recharge_at`: Timestamp
- `refill_at`: Timestamp [NEW COLUMN]
- `unlimited_until`: Timestamp [NEW COLUMN]

## 4. `user_progress`
- `user_id`: UUID (FK profiles.id)
- `lesson_id`: Text (ID atau UUID)
- `status`: Text
- `score`: Integer
- `xp_earned`: Integer [NEW COLUMN]
- `hearts_used`: Integer [NEW COLUMN]
- `attempts`: Integer [NEW COLUMN]
- `completed_at`: Timestamp [NEW COLUMN]
- `updated_at`: Timestamp [NEW COLUMN]

## 5. `achievements`
- `id`: UUID (Primary Key)
- `name`: Text
- `description`: Text
- `icon_url`: Text
- `reward_xp`: Integer
- `badge_type`: Text [NEW COLUMN]
- `condition`: JSONB [NEW COLUMN]

## 6. `courses` [NEW TABLE]
- `id`: UUID (Primary Key)
- `title`: Text
- `course_type`: Text (formal/slang)
- `language_target`: Text
- `language_source`: Text

## 7. `sections` [NEW TABLE]
- `id`: UUID (Primary Key)
- `course_id`: UUID (FK courses.id)
- `tier`: Text (street_level/grid_master/cyber_legend)
- `order_index`: Integer

## 8. `units` [NEW TABLE]
- `id`: UUID (Primary Key)
- `section_id`: UUID (FK sections.id)
- `title`: Text
- `topic`: Text
- `icon_emoji`: Text
- `is_locked`: Boolean

## 9. `lessons` [NEW TABLE]
- `id`: UUID (Primary Key)
- `unit_id`: UUID (FK units.id)
- `type`: Text (vocab_intro, etc.)
- `xp_reward`: Integer
- `crown_level`: Integer

## 10. `exercises` [NEW TABLE]
- `id`: UUID (Primary Key)
- `lesson_id`: UUID (FK lessons.id)
- `type`: Text
- `prompt`: Text
- `correct_answer`: JSONB
- `choices`: JSONB

## 11. `user_streaks` [NEW TABLE]
- `user_id`: UUID (FK profiles.id)
- `current_streak`: Integer
- `longest_streak`: Integer
- `freeze_count`: Integer

## 12. `leagues` [NEW TABLE]
- `user_id`: UUID (FK profiles.id)
- `league_tier`: Text
- `weekly_xp`: Integer

## 13. `daily_goal` [NEW TABLE]
- `user_id`: UUID (FK profiles.id)
- `xp_goal`: Integer
- `xp_today`: Integer

---
*Dokumen ini adalah referensi sinkronisasi antara Supabase dan Aplikasi.*
