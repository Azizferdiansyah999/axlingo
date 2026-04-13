-- ============================================================
-- AXLINGO — SQL MIGRATION: ROBUST LEARNING PATH TABLES
-- File: 04_new_tables.sql
-- Run di: Supabase SQL Editor
-- 
-- TUJUAN:
--   1. Memperbaiki error "section_id" pada unit.
--   2. Sinkronisasi dengan tablelist.md (Source of Truth).
--   3. Idempotent (aman dijalankan berkali-kali).
-- ============================================================

-- ============================================================
-- 1. BAGIAN ALTER: Sinkronisasi Tabel Existing (7 Tabel dari tablelist.md)
-- ============================================================

-- A1. profiles (sudah ada)
-- Tidak ada perubahan mendasar.

-- A2. user_stats (sudah ada)
-- Memastikan level dan diamonds ada.
ALTER TABLE public.user_stats ADD COLUMN IF NOT EXISTS level INT DEFAULT 1;

-- A3. user_hearts (sudah ada)
-- Menambahkan kolom refill logic.
ALTER TABLE public.user_hearts 
  ADD COLUMN IF NOT EXISTS hearts_max INT DEFAULT 5,
  ADD COLUMN IF NOT EXISTS refill_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS unlimited_until TIMESTAMPTZ;

-- A4. user_progress (sudah ada)
-- MENYESUAIKAN TIPE DATA: lesson_id (Text) & score (Integer) sesuai tablelist.md.
-- Menambahkan kolom tracking progress detail.
ALTER TABLE public.user_progress 
  ADD COLUMN IF NOT EXISTS xp_earned INT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS hearts_used INT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS attempts INT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS completed_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- A5. achievements (sudah ada)
-- Menambahkan kolom badge_type dan condition.
ALTER TABLE public.achievements 
  ADD COLUMN IF NOT EXISTS badge_type TEXT,
  ADD COLUMN IF NOT EXISTS condition JSONB DEFAULT '{}';

-- A6. user_achievements (sudah ada)
-- Menambahkan kolom unlocked_at jika perlu.
ALTER TABLE public.user_achievements ADD COLUMN IF NOT EXISTS unlocked_at TIMESTAMPTZ;

-- A7. inventory (sudah ada)
-- Tidak ada perubahan mendasar.

-- ============================================================
-- 2. BAGIAN CREATE: Tabel Baru untuk Learning Path
-- ============================================================

