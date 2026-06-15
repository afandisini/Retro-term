(() => {
  const pages = [
    { type: "header", label: "// DEMO_PAGES" },
    {
      id: "dashboard",
      label: "Dashboard",
      href: "dashboard.html",
      icon: "dashboard",
    },
    {
      id: "element-ui",
      label: "Element UI",
      icon: "window",
      children: [
        { id: "card", label: "card", href: "card.html", icon: "card-list" },
        { id: "table", label: "table", href: "table.html", icon: "table" },
        { id: "form", label: "form", href: "form.html", icon: "sliders" },
        { id: "alert", label: "alert", href: "alert.html", icon: "warning" },
        { id: "badge", label: "badge", href: "badge.html", icon: "info" },
        { id: "modal", label: "modal", href: "modal.html", icon: "fullscreen" },
        {
          id: "mediaobject",
          label: "mediaobject",
          href: "mediaobject.html",
          icon: "user",
        },
        { id: "grid", label: "grid", href: "grid.html", icon: "grid" },
        {
          id: "timeline",
          label: "timeline",
          href: "timeline.html",
          icon: "activity",
        },
        {
          id: "icons",
          label: "icons",
          href: "icons.html",
          icon: "diagram",
        },
      ],
    },
    {
      id: "shutdown",
      label: "Logout",
      href: "#",
      icon: "logout",
      action: "open-modal",
      target: "logoutModal",
    },
  ];

  function resolveHref(page) {
    return page.href || "#";
  }

  function renderFooter(text) {
    return `
      <footer class="term-footer term-sidebar-footer">${text || "Retro-term / SYS.ADMIN interface / build v2.0"}</footer>`;
  }

  function renderSidebar(activeId) {
    if (window.TermLayout) {
      return window.TermLayout.renderSidebar(
        pages,
        activeId,
        resolveHref,
        "Retro-term / SYS.ADMIN interface / build v2.0",
      );
    }

    return `
      <aside class="term-sidebar" aria-label="Main navigation">
        <nav class="term-menu">
          ${pages.map((page) => renderPage(page, activeId)).join("")}
        </nav>
        ${renderFooter("Retro-term / SYS.ADMIN interface / build v2.0")}
      </aside>`;
  }

  function renderSearchModal() {
    if (window.TermLayout && window.TermLayout.renderSearchModal) {
      return window.TermLayout.renderSearchModal();
    }

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
    if (window.TermLayout && window.TermLayout.renderLogoutModal) {
      return window.TermLayout.renderLogoutModal();
    }

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

  function renderHeader() {
    if (window.TermLayout) {
      return window.TermLayout.renderHeader({
        mode: "demo",
        brand: "Retro-term",
        subtext:
          document.body.getAttribute("data-demo-desc") || "component demo",
        userName: "Sigianto",
      });
    }

    return `
      <div class="term-nav-left">
        <button class="term-btn term-btn-icon" type="button" data-demo-action="toggle-sidebar" aria-label="Toggle sidebar">
          <i class="term-icon term-icon-menu" aria-hidden="true"></i>
        </button>
        <div class="term-brand">
          <span>Retro-term</span>
          <span class="term-brand-subtext">demo</span>
        </div>
      </div>

      <div class="term-status-bar" aria-label="System status">
        <button class="term-btn term-btn-icon term-btn-theme" type="button" data-demo-action="toggle-theme" aria-label="Toggle theme">
          <i class="term-icon term-icon-moon" aria-hidden="true"></i>
        </button>
        <span>DEMO</span>
      </div>`;
  }

  function renderPage(page, activeId) {
    if (page.type === "header") {
      return `<div class="term-menu-header">${page.label}</div>`;
    }

    if (page.children && page.children.length) {
      const isOpen = page.children.some((child) => child.id === activeId);
      return `
        <div class="term-menu-group${isOpen ? " term-menu-open" : ""}">
          <button class="term-menu-item term-menu-link${isOpen ? " term-menu-active term-open-menu" : ""}" type="button" data-demo-action="toggle-menu-group" aria-expanded="${isOpen ? "true" : "false"}">
            <i class="term-icon term-icon-${page.icon} term-menu-icon" aria-hidden="true"></i>
            <span class="term-menu-text">${page.label}</span>
            <i class="term-icon term-icon-chevron-right term-menu-arrow" aria-hidden="true"></i>
          </button>
          <div class="term-menu-tree">
            ${page.children.map((child) => renderPage(child, activeId)).join("")}
          </div>
        </div>`;
    }

    const isActive = page.id === activeId;
    const active = isActive ? " term-menu-active" : "";
    const current = isActive ? ' aria-current="page"' : "";
    const actionAttr = page.action ? ` data-demo-action="${page.action}"` : "";
    const targetAttr = page.target ? ` data-demo-target="${page.target}"` : "";
    const href = page.action ? "#" : page.href;

    return `
      <a class="term-menu-item term-menu-link term-menu-tree-item${active}" href="${href}"${current}${actionAttr}${targetAttr}>
        <i class="term-icon term-icon-${page.icon} term-menu-icon" aria-hidden="true"></i>
        <span class="term-menu-text">${page.label}</span>
      </a>`;
  }

  function closeDropdowns() {
    document
      .querySelectorAll("[data-demo-dropdown], [data-term-dropdown]")
      .forEach((dropdown) => {
        dropdown.classList.remove("term-is-open");
      });
  }

  function toggleSidebar() {
    if (window.TermAdmin) {
      window.TermAdmin.toggleSidebar();
      return;
    }

    const body = document.body;
    if (window.innerWidth <= 768) {
      body.classList.toggle("term-sidebar-open");
      return;
    }

    body.classList.toggle("term-sidebar-collapse");
  }

  function mountLayout(activeId) {
    const header = document.querySelector(".term-header");
    const mount = document.getElementById("demoSidebarMount");

    if (header) {
      header.innerHTML = renderHeader();
    }

    if (mount) {
      mount.innerHTML = renderSidebar(activeId);
    }

    if (window.TermLayout) {
      window.TermLayout.startClock();
      const wrapper = document.querySelector(".term-wrapper");
      if (wrapper && !document.getElementById("searchModal")) {
        wrapper.insertAdjacentHTML("beforeend", renderSearchModal());
      }
      if (wrapper && !document.getElementById("logoutModal")) {
        wrapper.insertAdjacentHTML("beforeend", renderLogoutModal());
      }
    } else {
      const clock = document.getElementById("clock");
      if (clock) {
        const update = () => {
          clock.textContent = new Date().toLocaleTimeString("en-GB");
        };
        update();
        window.setInterval(update, 1000);
      }
      const wrapper = document.querySelector(".term-wrapper");
      if (wrapper && !document.getElementById("searchModal")) {
        wrapper.insertAdjacentHTML("beforeend", renderSearchModal());
      }
      if (wrapper && !document.getElementById("logoutModal")) {
        wrapper.insertAdjacentHTML("beforeend", renderLogoutModal());
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const activeId =
      document.body.getAttribute("data-demo-active") || "dashboard";
    const title = document.getElementById("demoTitle");
    const subtitle = document.getElementById("demoSubtitle");

    mountLayout(activeId);

    if (title) {
      title.textContent = (
        document.body.getAttribute("data-demo-title") || activeId
      ).toUpperCase();
    }

    if (subtitle) {
      subtitle.textContent =
        document.body.getAttribute("data-demo-desc") || "component demo";
    }

    if (window.TermAdmin) {
      window.TermAdmin.init();
      const currentTheme =
        document.documentElement.getAttribute("data-term-theme") ||
        document.body.getAttribute("data-term-theme") ||
        "dark";
      window.TermAdmin.setTheme(currentTheme);
    }

    document
      .querySelectorAll('[data-demo-action="toggle-sidebar"]')
      .forEach((el) => {
        el.addEventListener("click", toggleSidebar);
      });

    document
      .querySelectorAll('[data-demo-action="toast-search"]')
      .forEach((el) => {
        el.addEventListener("click", () => {
          if (window.TermAdmin) {
            window.TermAdmin.toast(
              "Search feature is available in the Vue adapter.",
              "info",
            );
          }
        });
      });

    document
      .querySelectorAll('[data-demo-action="toast-shutdown"]')
      .forEach((el) => {
        el.addEventListener("click", () => {
          if (window.TermAdmin) {
            window.TermAdmin.toast("Logout is a demo action.", "warning");
          }
        });
      });

    document
      .querySelectorAll("[data-demo-dropdown-toggle]")
      .forEach((button) => {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          const dropdown = button.closest("[data-demo-dropdown]");
          const willOpen =
            dropdown && !dropdown.classList.contains("term-is-open");
          closeDropdowns();
          if (dropdown && willOpen) {
            dropdown.classList.add("term-is-open");
          }
        });
      });

    document.querySelectorAll(".term-menu-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (item.matches('[data-demo-action="toggle-menu-group"]')) {
          event.preventDefault();
          const group = item.closest(".term-menu-group");
          if (group) {
            group.classList.toggle("term-menu-open");
            item.setAttribute(
              "aria-expanded",
              group.classList.contains("term-menu-open") ? "true" : "false",
            );
          }
          return;
        }

        if (item.matches("[data-demo-action]")) {
          event.preventDefault();
          return;
        }

        if (window.innerWidth <= 768) {
          document.body.classList.remove("term-sidebar-open");
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (window.TermAdmin) {
          window.TermAdmin.closeAllModals();
          window.TermAdmin.closeSidebar();
        } else {
          document.body.classList.remove("term-sidebar-open");
          document.body.classList.remove("term-sidebar-collapse");
        }
        closeDropdowns();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !event.target.closest("[data-demo-dropdown]") &&
        !event.target.closest("[data-term-dropdown]")
      ) {
        closeDropdowns();
      }
    });
  });
})();
