# ATURAN TEGAS WAJIB DIPATUHI

Dokumen ini adalah aturan kerja untuk proyek Retro-term. Semua orang yang mengubah kode, dokumentasi, atau aset wajib mematuhinya.

## Aturan Utama

1. Jangan mengubah nama class komponen tanpa alasan kuat dan persetujuan jelas.
2. Jangan menghapus fitur yang sudah ada jika tidak diminta secara eksplisit.
3. Jangan membuat markup, CSS, atau JavaScript yang bertentangan dengan pola yang sudah dipakai.
4. Jangan menambah dependensi baru jika solusi bisa dibuat dengan HTML, CSS, dan JavaScript bawaan.
5. Jangan melakukan perubahan besar tanpa membaca file terkait terlebih dahulu.

## Aturan Kode

1. Pertahankan pola penamaan `rt-...`.
2. Gunakan struktur yang konsisten dengan komponen yang sudah ada.
3. Simpan file dalam UTF-8.
4. Gunakan ASCII untuk nama class, atribut, dan identifier.
5. Jangan menulis kode yang duplikatif jika fungsi yang sama sudah tersedia.
6. Hindari inline style baru jika dapat dipindah ke CSS.
7. Tambahkan komentar hanya jika alur kode memang sulit dibaca.

## Aturan Perubahan UI

1. UI baru harus tetap selaras dengan gaya Retro-term.
2. Jangan mengubah tema visual secara acak.
3. Jangan menambahkan warna, radius, atau bayangan baru tanpa alasan desain yang jelas.
4. Pastikan perubahan responsif di desktop dan mobile.
5. Pastikan komponen tetap dapat dipakai ulang.

## Aturan Dokumentasi

1. Jika fitur berubah, perbarui README dan dokumen desain.
2. Jika ada perilaku baru pada komponen, jelaskan atribut, class, atau event yang diperlukan.
3. Jika ada aturan baru, masukkan ke file ini.
4. Jangan biarkan dokumentasi kosong atau usang.

## Aturan Validasi

1. Setelah mengubah HTML, pastikan elemen yang dipanggil JavaScript masih ada.
2. Setelah mengubah CSS, cek ulang kelas yang dipakai di demo.
3. Setelah mengubah JavaScript, pastikan event listener masih bekerja.
4. Jangan mengirim perubahan yang belum diuji secara minimum.
5. Setelah mengubah Sass, jalankan `npm run build:css`.

## Larangan Keras

1. Jangan memakai perintah destruktif tanpa instruksi yang sangat jelas.
2. Jangan menghapus file kerja orang lain.
3. Jangan membalikkan perubahan yang bukan dibuat oleh kamu.
4. Jangan mengubah struktur proyek secara sembarangan.
5. Jangan menambahkan kode sementara yang tidak akan dibersihkan.

## Urutan Kerja Wajib

1. Baca konteks file yang relevan.
2. Pahami dampak perubahan.
3. Edit file dengan perubahan minimum yang diperlukan.
4. Verifikasi hasilnya.
5. Laporkan perubahan secara jelas.

## Prinsip Operasional

- Utamakan stabilitas.
- Utamakan konsistensi.
- Utamakan keterbacaan.
- Utamakan kompatibilitas dengan file yang sudah ada.
- Jika ragu, jangan menebak. Cari konteks dulu.
