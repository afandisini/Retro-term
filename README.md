# Retro-term

`Retro-term` adalah framework UI retro terminal untuk dashboard dan panel admin yang berdiri di atas HTML, CSS, dan JavaScript vanilla. Fokus utamanya adalah tampilan terminal klasik yang tetap modern dalam hal struktur, responsif, dan mudah dipakai ulang di berbagai stack seperti HTML statis, PHP native, Laravel, CodeIgniter, Vue, React, atau halaman hosting biasa.

## Konsep

`Retro-term` dibangun dengan prinsip berikut:

1. Core harus mandiri dan tidak bergantung pada framework CSS/JS pihak ketiga.
2. Semua komponen memakai namespace `term-` agar tidak bentrok dengan class global.
3. Theme dan state layout dikelola lewat atribut dan localStorage, bukan lewat framework tertentu.
4. UI harus tetap bisa dijalankan di hosting statis atau shared hosting.
5. Gaya visual mempertahankan nuansa terminal retro, bukan meniru Bootstrap atau AdminLTE.

Framework ini cocok untuk:

- Dashboard admin
- Panel sistem
- Halaman login bergaya retro
- UI CMS internal
- Demo produk atau portal internal

## Ciri Utama

- Theme global `dark`, `light`, `retro`, `amber`, dan `matrix`
- Sidebar responsive dengan mode `expanded`, `collapse`, dan `open` untuk mobile
- Header fixed dengan brand, status, clock, notification, dan user menu
- Komponen card, table, form, modal, toast, alert, badge, timeline, file manager, dan login panel
- JavaScript vanilla untuk interaksi global seperti toggle theme, sidebar, modal, dan toast
- Icon system lokal berbasis `term-icons`

## Struktur Arsitektur

`Retro-term` dibagi menjadi tiga lapisan:

1. `core/`
   - CSS inti untuk layout, komponen, utility, dan theme
   - JavaScript inti untuk interaksi global
   - Icon system yang dipakai lintas halaman
2. `assets/term-icons/`
   - Paket ikon sumber
   - Output build ikon CSS dan SVG
3. `adapters/`
   - Implementasi contoh untuk stack tertentu
   - Saat ini tersedia adapter Vue static

Dengan struktur ini, core tetap bisa dipakai di HTML biasa tanpa perlu Vue atau build step.

## File Penting

- [index.html](./index.html) - demo utama
- [main.css](./main.css) - stylesheet utama demo
- [main.min.css](./main.min.css) - stylesheet produksi hasil minify
- [sass/main.scss](./sass/main.scss) - source Sass utama
- [core/css/term-admin.css](./core/css/term-admin.css) - core layout dan komponen admin
- [core/css/term-dashboard.css](./core/css/term-dashboard.css) - style dashboard
- [core/css/term-login.css](./core/css/term-login.css) - style login
- [core/js/term-admin.js](./core/js/term-admin.js) - API interaksi global
- [core/js/term-layout.js](./core/js/term-layout.js) - helper render layout
- [core/js/term-theme.js](./core/js/term-theme.js) - inisialisasi theme awal
- [assets/term-icons/](./assets/term-icons/) - sumber dan build icon pack
- [adapters/vue-static/](./adapters/vue-static/) - adapter Vue static
- [DOCUMENTATION.md](./DOCUMENTATION.md) - dokumentasi teknis

## Quick Start

### 1. Jalankan demo HTML

Buka `index.html` langsung di browser, atau jalankan local server:

```bash
python -m http.server 8000
```

Lalu akses:

```txt
http://localhost:8000
```

### 2. Pakai core di HTML statis

```html
<!doctype html>
<html lang="id" data-term-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./core/css/term-admin.css">
  <link rel="stylesheet" href="./core/icons/term-icons.css">
</head>
<body class="term-layout-fixed">
  <div class="term-wrapper">
    <header class="term-header"></header>
    <aside class="term-sidebar"></aside>
    <main class="term-content"></main>
  </div>
  <script src="./core/js/term-theme.js"></script>
  <script defer src="./core/js/term-admin.js"></script>
</body>
</html>
```

### 3. Inisialisasi JavaScript

```js
window.TermAdmin.init('dark', 'expanded');
```

## Theme System

Theme dikendalikan lewat atribut:

```html
<html data-term-theme="retro"></html>
```

Theme yang didukung:

- `dark`
- `light`
- `retro`
- `amber`
- `matrix`

State theme disimpan ke:

```txt
term-theme
```

## Sidebar System

Sidebar memakai state global berbasis class pada `body`:

- `term-sidebar-open`
- `term-sidebar-collapse`

State sidebar disimpan ke:

```txt
term-sidebar-state
```

Perilaku utamanya:

- Desktop bisa collapse
- Mobile menjadi offcanvas
- Tombol toggle bekerja secara global

## Komponen Yang Tersedia

- Header
- Sidebar
- Footer
- Card
- Button
- Form control
- Table
- Modal
- Toast
- Alert
- Badge
- Small box
- Info box
- Timeline
- File manager
- Login panel

## Contoh Halaman

Folder `example/` berisi contoh penggunaan komponen, seperti:

- Dashboard
- Login
- Grid
- Form
- Card
- Badge
- Alert
- Modal
- Table
- Timeline
- Media object
- Landing page
- Documentation page sample

## Icon System

Ikon memakai nama class seperti:

```html
<i class="term-icon term-icon-dashboard" aria-hidden="true"></i>
```

Sumber ikon ada di:

- `assets/term-icons/`
- `core/icons/`

## Build Adapter Vue

Adapter Vue static tersedia di:

```txt
adapters/vue-static/
```

Jalankan:

```bash
cd adapters/vue-static
npm install
npm run dev
```

Build:

```bash
npm run build
```

Hasil build ada di:

```txt
adapters/vue-static/dist/
```

## Prinsip Penggunaan

- Jangan menambahkan dependency Bootstrap, Tailwind, AdminLTE, atau jQuery ke core.
- Jangan mengganti namespace `term-` dengan class generik.
- Jangan menjadikan Vue sebagai satu-satunya cara memakai framework ini.
- Jangan menghapus nuansa retro terminal saat membuat adapter baru.
- Gunakan `sass/main.scss` sebagai sumber saat rebuild `main.css` dan `main.min.css`.

## Lisensi

Kode utama `Retro-term` menggunakan lisensi MIT. Detail ada di [LICENSE](./LICENSE).

Catatan legal untuk icon pack ada di [assets/term-icons/NOTICE.md](./assets/term-icons/NOTICE.md).
