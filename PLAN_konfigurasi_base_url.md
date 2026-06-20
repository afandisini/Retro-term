# PLAN Konfigurasi Base URL - Retro-term CSS

## Daftar Isi

1. Pendahuluan
2. Kondisi Repo Saat Ini
3. Tujuan Base URL
4. Struktur Folder yang Dipakai
5. Opsi Implementasi
6. Rencana Implementasi
7. Contoh Penggunaan
8. Deployment
9. Troubleshooting
10. Best Practices

---

## Pendahuluan

Dokumen ini menjelaskan rencana konfigurasi `base_url` untuk proyek Retro-term CSS.
Tujuannya adalah supaya link, asset, dan redirect tetap konsisten saat project dijalankan di:

- localhost
- subfolder hosting
- domain production

Plan ini disesuaikan dengan struktur repo yang saat ini sudah dipakai di project.

---

## Kondisi Repo Saat Ini

Repo Retro-term CSS saat ini memakai struktur sederhana dan flat:

- `index.html`
- `login.html`
- `retro-term.css`
- `retro-term.js`
- `retro-term.min.css`
- `example/`
- `assets/term-icons/`
- `sass/`
- dokumen proyek seperti `README.md`, `CHANGELOG.md`, `DOCUMENTATION.md`

Catatan penting:

- Saat ini belum ada `helpers.js`
- Saat ini belum ada folder `pages/`, `admin/`, `docs/`, atau `api/` di root
- Demo utama berada di folder `example/`

Karena itu, plan base URL harus mengikuti struktur yang ada, bukan struktur ideal yang belum diterapkan.

---

## Tujuan Base URL

Base URL dipakai untuk:

- membuat link antar halaman lebih aman
- menghindari path yang rusak saat pindah dari localhost ke hosting
- mempermudah redirect ke halaman login, dashboard, dan docs
- menjaga asset CSS, JS, icon, dan gambar tetap load dengan benar

Contoh kebutuhan:

- `index.html` ke `login.html`
- `login.html` ke `index.html`
- `example/dashboard.html` ke `example/login.html` atau `../login.html` sesuai struktur final
- icon assets dari `assets/term-icons/dist/`

---

## Struktur Folder yang Dipakai

Struktur yang relevan untuk plan ini:

```text
/framework_css_retro
├── index.html
├── login.html
├── retro-term.css
├── retro-term.min.css
├── retro-term.js
├── README.md
├── CHANGELOG.md
├── DOCUMENTATION.md
├── example/
│   ├── badge.html
│   ├── buttons.html
│   ├── color.html
│   ├── dashboard.html
│   ├── doc.html
│   ├── input.html
│   ├── popup.html
│   ├── table.html
│   ├── toast.html
│   └── typography.html
├── assets/
│   └── term-icons/
│       └── dist/
│           ├── term-icons.css
│           └── term-icons.min.css
└── sass/
```

Kalau nanti ingin menambah struktur yang lebih besar, sebaiknya dilakukan bertahap tanpa memutus link yang sudah ada.

---

## Opsi Implementasi

Ada 2 pendekatan yang paling cocok untuk repo ini.

### Opsi 1: Tetap pakai relative path

Contoh:

- dari root: `login.html`
- dari `example/`: `../login.html`
- dari `example/dashboard.html` ke CSS root: `../retro-term.css`

Kelebihan:

- paling sederhana
- tidak butuh helper tambahan
- cocok untuk repo kecil dan statis

Kekurangan:

- rentan salah path saat file dipindah
- link bisa pecah jika struktur folder berubah

### Opsi 2: Pakai `base_url` global

Contoh:

- define satu variabel global, misalnya `window.RT_BASE_URL`
- semua link penting dibangun dari base ini
- redirect dan asset path jadi lebih konsisten

Kelebihan:

- lebih fleksibel untuk localhost, subfolder, dan production
- mudah dipindah hosting

Kekurangan:

- butuh helper kecil di `retro-term.js` atau script tambahan
- harus disiplin dipakai di semua halaman

---

## Rencana Implementasi

### 1. Tentukan base URL utama

Saran konfigurasi:

