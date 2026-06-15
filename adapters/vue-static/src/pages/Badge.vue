<script setup>
defineProps({
  subsection: {
    type: String,
    default: '',
  },
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
    <div class="term-col term-col-12 term-col-lg-5 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-info">
          <span class="term-card-title">BADGE_VARIANTS</span>
        </div>
        <div class="term-card-body">
          <div class="term-component-badges">
            <span class="term-badge term-badge-primary">DEFAULT</span>
            <span class="term-badge term-badge-info">INFO</span>
            <span class="term-badge term-badge-success">SUCCESS</span>
            <span class="term-badge term-badge-warning">WARNING</span>
            <span class="term-badge term-badge-danger">DANGER</span>
          </div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-7 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-primary">
          <span class="term-card-title">BADGE_USAGE</span>
        </div>
        <div class="term-card-body">
          <div class="term-row">
            <div class="term-col term-col-12 term-col-md-6 term-mb-2">
              <div class="term-card term-bg-neutral">
                <div class="term-card-body">
                  <div class="term-stat-label">TASKS</div>
                  <div class="term-stat-value">12 <span class="term-badge term-badge-success">LIVE</span></div>
                  <div class="term-stat-note">Badge dapat dipasang di status summary.</div>
                </div>
              </div>
            </div>
            <div class="term-col term-col-12 term-col-md-6 term-mb-2">
              <div class="term-card term-bg-neutral">
                <div class="term-card-body">
                  <div class="term-stat-label">NOTIFICATIONS</div>
                  <div class="term-stat-value">07 <span class="term-badge term-badge-warning">NEW</span></div>
                  <div class="term-stat-note">Cocok untuk penanda cepat di navigasi.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
