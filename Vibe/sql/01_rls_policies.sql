-- =======================================================
-- AXLINGO: RLS (Row Level Security) Setup (UPDATED)
-- Memperbarui nama tabel sesuai tablelist.md terbaru
-- =======================================================

-- 1. Enable RLS
ALTER TABLE public.profiles          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_stats        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_hearts       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory         ENABLE ROW LEVEL SECURITY;

-- 2. SELECT Policies
CREATE POLICY "profiles: select own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "user_stats: select own" ON public.user_stats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_hearts: select own" ON public.user_hearts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_progress: select own" ON public.user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "achievements: select all" ON public.achievements FOR SELECT USING (true);
CREATE POLICY "user_achievements: select own" ON public.user_achievements FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "inventory: select own" ON public.inventory FOR SELECT USING (auth.uid() = user_id);

-- 3. UPDATE Policies
CREATE POLICY "profiles: update own" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "user_stats: update own" ON public.user_stats FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "user_hearts: update own" ON public.user_hearts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "user_progress: update own" ON public.user_progress FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "inventory: update own" ON public.inventory FOR UPDATE USING (auth.uid() = user_id);
