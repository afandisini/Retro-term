<script setup>
import TermThemeToggle from '../components/TermThemeToggle.vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'retro',
  },
});

function submitLogin() {
  window.TermAdmin.toast('Login demo submitted.', 'success');
}
</script>

<template>
  <main class="term-login-shell term-p-4" style="min-height:100vh; width:100%;">
    <div class="term-login-panel" style="width:min(500px, 100%); margin:0 auto;">
      <div class="term-login-hero term-py-4">
        <div class="term-brand term-login-brand term-mb-2" style="justify-content:center;">
          <span>Retro-term</span>
        </div>
        <p class="term-login-copy" style="text-align:center;">
          Sign in to start your session
        </p>
      </div>

      <section class="term-card term-login-card term-mb-2">
        <div class="term-card-header">
          <span class="term-card-title">SIGN IN</span>
          <TermThemeToggle
            :theme="props.theme"
            compact
          />
        </div>
        <div class="term-card-body">
          <form @submit.prevent="submitLogin">
            <div class="term-form-group term-mb-2">
              <label class="term-form-label" for="loginEmail">Email</label>
              <div class="term-input-group">
                <input id="loginEmail" class="term-form-control" type="email" placeholder="Email" />
                <span class="term-input-addon">
                  <i class="term-icon term-icon-user" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div class="term-form-group term-mb-2">
              <label class="term-form-label" for="loginPass">Password</label>
              <div class="term-input-group">
                <input id="loginPass" class="term-form-control" type="password" placeholder="Password" />
                <span class="term-input-addon">
                  <i class="term-icon term-icon-login" aria-hidden="true" />
                </span>
              </div>
            </div>

            <div class="term-row term-mb-2">
              <div class="term-col term-col-6">
                <label class="term-checkline">
                  <input class="term-checkline-input" type="checkbox" checked />
                  <span class="term-checkline-box" />
                  <span class="term-checkline-label">Remember Me</span>
                </label>
              </div>

              <div class="term-col term-col-6" style="text-align:right;">
                <button class="term-btn term-btn-success" type="submit">Sign In</button>
              </div>
            </div>

            <div class="term-mb-2" style="text-align:center; color:var(--term-muted);">
              - OR -
            </div>

            <div class="term-dashboard-mini term-mb-2">
              <button class="term-btn term-btn-view term-mb-2" type="button" @click="window.TermAdmin.toast('Facebook login is a dummy action.', 'info')">
                <i class="term-icon term-icon-users" aria-hidden="true" />
                Sign in using Facebook
              </button>
              <button class="term-btn term-btn-danger" type="button" @click="window.TermAdmin.toast('Google login is a dummy action.', 'danger')">
                <i class="term-icon term-icon-cloud" aria-hidden="true" />
                Sign in using Google
              </button>
            </div>

            <div class="term-login-links term-mb-2">
              <a href="#" class="term-form-label term-mb-2" style="display:block;">I forgot my password</a>
              <a href="#" class="term-form-label" style="display:block;">Register a new membership</a>
            </div>

            <div class="term-card-footer term-login-actions term-px-0 term-pb-0 term-mt-2">
              <a class="term-btn term-btn-secondary" href="#/dashboard">Back to Dashboard</a>
            </div>
          </form>
        </div>
      </section>
    </div>
  </main>
</template>
