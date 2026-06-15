<script setup>
defineProps({
  subsection: {
    type: String,
    default: '',
  },
});

const timelineGroups = [
  {
    date: '10 Feb. 2023',
    dateClass: '',
    items: [
      {
        tone: 'term-timeline-marker-blue',
        icon: 'term-icon-users',
        actor: 'Support Team',
        action: 'sent you an email',
        time: '12:05',
        body: 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babbely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...',
        actions: [
          { label: 'Read more', tone: 'term-btn-view' },
          { label: 'Delete', tone: 'term-btn-delete' },
        ],
      },
      {
        tone: 'term-timeline-marker-green',
        icon: 'term-icon-user',
        actor: 'Sarah Young',
        action: 'accepted your friend request',
        time: '5 mins ago',
        body: 'Request approved and synced to the active contact list.',
        actions: [],
      },
      {
        tone: 'term-timeline-marker-amber',
        icon: 'term-icon-activity',
        actor: 'Jay White',
        action: 'commented on your post',
        time: '27 mins ago',
        body: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!',
        actions: [{ label: 'View comment', tone: 'term-btn-warning' }],
      },
    ],
  },
  {
    date: '3 Jan. 2023',
    dateClass: 'term-timeline-date-success',
    items: [
      {
        tone: 'term-timeline-marker-cyan',
        icon: 'term-icon-activity',
        actor: 'Mina Lee',
        action: 'uploaded new photos',
        time: '2 days ago',
        body: 'New gallery assets are available in the archive.',
        photos: ['Photo 01', 'Photo 02', 'Photo 03'],
      },
    ],
  },
];
</script>

<template>
  <div
    v-if="subsection"
    class="term-alert term-alert-info term-mb-2"
  >
    Active subsection: <strong>{{ subsection.toUpperCase() }}</strong>
  </div>

  <div class="term-row">
    <div class="term-col term-col-12 term-col-lg-8 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-info">
          <span class="term-card-title">TIMELINE_FEED</span>
          <span class="term-card-tools">Activity log</span>
        </div>
        <div class="term-card-body">
          <div class="term-timeline-shell">
            <div
              v-for="group in timelineGroups"
              :key="group.date"
              class="term-timeline-group"
            >
              <div
                class="term-timeline-date"
                :class="group.dateClass"
              >
                {{ group.date }}
              </div>

              <div class="term-timeline-list">
                <article
                  v-for="item in group.items"
                  :key="`${group.date}-${item.time}-${item.actor}`"
                  class="term-timeline-item"
                >
                  <div
                    class="term-timeline-marker"
                    :class="item.tone"
                  >
                    <i
                      class="term-icon"
                      :class="item.icon"
                      aria-hidden="true"
                    />
                  </div>

                  <div class="term-timeline-card">
                    <div class="term-timeline-card-header">
                      <div>
                        <span class="term-timeline-card-title">{{ item.actor }}</span>
                        <span> {{ item.action }}</span>
                      </div>
                      <div class="term-timeline-card-meta">
                        <i class="term-icon term-icon-clock" aria-hidden="true" />
                        <span>{{ item.time }}</span>
                      </div>
                    </div>

                    <div class="term-timeline-card-body">
                      <p>{{ item.body }}</p>

                      <div
                        v-if="item.actions && item.actions.length"
                        class="term-timeline-actions"
                      >
                        <button
                          v-for="action in item.actions"
                          :key="action.label"
                          class="term-btn"
                          :class="action.tone"
                          type="button"
                        >
                          {{ action.label }}
                        </button>
                      </div>

                      <div
                        v-if="item.photos && item.photos.length"
                        class="term-timeline-photos"
                      >
                        <div
                          v-for="photo in item.photos"
                          :key="photo"
                          class="term-timeline-photo"
                        >
                          {{ photo }}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="term-col term-col-12 term-col-lg-4 term-mb-2">
      <div class="term-card">
        <div class="term-card-header term-card-header-warning">
          <span class="term-card-title">TIMELINE_NOTE</span>
        </div>
        <div class="term-card-body">
          <p class="term-mb-2">
            Timeline cocok untuk aktivitas user, notifikasi, dan ringkasan status dalam format kronologis.
          </p>
          <div
            class="term-card-footer term-timeline-actions"
            style="padding-left:0;padding-right:0;border-top:0;"
          >
            <button class="term-btn term-btn-view" type="button">
              VIEW_ALL
            </button>
            <button class="term-btn term-btn-success" type="button">
              EXPORT
            </button>
          </div>
          <div class="term-alert term-alert-info term-mt-2">
            Konsep baru memakai jalur vertikal, badge tanggal, dan card putih dengan aksen warna.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
