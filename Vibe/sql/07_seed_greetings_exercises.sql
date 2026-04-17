-- ============================================================
-- AXLINGO — SQL SEED: GREETINGS EXERCISES (Unit 1)
-- File: 07_seed_greetings_exercises.sql
-- Based on curriculum in path.txt and types in quiz_types.md
-- ============================================================

-- Note: We assume the lesson_id for Unit 1 Vocab Intro exists from previous seeds.
-- Unit ID: '00000000-0000-0000-0000-000000000101'
-- Lesson: 'Vocab Intro'

DO $$
DECLARE
    v_lesson_id UUID;
BEGIN
    -- Get the lesson ID for the first lesson in the first unit
    SELECT id INTO v_lesson_id 
    FROM public.lessons 
    WHERE unit_id = '00000000-0000-0000-0000-000000000101' 
    AND type = 'vocab_intro'
    LIMIT 1;

    IF v_lesson_id IS NOT NULL THEN
        -- Delete existing exercises for this lesson to avoid duplicates
        DELETE FROM public.exercises WHERE lesson_id = v_lesson_id;

        -- 1. Multiple Choice Text (mc_text)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'mc_text', 1, 1, 
            'Apa arti dari "Good Morning"?', 
            '"Selamat Pagi"', 
            '[
                {"id": "a", "text": "Selamat Siang", "is_correct": false},
                {"id": "b", "text": "Selamat Pagi", "is_correct": true},
                {"id": "c", "text": "Selamat Sore", "is_correct": false},
                {"id": "d", "text": "Selamat Malam", "is_correct": false}
            ]'::jsonb,
            '"Morning" berarti pagi.',
            '["greetings", "basics"]'::jsonb,
            '"Good Morning" digunakan sebagai sapaan saat pagi hari hingga tengah hari.'
        );

        -- 2. Multiple Choice Image (mc_image)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'mc_image', 2, 1, 
            'Pilih gambar yang mewakili "Hello"', 
            '"hello_icon"', 
            '[
                {"id": "img1", "image_url": "https://api.axlingo.com/assets/greetings/wave.png", "is_correct": true, "label": "Wave"},
                {"id": "img2", "image_url": "https://api.axlingo.com/assets/greetings/sleep.png", "is_correct": false, "label": "Sleep"},
                {"id": "img3", "image_url": "https://api.axlingo.com/assets/greetings/eat.png", "is_correct": false, "label": "Eat"}
            ]'::jsonb,
            'Seseorang yang melambaikan tangan.',
            '["greetings", "visual"]'::jsonb,
            '"Hello" sering diwakili dengan gerakan melambai.'
        );

        -- 3. Translation (translate)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'translate', 3, 2, 
            'Terjemahkan ke Bahasa Inggris: "Hai, selamat pagi"', 
            '"Hi, good morning"', 
            'Gunakan tanda baca yang benar.',
            '["greetings", "writing"]'::jsonb,
            '"Hi" adalah bentuk informal dari "Hello", dan "good morning" adalah selamat pagi.'
        );

        -- 4. Word Bank (word_bank)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'word_bank', 4, 2, 
            'Susun kalimat: "Selamat pagi semuanya"', 
            '"Good morning everyone"', 
            '[
                {"id": "1", "text": "morning"},
                {"id": "2", "text": "everyone"},
                {"id": "3", "text": "Good"},
                {"id": "4", "text": "night"}
            ]'::jsonb,
            'Mulai dengan kata sifat yang positif.',
            '["greetings", "sentence_structure"]'::jsonb,
            'Struktur yang benar adalah Kata Sifat + Waktu + Objek.'
        );

        -- 5. Fill in the Blank (fill_blank)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'fill_blank', 5, 1, 
            'Good ___, how are you?', 
            '"morning"', 
            '[
                {"id": "a", "text": "morning", "is_correct": true},
                {"id": "b", "text": "eat", "is_correct": false},
                {"id": "c", "text": "blue", "is_correct": false}
            ]'::jsonb,
            'Kata ini melengkapi sapaan pagi hari.',
            '["greetings", "context"]'::jsonb,
            '"Good morning" adalah sapaan lengkap sebelum menanyakan kabar.'
        );

        -- 6. Listening Choice (listening_mc)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, audio_url, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'listening_mc', 6, 1, 
            'Apa yang kamu dengar?', 
            '"Hello"', 
            '[
                {"id": "a", "text": "Hello", "is_correct": true},
                {"id": "b", "text": "Goodbye", "is_correct": false},
                {"id": "c", "text": "Hi", "is_correct": false}
            ]'::jsonb,
            'https://api.axlingo.com/audio/greetings/hello.mp3',
            'Sapaan paling umum.',
            '["greetings", "listening"]'::jsonb,
            'Audio memutar kata "Hello".'
        );

        -- 7. Match Pairs (match_pairs)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'match_pairs', 7, 2, 
            'Pasangkan kata yang sesuai', 
            '{"Hello": "Halo", "Good Morning": "Selamat Pagi", "Hi": "Hai"}'::jsonb, 
            '[
                {"left": "Hello", "right": "Halo"},
                {"left": "Good Morning", "right": "Selamat Pagi"},
                {"left": "Hi", "right": "Hai"}
            ]'::jsonb,
            'Cari pasangan artinya.',
            '["greetings", "vocabulary"]'::jsonb,
            'Latihan ini menghubungkan kata bahasa Inggris dengan artinya dalam bahasa Indonesia.'
        );

        -- 8. True/False (true_false)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'true_false', 8, 1, 
            '"Good Night" digunakan untuk menyapa orang di pagi hari.', 
            'false', 
            '[
                {"id": "true", "text": "Benar", "is_correct": false},
                {"id": "false", "text": "Salah", "is_correct": true}
            ]'::jsonb,
            'Pikirkan kata "Night".',
            '["greetings", "logic"]'::jsonb,
            '"Good Night" digunakan saat berpamitan atau sebelum tidur di malam hari.'
        );

        -- 9. Dictation (listening_type)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, audio_url, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'listening_type', 9, 3, 
            'Ketik apa yang kamu dengar', 
            '"Good morning"', 
            'https://api.axlingo.com/audio/greetings/good_morning.mp3',
            'Sapaan pagi hari.',
            '["greetings", "spelling"]'::jsonb,
            'Melatih kemampuan mendengar dan mengeja kata.'
        );

        -- 10. Dialogue Completion (dialogue)
        INSERT INTO public.exercises (
            lesson_id, type, order_index, difficulty, prompt, correct_answer, choices, hint, tags, explanation
        ) VALUES (
            v_lesson_id, 'dialogue', 10, 2, 
            'A: Hello! \n B: ___', 
            '"Hi!"', 
            '[
                {"id": "a", "text": "Goodbye!", "is_correct": false},
                {"id": "b", "text": "Hi!", "is_correct": true},
                {"id": "c", "text": "Thank you", "is_correct": false}
            ]'::jsonb,
            'Respon yang sesuai untuk sapaan.',
            '["greetings", "conversation"]'::jsonb,
            'Dalam percakapan, "Hello" biasanya dijawab dengan "Hi" atau "Hello" juga.'
        );

    END IF;
END $$;
