# Retro-term Capacitor template

Mobile app starter berbasis Capacitor yang memakai komponen Retro-term melalui WebView. Template ini dapat menghasilkan project Android dan iOS dari satu source UI.

## Persiapan

```bash
npm install
npm run prepare:web
```

`prepare:web` menyalin asset Retro-term dari package ke `www/vendor/`. Folder ini diabaikan Git karena merupakan hasil generate.

## Tambahkan platform

```bash
npm run add:android
npm run add:ios
```

Perintah tersebut menjalankan `cap add` dan membuat folder native `android/` atau `ios/`. Jalankan hanya platform yang tersedia di mesin development: Android membutuhkan Android Studio/SDK, sedangkan iOS membutuhkan macOS dan Xcode.

## Buka project native

```bash
npm run open:android
npm run open:ios
```

Setelah source web berubah, jalankan kembali:

```bash
npm run sync
```

Untuk sync satu platform saja, gunakan `npm run android` atau `npm run ios`.

Ganti `appId` dan `appName` di `capacitor.config.ts` sebelum rilis. Untuk menggunakan template di luar monorepo ini, ubah dependency `retro-term-css` pada `package.json` menjadi versi npm, misalnya `^3.0.0`.
