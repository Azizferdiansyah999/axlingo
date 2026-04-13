-- ============================================================
-- AXLINGO — SQL SEED: SLANG COURSE DATA
-- File: 05_seed_slang_course.sql
-- Run di: Supabase SQL Editor
-- Urutan: Jalankan SETELAH 04_new_tables.sql
-- ============================================================
-- Berisi:
--   1 Course  (Axlingo Slang)
--   3 Sections (Tier 1, 2, 3)
--  28 Units    (Chapter 1–28)
-- 196 Lessons  (7 node per chapter)
-- ============================================================

-- ============================================================
-- STEP 1: INSERT COURSE
-- ============================================================
INSERT INTO public.courses (id, title, description, course_type, language_target, language_source, is_active)
VALUES (
  'c1000000-0000-0000-0000-000000000001', -- 'c' is valid hex
  'Axlingo Slang',
  'Kuasai bahasa slang, internet culture, dan ekspresi modern dalam bahasa Inggris.',
  'slang', 'en', 'id', true
);

-- ============================================================
-- STEP 2: INSERT SECTIONS (TIERS)
-- ============================================================
INSERT INTO public.sections (id, course_id, title, description, order_index, theme_color, tier, is_locked, xp_required)
VALUES
  -- TIER 1
  ('a1000000-0000-0000-0000-000000000001',
   'c1000000-0000-0000-0000-000000000001',
   'TIER 1 — STREET LEVEL',
   'Mulai perjalananmu. Pelajari slang sehari-hari, media sosial, dan budaya internet dasar.',
   1, '#5cb8fd', 'street_level', false, 0),

  -- TIER 2
  ('a1000000-0000-0000-0000-000000000002',
   'c1000000-0000-0000-0000-000000000001',
   'TIER 2 — GRID MASTER',
   'Naik level. Kuasai nuance bahasa, kreator konten, dan slang budaya pop lebih dalam.',
   2, '#e67aff', 'grid_master', true, 1800),

  -- TIER 3
  ('a1000000-0000-0000-0000-000000000003',
   'c1000000-0000-0000-0000-000000000001',
   'TIER 3 — CYBER LEGEND',
   'Level akhir. Bahasa tingkat lanjut, Gen Alpha, code-switching, dan analisis konteks budaya.',
   3, '#ffd700', 'cyber_legend', true, 5400);

-- ============================================================
-- STEP 3: INSERT UNITS (CHAPTERS 1–28)
-- ============================================================

