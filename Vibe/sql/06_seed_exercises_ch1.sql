-- ============================================================
-- AXLINGO — SQL SEED: SAMPLE EXERCISES (Chapter 1 Testing)
-- File: 06_seed_exercises_ch1.sql
-- Run di: Supabase SQL Editor
-- Urutan: Jalankan SETELAH 05_seed_slang_course.sql
-- NOTE: Menggunakan UUID valid yang telah diperbarui di file 05.
-- ============================================================

-- ── NODE 1: Vocab Intro — Sapaan Informal ────────────────────
INSERT INTO public.exercises (lesson_id, type, order_index, difficulty, score_weight, prompt, correct_answer, choices, hint, explanation, tags)
SELECT l.id, 'multiple_choice', 1, 1, 1.0,
  'Apa arti dari "What''s up?" dalam percakapan kasual?',
  '"Apa kabar? / Lagi ngapain?"',
  '[
    {"id":"a","text":"Ada apa di atasmu?","is_correct":false},
    {"id":"b","text":"Apa kabar? / Lagi ngapain?","is_correct":true},
    {"id":"c","text":"Mau ke mana?","is_correct":false},
    {"id":"d","text":"Sudah makan?","is_correct":false}
  ]'::jsonb,
  '"What''s up" bukan pertanyaan literal tentang apa yang ada di atas.',
  '"What''s up?" adalah sapaan informal yang berarti "Apa kabar?" atau "Lagi ngapain?" — bukan pertanyaan tentang objek di atas kepala.',
  ARRAY['greetings','informal','tier1']
FROM public.lessons l
JOIN public.units u ON l.unit_id = u.id
WHERE u.id = '00000000-0000-0000-0000-000000000101' AND l.type = 'vocab_intro';

INSERT INTO public.exercises (lesson_id, type, order_index, difficulty, score_weight, prompt, correct_answer, choices, hint, explanation, tags)
SELECT l.id, 'multiple_choice', 2, 1, 1.0,
  '"Sup" adalah versi singkat dari kata apa?',
  '"What''s up"',
  '[
    {"id":"a","text":"Supernatural","is_correct":false},
    {"id":"b","text":"Support","is_correct":false},
    {"id":"c","text":"What''s up","is_correct":true},
    {"id":"d","text":"Suppose","is_correct":false}
  ]'::jsonb,
  '"Sup" diucapkan dengan cepat dan informal.',
  '"Sup" adalah singkatan/pelafalan cepat dari "What''s up?" — dipakai hanya dengan teman dekat.',
  ARRAY['greetings','abbreviation','tier1']
FROM public.lessons l
JOIN public.units u ON l.unit_id = u.id
WHERE u.id = '00000000-0000-0000-0000-000000000101' AND l.type = 'vocab_intro';

INSERT INTO public.exercises (lesson_id, type, order_index, difficulty, score_weight, prompt, correct_answer, choices, hint, explanation, tags)
SELECT l.id, 'true_false', 3, 1, 1.0,
  '"What''s up?" hanya cocok dipakai dalam situasi formal seperti wawancara kerja.',
  '"false"',
  '[
    {"id":"a","text":"Benar","is_correct":false},
    {"id":"b","text":"Salah","is_correct":true}
  ]'::jsonb,
  'Pikirkan konteks penggunaan sapaan informal.',
  '"What''s up?" adalah ekspresi SANGAT informal — tidak cocok untuk wawancara kerja atau email ke atasan. Gunakan "How do you do?" atau "Good morning" untuk situasi formal.',
  ARRAY['greetings','formal_vs_informal','tier1']
FROM public.lessons l
JOIN public.units u ON l.unit_id = u.id
WHERE u.id = '00000000-0000-0000-0000-000000000101' AND l.type = 'vocab_intro';

-- ── NODE: Rapid Fire — Sapaan Informal ───────────────────────
INSERT INTO public.exercises (lesson_id, type, order_index, difficulty, score_weight, prompt, correct_answer, choices, tags)
SELECT l.id, 'multiple_choice', 1, 1, 1.0,
  'Apa arti "no cap"?',
  '"Serius / tidak bohong"',
  '[
    {"id":"a","text":"Tanpa topi","is_correct":false},
    {"id":"b","text":"Serius / tidak bohong","is_correct":true},
    {"id":"c","text":"Tidak ada batas","is_correct":false},
    {"id":"d","text":"Tanpa masalah","is_correct":false}
  ]'::jsonb,
  ARRAY['slang','emphasis','tier1']
FROM public.lessons l
JOIN public.units u ON l.unit_id = u.id
WHERE u.id = '00000000-0000-0000-0000-000000000101' AND l.type = 'rapid_fire';
