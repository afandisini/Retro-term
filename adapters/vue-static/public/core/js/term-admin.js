(() => {
  const STORAGE_THEME = 'term-theme';
  const STORAGE_SIDEBAR = 'term-sidebar-state';
  const VALID_THEME = new Set(['dark', 'light', 'retro', 'amber', 'matrix']);
  const VALID_SIDEBAR = new Set(['expanded', 'open', 'collapse']);

  const state = {
    initialized: false,
    bound: false,
    theme: 'dark',
    sidebar: 'expanded',
  };

  function body() {
    return document.body;
  }

  function root() {
    return document.documentElement;
  }

  function getStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function setStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage errors in restricted browsers.
    }
  }

  function dispatch(name, detail) {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  }

  function syncThemeToggleButtons(theme) {
    const isLight = theme === 'light';
    document.querySelectorAll('[data-term-theme-toggle="true"]').forEach((button) => {
      const icon = button.querySelector('.term-icon');
      if (icon) {
        icon.className = `term-icon ${isLight ? 'term-icon-sun' : 'term-icon-moon'}`;
      }

      const label = button.querySelector('.term-theme-label');
      if (label) {
        label.textContent = isLight ? 'LIGHT' : 'DARK';
      }

      button.setAttribute('aria-pressed', String(isLight));
      button.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    });
  }

  function normalizeTheme(theme) {
    return VALID_THEME.has(theme) ? theme : 'dark';
  }

  function normalizeSidebar(stateValue) {
    return VALID_SIDEBAR.has(stateValue) ? stateValue : 'expanded';
  }

  function applyTheme(theme, persist = true) {
    const nextTheme = normalizeTheme(theme);
    state.theme = nextTheme;
    root().setAttribute('data-term-theme', nextTheme);
    body().setAttribute('data-term-theme', nextTheme);
    syncThemeToggleButtons(nextTheme);

    if (persist) {
      setStorage(STORAGE_THEME, nextTheme);
    }

    dispatch('term-theme-change', { theme: nextTheme });
    return nextTheme;
  }

  function setSidebarClasses(nextState) {
    const currentBody = body();
    currentBody.classList.remove('term-sidebar-open', 'term-sidebar-collapse');

    if (nextState === 'open') {
      currentBody.classList.add('term-sidebar-open');
    }

    if (nextState === 'collapse') {
      currentBody.classList.add('term-sidebar-collapse');
    }
  }

  function closeDropdowns() {
    document.querySelectorAll('[data-term-dropdown]').forEach((dropdown) => {
      dropdown.classList.remove('term-is-open');
    });
  }

  function applySidebar(stateValue, persist = true) {
    const nextState = normalizeSidebar(stateValue);
    state.sidebar = nextState;
    setSidebarClasses(nextState);

    if (persist) {
      setStorage(STORAGE_SIDEBAR, nextState);
    }

    dispatch('term-sidebar-change', { state: nextState });
    return nextState;
  }

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function initTheme(defaultTheme = 'dark') {
    const savedThemeRaw = getStorage(STORAGE_THEME);
    const savedTheme = savedThemeRaw && VALID_THEME.has(savedThemeRaw) ? savedThemeRaw : '';
    const currentThemeRaw = root().getAttribute('data-term-theme') || body().getAttribute('data-term-theme') || '';
    const currentTheme = currentThemeRaw && VALID_THEME.has(currentThemeRaw) ? currentThemeRaw : '';
    const nextTheme = savedTheme || currentTheme || normalizeTheme(defaultTheme);
    return applyTheme(nextTheme, true);
  }

  function setTheme(theme) {
    return applyTheme(theme, true);
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    return applyTheme(nextTheme, true);
  }

  function initSidebar(defaultState = 'expanded') {
    const savedStateRaw = getStorage(STORAGE_SIDEBAR);
    const savedState = savedStateRaw && VALID_SIDEBAR.has(savedStateRaw) ? savedStateRaw : '';
    const nextState = savedState || normalizeSidebar(defaultState);
    return applySidebar(nextState, true);
  }

  function setSidebar(stateValue) {
    return applySidebar(stateValue, true);
  }

  function toggleSidebar() {
    if (isMobile()) {
      const nextState = state.sidebar === 'open' ? 'expanded' : 'open';
      return applySidebar(nextState, true);
    }

    if (state.sidebar === 'expanded') {
      return applySidebar('collapse', true);
    }

    return applySidebar('expanded', true);
  }

  function closeSidebar() {
    return applySidebar('expanded', true);
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) {
      return false;
    }

    modal.classList.add('term-is-active');
    modal.setAttribute('aria-hidden', 'false');
    dispatch('term-modal-open', { id });

    if (id === 'searchModal') {
      const input = modal.querySelector('#searchQuery');
      if (input && typeof input.focus === 'function') {
        window.setTimeout(() => input.focus(), 0);
      }
    }

    const autofocus = modal.querySelector('[autofocus], [data-term-autofocus]');
    if (autofocus && typeof autofocus.focus === 'function') {
      window.setTimeout(() => autofocus.focus(), 0);
    }

    return true;
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) {
      return false;
    }

    modal.classList.remove('term-is-active');
    modal.setAttribute('aria-hidden', 'true');
    dispatch('term-modal-close', { id });
    return true;
  }

  function closeAllModals() {
    document.querySelectorAll('.term-modal-overlay.term-is-active').forEach((modal) => {
      modal.classList.remove('term-is-active');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  function getToastArea() {
    let area = document.querySelector('[data-term-toast-area]');
    if (area) {
      return area;
    }

    area = document.createElement('div');
    area.className = 'term-toast-container';
    area.setAttribute('data-term-toast-area', 'true');
    area.setAttribute('aria-live', 'polite');
    area.setAttribute('aria-atomic', 'true');
    body().appendChild(area);
    return area;
  }

  function toast(message, type = 'info') {
    const area = getToastArea();
    const item = document.createElement('div');
    item.className = `term-toast term-toast-${type}`;
    item.textContent = message;
    area.appendChild(item);

    window.setTimeout(() => {
      item.style.opacity = '0';
      item.style.transition = 'opacity 0.3s ease';
      window.setTimeout(() => item.remove(), 300);
    }, 3000);

    dispatch('term-toast', { message, type });
    return item;
  }

  function handleAction(event) {
    const target = event.target.closest('[data-term-action]');
    if (!target) {
      return;
    }

    const action = target.getAttribute('data-term-action');
    const targetId = target.getAttribute('data-term-target');
    const toastMessage = target.getAttribute('data-term-message') || 'Action triggered.';

    if (target.tagName === 'A') {
      event.preventDefault();
    }

    if (action === 'toggle-sidebar') {
      toggleSidebar();
      return;
    }

    if (action === 'toggle-dropdown') {
      const dropdown = target.closest('[data-term-dropdown]');
      if (!dropdown) {
        return;
      }

      const willOpen = !dropdown.classList.contains('term-is-open');
      closeDropdowns();
      if (willOpen) {
        dropdown.classList.add('term-is-open');
      }
      return;
    }

    if (action === 'toggle-menu-group') {
      const group = target.closest('.term-menu-group');
      if (group) {
        const willOpen = !group.classList.contains('term-menu-open');
        group.classList.toggle('term-menu-open', willOpen);
        target.classList.toggle('term-open-menu', willOpen);
        target.setAttribute('aria-expanded', String(willOpen));
      }
      return;
    }

    if (action === 'toggle-theme') {
      toggleTheme();
      return;
    }

    if (action === 'open-modal') {
      openModal(targetId);
      return;
    }

    if (action === 'close-modal') {
      closeModal(targetId);
      return;
    }

    if (action === 'close-all-modals') {
      closeAllModals();
      return;
    }

    if (action === 'run-search') {
      const query = document.getElementById('searchQuery');
      const message = query && query.value ? `Search: ${query.value}` : 'Search query is empty.';
      toast(message, 'info');
      closeModal('searchModal');
      return;
    }

    if (action === 'confirm-logout') {
      closeModal('logoutModal');
      toast('Session terminated.', 'warning');
      return;
    }

    if (action === 'toast') {
      toast(toastMessage, target.getAttribute('data-term-type') || 'info');
      return;
    }

    if (action === 'toast-success') {
      toast(toastMessage, 'success');
      return;
    }

    if (action === 'toast-warning') {
      toast(toastMessage, 'warning');
      return;
    }

    if (action === 'toast-danger') {
      toast(toastMessage, 'danger');
      return;
    }
  }

  function handleEscape(event) {
    if (event.key !== 'Escape') {
      return;
    }

    closeAllModals();
    closeDropdowns();
    if (isMobile()) {
      body().classList.remove('term-sidebar-open');
      state.sidebar = 'expanded';
      setStorage(STORAGE_SIDEBAR, 'expanded');
    }
  }

  function bindActions() {
    if (state.bound) {
      return;
    }

    document.addEventListener('click', handleAction);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', (event) => {
      if (!event.target.closest('[data-term-dropdown]')) {
        closeDropdowns();
      }
    });
    state.bound = true;
  }

  function init(defaultTheme = 'dark', defaultSidebar = 'expanded') {
    if (state.initialized) {
      return {
        theme: state.theme,
        sidebar: state.sidebar,
      };
    }

    bindActions();
    initTheme(defaultTheme);
    initSidebar(defaultSidebar);
    state.initialized = true;

    return {
      theme: state.theme,
      sidebar: state.sidebar,
    };
  }

  const api = {
    initTheme,
    setTheme,
    toggleTheme,
    initSidebar,
    setSidebar,
    toggleSidebar,
    closeSidebar,
    openModal,
    closeModal,
    closeAllModals,
    toast,
    init,
  };

  window.TermAdmin = api;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }
})();