-- ── TIER 1 CHAPTERS (1–10) ──────────────────────────────────
INSERT INTO public.units (id, section_id, title, topic, description, order_index, icon_emoji, is_locked, unlock_condition, xp_per_crown)
VALUES
  ('00000000-0000-0000-0000-000000000101', 'a1000000-0000-0000-0000-000000000001', 'The Streets', 'informal_greetings', 'Sapaan informal.', 1, '🏙️', false, '{"type":"always_open"}', 30),
  ('00000000-0000-0000-0000-000000000102', 'a1000000-0000-0000-0000-000000000001', 'The Social Grid', 'social_media', 'Bahasa media sosial.', 2, '📱', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000101"}', 30),
  ('00000000-0000-0000-0000-000000000103', 'a1000000-0000-0000-0000-000000000001', 'The Gaming Zone', 'gaming_basics', 'Istilah gaming dasar.', 3, '🎮', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000102"}', 30),
  ('00000000-0000-0000-0000-000000000104', 'a1000000-0000-0000-0000-000000000001', 'The Hustle Basics', 'startup_casual', 'Startup casual.', 4, '💼', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000103"}', 30),
  ('00000000-0000-0000-0000-000000000105', 'a1000000-0000-0000-0000-000000000001', 'The Internet Culture', 'meme_culture', 'Meme & humor internet.', 5, '🌐', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000104"}', 30),
  ('00000000-0000-0000-0000-000000000106', 'a1000000-0000-0000-0000-000000000001', 'The Vibes', 'music_pop', 'Musik pop & fandom.', 6, '🎵', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000105"}', 30),
  ('00000000-0000-0000-0000-000000000107', 'a1000000-0000-0000-0000-000000000001', 'The Reaction Pack', 'reactions', 'Ekspresi reaksi.', 7, '😂', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000106"}', 30),
  ('00000000-0000-0000-0000-000000000108', 'a1000000-0000-0000-0000-000000000001', 'The Small Talk', 'small_talk', 'Percakapan ringan.', 8, '💬', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000107"}', 30),
  ('00000000-0000-0000-0000-000000000109', 'a1000000-0000-0000-0000-000000000001', 'The Emoji World', 'emoji_language', 'Makna emoji.', 9, '😎', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000108"}', 30),
  ('00000000-0000-0000-0000-000000000110', 'a1000000-0000-0000-0000-000000000001', 'T1 Final Boss', 'tier1_review', 'Review Tier 1.', 10, '🏆', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000109"}', 30);

-- ── TIER 2 CHAPTERS (11–20) ──────────────────────────────────
INSERT INTO public.units (id, section_id, title, topic, description, order_index, icon_emoji, is_locked, unlock_condition, xp_per_crown)
VALUES
  ('00000000-0000-0000-0000-000000000111', 'a1000000-0000-0000-0000-000000000002', 'The Deep Streets', 'advanced_slang', 'Advanced slang.', 11, '🔥', true, '{"type":"xp_threshold","xp_required":1800}', 50),
  ('00000000-0000-0000-0000-000000000112', 'a1000000-0000-0000-0000-000000000002', 'The Creator Economy', 'creator_language', 'Creator language.', 12, '🎥', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000111"}', 50),
  ('00000000-0000-0000-0000-000000000113', 'a1000000-0000-0000-0000-000000000002', 'The Esports Arena', 'esports', 'Esports lingo.', 13, '🕹️', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000112"}', 50),
  ('00000000-0000-0000-0000-000000000114', 'a1000000-0000-0000-0000-000000000002', 'The Startup Grind', 'startup_advanced', 'Advanced Startup.', 14, '🚀', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000113"}', 50),
  ('00000000-0000-0000-0000-000000000115', 'a1000000-0000-0000-0000-000000000002', 'The Meme Lab', 'advanced_memes', 'Meta memes.', 15, '🧪', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000114"}', 50),
  ('00000000-0000-0000-0000-000000000116', 'a1000000-0000-0000-0000-000000000002', 'The Pop Culture Vault', 'pop_culture', 'Pop culture.', 16, '🎬', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000115"}', 50),
  ('00000000-0000-0000-0000-000000000117', 'a1000000-0000-0000-0000-000000000002', 'The Relationship Lingo', 'dating_language', 'Dating lingo.', 17, '💘', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000116"}', 50),
  ('00000000-0000-0000-0000-000000000118', 'a1000000-0000-0000-0000-000000000002', 'The Cancel Culture', 'online_discourse', 'Cancel culture.', 18, '⚡', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000117"}', 50),
  ('00000000-0000-0000-0000-000000000119', 'a1000000-0000-0000-0000-000000000002', 'The Sarcasm Zone', 'sarcasm_tone', 'Sarcasm tone.', 19, '😏', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000118"}', 50),
  ('00000000-0000-0000-0000-000000000120', 'a1000000-0000-0000-0000-000000000002', 'T2 Final Boss', 'tier2_review', 'Review Tier 2.', 20, '🌟', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000119"}', 50);

-- ── TIER 3 CHAPTERS (21–28) ──────────────────────────────────
INSERT INTO public.units (id, section_id, title, topic, description, order_index, icon_emoji, is_locked, unlock_condition, xp_per_crown)
VALUES
  ('00000000-0000-0000-0000-000000000121', 'a1000000-0000-0000-0000-000000000003', 'The Deep Lingo', 'advanced_idioms', 'Advanced idioms.', 21, '🧠', true, '{"type":"xp_threshold","xp_required":5400}', 80),
  ('00000000-0000-0000-0000-000000000122', 'a1000000-0000-0000-0000-000000000003', 'The Code Switcher', 'code_switching', 'Code-switching.', 22, '🔀', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000121"}', 80),
  ('00000000-0000-0000-0000-000000000123', 'a1000000-0000-0000-0000-000000000003', 'The Gen Alpha Zone', 'gen_alpha_lang', 'Gen Alpha slang.', 23, '👾', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000122"}', 80),
  ('00000000-0000-0000-0000-000000000124', 'a1000000-0000-0000-0000-000000000003', 'The Corporate Speak', 'corporate_formal', 'Corporate vs Informal.', 24, '👔', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000123"}', 80),
  ('00000000-0000-0000-0000-000000000125', 'a1000000-0000-0000-0000-000000000003', 'The Academic Slang', 'campus_language', 'Campus culture.', 25, '📚', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000124"}', 80),
  ('00000000-0000-0000-0000-000000000126', 'a1000000-0000-0000-0000-000000000003', 'The Global Street', 'global_slang', 'Global street lingo.', 26, '🌍', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000125"}', 80),
  ('00000000-0000-0000-0000-000000000127', 'a1000000-0000-0000-0000-000000000003', 'The Master Grid', 'master_review', 'Master Review.', 27, '💎', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000126"}', 80),
  ('00000000-0000-0000-0000-000000000128', 'a1000000-0000-0000-0000-000000000003', 'THE AXLINGO FINAL', 'grand_final', 'Grand Finale.', 28, '🏅', true, '{"type":"complete_unit","unit_id":"00000000-0000-0000-0000-000000000127"}', 80);

-- ============================================================
-- STEP 4: INSERT LESSONS (Sample for Ch 1–28)
-- ============================================================

-- Node 1 - The Streets (u101)
INSERT INTO public.lessons (unit_id, title, type, order_index, xp_reward, pass_threshold, estimated_minutes, crown_level) VALUES
('00000000-0000-0000-0000-000000000101', 'Vocab Intro', 'vocab_intro', 1, 30, 0.6, 5, 1),
('00000000-0000-0000-0000-000000000101', 'Quick Game', 'rapid_fire',  2, 30, 0.6, 5, 2);

-- ... (Tambahkan sisa lesson seperlunya mengikuti format unit_id di atas)
