(function () {
  function hasChildren(item) {
    return !!(item && item.children && item.children.length);
  }

  function isHeader(item) {
    return !!item && item.type === 'header';
  }

  function hasActiveDescendant(item, activeId) {
    if (!hasChildren(item)) {
      return false;
    }

    return item.children.some((child) => {
      if (child.id === activeId) {
        return true;
      }

      return hasActiveDescendant(child, activeId);
    });
  }

  function renderMenuItem(item, activeId, resolveHref) {
    if (isHeader(item)) {
      return `<div class="term-menu-header">${item.label}</div>`;
    }

    if (hasChildren(item)) {
      const isOpen = hasActiveDescendant(item, activeId);
      return `
        <div class="term-menu-group${isOpen ? ' term-menu-open' : ''}">
          <button class="term-menu-item term-menu-link${isOpen ? ' term-menu-active term-open-menu' : ''}" type="button" data-term-action="toggle-menu-group" aria-expanded="${isOpen ? 'true' : 'false'}">
            <i class="term-icon term-icon-${item.icon} term-menu-icon" aria-hidden="true"></i>
            <span class="term-menu-text">${item.label}</span>
            <i class="term-icon term-icon-chevron-right term-menu-arrow" aria-hidden="true"></i>
          </button>
          <div class="term-menu-tree">
            ${item.children.map((child) => renderMenuItem(child, activeId, resolveHref)).join('')}
          </div>
        </div>`;
    }

    const isActive = item.id === activeId;
    const activeClass = isActive ? ' term-menu-active' : '';
    const current = isActive ? ' aria-current="page"' : '';
    const actionAttr = item.action ? ` data-term-action="${item.action}"` : '';
    const targetAttr = item.target ? ` data-term-target="${item.target}"` : '';
    const href = item.href ? resolveHref(item) : '#';

    return `
      <a class="term-menu-item term-menu-link term-menu-tree-item${activeClass}" href="${href}"${current}${actionAttr}${targetAttr}>
        <i class="term-icon term-icon-${item.icon} term-menu-icon" aria-hidden="true"></i>
        <span class="term-menu-text">${item.label}</span>
      </a>`;
  }

  function renderSidebar(menu, activeId, resolveHref, footerText) {
    return `
      <aside class="term-sidebar" aria-label="Main navigation">
        <nav class="term-menu">
          ${menu.map((item) => renderMenuItem(item, activeId, resolveHref)).join('')}
        </nav>
        ${renderFooter(footerText)}
      </aside>`;
  }

  function renderHeader(options) {
    const config = Object.assign(
      {
        mode: 'dashboard',
        brand: 'Retro-term',
        subtext: 'v2.0',
        userName: 'Sigianto',
      },
      options || {},
    );

    const isDemo = config.mode === 'demo';
    const searchMarkup = `
      <button class="term-btn term-btn-icon term-btn-search" type="button" data-term-action="open-modal" data-term-target="searchModal" aria-label="Search">
        <i class="term-icon term-icon-search" aria-hidden="true"></i>
      </button>`;

    const notificationFooter = isDemo
      ? '<span>All Notifications</span>'
      : '<a href="example/alert.html">All Notidications</a>';

    const userAction = 'data-term-action="toggle-dropdown"';

    return `
      <div class="term-nav-left">
        <button class="term-btn term-btn-icon" type="button" data-term-action="toggle-sidebar" aria-label="Toggle sidebar">
          <i class="term-icon term-icon-menu" aria-hidden="true"></i>
        </button>
        <div class="term-brand">
          <span>${config.brand}</span>
          <span class="term-brand-subtext">${config.subtext}</span>
        </div>
      </div>

      <div class="term-status-bar" aria-label="System status">
        <button class="term-btn term-btn-icon term-btn-theme" type="button" data-term-theme-toggle="true" data-term-action="toggle-theme" aria-label="Toggle theme">
          <i class="term-icon term-icon-moon" aria-hidden="true"></i>
        </button>

        ${searchMarkup}

        <div class="term-dropdown" data-term-dropdown>
          <button class="term-btn term-btn-icon term-btn-notification" type="button" data-term-action="toggle-dropdown" aria-label="Notifications">
            <i class="term-icon term-icon-notification-fill" aria-hidden="true"></i>
          </button>
          <div class="term-dropdown-menu term-dropdown-menu-notification" role="menu" aria-label="Notifications">
            <button class="term-dropdown-item" type="button">
              <i class="term-icon term-icon-info term-menu-icon" aria-hidden="true"></i>
              <span class="term-menu-text">System backup completed</span>
            </button>
            <button class="term-dropdown-item" type="button">
              <i class="term-icon term-icon-warning term-menu-icon" aria-hidden="true"></i>
              <span class="term-menu-text">High CPU usage detected</span>
            </button>
            <button class="term-dropdown-item" type="button">
              <i class="term-icon term-icon-success-circle term-menu-icon" aria-hidden="true"></i>
              <span class="term-menu-text">New user registered</span>
            </button>
            <button class="term-dropdown-item" type="button">
              <i class="term-icon term-icon-activity term-menu-icon" aria-hidden="true"></i>
              <span class="term-menu-text">Deployment finished</span>
            </button>
            <button class="term-dropdown-item" type="button">
              <i class="term-icon term-icon-bug term-menu-icon" aria-hidden="true"></i>
              <span class="term-menu-text">Security scan running</span>
            </button>
            <div class="term-dropdown-footer">
              ${notificationFooter}
            </div>
          </div>
        </div>

        <div class="term-dropdown" data-term-dropdown>
          <button class="term-btn term-btn-user" type="button" ${userAction} aria-label="User menu">
            <i class="term-icon term-icon-person-circle" aria-hidden="true"></i>
            <span>${config.userName}</span>
          </button>
          <div class="term-dropdown-menu term-dropdown-menu-user" role="menu" aria-label="User menu">
            <button class="term-dropdown-item" type="button">
              <i class="term-icon term-icon-user" aria-hidden="true"></i>
              <span>Profile</span>
            </button>
            <button class="term-dropdown-item" type="button" data-term-action="open-modal" data-term-target="logoutModal">
              <i class="term-icon term-icon-logout" aria-hidden="true"></i>
              <span>Logout</span>
            </button>
          </div>
        </div>

        <span id="clock" data-term-clock="true">00:00:00</span>
      </div>`;
  }

  function renderFooter(text) {
    return `<footer class="term-footer term-sidebar-footer">${text || 'Retro-term / SYS.ADMIN interface / build v2.0'}</footer>`;
  }

  function renderSearchModal() {
    return `
      <div class="term-modal-overlay" id="searchModal" aria-hidden="true" data-term-action="close-modal" data-term-target="searchModal">
        <div class="term-modal-dialog term-modal-lg" role="dialog" aria-modal="true" aria-labelledby="searchTitle">
          <div class="term-modal-header">
            <span id="searchTitle">SEARCH</span>
            <button class="term-btn term-btn-icon term-btn-close" type="button" data-term-action="close-modal" data-term-target="searchModal" aria-label="Close modal">
              <i class="term-icon term-icon-close" aria-hidden="true"></i>
            </button>
          </div>
          <div class="term-modal-body">
            <div class="term-form-group">
              <label class="term-form-label" for="searchQuery">SEARCH QUERY</label>
              <input id="searchQuery" class="term-form-control" type="text" placeholder="Type to search...">
            </div>
          </div>
          <div class="term-modal-footer">
            <button class="term-btn term-btn-view" type="button" data-term-action="run-search">
              <i class="term-icon term-icon-search" aria-hidden="true"></i>
              SEARCH
            </button>
          </div>
        </div>
      </div>`;
  }

  function renderLogoutModal() {
    return `
      <div class="term-modal-overlay" id="logoutModal" aria-hidden="true" data-term-action="close-modal" data-term-target="logoutModal">
        <div class="term-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="logoutTitle">
          <div class="term-modal-header term-modal-header-danger">
            <span id="logoutTitle">Logout</span>
            <button class="term-btn term-btn-icon term-btn-close" type="button" data-term-action="close-modal" data-term-target="logoutModal" aria-label="Close modal">
              <i class="term-icon term-icon-close" aria-hidden="true"></i>
            </button>
          </div>
          <div class="term-modal-body">
            <p>Are you sure you want to terminate the session?</p>
            <p style="color:var(--term-muted); font-size:12px; margin-top:10px;">Unsaved data will be lost.</p>
          </div>
          <div class="term-modal-footer">
            <button class="term-btn term-btn-secondary" type="button" data-term-action="close-modal" data-term-target="logoutModal">CANCEL</button>
            <button class="term-btn term-btn-delete" type="button" data-term-action="confirm-logout">
              <i class="term-icon term-icon-logout-box" aria-hidden="true"></i>
              CONFIRM
            </button>
          </div>
        </div>
      </div>`;
  }

  function startClock(selector) {
    const clock = document.querySelector(selector || '[data-term-clock="true"], #clock');
    if (!clock || clock.dataset.termClockBound === 'true') {
      return;
    }

    const update = () => {
      clock.textContent = new Date().toLocaleTimeString('en-GB');
    };

    clock.dataset.termClockBound = 'true';
    update();
    window.setInterval(update, 1000);
  }

  function mountLayout(options) {
    const config = Object.assign(
      {
        mode: 'dashboard',
        headerSelector: '.term-header',
        sidebarSelector: '.term-sidebar',
        sidebarMountSelector: '#demoSidebarMount',
        menu: [],
        activeId: 'dashboard',
        resolveHref: (item) => item.href || '#',
        footerText: 'Retro-term / SYS.ADMIN interface / build v2.0',
      },
      options || {},
    );

    const header = document.querySelector(config.headerSelector);
    if (header) {
      header.innerHTML = renderHeader(config);
    }

    const sidebarHost = document.querySelector(config.sidebarSelector) || document.querySelector(config.sidebarMountSelector);
    if (sidebarHost && config.menu.length) {
      sidebarHost.innerHTML = renderSidebar(config.menu, config.activeId, config.resolveHref, config.footerText);
    }

    if (!document.getElementById('searchModal')) {
      const wrapper = document.querySelector('.term-wrapper');
      if (wrapper) {
        wrapper.insertAdjacentHTML('beforeend', renderSearchModal());
      }
    }

    if (!document.getElementById('logoutModal')) {
      const wrapper = document.querySelector('.term-wrapper');
      if (wrapper) {
        wrapper.insertAdjacentHTML('beforeend', renderLogoutModal());
      }
    }

    startClock();
  }

  window.TermLayout = {
    renderHeader,
    renderSidebar,
    renderFooter,
    renderSearchModal,
    renderLogoutModal,
    startClock,
    mountLayout,
  };
})();

