<script setup>
const rows = [
  ['proc-001', 'nginx', 'RUNNING', 'frontend worker'],
  ['proc-002', 'php-fpm', 'RUNNING', 'app runtime'],
  ['proc-003', 'mysql', 'SLEEPING', 'database engine'],
  ['proc-004', 'cron', 'RUNNING', 'scheduler'],
];
</script>

<template>
  <div class="term-card">
    <div class="term-card-header">
      <span class="term-card-title">TABLE_VARIANTS</span>
      <div class="term-card-tools">
        <button class="term-btn term-btn-tool term-btn-view" type="button">EXPORT</button>
        <button class="term-btn term-btn-tool term-btn-delete" type="button">PURGE</button>
      </div>
    </div>

    <div class="term-card-body term-card-body-flush">
      <div class="term-table-responsive">
        <table class="term-table term-table-hover term-table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>SERVICE</th>
              <th>STATE</th>
              <th>NOTE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in rows"
              :key="row[0]"
            >
              <td>{{ row[0] }}</td>
              <td>{{ row[1] }}</td>
              <td>{{ row[2] }}</td>
              <td>{{ row[3] }}</td>
              <td>
                <div class="term-card-tools">
                  <button class="term-btn term-btn-tool term-btn-view" type="button">VIEW</button>
                  <button class="term-btn term-btn-tool term-btn-edit" type="button">EDIT</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
