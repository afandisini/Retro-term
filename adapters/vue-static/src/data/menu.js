export const menu = [
  {
    type: 'header',
    label: '// MAIN',
  },
  {
    label: 'Dashboard',
    icon: 'term-icon-dashboard',
    path: '#/dashboard',
  },
  {
    type: 'header',
    label: '// CONTENT',
  },
  {
    label: 'Element UI',
    icon: 'term-icon-window',
    children: [
      {
        label: 'Cards',
        icon: 'term-icon-card-list',
        path: '#/components/cards',
      },
      {
        label: 'Table',
        icon: 'term-icon-table',
        path: '#/tables',
      },
      {
        label: 'Form',
        icon: 'term-icon-sliders',
        path: '#/forms',
      },
      {
        label: 'Alert',
        icon: 'term-icon-warning',
        path: '#/components/alerts',
      },
      {
        label: 'Badge',
        icon: 'term-icon-info',
        path: '#/components/badges',
      },
      {
        label: 'Modal',
        icon: 'term-icon-fullscreen',
        path: '#/modal',
      },
      {
        label: 'Media Object',
        icon: 'term-icon-folder-open',
        path: '#/mediaobject',
      },
      {
        label: 'Grid',
        icon: 'term-icon-grid',
        path: '#/components/grid',
      },
      {
        label: 'Timeline',
        icon: 'term-icon-activity',
        path: '#/components/timeline',
      },
    ],
  },
  {
    type: 'header',
    label: '// AUTH',
  },
  {
    label: 'Login',
    icon: 'term-icon-login',
    path: '#/login',
  },
];
