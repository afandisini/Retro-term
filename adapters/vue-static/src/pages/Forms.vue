<script setup>
defineProps({
  subsection: {
    type: String,
    default: '',
  },
});

function submitForm() {
  window.TermAdmin.toast('Form submitted.', 'success');
}
</script>

<template>
  <div
    v-if="subsection"
    class="term-alert term-alert-info term-mb-2"
  >
    Active subsection: <strong>{{ subsection.toUpperCase() }}</strong>
  </div>

  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-7 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-success">
          <span class="term-card-title">FORM_DEMO</span>
        </div>

        <div class="term-card-body">
          <form @submit.prevent="submitForm">
            <div class="term-form-group term-mb-2">
              <label class="term-form-label" for="fullName">FULL_NAME</label>
              <input id="fullName" class="term-form-control term-is-valid" type="text" value="Afan Dev" />
              <small class="term-form-help term-form-help-success">Valid input example.</small>
            </div>

            <div class="term-form-group term-mb-2">
              <label class="term-form-label" for="email">EMAIL</label>
              <input id="email" class="term-form-control" type="email" value="afan@example.dev" />
            </div>

            <div class="term-form-group term-mb-2">
              <label class="term-form-label" for="secretKey">SECRET_KEY</label>
              <input id="secretKey" class="term-form-control term-is-invalid" type="password" value="retro-terminal" />
              <small class="term-form-help term-form-help-danger">Invalid input example.</small>
            </div>

            <div class="term-form-group term-mb-2">
              <label class="term-form-label" for="environment">ENVIRONMENT</label>
              <select id="environment" class="term-form-select">
                <option>development</option>
                <option>staging</option>
                <option selected>production</option>
              </select>
            </div>

            <div class="term-form-group term-mb-2">
              <label class="term-checkline">
                <input class="term-checkline-input" type="checkbox" checked />
                <span class="term-checkline-box"></span>
                <span class="term-checkline-label">ENABLE_BACKUP</span>
              </label>
            </div>

            <div class="term-form-group">
              <label class="term-switch">
                <input class="term-switch-input" type="checkbox" checked />
                <span class="term-switch-track">
                  <span class="term-switch-thumb"></span>
                </span>
                <span class="term-switch-label">REMOTE_ACCESS</span>
              </label>
            </div>

            <div class="term-card-footer term-dashboard-actions">
              <button class="term-btn term-btn-success" type="submit">SAVE</button>
              <button
                class="term-btn term-btn-secondary"
                type="button"
                @click="window.TermAdmin.toast('Draft cleared.', 'warning')"
              >
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-5 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-info">
          <span class="term-card-title">FORM_HELPERS</span>
        </div>

        <div class="term-card-body">
          <div class="term-alert term-alert-info term-mb-2">
            Use <code>term-form-control</code> with state classes for validation feedback.
          </div>

          <div class="term-alert term-alert-success term-mb-2">
            The switch and checkbox controls remain fully static and require no plugin.
          </div>

          <div class="term-alert term-alert-warning">
            These controls are styled with the shared core CSS, not Vue-specific CSS.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