- localhost root: `http://localhost:8000/framework_css_retro/`
- production: `https://retro-term.afandev.my.id/`

Base ini dipakai sebagai referensi utama untuk navigasi dan redirect.

### 2. Tambahkan konfigurasi ringan di `retro-term.js`

Karena repo ini sudah memakai `retro-term.js`, paling cocok kalau konfigurasi base URL disimpan di file itu, bukan membuat `helpers.js` baru.

Contoh target fungsi:

- ambil base URL dari `window.location`
- atau baca `data-base-url` dari `<html>`
- sediakan helper untuk build link

### 3. Gunakan base URL di link inti

Prioritas link yang harus aman:

- logo / home
- login / logout
- dashboard
- documentation
- demo pages di `example/`

### 4. Standarkan path asset

Asset yang harus konsisten:

- `retro-term.css`
- `retro-term.min.css`
- `retro-term.js`
- `assets/term-icons/dist/term-icons.css`

### 5. Pastikan demo pages tetap bisa dibuka langsung

File di folder `example/` harus tetap bisa dibuka sebagai HTML statis tanpa build step tambahan.

### 6. Tambahkan fallback

Kalau helper base URL gagal terbaca, halaman harus tetap bisa dipakai dengan relative path standar.

---

## Contoh Penggunaan

### Contoh 1: Link dari root

```html
<a href="login.html">Login</a>
<a href="example/doc.html">Documentation</a>
```

### Contoh 2: Link dari folder `example/`

```html
<a href="../index.html">Home</a>
<a href="../login.html">Login</a>
<link rel="stylesheet" href="../retro-term.css">
<script src="../retro-term.js" defer></script>
```

### Contoh 3: Redirect setelah submit

```html
window.location.href = "../example/dashboard.html";
```

Atau jika memakai helper base URL:

```html
window.location.href = RT.baseUrl("example/dashboard.html");
```

---

## Deployment

### Localhost

- jalankan project di root folder repo
- pastikan path relatif cocok dengan lokasi file
- tes semua link dari `index.html`, `login.html`, dan `example/*.html`

### Production

- upload struktur repo tanpa mengubah nama folder utama
- pastikan base URL production sesuai domain
- cek semua asset CSS, JS, icon, dan gambar

### Subfolder hosting

Kalau project di-host di subfolder, misalnya:

```text
https://domain.com/framework_css_retro/
```

maka semua path harus mengarah ke subfolder itu, bukan ke root domain.

---

## Troubleshooting

### CSS atau JS tidak load

Penyebab umum:

- path relatif salah
- file dipindah tanpa update link
- base URL tidak sesuai lokasi hosting

### Redirect ke halaman salah

Penyebab umum:

- `href` masih hardcode
- path dari `example/` belum pakai `../`

### Icon tidak muncul

Penyebab umum:

- path ke `assets/term-icons/dist/term-icons.css` salah
- file icon assets belum ikut terupload

### Link logout tidak masuk login

Penyebab umum:

- dropdown masih pakai `button` bukan `a`
- target URL belum diset ke `login.html`

---

## Best Practices

1. Jangan hardcode path yang berubah-ubah di banyak file.
2. Pakai relative path yang konsisten antara root dan `example/`.
3. Kalau menambah helper base URL, tempatkan di `retro-term.js` agar selaras dengan arsitektur repo.
4. Jangan tambahkan folder besar yang tidak dipakai kalau belum ada kebutuhan nyata.
5. Pastikan halaman demo tetap bisa dibuka tanpa build step.
6. Simpan dokumentasi struktur repo di `README.md` dan update plan ini jika struktur berubah.

---

## Kesimpulan

Plan base URL ini akan lebih sesuai jika disesuaikan dengan struktur repo Retro-term CSS yang sekarang:

- fokus pada file root yang sudah ada
- fokus pada folder `example/` untuk demo
- fokus pada `retro-term.js` sebagai helper utama
- tidak mengandalkan struktur `helpers.js` atau folder `admin/pages/docs/api` yang belum ada

Jika nanti repo berkembang menjadi struktur yang lebih besar, plan ini bisa diperbarui lagi tanpa mengubah arah dasar implementasinya.
