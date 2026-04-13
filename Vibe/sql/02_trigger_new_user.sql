-- =======================================================
-- AXLINGO: Auto-create User Profile, Stats & Hearts (UPDATED)
-- Roadmap Item 1.16, 1.17
-- Target: user_stats, user_hearts, profiles
-- =======================================================

-- -------------------------------------------------------
-- SQL Function: handle_new_user()
-- -------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- 1. Insert ke `profiles`
  INSERT INTO public.profiles (id, username, avatar_url, bio)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NULL),
    NULL
  )
  ON CONFLICT (id) DO NOTHING;

  -- 2. Insert ke `user_stats` (Nama tabel baru & kolom total_lessons_completed)
  INSERT INTO public.user_stats (user_id, xp, level, diamonds, current_streak, total_lessons_completed)
  VALUES (
    NEW.id,
    0, -- xp
    1, -- level
    0, -- diamonds
    0, -- current_streak
    0  -- total_lessons_completed (Kolom Baru)
  )
  ON CONFLICT (user_id) DO NOTHING;

  -- 3. Insert ke `user_hearts` (Nama tabel baru)
  INSERT INTO public.user_hearts (user_id, current_hearts, last_recharge_at)
  VALUES (
    NEW.id,
    5,
    NOW()
  )
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$;

-- -------------------------------------------------------
-- SQL Trigger: on_auth_user_created
-- -------------------------------------------------------
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- -------------------------------------------------------
-- Re-apply Policies for Trigger Support (Updated Names)
-- -------------------------------------------------------
DROP POLICY IF EXISTS "user_stats: service role can insert" ON public.user_stats;
CREATE POLICY "user_stats: service role can insert"
  ON public.user_stats FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "user_hearts: service role can insert" ON public.user_hearts;
CREATE POLICY "user_hearts: service role can insert"
  ON public.user_hearts FOR INSERT WITH CHECK (true);
