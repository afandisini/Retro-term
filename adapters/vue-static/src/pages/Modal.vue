<script setup>
function openModal(id) {
  window.TermAdmin.openModal(id);
}

function closeModal(id) {
  window.TermAdmin.closeModal(id);
}
</script>

<template>
  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-warning">
          <span class="term-card-title">MODAL_VARIANTS</span>
        </div>
        <div class="term-card-body">
          <p class="term-mb-2">
            Demo modal ini menampilkan tiga ukuran: medium, extra large, dan fullscreen. Semua body modal dapat di-scroll tanpa mengganggu layout utama.
          </p>

          <div class="term-card-tools term-component-palette">
            <button class="term-btn term-btn-view" type="button" @click="openModal('modalDemoMd')">OPEN_MD</button>
            <button class="term-btn term-btn-success" type="button" @click="openModal('modalDemoXl')">OPEN_XL</button>
            <button class="term-btn term-btn-danger" type="button" @click="openModal('modalDemoFullscreen')">OPEN_FULLSCREEN</button>
          </div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-info">
          <span class="term-card-title">INSTALLATION</span>
        </div>
        <div class="term-card-body">
          <p class="term-mb-2">Pola dasar untuk memanggil modal:</p>
          <pre class="term-card term-bg-neutral term-p-3 term-mb-2"><code>&lt;button class="term-btn term-btn-view" type="button" @click="window.TermAdmin.openModal('modalDemoMd')"&gt;
  OPEN_MD
