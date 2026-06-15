<script setup>
const stats = [
  { label: '150', title: 'NEW ORDERS', icon: 'term-icon-chart-bar', tone: 'blue', footer: 'More info' },
  { label: '53%', title: 'BOUNCE RATE', icon: 'term-icon-person-plus', tone: 'green', footer: 'More info' },
  { label: '44', title: 'USER REGISTRATIONS', icon: 'term-icon-users', tone: 'amber', footer: 'More info' },
  { label: '65', title: 'UNIQUE VISITORS', icon: 'term-icon-chart-pie', tone: 'red', footer: 'More info' },
];

const salesSeries = [
  { month: "Jan '23", sales: 28, salesHeight: '28%', value: '28', visitors: 64, visitorsHeight: '64%' },
  { month: "Feb '23", sales: 46, salesHeight: '46%', value: '46', visitors: 59, visitorsHeight: '59%' },
  { month: "Mar '23", sales: 40, salesHeight: '40%', value: '40', visitors: 80, visitorsHeight: '80%' },
  { month: "Apr '23", sales: 18, salesHeight: '18%', value: '18', visitors: 81, visitorsHeight: '81%' },
  { month: "May '23", sales: 86, salesHeight: '86%', value: '86', visitors: 56, visitorsHeight: '56%' },
  { month: "Jun '23", sales: 27, salesHeight: '27%', value: '27', visitors: 55, visitorsHeight: '55%' },
  { month: "Jul '23", sales: 90, salesHeight: '90%', value: '90', visitors: 40, visitorsHeight: '40%' },
];

const quickStats = [
  { label: 'Visitors', value: '1,230', icon: 'term-icon-users' },
  { label: 'Online', value: '324', icon: 'term-icon-activity' },
  { label: 'Sales', value: '14.8K', icon: 'term-icon-chart-bar' },
  { label: 'Conversion', value: '12.4%', icon: 'term-icon-chart-pie' },
];

const activity = [
  { label: 'Server uptime', value: '99.98%' },
  { label: 'Orders processed', value: '4,320' },
  { label: 'New accounts', value: '123 today' },
  { label: 'Alerts resolved', value: '18' },
];

function showToast(message) {
  window.TermAdmin.toast(message, 'info');
}
</script>

<template>
  <div class="term-row term-dashboard-stats term-mb-3">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="term-col term-col-12 term-col-md-6 term-col-lg-3 term-mb-2"
    >
      <div class="term-dashboard-stat" :class="`term-dashboard-stat-${stat.tone}`">
        <div class="term-dashboard-stat-value">{{ stat.label }}</div>
        <div class="term-dashboard-stat-label">{{ stat.title }}</div>
        <div class="term-dashboard-stat-meta">
          <i class="term-icon" :class="stat.icon" aria-hidden="true" />
        </div>
        <div class="term-dashboard-stat-footer">
          {{ stat.footer }} <i class="term-icon term-icon-chevron-right" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>

  <div class="term-row">
    <div class="term-col term-col-6 term-col-lg-6 term-mb-2">
      <div class="term-card term-dashboard-panel">
        <div class="term-card-header">
          <span class="term-card-title">SALES_VALUE</span>
          <div class="term-card-tools">
            <button class="term-btn term-btn-tool term-btn-view" type="button" @click="showToast('Sales chart refreshed.')">
              <i class="term-icon term-icon-refresh" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div class="term-card-body term-dashboard-chart">
          <p class="term-stat-note">Monthly trend for sales and visits.</p>
          <div class="term-dashboard-chart-axis">
            <div
              v-for="item in salesSeries"
              :key="item.month"
              class="term-dashboard-chart-column"
            >
              <div class="term-dashboard-chart-value">{{ item.visitors }}</div>
              <div class="term-dashboard-chart-bar term-dashboard-chart-bar-blue" :style="{ height: item.salesHeight }" />
              <div class="term-dashboard-chart-bar term-dashboard-chart-bar-green" :style="{ height: item.visitorsHeight, width: '30%', left: '70%' }" />
              <div class="term-dashboard-chart-label">{{ item.month }}</div>
            </div>
          </div>
          <div class="term-dashboard-legend">
            <span class="term-dashboard-legend-item">
              <span class="term-dashboard-legend-swatch" style="color:#0c84ff;background:#0c84ff"></span>
              Sales
            </span>
            <span class="term-dashboard-legend-item">
              <span class="term-dashboard-legend-swatch" style="color:#18c98a;background:#18c98a"></span>
              Visitors
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-6 term-col-lg-6 term-mb-2">
      <div class="term-card term-dashboard-panel">
        <div class="term-card-header">
          <span class="term-card-title">TRAFFIC_PULSE</span>
          <div class="term-card-tools">
            <button class="term-btn term-btn-tool term-btn-view" type="button" @click="showToast('Traffic pulse updated.')">
              <i class="term-icon term-icon-activity" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div class="term-card-body">
          <div class="term-dashboard-mini">
            <div
              v-for="item in quickStats"
              :key="item.label"
              class="term-dashboard-mini-item"
            >
              <div class="term-dashboard-mini-name">
                <i class="term-icon" :class="item.icon" aria-hidden="true" />
                <span>{{ item.label }}</span>
              </div>
              <div class="term-dashboard-mini-value">{{ item.value }}</div>
            </div>
          </div>

          <div class="term-card-footer term-dashboard-actions" style="padding-left:0;padding-right:0;border-top:0;margin-top:16px;">
            <button class="term-btn term-btn-success" type="button" @click="showToast('Live data synced.', 'success')">SYNC</button>
            <button class="term-btn term-btn-secondary" type="button" @click="showToast('Export prepared.', 'warning')">EXPORT</button>
          </div>

          <div style="margin-top:18px;">
            <div
              v-for="item in activity"
              :key="item.label"
              class="term-dashboard-mini-item"
              style="margin-bottom:10px;"
            >
              <div class="term-dashboard-mini-name">
                <i class="term-icon term-icon-info" aria-hidden="true" />
                <span>{{ item.label }}</span>
              </div>
              <div class="term-dashboard-mini-value">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
