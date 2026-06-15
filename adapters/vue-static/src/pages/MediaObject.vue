<script setup>
import { computed, ref, watch } from 'vue';

const folders = [
  { name: 'Projects', count: '12 items', active: true },
  { name: 'Assets', count: '28 items' },
  { name: 'Documents', count: '15 items' },
  { name: 'Media', count: '22 items' },
  { name: 'Archive', count: '06 items' },
];

const files = [
  {
    name: 'brand-guideline.docx',
    type: 'DOCX',
    size: '2.4 MB',
    updated: 'Today 09:12',
    owner: 'Design',
    tone: 'term-bg-info',
  },
  {
    name: 'sales-report.xlsx',
    type: 'XLSX',
    size: '1.1 MB',
    updated: 'Today 08:40',
    owner: 'Finance',
    tone: 'term-bg-success',
  },
  {
    name: 'product-showcase.png',
    type: 'IMG',
    size: '4.8 MB',
    updated: 'Yesterday 16:25',
    owner: 'Marketing',
    tone: 'term-bg-warning',
  },
  {
    name: 'promo-reel.mp4',
    type: 'VIDEO',
    size: '128 MB',
    updated: '2 days ago',
    owner: 'Media',
    tone: 'term-bg-danger',
  },
  {
    name: 'whitepaper.pdf',
    type: 'PDF',
    size: '3.2 MB',
    updated: '3 days ago',
    owner: 'Docs',
    tone: 'term-bg-primary',
  },
  {
    name: 'backup-archive.zip',
    type: 'ZIP',
    size: '24 MB',
    updated: '1 week ago',
    owner: 'Ops',
    tone: 'term-bg-neutral',
  },
];

const selectedFile = ref(files[0]);
const query = ref('');
const page = ref(1);
const pageSize = 3;

const filteredFiles = computed(() => {
  const needle = query.value.trim().toLowerCase();
  if (!needle) {
    return files;
  }

  return files.filter((file) => (
    [file.name, file.type, file.size, file.updated, file.owner]
      .join(' ')
      .toLowerCase()
      .includes(needle)
  ));
});

const totalPages = computed(() => Math.max(1, Math.ceil(filteredFiles.value.length / pageSize)));

const currentPage = computed(() => Math.min(page.value, totalPages.value));

const paginatedFiles = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredFiles.value.slice(start, start + pageSize);
});

const tableInfo = computed(() => {
  const total = filteredFiles.value.length;
  if (!total) {
    return 'Showing 0-0 of 0 entries';
  }

  const start = (currentPage.value - 1) * pageSize + 1;
  const end = Math.min(start + pageSize - 1, total);
  return `Showing ${start}-${end} of ${total} entries`;
});

const pageInfoText = computed(() => `Page ${currentPage.value} of ${totalPages.value} | ${pageSize} rows per page`);

const selectedSummary = computed(() => [
  ['Type', selectedFile.value.type],
  ['Size', selectedFile.value.size],
  ['Owner', selectedFile.value.owner],
  ['Updated', selectedFile.value.updated],
]);

watch(query, () => {
  page.value = 1;
});

watch(filteredFiles, () => {
  page.value = Math.min(page.value, totalPages.value);
});

function selectFile(file) {
  selectedFile.value = file;
  window.TermAdmin.toast(`Selected ${file.name}.`, 'info');
}

function openFolder(folderName) {
  window.TermAdmin.toast(`Open folder ${folderName}.`, 'success');
}

function setPage(nextPage) {
  page.value = Math.min(Math.max(1, nextPage), totalPages.value);
}
</script>

<template>
  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-info">
          <span class="term-card-title">FILEMANAGER_OVERVIEW</span>
        </div>
        <div class="term-card-body">
          <p class="term-mb-2">
            MediaObject di demo ini dibuat seperti explorer, tetapi tetap memakai bahasa visual terminal.
            Folder ada di kiri, daftar file di tengah, dan preview detail di kanan.
          </p>
          <div class="term-card-tools term-component-palette">
            <button class="term-btn term-btn-view" type="button" @click="window.TermAdmin.toast('Upload action is a demo.', 'info')">UPLOAD</button>
            <button class="term-btn term-btn-success" type="button" @click="window.TermAdmin.toast('New folder created.', 'success')">NEW_FOLDER</button>
            <button class="term-btn term-btn-warning" type="button" @click="window.TermAdmin.toast('Refresh explorer.', 'warning')">REFRESH</button>
          </div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-success">
          <span class="term-card-title">INSTALLATION</span>
        </div>
        <div class="term-card-body">
          <p class="term-mb-2">Struktur dasar filemanager:</p>
          <pre class="term-card term-bg-neutral term-p-3 term-mb-2"><code>&lt;div class="term-filemanager"&gt;
  &lt;aside class="term-filemanager-sidebar"&gt;...&lt;/aside&gt;
  &lt;section class="term-filemanager-main"&gt;...&lt;/section&gt;
