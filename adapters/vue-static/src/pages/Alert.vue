<script setup>
import { onBeforeUnmount, ref } from 'vue';

defineProps({
  subsection: {
    type: String,
    default: '',
  },
});

const variantsFlash = ref(false);
let flashTimer = null;

function flashVariants() {
  if (flashTimer) {
    window.clearTimeout(flashTimer);
  }

  variantsFlash.value = false;
  window.requestAnimationFrame(() => {
    variantsFlash.value = true;
    flashTimer = window.setTimeout(() => {
      variantsFlash.value = false;
    }, 720);
  });
}

function flashAlertVariant(type) {
  const targets = {
    primary: '.term-alert-primary',
    info: '.term-alert-info',
    success: '.term-alert-success',
    warning: '.term-alert-warning',
    danger: '.term-alert-danger',
  };

  const selector = targets[type];
  const target = selector
    ? document.querySelector(`#alertVariantsCard ${selector}`)
    : null;

  if (!target) {
    flashVariants();
    return;
  }

  target.classList.remove('term-alert-flash');
  void target.offsetWidth;
  target.classList.add('term-alert-flash');
  window.setTimeout(() => {
    target.classList.remove('term-alert-flash');
  }, 720);
}

function previewPrimaryAlert() {
  flashAlertVariant('primary');
}

function previewToast(type, label) {
  window.TermAdmin.toast(`${label} alert preview.`, type);
}

onBeforeUnmount(() => {
  if (flashTimer) {
    window.clearTimeout(flashTimer);
  }
});
</script>

<template>
  <div
    v-if="subsection"
    class="term-alert term-alert-info term-mb-2"
  >
    Active subsection: <strong>{{ subsection.toUpperCase() }}</strong>
  </div>

  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
      <div
        id="alertVariantsCard"
        class="term-card"
        :class="{ 'term-card-flash': variantsFlash }"
      >
        <div class="term-card-header term-card-header-warning">
          <span class="term-card-title">ALERT_VARIANTS</span>
        </div>
        <div class="term-card-body">
          <div class="term-alert term-alert-primary term-mb-2">Primary alert example.</div>
          <div class="term-alert term-alert-info term-mb-2">Info alert example.</div>
          <div class="term-alert term-alert-success term-mb-2">Success alert example.</div>
          <div class="term-alert term-alert-warning term-mb-2">Warning alert example.</div>
          <div class="term-alert term-alert-danger">Danger alert example.</div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-info">
          <span class="term-card-title">ALERT_ACTIONS</span>
        </div>
        <div class="term-card-body">
          <p class="term-mb-2">
            Alert dipakai untuk status penting, pesan validasi, dan notifikasi ringan.
          </p>
          <div class="term-alert-actions term-component-palette">
            <button class="term-btn term-btn-view" type="button" @click="previewPrimaryAlert">
              SHOW_PRIMARY
            </button>
            <button class="term-btn term-btn-success" type="button" @click="flashAlertVariant('success')">
              SHOW_SUCCESS
            </button>
            <button class="term-btn term-btn-warning" type="button" @click="flashAlertVariant('warning')">
              SHOW_WARNING
            </button>
            <button class="term-btn term-btn-danger" type="button" @click="flashAlertVariant('danger')">
              SHOW_DANGER
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="term-card term-mb-3">
    <div class="term-card-header term-card-header-success">
      <span class="term-card-title">TOAST_ANIMATION</span>
    </div>
    <div class="term-card-body">
      <p class="term-mb-2">
        Klik tombol di bawah untuk melihat toast muncul dengan animasi slide-in dari kanan bawah.
      </p>
      <div class="term-alert-actions term-component-palette term-mb-2">
        <button class="term-btn term-btn-view" type="button" @click="previewToast('info', 'Toast info')">
          PLAY_INFO
        </button>
        <button class="term-btn term-btn-success" type="button" @click="previewToast('success', 'Toast success')">
          PLAY_SUCCESS
        </button>
        <button class="term-btn term-btn-warning" type="button" @click="previewToast('warning', 'Toast warning')">
          PLAY_WARNING
        </button>
      </div>
      <div class="term-alert term-alert-info term-mb-2">
        Animasi toast sudah bawaan runtime, jadi cukup panggil <code>window.TermAdmin.toast()</code> dari tombol atau handler lain.
      </div>
    </div>
  </div>

  <div class="term-card">
    <div class="term-card-header term-card-header-warning">
      <span class="term-card-title">INSTALLATION</span>
    </div>
    <div class="term-card-body">
      <p class="term-mb-2">Cara pemasangan tombol alert/toast:</p>
      <pre class="term-card term-bg-neutral term-p-3 term-mb-2"><code>&lt;button class="term-btn term-btn-view" type="button"
        @click="previewPrimaryAlert"&gt;
  SHOW_PRIMARY
&lt;/button&gt;

&lt;button class="term-btn term-btn-success" type="button"
        @click="flashAlertVariant('success')"&gt;
  SHOW_SUCCESS
&lt;/button&gt;</code></pre>
      <p class="term-mb-2">
        Tombol alert menyorot masing-masing kotak <code>term-alert term-alert-*</code> di panel sebelah. Tombol toast hanya menampilkan toast tanpa animasi alert.
      </p>
      <pre class="term-card term-bg-neutral term-p-3"><code>&lt;script defer src="core/js/term-admin.js"&gt;&lt;/script&gt;
&lt;button class="term-btn term-btn-view" type="button" @click="previewPrimaryAlert"&gt;
  SHOW_PRIMARY
&lt;/button&gt;
&lt;button class="term-btn term-btn-warning" type="button" @click="flashAlertVariant('warning')"&gt;
  SHOW_WARNING
&lt;/button&gt;</code></pre>
    </div>
  </div>
</template>
