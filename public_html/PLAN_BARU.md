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

- [x] `.rt-tbl` -> `.btn`
- [x] `.rt-tbl-primary` / `.rt-tbl--primary` -> `.btn-primary`
- [x] `.rt-tbl-secondary` -> `.btn-secondary`
- [x] `.rt-tbl-success` -> `.btn-success`
- [x] `.rt-tbl-warning` -> `.btn-warning`
- [x] `.rt-tbl-danger` -> `.btn-danger`
- [x] `.rt-tbl-accent` -> `.btn-accent`
- [x] `.rt-tbl-purple` -> `.btn-purple`
- [x] `.rt-tbl-outline` -> `.btn-outline-primary`
- [x] `.rt-tbl-ghost` -> `.btn-ghost`
- [x] `.rt-tbl-sm` -> `.btn-sm`
- [x] `.rt-tbl-lg` -> `.btn-lg`
- [x] `.rt-tbl-icon` -> `.btn-icon`

### 2. Card

- [x] `.rt-panel` -> `.card`
- [x] `.rt-panel_head` -> `.card-header`
- [x] `.rt-panel_title` -> `.card-title`
- [x] `.rt-panel_subtitle` -> `.card-subtitle`
- [x] `.rt-panel_actions` -> `.card-actions`
- [x] `.rt-panel_body` -> `.card-body`
- [x] `.rt-panel_body--flush` -> `.card-body-flush`

### 3. Dropdown

- [x] `.rt-dd` -> `.dropdown`
- [x] `.rt-dd_menu` -> `.dropdown-menu`
- [x] `.rt-dd_item` -> `.dropdown-item`
- [x] `.rt-dd_divider` -> `.dropdown-divider`
- [x] `data-dropdown` dipakai untuk dropdown baru
- [x] Sidebar dropdown memakai `.nav-dropdown`

### 4. Modal / Popup

- [x] `.rt-pp` -> `.modal`
- [x] `.rt-pp_panel` -> `.modal-content`
- [x] `.rt-pp_head` -> `.modal-header`
- [x] `.rt-pp_title` -> `.modal-title`
- [x] `.rt-pp_desc` -> `.modal-subtitle`
- [x] `.rt-pp_close` -> `.btn-close`
- [x] `.rt-pp_body` -> `.modal-body`
- [x] `.rt-pp_footer` -> `.modal-footer`
- [x] `.rt-pp--sm` -> `.modal-sm`
- [x] `.rt-pp--md` -> `.modal-md`
- [x] `.rt-pp--lg` -> `.modal-lg`
- [x] `.rt-pp--xl` -> `.modal-xl`
- [x] `.rt-pp--fullscreen` -> `.modal-fullscreen`
- [x] `body.modal-open` ditambahkan

### 5. JavaScript

- [x] Update selector dropdown baru dan legacy
- [x] Update selector modal baru dan legacy
- [x] Support `data-modal-open`
- [x] Support `data-modal-close`
- [x] Support body lock `modal-open`

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
- [x] Breakpoint container helpers `.rt-container-sm` sampai `.rt-container-xxl`

## Cek Lanjutan

- [ ] Review visual akhir di browser untuk memastikan semua demo tetap rapi
- [x] Audit wording sisa "popup" yang masih ingin diganti menjadi "modal" di dokumentasi
- [ ] Cek ulang seluruh demo pada layar mobile

Catatan: dua checklist terakhir tetap pending karena perlu verifikasi manual di browser dan perangkat mobile.

## Catatan

- [x] Namespace CSS tetap memakai `--rt-*`.
- [x] Tidak ada dependency Bootstrap/Tailwind.
- [x] Alias lama sudah dibersihkan dari source aktif.
- [x] Audit wording sudah dirapikan di `README.md` dan `DOCUMENTATION.md`; file demo `popup.html` diganti `modal.html` sebagai nama halaman contoh.
