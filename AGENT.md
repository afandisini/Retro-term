# AGENT.md

Repo ini memakai namespace penuh `rt-` untuk semua class framework resmi.

Aturan kerja:
- Jangan tambahkan alias kompatibilitas untuk class lama yang sudah digantikan namespace `rt-`.
- Semua variable CSS framework harus memakai prefix `--rt-*`.
- Hindari underscore pada nama class; gunakan dash untuk seluruh namespace.
- Data attribute framework harus memakai prefix `data-rt-*`.
- Setelah ubah Sass atau JS framework, jalankan build CSS/asset yang relevan dan verifikasi hasilnya.
- Dokumentasi dan example harus mengikuti namespace yang sama dengan source.

Prioritas file:
- `sass/**/*.scss`
- `retro-term.js`
- `*.html`
- `README.md`
- `DOCUMENTATION.md`
- `CHANGELOG.md`
- `package.json`
