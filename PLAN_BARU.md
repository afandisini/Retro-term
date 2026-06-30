# PLAN BARU Retro-term

Dokumen ini dipakai sebagai checklist kerja redesign class Retro-term.

## Status Ringkas

- [x] Rename class utama ke gaya Bootstrap-like, tetap standalone
- [x] Hapus alias lama dari source aktif
- [x] Update JavaScript agar pakai selector baru
- [x] Sinkronkan build output `retro-term.css`
- [x] Sinkronkan build output `retro-term.min.css`
- [x] Sinkronkan build output di `dist/`
- [x] Update demo HTML utama
- [x] Update README dan dokumentasi
- [x] Pastikan tidak ada variable `--bs-*`
- [x] Jalankan `npm run build` berhasil

## Yang Sudah Dikerjakan

### 1. Button

- [x] `.rt-tbl` -> `.rt-btn`
- [x] `.rt-tbl-primary` / `.rt-tbl--primary` -> `.rt-btn-primary`
- [x] `.rt-tbl-secondary` -> `.rt-btn-secondary`
- [x] `.rt-tbl-success` -> `.rt-btn-success`
- [x] `.rt-tbl-warning` -> `.rt-btn-warning`
- [x] `.rt-tbl-danger` -> `.rt-btn-danger`
- [x] `.rt-tbl-accent` -> `.rt-btn-accent`
- [x] `.rt-tbl-purple` -> `.rt-btn-purple`
- [x] `.rt-tbl-outline` -> `.rt-btn-outline-primary`
- [x] `.rt-tbl-ghost` -> `.rt-btn-ghost`
- [x] `.rt-tbl-sm` -> `.rt-btn-sm`
- [x] `.rt-tbl-lg` -> `.rt-btn-lg`
- [x] `.rt-tbl-icon` -> `.rt-btn-icon`

### 2. Card

- [x] `.rt-panel` -> `.rt-card`
- [x] `.rt-panel-head` -> `.rt-card-header`
- [x] `.rt-panel-title` -> `.rt-card-title`
- [x] `.rt-panel-subtitle` -> `.rt-card-subtitle`
- [x] `.rt-panel-actions` -> `.rt-card-actions`
- [x] `.rt-panel-body` -> `.rt-card-body`
- [x] `.rt-panel-body--flush` -> `.rt-card-body-flush`

### 3. Dropdown

- [x] `.rt-dd` -> `.rt-dropdown`
- [x] `.rt-dd-menu` -> `.rt-dropdown-menu`
- [x] `.rt-dd-item` -> `.rt-dropdown-item`
- [x] `.rt-dd-divider` -> `.rt-dropdown-divider`
- [x] `data-rt-dropdown` dipakai untuk rt-dropdown baru
- [x] Sidebar rt-dropdown memakai `.rt-nav-dropdown`

### 4. Modal / Popup

- [x] `.rt-pp` -> `.rt-modal`
- [x] `.rt-pp-panel` -> `.rt-modal-content`
- [x] `.rt-pp-head` -> `.rt-modal-header`
- [x] `.rt-pp-title` -> `.rt-modal-title`
- [x] `.rt-pp-desc` -> `.rt-modal-subtitle`
- [x] `.rt-pp-close` -> `.rt-modal-close`
- [x] `.rt-pp-body` -> `.rt-modal-body`
- [x] `.rt-pp-footer` -> `.rt-modal-footer`
- [x] `.rt-pp--sm` -> `.rt-modal-sm`
- [x] `.rt-pp--md` -> `.rt-modal-md`
- [x] `.rt-pp--lg` -> `.rt-modal-lg`
- [x] `.rt-pp--xl` -> `.rt-modal-xl`
- [x] `.rt-pp--fullscreen` -> `.rt-modal-fullscreen`
- [x] `body.rt-modal-open` ditambahkan

### 5. JavaScript

- [x] Update selector rt-dropdown baru dan legacy
- [x] Update selector rt-modal baru dan legacy
- [x] Support `data-rt-modal-open`
- [x] Support `data-rt-modal-close`
- [x] Support body lock `rt-modal-open`

### 6. Build & Output

- [x] `retro-term.css`
- [x] `retro-term.min.css`
- [x] `dist/retro-term.css`
- [x] `dist/retro-term.min.css`
- [x] `dist/retro-term.js`
- [x] `dist/retro-term-icons.css`

### 7. Demo & Docs

- [x] `index.html`
- [x] `login.html`
- [x] `example/*.html`
- [x] `README.md`
- [x] `DOCUMENTATION.md`

### 8. Penamaan Icon

- [x] `rt-icon term-icon` ubah jadi `rt rt-[name_icons]`
- [x] `term-icon.css` menjadi `retro-term-icons.css`

### 9. Grid System

- [x] `.rt-container` / `.rt-container-fluid`
- [x] `.rt-row`
- [x] `.rt-col`, `.rt-col-auto`, `.rt-col-1` sampai `.rt-col-12`
- [x] Responsive `.rt-col-sm-*`, `.rt-col-md-*`, `.rt-col-lg-*`, `.rt-col-xl-*`, `.rt-col-xxl-*`
- [x] Gutter utilities `.rt-g-*`, `.rt-gx-*`, `.rt-gy-*`
- [x] Breakpoint rt-container helpers `.rt-container-sm` sampai `.rt-container-xxl`

## Cek Lanjutan

- [ ] Review visual akhir di brt-rowser untuk memastikan semua demo tetap rapi
- [x] Audit wording sisa "popup" yang masih ingin diganti menjadi "rt-modal" di dokumentasi
- [ ] Cek ulang seluruh demo pada layar mobile

Catatan: dua checklist terakhir tetap pending karena perlu verifikasi manual di brt-rowser dan perangkat mobile.

## Catatan

- [x] Namespace CSS tetap memakai `--rt-*`.
- [x] Tidak ada dependency Bootstrap/Tailwind.
- [x] Alias lama sudah dibersihkan dari source aktif.
- [x] Audit wording sudah dirapikan di `README.md` dan `DOCUMENTATION.md`; file demo `popup.html` diganti `rt-modal.html` sebagai nama halaman contoh.
