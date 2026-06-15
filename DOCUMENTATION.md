# Retro-term Documentation

## 1. Ringkasan

`Retro-term` adalah framework UI retro terminal yang fokus pada dashboard, admin panel, dan halaman operasional. Framework ini dirancang agar:

- bisa dipakai tanpa framework CSS pihak ketiga
- bisa berjalan di HTML statis
- bisa dipakai di PHP, Laravel, CodeIgniter, Vue, React, atau static hosting
- tetap ringan dan mudah dirawat

## 2. Filosofi Desain

### 2.1 Retro, tapi terstruktur

Wajah visualnya memakai referensi terminal klasik:

- permukaan gelap
- border tegas
- tipografi mono untuk konteks teknis
- aksi berbasis tombol dan panel
- alert dan toast yang terasa seperti notifikasi sistem

### 2.2 Namespace aman

Semua class framework memakai prefix:

```txt
term-
```

Tujuannya:

- menghindari bentrok dengan framework lain
- memudahkan audit CSS
- memudahkan reuse di project lama

### 2.3 Static-first

Core tidak memaksa build step. Halaman HTML biasa cukup memuat CSS dan JS inti. Adapter framework seperti Vue hanya opsi tambahan.

## 3. Lapisan Sistem

### 3.1 Core

Folder `core/` menyimpan bagian utama:

- `css/` untuk layout, komponen, utility, dan theme
- `js/` untuk helper global
- `icons/` untuk asset icon runtime

### 3.2 Assets

Folder `assets/term-icons/` menyimpan sumber icon pack dan proses build-nya.

### 3.3 Adapter

Folder `adapters/` menampung implementasi integrasi, misalnya Vue static adapter untuk hosting biasa.

## 4. Theme System

Theme dikendalikan oleh atribut:

```html
<html data-term-theme="dark"></html>
```

atau:

```html
<body data-term-theme="retro"></body>
```

### 4.1 Theme yang tersedia

- `dark`
- `light`
- `retro`
- `amber`
- `matrix`

### 4.2 Penyimpanan state

Theme disimpan ke `localStorage` dengan key:

```txt
term-theme
```

### 4.3 Implementasi

`core/js/term-theme.js` bertugas menginisialisasi theme awal agar halaman tidak blank sebelum script utama berjalan.

`core/js/term-admin.js` menyediakan API runtime:

```js
window.TermAdmin.initTheme()
window.TermAdmin.setTheme(theme)
window.TermAdmin.toggleTheme()
```

## 5. Sidebar System

Sidebar dikendalikan melalui class pada `body`:

- `term-sidebar-open`
- `term-sidebar-collapse`

### 5.1 Perilaku

- Desktop: sidebar bisa collapse
- Mobile: sidebar berubah menjadi offcanvas
- State sidebar tetap tersimpan di browser

### 5.2 Penyimpanan state

Key localStorage:

```txt
term-sidebar-state
```

### 5.3 API

```js
window.TermAdmin.initSidebar()
window.TermAdmin.setSidebar(state)
window.TermAdmin.toggleSidebar()
window.TermAdmin.closeSidebar()
```

## 6. Interaksi Global

`core/js/term-admin.js` mengelola interaksi global tanpa dependency eksternal.

### 6.1 Modal

```js
window.TermAdmin.openModal(id)
window.TermAdmin.closeModal(id)
window.TermAdmin.closeAllModals()
```

### 6.2 Toast

```js
window.TermAdmin.toast(message, type)
```

Tipe yang umum dipakai:

- `info`
- `success`
- `warning`
- `danger`

### 6.3 Event yang dipancarkan

- `term-theme-change`
- `term-sidebar-change`
- `term-modal-open`
- `term-modal-close`
- `term-toast`

## 7. Struktur Class

Framework ini memakai class yang konsisten, misalnya:

- `term-wrapper`
- `term-header`
- `term-sidebar`
- `term-content`
- `term-card`
- `term-table`
- `term-form-control`
- `term-modal-overlay`
- `term-toast`

Untuk state, class yang umum dipakai:

