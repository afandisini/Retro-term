<script setup>
defineProps({
  subsection: {
    type: String,
    default: '',
  },
});

function showToast(message, type) {
  window.TermAdmin.toast(message, type);
}
</script>

<template>
  <div
    v-if="subsection"
    class="term-alert term-alert-info"
  >
    Active subsection: <strong>{{ subsection.toUpperCase() }}</strong>
  </div>

  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-6">
      <div class="term-card">
        <div class="term-card-header">
          <span class="term-card-title">BUTTON_VARIANTS</span>
        </div>
        <div class="term-card-body">
          <div class="term-card-tools term-component-palette">
            <button class="term-btn" type="button" @click="showToast('Primary button clicked.', 'info')">PRIMARY</button>
            <button class="term-btn term-btn-secondary" type="button">SECONDARY</button>
            <button class="term-btn term-btn-success" type="button">SUCCESS</button>
            <button class="term-btn term-btn-info" type="button">INFO</button>
            <button class="term-btn term-btn-warning" type="button">WARNING</button>
            <button class="term-btn term-btn-danger" type="button">DANGER</button>
          </div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-6">
      <div class="term-card">
        <div class="term-card-header">
          <span class="term-card-title">ALERT_VARIANTS</span>
        </div>
        <div class="term-card-body">
          <div class="term-alert term-alert-primary">Primary alert example.</div>
          <div class="term-alert term-alert-info">Info alert example.</div>
          <div class="term-alert term-alert-success">Success alert example.</div>
          <div class="term-alert term-alert-warning">Warning alert example.</div>
          <div class="term-alert term-alert-danger">Danger alert example.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-5">
      <div class="term-card">
        <div class="term-card-header">
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

    <div class="term-col term-col-12 term-col-lg-7">
      <div class="term-card">
        <div class="term-card-header">
          <span class="term-card-title">CARDS_AND_BOXES</span>
          <div class="term-card-tools">
            <button
              class="term-btn term-btn-tool term-btn-view"
              type="button"
              @click="showToast('Opening component toast demo.', 'success')"
            >
              TOAST
            </button>
            <button
              class="term-btn term-btn-tool term-btn-edit"
              type="button"
              @click="window.TermAdmin.openModal('componentsDemoModal')"
            >
              MODAL
            </button>
          </div>
        </div>

        <div class="term-card-body">
          <div class="term-row">
            <div class="term-col term-col-12 term-col-md-6">
              <div class="term-small-box">
                <div class="term-stat-label">SMALL BOX</div>
                <div class="term-stat-value">48</div>
                <div class="term-stat-note">compact summary</div>
              </div>
            </div>
            <div class="term-col term-col-12 term-col-md-6">
              <div class="term-info-box">
                <div class="term-stat-label">INFO BOX</div>
                <div class="term-stat-value">12</div>
                <div class="term-stat-note">detailed summary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    id="componentsDemoModal"
    class="term-modal-overlay"
    aria-hidden="true"
    data-term-action="close-modal"
    data-term-target="componentsDemoModal"
  >
    <div
      class="term-modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="componentsDemoTitle"
    >
      <div class="term-modal-header">
        <span id="componentsDemoTitle">COMPONENT_MODAL</span>
        <button
          class="term-btn term-btn-icon term-btn-close"
          type="button"
          aria-label="Close modal"
          @click="window.TermAdmin.closeModal('componentsDemoModal')"
        >
          <i class="term-icon term-icon-close" aria-hidden="true" />
        </button>
      </div>

      <div class="term-modal-body">
        <p>This modal is driven by the shared core helper, not Vue state.</p>
      </div>

      <div class="term-modal-footer">
        <button
          class="term-btn term-btn-secondary"
          type="button"
          @click="window.TermAdmin.closeModal('componentsDemoModal')"
        >
          CLOSE
        </button>
      </div>
    </div>
  </div>
</template>
