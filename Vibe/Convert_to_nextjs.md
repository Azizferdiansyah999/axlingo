# Panduan Implementasi HTML ke Next.js (Axlingo Project)

Dokumen ini berisi langkah-langkah dan aturan yang **wajib diikuti** oleh AI (dan developer) saat mengimplementasikan file `.html` (terutama dari desain Stitch AI / "The Neon Pulse") ke dalam framework Next.js untuk project Axlingo. 

Mengikuti panduan ini akan memastikan tingkat kesuksesan 100% dengan hasil yang *pixel-perfect*, sama seperti implementasi `login.html`.

## 🎨 1. Analisis Desain & Tema (The Neon Pulse)
Sebelum menulis kode React/Next.js, pastikan untuk menganalisis elemen desain inti dari file HTML referensi:
- **Glassmorphism**: Perhatikan penggunaan `backdrop-filter: blur(...)`, proporsi transparansi background (`rgba` / `hsla`), dan border transparan.
- **Neon Lighting**: Identifikasi efek *glow* yang menggunakan `text-shadow` dan `box-shadow` dengan warna-warna neon spesifik.
- **Color Palette & Typography**: Pastikan semua warna (Primary, Secondary, Background) dan font yang digunakan di HTML diidentifikasi.

## 🛠️ 2. Migrasi Token Desain ke Global CSS
Jangan menggunakan *inline styles* atau utility class yang tidak konsisten jika desain mewajibkan tema spesifik.
- Pindahkan semua CSS Variables (custom properties seperti `--neon-blue`, `--glass-bg`) dari tag `<style>` di HTML ke dalam file `globals.css` (atau file CSS utama yang digunakan Next.js).
- Pastikan konfigurasi *dark mode* atau skema warna utama telah diatur di Global CSS agar komponen Next.js tinggal memanggil variable tersebut.

## ⚛️ 3. Konversi HTML ke JSX secara Akurat
Lakukan translasi dari HTML standar ke sintaks JSX Next.js:
- Ubah `class="..."` menjadi `className="..."`.
- Ubah `for="..."` menjadi `htmlFor="..."`.
- Tutup semua tag yang bersifat *self-closing* (misal: `<input>`, `<img>`, `<hr>`, `<br>`) dengan format JSX (misal: `<input />`).
- Ubah penulisan *inline style* HTML `style="margin-top: 10px;"` menjadi object React `style={{ marginTop: '10px' }}`.

## 🧩 4. Ekstraksi dan Pembuatan Komponen
Jika file HTML cukup panjang dan kompleks:
- Pecah bagian-bagian antarmuka menjadi komponen UI yang *reusable* (misalnya: `NeonButton`, `GlassCard`, `InputField`).
- Pisahkan halaman (Page) dengan komponen (Components) pada struktur direktori Next.js (`app/.../page.js` dan `components/...`).

## ✨ 5. Pemeliharaan Interaktivitas dan Animasi
- Perhatikan animasi CSS (`@keyframes`) atau transisi (hover states) yang ada pada HTML. Implementasikan ini kembali di CSS Modules atau Global CSS Next.js.
- Jika di HTML asal terdapat kode JavaScript *vanilla* untuk menangani interaksi (seperti *toggle password*, validasi form), konversikan kode tersebut menggunakan React Hooks (`useState`, `useEffect`, dsb.).
- Jika interaksi memerlukan komponen React menjadi Client Component, tambahkan direktif `"use client";` di baris paling atas file.

## 🔍 6. Finalisasi & Quality Control (Pixel-Perfect Check)
- **Review Side-by-Side**: Bandingkan komponen Next.js yang sudah di-render secara visual dengan file HTML asli.
- **Responsivitas**: Pastikan implementasi Next.js dapat merespon ke berbagai ukuran layar (mobile, tablet, desktop) persis seperti desain asalnya.
- **Aksesibilitas**: Pelihara tag semantik HTML5 yang baik, atribut `aria-*`, dan `alt` text pada gambar.

---

> **Instruksi untuk AI pada Tugas Berikutnya:**
> Setiap kali diminta untuk mengintegrasikan file `.html` lain ke dalam project ini, bacalah kembali file `HTML_TO_NEXTJS_GUIDE.md` ini terlebih dahulu sebagai landasan kerja, agar konsistensi desain sistem "The Neon Pulse" benar-benar terjaga.
