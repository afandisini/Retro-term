<script setup>
defineProps({
  subsection: {
    type: String,
    default: '',
  },
});

const columns = [
  { label: 'COL 3', value: '25%' },
  { label: 'COL 3', value: '25%' },
  { label: 'COL 3', value: '25%' },
  { label: 'COL 3', value: '25%' },
];
</script>

<template>
  <div
    v-if="subsection"
    class="term-alert term-alert-info term-mb-2"
  >
    Active subsection: <strong>{{ subsection.toUpperCase() }}</strong>
  </div>

  <div class="term-card term-mb-3">
    <div class="term-card-header term-card-header-primary">
      <span class="term-card-title">GRID_SYSTEM</span>
    </div>
    <div class="term-card-body">
      <div class="term-row term-mb-2">
        <div
          v-for="column in columns"
          :key="column.label + column.value"
          class="term-col term-col-12 term-col-md-6 term-col-lg-3 term-mb-2"
        >
          <div class="term-card term-bg-neutral">
            <div class="term-card-body">
              <div class="term-stat-label">{{ column.label }}</div>
              <div class="term-stat-value">{{ column.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="term-row">
        <div class="term-col term-col-12 term-col-lg-8 term-mb-2">
          <div class="term-card term-bg-info">
            <div class="term-card-body">
              <div class="term-stat-label">WIDE COLUMN</div>
              <div class="term-stat-note">Gunakan kombinasi term-col-*-* untuk layout responsif.</div>
            </div>
          </div>
        </div>
        <div class="term-col term-col-12 term-col-lg-4 term-mb-2">
          <div class="term-card term-bg-success">
            <div class="term-card-body">
              <div class="term-stat-label">NARROW COLUMN</div>
              <div class="term-stat-note">Layout tetap rapih di desktop dan mobile.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="term-card">
    <div class="term-card-header term-card-header-info">
      <span class="term-card-title">GRID_NOTE</span>
    </div>
    <div class="term-card-body">
      <p class="term-mb-2">
        Grid demo ini pakai class bawaan framework, jadi bisa langsung dipakai ulang di halaman lain.
      </p>
      <div class="term-alert term-alert-warning">
        Kalau ingin kombinasi yang lebih kompleks, tetap pakai pola <code>term-row</code> dan <code>term-col</code>.
      </div>
    </div>
  </div>
</template>