&lt;/button&gt;</code></pre>
          <p class="term-mb-2">Pakai class tambahan di dialog untuk ukuran yang berbeda:</p>
          <pre class="term-card term-bg-neutral term-p-3"><code>&lt;div class="term-modal-dialog term-modal-dialog-xl"&gt;
  &lt;div class="term-modal-body"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>

  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-4 term-mb-2">
      <div class="term-card">
        <div class="term-card-header">
          <span class="term-card-title">SCROLL_RULES</span>
        </div>
        <div class="term-card-body">
          <div class="term-alert term-alert-info term-mb-2">
            Header dan footer tetap terlihat, body modal yang bergulir.
          </div>
          <div class="term-alert term-alert-success term-mb-2">
            Cocok untuk form, detail data, dan preview dokumen.
          </div>
          <div class="term-alert term-alert-warning">
            Fullscreen dipakai untuk ruang kerja yang butuh fokus.
          </div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-8 term-mb-2">
      <div class="term-card">
        <div class="term-card-header">
          <span class="term-card-title">MODAL_CONTENT_PREVIEW</span>
        </div>
        <div class="term-card-body">
          <div class="term-small-box term-mb-2">
            <div class="term-stat-label">BODY STYLE</div>
            <div class="term-stat-value">Scrollable</div>
            <div class="term-stat-note">Konten panjang tetap aman di dalam modal.</div>
          </div>
          <div class="term-info-box">
            <div class="term-stat-label">RECOMMENDATION</div>
            <div class="term-stat-value">MD / XL / FULL</div>
            <div class="term-stat-note">Pilih ukuran berdasarkan beban konten, bukan sekadar tampilan.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    id="modalDemoMd"
    class="term-modal-overlay"
    aria-hidden="true"
    data-term-action="close-modal"
    data-term-target="modalDemoMd"
  >
    <div
      class="term-modal-dialog term-modal-dialog-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalDemoMdTitle"
    >
      <div class="term-modal-header">
        <span id="modalDemoMdTitle">MODAL_MD</span>
        <button class="term-btn term-btn-icon term-btn-close" type="button" aria-label="Close modal" @click="closeModal('modalDemoMd')">
          <i class="term-icon term-icon-close" aria-hidden="true" />
        </button>
      </div>

      <div class="term-modal-body">
        <p class="term-mb-2">Medium modal cocok untuk form singkat dan konfirmasi cepat.</p>
        <div class="term-form-group term-mb-2">
          <label class="term-form-label" for="modalName">NAME</label>
          <input id="modalName" class="term-form-control" type="text" placeholder="Enter name" />
        </div>
        <div class="term-form-group">
          <label class="term-form-label" for="modalNotes">NOTES</label>
          <textarea id="modalNotes" class="term-form-textarea" rows="4">Use this dialog for short workflows.</textarea>
        </div>
      </div>

      <div class="term-modal-footer">
        <button class="term-btn term-btn-secondary" type="button" @click="closeModal('modalDemoMd')">CLOSE</button>
        <button class="term-btn term-btn-success" type="button" @click="window.TermAdmin.toast('Medium modal saved.', 'success')">SAVE</button>
      </div>
    </div>
  </div>

  <div
    id="modalDemoXl"
    class="term-modal-overlay"
    aria-hidden="true"
    data-term-action="close-modal"
    data-term-target="modalDemoXl"
  >
    <div
      class="term-modal-dialog term-modal-dialog-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalDemoXlTitle"
    >
      <div class="term-modal-header">
        <span id="modalDemoXlTitle">MODAL_XL</span>
        <button class="term-btn term-btn-icon term-btn-close" type="button" aria-label="Close modal" @click="closeModal('modalDemoXl')">
          <i class="term-icon term-icon-close" aria-hidden="true" />
        </button>
      </div>

      <div class="term-modal-body">
        <div class="term-row">
          <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
            <div class="term-small-box">
              <div class="term-stat-label">OVERVIEW</div>
              <div class="term-stat-value">Large workspace</div>
              <div class="term-stat-note">Body modal bisa bergulir saat konten panjang.</div>
            </div>
          </div>
          <div class="term-col term-col-12 term-col-lg-6 term-mb-2">
            <div class="term-info-box">
              <div class="term-stat-label">STATUS</div>
              <div class="term-stat-value">Ready</div>
              <div class="term-stat-note">Header dan footer tetap stabil.</div>
            </div>
          </div>
        </div>

        <div class="term-table-responsive term-mt-2">
          <table class="term-table term-table-bordered term-table-hover">
            <thead>
              <tr>
                <th>SECTION</th>
                <th>TYPE</th>
                <th>NOTE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Profile</td>
                <td>Form</td>
                <td>Short input flow</td>
              </tr>
              <tr>
                <td>Access</td>
                <td>Confirmation</td>
                <td>Security check</td>
              </tr>
              <tr>
                <td>Preview</td>
                <td>Scrollable</td>
                <td>Document or media detail</td>
              </tr>
              <tr>
                <td>Audit</td>
                <td>History</td>
                <td>Activity trace</td>
              </tr>
              <tr>
                <td>Review</td>
                <td>Notes</td>
                <td>Editor feedback</td>
              </tr>
              <tr>
                <td>Export</td>
                <td>Action</td>
                <td>Generate output</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="term-mt-2 term-stat-note">
          Scroll behavior matters more than width. Keep the modal body flexible and let the content define the height.
        </p>
      </div>

      <div class="term-modal-footer">
        <button class="term-btn term-btn-secondary" type="button" @click="closeModal('modalDemoXl')">CLOSE</button>
        <button class="term-btn term-btn-view" type="button" @click="window.TermAdmin.toast('XL modal exported.', 'info')">EXPORT</button>
      </div>
    </div>
  </div>

  <div
    id="modalDemoFullscreen"
    class="term-modal-overlay"
    aria-hidden="true"
    data-term-action="close-modal"
    data-term-target="modalDemoFullscreen"
  >
    <div
      class="term-modal-dialog term-modal-dialog-fullscreen"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalDemoFullscreenTitle"
    >
      <div class="term-modal-header">
        <span id="modalDemoFullscreenTitle">MODAL_FULLSCREEN</span>
        <button class="term-btn term-btn-icon term-btn-close" type="button" aria-label="Close modal" @click="closeModal('modalDemoFullscreen')">
          <i class="term-icon term-icon-close" aria-hidden="true" />
        </button>
      </div>

      <div class="term-modal-body">
        <div class="term-row">
          <div class="term-col term-col-12 term-col-lg-4 term-mb-2">
            <div class="term-filemanager-preview">
              <div class="term-stat-label">CONTROL</div>
              <div class="term-stat-value">Fullscreen</div>
              <div class="term-stat-note">Cocok untuk viewer detail atau wizard panjang.</div>
            </div>
          </div>
          <div class="term-col term-col-12 term-col-lg-8 term-mb-2">
            <div class="term-filemanager-preview">
              <div class="term-filemanager-preview-list">
                <div v-for="step in 8" :key="step" class="term-filemanager-preview-item">
                  <span>Workflow step {{ step }}</span>
                  <span class="term-filemanager-chip term-bg-neutral">SCROLL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="term-card term-mt-2">
          <div class="term-card-body">
            <p class="term-mb-2">
              Fullscreen modal digunakan saat kebutuhan detail membutuhkan ruang penuh tanpa gangguan sidebar atau layout lain.
            </p>
            <p class="term-stat-note">
              Konten di dalam modal tetap bisa di-scroll karena body modal dipisahkan dari header dan footer.
            </p>
          </div>
        </div>
      </div>

      <div class="term-modal-footer">
        <button class="term-btn term-btn-secondary" type="button" @click="closeModal('modalDemoFullscreen')">CLOSE</button>
        <button class="term-btn term-btn-danger" type="button" @click="window.TermAdmin.toast('Fullscreen modal finished.', 'success')">FINISH</button>
      </div>
    </div>
  </div>
</template>