- `term-is-active`
- `term-is-open`
- `term-is-valid`
- `term-is-invalid`
- `term-menu-open`
- `term-menu-active`

## 8. Grid dan Utility

### 8.1 Grid

Class grid tersedia dalam bentuk:

- `term-row`
- `term-col`
- `term-col-1` sampai `term-col-12`
- `term-col-sm-*`
- `term-col-md-*`
- `term-col-lg-*`
- `term-col-xl-*`

### 8.2 Utility spacing

Utility dasar yang tersedia meliputi:

- padding `term-p-*`
- margin `term-m-*`
- border `term-border`
- radius `term-r-*`
- shadow `term-s-*`
- background `term-bg-*`
- text `term-text-*`

## 9. Komponen UI

### 9.1 Header

Header berisi:

- brand
- toggle sidebar
- toggle theme
- status bar
- notification menu
- user menu
- clock

### 9.2 Sidebar

Sidebar mendukung:

- menu header
- menu item
- submenu/treeview
- active state

### 9.3 Card dan panel

Card digunakan sebagai unit visual utama untuk dashboard, form, dan blok informasi.

### 9.4 Table

Table mendukung tampilan desktop dan responsif stack untuk mobile.

### 9.5 Form

Form memakai style outline/underline bernuansa terminal, bukan gaya form Bootstrap.

### 9.6 Modal dan toast

Modal dipakai untuk dialog konfirmasi dan panel tindakan. Toast dipakai untuk feedback singkat.

## 10. Icon System

Icon pack lokal berada di:

- `assets/term-icons/`
- `core/icons/`

Contoh pemakaian:

```html
<i class="term-icon term-icon-user" aria-hidden="true"></i>
```

### 10.1 Aturan

- jangan bergantung pada CDN icon runtime
- jangan pakai class `bi` di markup runtime
- pertahankan nama icon dengan namespace `term-icon-*`

### 10.2 Lisensi icon

Beberapa icon berasal dari Bootstrap Icons. Detail atribusi ada di:

- [assets/term-icons/NOTICE.md](./assets/term-icons/NOTICE.md)

## 11. Contoh Integrasi

### 11.1 HTML statis

```html
<link rel="stylesheet" href="./core/css/term-admin.css">
<link rel="stylesheet" href="./core/icons/term-icons.css">
<script src="./core/js/term-theme.js"></script>
<script defer src="./core/js/term-admin.js"></script>
```

### 11.2 Inisialisasi

```js
window.TermAdmin.init('dark', 'expanded');
```

### 11.3 Theme toggle

```html
<button type="button" data-term-theme-toggle="true" data-term-action="toggle-theme">
  Toggle theme
</button>
```

### 11.4 Sidebar toggle

```html
<button type="button" data-term-action="toggle-sidebar">
  Toggle sidebar
</button>
```

## 12. Adapter Vue Static

Adapter Vue static ada di `adapters/vue-static/`.

Karakteristiknya:

- memakai Vite
- hasil build bisa di-upload ke shared hosting
- core tetap dibaca dari struktur framework, bukan dari Vue runtime saja

Perintah umum:

```bash
cd adapters/vue-static
npm install
npm run dev
```

Build:

```bash
npm run build
```

Output:

```txt
adapters/vue-static/dist/
```

## 13. Deployment ke Shared Hosting

Untuk deployment statis:

1. Build dulu jika memakai adapter.
2. Upload isi folder `dist/` ke `public_html` atau subfolder hosting.
3. Pastikan path asset relatif sesuai dengan lokasi upload.

Jika dipasang di subfolder, gunakan base path relatif seperti `./` pada build output.

## 14. Batasan Desain

Jangan lakukan hal berikut pada core:

- menambah Bootstrap, Tailwind, AdminLTE, atau jQuery
- mengganti semua class ke class generik
- menggantungkan theme pada state framework tertentu
- mengubah visual retro terminal menjadi layout generik

## 15. Status Project

Project ini diposisikan sebagai:

- framework UI standalone
- bukan admin template berbasis library pihak ketiga
- bukan dashboard backend siap pakai
- bukan sistem data real-time terhubung server