&lt;/div&gt;</code></pre>
          <p class="term-mb-2">Gunakan <code>term-table</code> untuk daftar data standar, lengkap dengan search dan pagination.</p>
          <pre class="term-card term-bg-neutral term-p-3"><code>&lt;table class="term-table term-table-bordered term-table-hover"&gt;
  &lt;thead&gt;...&lt;/thead&gt;
  &lt;tbody&gt;...&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>

  <div class="term-card term-mb-3">
    <div class="term-card-header">
      <span class="term-card-title">FILE_EXPLORER</span>
    </div>
    <div class="term-card-body">
      <div class="term-filemanager">
        <aside class="term-filemanager-sidebar">
          <div class="term-filemanager-tree">
              <button
              v-for="folder in folders"
              :key="folder.name"
              class="term-filemanager-tree-item"
              :class="{ 'term-is-active': folder.active }"
              type="button"
              @click="openFolder(folder.name)"
            >
              <i class="term-icon term-icon-folder-open" aria-hidden="true" />
              <span class="term-filemanager-name-text">{{ folder.name }}</span>
              <span class="term-stat-note">{{ folder.count }}</span>
            </button>
          </div>
        </aside>

        <section class="term-filemanager-main">
          <div class="term-filemanager-toolbar">
            <div class="term-filemanager-path" aria-label="Current path">
              <span>home</span>
              <span>/</span>
              <span>workspace</span>
              <span>/</span>
              <span>release</span>
            </div>
            <div class="term-card-tools">
              <button class="term-btn term-btn-tool term-btn-view" type="button">SORT</button>
              <button class="term-btn term-btn-tool term-btn-secondary" type="button">FILTER</button>
            </div>
          </div>

          <div class="term-table-toolbar">
            <div class="term-table-search">
              <input
                v-model="query"
                class="term-form-control"
                type="search"
                placeholder="Search files"
              >
              <i class="term-icon term-icon-search term-table-search-icon" aria-hidden="true" />
            </div>
            <div class="term-table-info">{{ tableInfo }}</div>
          </div>

          <div class="term-table-responsive term-table-responsive-stack">
            <table class="term-table term-table-bordered term-table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Updated</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="file in paginatedFiles"
                  :key="file.name"
                  :class="{ 'term-is-active': selectedFile.name === file.name }"
                  @click="selectFile(file)"
                >
                  <td data-label="Name">
                    <span class="term-filemanager-name">
                      <i class="term-icon term-icon-file term-filemanager-icon" aria-hidden="true" />
                      <span class="term-filemanager-name-text">{{ file.name }}</span>
                    </span>
                  </td>
                  <td data-label="Type">
                    <span class="term-filemanager-chip" :class="file.tone">{{ file.type }}</span>
                  </td>
                  <td data-label="Size">{{ file.size }}</td>
                  <td data-label="Updated">{{ file.updated }}</td>
                  <td data-label="Owner">{{ file.owner }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="term-table-page">
            <div class="term-table-info">{{ pageInfoText }}</div>
            <div class="term-pagination" aria-label="Media object pagination">
              <button
                class="term-btn term-btn-secondary term-pagination-button"
                type="button"
                :disabled="currentPage === 1"
                @click="setPage(currentPage - 1)"
              >
                Prev
              </button>
              <button
                v-for="n in totalPages"
                :key="n"
                class="term-btn term-pagination-button"
                :class="n === currentPage ? 'term-is-active' : 'term-btn-secondary'"
                type="button"
                @click="setPage(n)"
              >
                {{ n }}
              </button>
              <button
                class="term-btn term-btn-secondary term-pagination-button"
                type="button"
                :disabled="currentPage === totalPages"
                @click="setPage(currentPage + 1)"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div class="term-card term-mb-3">
      <div class="term-card-header term-card-header-warning">
        <span class="term-card-title">PREVIEW_PANEL</span>
      </div>
      <div class="term-card-body">
        <div class="term-filemanager-preview">
          <div class="term-filemanager-preview-list">
            <div class="term-filemanager-preview-item">
              <span class="term-filemanager-name">
                <i class="term-icon term-icon-file term-filemanager-icon" aria-hidden="true" />
                <span class="term-filemanager-name-text">{{ selectedFile.name }}</span>
              </span>
              <span class="term-filemanager-chip" :class="selectedFile.tone">{{ selectedFile.type }}</span>
            </div>

            <div
              v-for="item in selectedSummary"
              :key="item[0]"
              class="term-filemanager-preview-item"
            >
              <span>{{ item[0] }}</span>
              <span>{{ item[1] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

