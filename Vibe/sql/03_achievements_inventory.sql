-- =======================================================
-- AXLINGO: Achievements & Inventory Tables
-- Roadmap Item 5, 6, 7
-- Jalankan script ini di Supabase Dashboard > SQL Editor
-- =======================================================

-- -------------------------------------------------------
-- 5. Tabel `achievements` (Master Data Trofi)
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    icon_url TEXT,
    reward_xp INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- -------------------------------------------------------
-- 6. Tabel `user_achievements` (Catatan Trofi User)
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_achievements (
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    achievement_id UUID REFERENCES public.achievements(id) ON DELETE CASCADE,
    earned_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, achievement_id)
);

-- -------------------------------------------------------
-- 7. Tabel `inventory` (Barang Milik User)
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.inventory (
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    item_id TEXT NOT NULL, -- ID unik dari item (misal: 'streak_freeze', 'double_xp')
    quantity INTEGER DEFAULT 1,
    PRIMARY KEY (user_id, item_id)
);

-- -------------------------------------------------------
-- LOG: Update RLS di file 01_rls_policies.sql jika belum.
-- (Tabel ini sudah terdaftar di 01_rls_policies.sql sebelumnya)
-- -------------------------------------------------------

COMMENT ON TABLE public.achievements IS 'Master data for all obtainable trophies/achievements.';
COMMENT ON TABLE public.user_achievements IS 'Bridge table to track which achievements users have earned.';
COMMENT ON TABLE public.inventory IS 'Tracks shop items owned by the user and their quantities.';