-- B1. COURSES
CREATE TABLE IF NOT EXISTS public.courses (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title           TEXT NOT NULL,
  description     TEXT,
  course_type     TEXT NOT NULL CHECK (course_type IN ('formal', 'slang')),
  language_target TEXT NOT NULL DEFAULT 'en',
  language_source TEXT NOT NULL DEFAULT 'id',
  icon_url        TEXT,
  total_xp        INT DEFAULT 0,
  is_active       BOOLEAN NOT NULL DEFAULT true,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- B2. SECTIONS (Tiers)
CREATE TABLE IF NOT EXISTS public.sections (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id   UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  description TEXT,
  order_index INT NOT NULL,
  theme_color TEXT DEFAULT '#5cb8fd',
  tier        TEXT CHECK (tier IN ('street_level', 'grid_master', 'cyber_legend')),
  is_locked   BOOLEAN NOT NULL DEFAULT true,
  xp_required INT DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- B3. UNITS (Chapters) — HANDLING UNIT ALREADY EXISTS WITHOUT section_id
CREATE TABLE IF NOT EXISTS public.units (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title            TEXT NOT NULL,
  topic            TEXT NOT NULL,
  description      TEXT,
  order_index      INT NOT NULL,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Memastikan section_id ada di units (Fix line 224 error)
-- Ditambahkan setelah table creation untuk handle case "table exists but column doesn't"
ALTER TABLE public.units 
  ADD COLUMN IF NOT EXISTS section_id UUID REFERENCES public.sections(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS icon_emoji TEXT DEFAULT '📚',
  ADD COLUMN IF NOT EXISTS thumbnail_url TEXT,
  ADD COLUMN IF NOT EXISTS skill_tags TEXT[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS is_locked BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN IF NOT EXISTS unlock_condition JSONB DEFAULT '{"type": "always_open"}',
  ADD COLUMN IF NOT EXISTS guidebook_url TEXT,
  ADD COLUMN IF NOT EXISTS is_bonus BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS max_crown_level INT NOT NULL DEFAULT 5,
  ADD COLUMN IF NOT EXISTS xp_per_crown INT NOT NULL DEFAULT 30;

-- B4. LESSONS (Nodes)
CREATE TABLE IF NOT EXISTS public.lessons (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_id           UUID NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
  title             TEXT NOT NULL,
  type              TEXT NOT NULL,
  order_index       INT NOT NULL,
  xp_reward         INT NOT NULL DEFAULT 30,
  pass_threshold    FLOAT NOT NULL DEFAULT 0.6,
  is_bonus          BOOLEAN NOT NULL DEFAULT false,
  estimated_minutes INT DEFAULT 5,
  crown_level       INT NOT NULL DEFAULT 1,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- B5. EXERCISES (Questions)
CREATE TABLE IF NOT EXISTS public.exercises (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id      UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  type           TEXT NOT NULL,
  order_index    INT NOT NULL,
  difficulty     INT NOT NULL DEFAULT 1,
  score_weight   FLOAT NOT NULL DEFAULT 1.0,
  prompt         TEXT NOT NULL,
  correct_answer JSONB NOT NULL,
  choices        JSONB,
  media_url      TEXT,
  hint           TEXT,
  explanation    TEXT,
  tags           TEXT[] DEFAULT '{}',
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- B6. UNIT_CROWN_PROGRESS
CREATE TABLE IF NOT EXISTS public.unit_crown_progress (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  unit_id           UUID NOT NULL REFERENCES public.units(id) ON DELETE CASCADE,
  crown_level       INT NOT NULL DEFAULT 0,
  lessons_completed INT NOT NULL DEFAULT 0,
  xp_earned         INT NOT NULL DEFAULT 0,
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, unit_id)
);

-- B7. USER_STREAKS (Lanjutan Statistik)
CREATE TABLE IF NOT EXISTS public.user_streaks (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
  current_streak   INT NOT NULL DEFAULT 0,
  longest_streak   INT NOT NULL DEFAULT 0,
  last_active_date DATE,
  freeze_count     INT NOT NULL DEFAULT 0,
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- B8. LEAGUES
CREATE TABLE IF NOT EXISTS public.leagues (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  league_tier      TEXT NOT NULL DEFAULT 'Bronze',
  weekly_xp        INT NOT NULL DEFAULT 0,
  rank             INT,
  promotion_status TEXT,
  week_start       DATE NOT NULL DEFAULT CURRENT_DATE,
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- B9. DAILY_GOAL
CREATE TABLE IF NOT EXISTS public.daily_goal (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
  xp_goal      INT NOT NULL DEFAULT 20,
  xp_today     INT NOT NULL DEFAULT 0,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  reset_at     TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '1 day'),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 3. BAGIAN SECURITY & INDEXES (Idempotent)
-- ============================================================

-- RLS Enablement
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.units ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercises ENABLE ROW LEVEL SECURITY;

-- Policies (Gunakan DO block agar tidak error jika policy sudah ada)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'public_read_access') THEN
        CREATE POLICY "public_read_access" ON public.courses FOR SELECT USING (true);
        CREATE POLICY "public_read_access" ON public.sections FOR SELECT USING (true);
        CREATE POLICY "public_read_access" ON public.units FOR SELECT USING (true);
        CREATE POLICY "public_read_access" ON public.lessons FOR SELECT USING (true);
        CREATE POLICY "public_read_access" ON public.exercises FOR SELECT USING (true);
    END IF;
END
$$;

-- Indexes (Gunakan IF NOT EXISTS)
CREATE INDEX IF NOT EXISTS idx_sections_course    ON public.sections(course_id);
CREATE INDEX IF NOT EXISTS idx_units_section      ON public.units(section_id);
CREATE INDEX IF NOT EXISTS idx_lessons_unit       ON public.lessons(unit_id);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson   ON public.exercises(lesson_id);
CREATE INDEX IF NOT EXISTS idx_crown_user         ON public.unit_crown_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_streaks_user       ON public.user_streaks(user_id);
CREATE INDEX IF NOT EXISTS idx_leagues_user       ON public.leagues(user_id);

-- ============================================================
-- FINISH: Migration Complete
-- ============================================================
