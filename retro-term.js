(function () {
    const RT = window.RT || (window.RT = {});

    function isExternalUrl(value) {
        return /^(?:[a-z][a-z\d+\-.]*:|\/\/|#|mailto:|tel:|javascript:)/i.test(value || '');
    }

    function normalizeBaseUrl(value) {
        if (!value) return '';
        const trimmed = String(value).trim();
        if (!trimmed) return '';

        try {
            const parsed = new URL(trimmed, window.location.href);
            return parsed.href.replace(/[#?].*$/, '').replace(/\/?$/, '/');
        } catch {
            return trimmed.endsWith('/') ? trimmed : `${trimmed}/`;
        }
    }

    RT.config = RT.config || {};
    RT.config.baseUrl = normalizeBaseUrl(
        RT.config.baseUrl ||
        document.documentElement.getAttribute('data-base-url') ||
        window.RT_BASE_URL ||
        localStorage.getItem('rt-base-url') ||
        ''
    );

    RT.url = function (path) {
        if (!path || isExternalUrl(path)) return path;
        if (!RT.config.baseUrl) return path;

        try {
            return new URL(path, RT.config.baseUrl).href;
        } catch {
            return path;
        }
    };

    RT.baseUrl = function (path) {
        return RT.url(path);
    };

    RT.bindBaseUrls = function (root = document) {
        root.querySelectorAll('a[href]').forEach((el) => {
            const value = el.getAttribute('href');
            if (!value || isExternalUrl(value)) return;
            el.setAttribute('href', RT.url(value));
        });

        root.querySelectorAll('[data-rt-href]').forEach((el) => {
            const value = el.getAttribute('data-rt-href');
            if (value) el.setAttribute('href', RT.url(value));
        });

        root.querySelectorAll('[data-rt-src]').forEach((el) => {
            const value = el.getAttribute('data-rt-src');
            if (value) el.setAttribute('src', RT.url(value));
        });

        root.querySelectorAll('[data-rt-action]').forEach((el) => {
            const value = el.getAttribute('data-rt-action');
            if (value) el.setAttribute('action', RT.url(value));
        });
    };

    function initRetroTerm() {
        const html = document.documentElement;
        RT.bindBaseUrls();

        // ===== THEME TOGGLE =====
        const themeToggle = document.getElementById('themeToggle');
        const moonIcon = themeToggle?.querySelector('.moon-icon');
        const sunIcon = themeToggle?.querySelector('.sun-icon');

        function setTheme(theme) {
            html.setAttribute('data-theme', theme);
            localStorage.setItem('rt-theme', theme);

            if (!moonIcon || !sunIcon) return;
            if (theme === 'dark') {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        }

        setTheme(localStorage.getItem('rt-theme') || 'light');

        themeToggle?.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            setTheme(current === 'dark' ? 'light' : 'dark');
        });

        // ===== SIDEBAR TOGGLE (mobile) =====
        const menuBtn = document.getElementById('menuBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');

        menuBtn?.addEventListener('click', () => {
            sidebar?.classList.toggle('is-open');
            overlay?.classList.toggle('is-open');
        });

        overlay?.addEventListener('click', () => {
            sidebar?.classList.remove('is-open');
            overlay?.classList.remove('is-open');
        });

        // ===== SIDEBAR NAV ACTIVE =====
        function syncSidebarState() {
            const currentFile = window.location.pathname.split('/').pop()?.toLowerCase() || 'index.html';
            const navLinks = document.querySelectorAll('.rt-sbr_link');
            const childLinks = document.querySelectorAll('.nav-dropdown-item');
            const dropdowns = document.querySelectorAll('[data-nav-dropdown], .nav-dropdown');

            navLinks.forEach(link => link.classList.remove('is-active'));
            childLinks.forEach(child => child.classList.remove('is-active'));
            dropdowns.forEach(sd => {
                sd.classList.remove('is-open');
                sd.classList.remove('show');
            });

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (!href || href === '#') return;
                const target = href.split('/').pop()?.toLowerCase();
                if (target && target === currentFile) {
                    link.classList.add('is-active');
                }
            });

            childLinks.forEach(child => {
                const href = child.getAttribute('href');
                if (!href || href === '#') return;
                const target = href.split('/').pop()?.toLowerCase();
                if (target && target === currentFile) {
                    child.classList.add('is-active');
                    const parent = child.closest('[data-nav-dropdown], .nav-dropdown');
                    parent?.classList.add('is-open');
                }
            });
        }

        document.querySelectorAll('.rt-sbr_link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (!href || href === '#') return;
                document.querySelectorAll('.rt-sbr_link').forEach(l => l.classList.remove('is-active'));
                link.classList.add('is-active');
                if (window.innerWidth <= 1024) {
                    sidebar?.classList.remove('is-open');
                    overlay?.classList.remove('is-open');
                }
            });
        });

        // ===== SIDEBAR DROPDOWN (nav-dropdown) =====
        document.querySelectorAll('[data-nav-dropdown], .nav-dropdown').forEach(sd => {
            const trigger = sd.querySelector('.nav-dropdown-toggle');
            trigger?.addEventListener('click', (e) => {
                e.preventDefault();
                const willOpen = !sd.classList.contains('is-open');
                sd.classList.toggle('is-open', willOpen);
                sd.classList.toggle('show', willOpen);
            });
        });

        document.querySelectorAll('.nav-dropdown-item').forEach(child => {
            child.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    sidebar?.classList.remove('is-open');
                    overlay?.classList.remove('is-open');
                }
            });
        });

        // ===== DROPDOWN (dropdown) =====
        document.querySelectorAll('[data-dropdown], .dropdown').forEach(dd => {
            const trigger = dd.querySelector('[data-dropdown-trigger], .dropdown-toggle');
            trigger?.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('[data-dropdown], .dropdown').forEach(o => {
                    if (o !== dd) o.classList.remove('is-open');
                    if (o !== dd) o.classList.remove('show');
                });
                const willOpen = !dd.classList.contains('is-open');
                dd.classList.toggle('is-open', willOpen);
                dd.classList.toggle('show', willOpen);
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('[data-dropdown], .dropdown')) {
                document.querySelectorAll('[data-dropdown], .dropdown').forEach(dd => {
                    dd.classList.remove('is-open');
                    dd.classList.remove('show');
                });
            }
        });

        // ===== SEARCHABLE SELECTS =====
        function initSearchableSelects() {
            const selectNodes = document.querySelectorAll('select.rt-form-select');

            selectNodes.forEach((select, index) => {
                if (select.dataset.rtSelectReady === 'true' || select.multiple) return;
                select.dataset.rtSelectReady = 'true';

                const wrapper = document.createElement('div');
                wrapper.className = 'rt-select';

                const toggle = document.createElement('button');
                toggle.type = 'button';
                toggle.className = 'rt-select__toggle';
                toggle.setAttribute('aria-haspopup', 'listbox');
                toggle.setAttribute('aria-expanded', 'false');

                const value = document.createElement('span');
                value.className = 'rt-select__value';

                const caret = document.createElement('span');
                caret.className = 'rt-select__caret';
                caret.setAttribute('aria-hidden', 'true');

                toggle.append(value, caret);

                const menu = document.createElement('div');
                menu.className = 'rt-select__menu';
                menu.hidden = true;

                const search = document.createElement('div');
                search.className = 'rt-select__search';

                const searchIcon = document.createElement('span');
                searchIcon.className = 'rt-select__search-icon';
                searchIcon.setAttribute('aria-hidden', 'true');

                const searchInput = document.createElement('input');
                searchInput.type = 'search';
                searchInput.className = 'rt-select__search-input';
                searchInput.placeholder = select.getAttribute('data-search-placeholder') || 'Cari opsi...';
                searchInput.autocomplete = 'off';
                searchInput.spellcheck = false;

                search.append(searchIcon, searchInput);

                const list = document.createElement('div');
                list.className = 'rt-select__list';
                list.setAttribute('role', 'listbox');

                menu.append(search, list);

                select.parentNode.insertBefore(wrapper, select);
                wrapper.append(select, toggle);
                document.body.appendChild(menu);
                select.classList.add('rt-select__native');

                let isOpen = false;
                let lastScrollX = window.scrollX;
                let lastScrollY = window.scrollY;

                function positionMenu() {
                    if (menu.hidden) return;
                    const rect = toggle.getBoundingClientRect();
                    const gap = 8;
                    const viewportPadding = 12;
                    const minWidth = 180;
                    const desiredWidth = Math.max(rect.width, minWidth);
                    const maxWidth = Math.max(0, window.innerWidth - viewportPadding * 2);
                    const width = Math.min(desiredWidth, maxWidth || desiredWidth);
                    const left = Math.min(
                        Math.max(viewportPadding, rect.left),
                        Math.max(viewportPadding, window.innerWidth - width - viewportPadding)
                    );
                    const spaceBelow = window.innerHeight - rect.bottom - gap - viewportPadding;
                    const spaceAbove = rect.top - gap - viewportPadding;
                    const openUp = spaceBelow < 220 && spaceAbove > spaceBelow;
                    const top = openUp
                        ? Math.max(viewportPadding, rect.top - gap)
                        : Math.min(window.innerHeight - viewportPadding, rect.bottom + gap);

                    menu.style.position = 'fixed';
                    menu.style.left = `${left}px`;
                    menu.style.top = openUp ? `${top}px` : `${top}px`;
                    menu.style.width = `${width}px`;
                    menu.style.maxWidth = `${maxWidth || width}px`;
                    menu.style.transform = openUp ? 'translateY(-100%)' : 'none';
                    menu.dataset.position = openUp ? 'top' : 'bottom';
                }

                function getSelectedLabel() {
                    const selected = select.options[select.selectedIndex];
                    if (!selected) return select.getAttribute('data-placeholder') || 'Pilih opsi';
                    const text = (selected.textContent || '').trim();
                    return text || select.getAttribute('data-placeholder') || 'Pilih opsi';
                }

                function renderOptions(query = '') {
                    list.innerHTML = '';
                    const term = query.trim().toLowerCase();
                    let matchCount = 0;

                    Array.from(select.options).forEach((option) => {
                        if (option.hidden) return;
                        const text = (option.textContent || '').trim();
                        const haystack = `${text} ${option.value || ''}`.toLowerCase();
                        if (term && !haystack.includes(term)) return;

                        matchCount += 1;
                        const item = document.createElement('button');
                        item.type = 'button';
                        item.className = 'rt-select__option';
                        item.textContent = text || option.value || '';
                        item.disabled = option.disabled;
                        item.dataset.value = option.value;
                        item.setAttribute('role', 'option');
                        item.setAttribute('aria-selected', option.selected ? 'true' : 'false');
                        if (option.selected) item.classList.add('is-selected');

                        item.addEventListener('click', () => {
                            if (option.disabled) return;
                            select.value = option.value;
                            select.dispatchEvent(new Event('change', { bubbles: true }));
                            syncFromSelect();
                            closeMenu();
                        });

                        list.append(item);
                    });

                    if (!matchCount) {
                        const empty = document.createElement('div');
                        empty.className = 'rt-select__empty';
                        empty.textContent = 'Tidak ada opsi yang cocok';
                        list.append(empty);
                    }
                }

                function syncFromSelect() {
                    value.textContent = getSelectedLabel();
                    toggle.title = value.textContent;
                    toggle.disabled = select.disabled;
                    renderOptions(searchInput.value);
                }

                function openMenu() {
                    if (select.disabled) return;
                    document.querySelectorAll('.rt-select.is-open').forEach((node) => {
                        if (node !== wrapper) node.querySelector('.rt-select__toggle')?.click();
                    });
                    menu.hidden = false;
                    document.body.appendChild(menu);
                    wrapper.classList.add('is-open');
                    toggle.setAttribute('aria-expanded', 'true');
                    isOpen = true;
                    searchInput.value = '';
                    renderOptions('');
                    positionMenu();
                    window.requestAnimationFrame(() => searchInput.focus());
                }

                function closeMenu() {
                    if (!isOpen) return;
                    menu.hidden = true;
                    wrapper.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                    menu.style.removeProperty('position');
                    menu.style.removeProperty('left');
                    menu.style.removeProperty('top');
                    menu.style.removeProperty('width');
                    menu.style.removeProperty('max-width');
                    menu.style.removeProperty('transform');
                    searchInput.value = '';
                    isOpen = false;
                }

                toggle.addEventListener('click', () => {
                    if (menu.hidden) {
                        openMenu();
                    } else {
                        closeMenu();
                    }
                });

                toggle.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openMenu();
                    }

                    if (e.key === 'Escape') {
                        closeMenu();
                    }
                });

                searchInput.addEventListener('input', () => {
                    renderOptions(searchInput.value);
                });

                searchInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        e.stopPropagation();
                        closeMenu();
                        toggle.focus();
                    }
                });

                select.addEventListener('change', syncFromSelect);
                select.addEventListener('input', syncFromSelect);

                document.addEventListener('click', (e) => {
                    if (!wrapper.contains(e.target) && !menu.contains(e.target)) {
                        closeMenu();
                    }
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {
                        closeMenu();
                    }
                });

                window.addEventListener('resize', () => {
                    if (isOpen) positionMenu();
                });

                window.addEventListener('scroll', () => {
                    if (!isOpen) return;
                    if (window.scrollX !== lastScrollX || window.scrollY !== lastScrollY) {
                        lastScrollX = window.scrollX;
                        lastScrollY = window.scrollY;
                        positionMenu();
                    }
                }, true);

                syncFromSelect();
            });
        }

        initSearchableSelects();

        syncSidebarState();

        // ===== POPUP (modal) =====
        const popupCloseDelay = 220;

        function openPopup(id) {
            const pp = document.getElementById(id);
            if (!pp) return;
            pp.classList.remove('is-closing');
            pp.classList.add('is-open');
            pp.classList.add('show');
            document.body.classList.add('modal-open');
        }

        function closePopup(pp) {
            if (!pp || !pp.classList.contains('is-open') || pp.classList.contains('is-closing')) return;
            pp.classList.add('is-closing');
            const panel = pp.querySelector('.modal-content, .modal-dialog');
            const finish = () => {
                pp.classList.remove('is-open', 'is-closing', 'show');
                document.body.classList.remove('modal-open');
            };

            if (panel) {
                panel.addEventListener('animationend', function onEnd(e) {
                    if (e.target !== panel) return;
                    panel.removeEventListener('animationend', onEnd);
                    finish();
                });
            }

            window.setTimeout(finish, popupCloseDelay);
        }

        document.querySelectorAll('[data-modal-open]').forEach(btn => {
            btn.addEventListener('click', () => openPopup(btn.getAttribute('data-modal-open')));
        });

        document.querySelectorAll('[data-modal-close]').forEach(btn => {
            btn.addEventListener('click', () => {
                const pp = btn.closest('[data-modal]');
                if (pp) closePopup(pp);
            });
        });

        document.querySelectorAll('[data-modal]').forEach(pp => {
            pp.addEventListener('click', (e) => {
                if (e.target === pp) closePopup(pp);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('[data-modal].is-open').forEach(closePopup);
            }
        });

        // ===== TOAST =====
        const toast = document.getElementById('demoToast');
        const toastCloseBtn = document.getElementById('toastCloseBtn');
        let toastTimer = null;
        let toastVariant = 'success';
        let toastPosition = 'bottom-right';

        function applyToastState() {
            if (!toast) return;
            toast.classList.remove(
                'rt-toast--success',
                'rt-toast--warning',
                'rt-toast--danger',
                'rt-toast--top-left',
                'rt-toast--top-center',
                'rt-toast--top-right',
                'rt-toast--bottom-left',
                'rt-toast--bottom-center',
                'rt-toast--bottom-right'
            );
            toast.classList.add(`rt-toast--${toastVariant}`, `rt-toast--${toastPosition}`);
        }

        function hideToast() {
            if (!toast) return;
            toast.classList.remove('is-open');
            window.clearTimeout(toastTimer);
            toastTimer = null;
        }

        function showToast(variant = toastVariant, position = toastPosition) {
            if (!toast) return;
            toastVariant = variant;
            toastPosition = position;
            applyToastState();

            const titleMap = {
                success: 'Toast Success',
                warning: 'Toast Warning',
                danger: 'Toast Danger',
            };
            const textMap = {
                success: 'Action was saved successfully and is ready to continue.',
                warning: 'There is something to check before continuing.',
                danger: 'This action is risky and needs attention.',
            };

            const titleEl = toast.querySelector('.rt-toast__title');
            const textEl = toast.querySelector('.rt-toast__text');
            if (titleEl) titleEl.textContent = titleMap[variant] || 'Toast';
            if (textEl) textEl.textContent = textMap[variant] || 'Pesan toast.';

            toast.classList.add('is-open');
            window.clearTimeout(toastTimer);
            toastTimer = window.setTimeout(hideToast, 3000);
        }

        document.querySelectorAll('[data-toast-variant]').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast(btn.getAttribute('data-toast-variant'), btn.getAttribute('data-toast-position') || toastPosition);
            });
        });

        document.querySelectorAll('[data-toast-position-btn]').forEach(btn => {
            btn.addEventListener('click', () => {
                showToast(toastVariant, btn.getAttribute('data-toast-position'));
            });
        });

        toastCloseBtn?.addEventListener('click', hideToast);
        applyToastState();

        // ===== ACCORDION =====
        document.querySelectorAll('[data-accordion]').forEach(accordion => {
            const isMultiple = accordion.hasAttribute('data-accordion-multiple');
            accordion.querySelectorAll('.rt-accordion-trigger').forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const item = trigger.closest('.rt-accordion-item');
                    if (!item) return;
                    const isOpen = item.classList.contains('is-open');
                    
                    if (!isMultiple) {
                        accordion.querySelectorAll('.rt-accordion-item').forEach(i => {
                            i.classList.remove('is-open');
                            i.querySelector('.rt-accordion-trigger')?.classList.remove('is-active');
                        });
                    }
                    
                    if (!isOpen) {
                        item.classList.add('is-open');
                        trigger.classList.add('is-active');
                    }
                });
            });
        });

        // ===== CAROUSEL =====
        document.querySelectorAll('[data-carousel]').forEach(carousel => {
            const track = carousel.querySelector('.rt-carousel-track');
            const prevBtn = carousel.querySelector('[data-carousel-prev]');
            const nextBtn = carousel.querySelector('[data-carousel-next]');
            const indicators = carousel.querySelectorAll('.rt-carousel-indicator');
            let currentIndex = 0;
            let slideCount = carousel.querySelectorAll('.rt-carousel-slide').length;
            let autoPlayTimer = null;
            const autoPlayDelay = carousel.getAttribute('data-carousel-autoplay');
            
            function goToSlide(index) {
                if (index < 0) index = slideCount - 1;
                if (index >= slideCount) index = 0;
                currentIndex = index;
                
                if (track) {
                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                }
                
                indicators.forEach((ind, i) => {
                    ind.classList.toggle('is-active', i === currentIndex);
                });
            }
            
            function nextSlide() {
                goToSlide(currentIndex + 1);
            }
            
            function prevSlide() {
                goToSlide(currentIndex - 1);
            }
            
            function startAutoPlay() {
                if (!autoPlayDelay) return;
                stopAutoPlay();
                autoPlayTimer = setInterval(nextSlide, parseInt(autoPlayDelay));
            }
            
            function stopAutoPlay() {
                if (autoPlayTimer) {
                    clearInterval(autoPlayTimer);
                    autoPlayTimer = null;
                }
            }
            
            prevBtn?.addEventListener('click', () => {
                prevSlide();
                stopAutoPlay();
                startAutoPlay();
            });
            
            nextBtn?.addEventListener('click', () => {
                nextSlide();
                stopAutoPlay();
                startAutoPlay();
            });
            
            indicators.forEach((ind, index) => {
                ind.addEventListener('click', () => {
                    goToSlide(index);
                    stopAutoPlay();
                    startAutoPlay();
                });
            });
            
            carousel.addEventListener('mouseenter', stopAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);
            
            goToSlide(0);
            startAutoPlay();
        });

        // ===== NAVBAR SCROLL EFFECT =====
        const navbar = document.querySelector('.rt-navbar');
        if (navbar) {
            function handleScroll() {
                if (window.scrollY > 10) {
                    navbar.classList.add('rt-navbar--scrolled');
                } else {
                    navbar.classList.remove('rt-navbar--scrolled');
                }
            }
            window.addEventListener('scroll', handleScroll);
            handleScroll();
            
            // Mobile navbar toggle
            const navbarToggle = navbar.querySelector('.rt-navbar-toggle');
            const navbarMenu = navbar.querySelector('.rt-navbar-menu');
            navbarToggle?.addEventListener('click', () => {
                navbarToggle.classList.toggle('is-open');
                navbarMenu?.classList.toggle('is-open');
            });
        }

        // ===== FORM VALIDATION =====
        document.querySelectorAll('[data-validate]').forEach(form => {
            form.addEventListener('submit', (e) => {
                let isValid = true;
                
                form.querySelectorAll('[data-rule]').forEach(field => {
                    const value = field.value.trim();
                    const rules = field.getAttribute('data-rule').split('|');
                    const formGroup = field.closest('.rt-form-group');
                    
                    // Clear previous states
                    field.classList.remove('is-valid', 'is-invalid');
                    formGroup?.classList.remove('is-valid', 'is-invalid');
                    
                    let errorMessage = '';
                    
                    rules.forEach(rule => {
                        if (rule === 'required' && !value) {
                            errorMessage = 'This field is required';
                        } else if (rule === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                            errorMessage = 'Please enter a valid email';
                        } else if (rule.startsWith('minlength:') && value.length < parseInt(rule.split(':')[1])) {
                            errorMessage = `Minimum ${rule.split(':')[1]} characters required`;
                        } else if (rule.startsWith('maxlength:') && value.length > parseInt(rule.split(':')[1])) {
                            errorMessage = `Maximum ${rule.split(':')[1]} characters allowed`;
                        }
                    });
                    
                    if (errorMessage) {
                        field.classList.add('is-invalid');
                        formGroup?.classList.add('is-invalid');
                        isValid = false;
                        
                        const messageEl = formGroup?.querySelector('.rt-form-message--error');
                        if (messageEl) {
                            messageEl.textContent = errorMessage;
                            messageEl.classList.add('is-visible');
                        }
                    } else if (value) {
                        field.classList.add('is-valid');
                        formGroup?.classList.add('is-valid');
                        
                        const successEl = formGroup?.querySelector('.rt-form-message--success');
                        if (successEl) {
                            successEl.classList.add('is-visible');
                        }
                    }
                });
                
                if (!isValid) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
            
            // Real-time validation on blur
            form.querySelectorAll('[data-rule]').forEach(field => {
                field.addEventListener('blur', () => {
                    const value = field.value.trim();
                    const rules = field.getAttribute('data-rule')?.split('|') || [];
                    const formGroup = field.closest('.rt-form-group');
                    
                    field.classList.remove('is-valid', 'is-invalid');
                    formGroup?.classList.remove('is-valid', 'is-invalid');
                    
                    let errorMessage = '';
                    
                    rules.forEach(rule => {
                        if (rule === 'required' && !value) {
                            errorMessage = 'This field is required';
                        } else if (rule === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                            errorMessage = 'Please enter a valid email';
                        }
                    });
                    
                    if (errorMessage) {
                        field.classList.add('is-invalid');
                        formGroup?.classList.add('is-invalid');
                        const messageEl = formGroup?.querySelector('.rt-form-message--error');
                        if (messageEl) {
                            messageEl.textContent = errorMessage;
                            messageEl.classList.add('is-visible');
                        }
                    } else if (value) {
                        field.classList.add('is-valid');
                        formGroup?.classList.add('is-valid');
                    }
                });
            });
        });

        // ===== TABLE with Search + Pagination =====
        const tableBody = document.getElementById('tableBody');
        const tableInfo = document.getElementById('tableInfo');
        const paginationInfo = document.getElementById('paginationInfo');
        const pageText = document.getElementById('pageText');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');
        const searchInput = document.getElementById('tableSearch');
        const roleFilter = document.getElementById('tableRoleFilter');
        const statusFilter = document.getElementById('tableStatusFilter');
        const resetFilterBtn = document.getElementById('tableResetFilter');

        if (!tableBody || !tableInfo || !pageText || !prevBtn || !nextBtn || !searchInput) {
            return;
        }

        const tableData = [
            { name: 'Budi Santoso', email: 'budi@email.com', role: 'Admin', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '19 Jun 2026', color: 'linear-gradient(135deg,#635bff,#00b8ff)' },
            { name: 'Siti Rahma', email: 'siti@email.com', role: 'Editor', roleClass: 'warning', status: 'Active', statusClass: 'success', date: '18 Jun 2026', color: 'linear-gradient(135deg,#ff7a59,#f59e0b)' },
            { name: 'Andi Wijaya', email: 'andi@email.com', role: 'Member', roleClass: 'primary', status: 'Pending', statusClass: 'warning', date: '17 Jun 2026', color: 'linear-gradient(135deg,#6d28d9,#635bff)' },
            { name: 'Dewi Kartika', email: 'dewi@email.com', role: 'Editor', roleClass: 'warning', status: 'Active', statusClass: 'success', date: '16 Jun 2026', color: 'linear-gradient(135deg,#16a34a,#22d3ee)' },
            { name: 'Rizky Hakim', email: 'rizky@email.com', role: 'Member', roleClass: 'primary', status: 'Inactive', statusClass: 'danger', date: '15 Jun 2026', color: 'linear-gradient(135deg,#ef4444,#ff7a59)' },
            { name: 'Maya Sari', email: 'maya@email.com', role: 'Admin', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '14 Jun 2026', color: 'linear-gradient(135deg,#635bff,#00b8ff)' },
            { name: 'Fajar Pratama', email: 'fajar@email.com', role: 'Member', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '13 Jun 2026', color: 'linear-gradient(135deg,#ff7a59,#f59e0b)' },
            { name: 'Lina Marlina', email: 'lina@email.com', role: 'Editor', roleClass: 'warning', status: 'Pending', statusClass: 'warning', date: '12 Jun 2026', color: 'linear-gradient(135deg,#6d28d9,#635bff)' },
            { name: 'Hendra Gunawan', email: 'hendra@email.com', role: 'Member', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '11 Jun 2026', color: 'linear-gradient(135deg,#16a34a,#22d3ee)' },
            { name: 'Rina Wulandari', email: 'rina@email.com', role: 'Editor', roleClass: 'warning', status: 'Inactive', statusClass: 'danger', date: '10 Jun 2026', color: 'linear-gradient(135deg,#ef4444,#ff7a59)' },
            { name: 'Agus Setiawan', email: 'agus@email.com', role: 'Admin', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '09 Jun 2026', color: 'linear-gradient(135deg,#635bff,#00b8ff)' },
            { name: 'Putri Ayu', email: 'putri@email.com', role: 'Member', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '08 Jun 2026', color: 'linear-gradient(135deg,#ff7a59,#f59e0b)' },
            { name: 'Bambang Suryadi', email: 'bambang@email.com', role: 'Editor', roleClass: 'warning', status: 'Pending', statusClass: 'warning', date: '07 Jun 2026', color: 'linear-gradient(135deg,#6d28d9,#635bff)' },
            { name: 'Nina Kurniawati', email: 'nina@email.com', role: 'Member', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '06 Jun 2026', color: 'linear-gradient(135deg,#16a34a,#22d3ee)' },
            { name: 'Joko Widodo', email: 'joko@email.com', role: 'Admin', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '05 Jun 2026', color: 'linear-gradient(135deg,#ef4444,#ff7a59)' },
            { name: 'Sri Mulyani', email: 'sri@email.com', role: 'Editor', roleClass: 'warning', status: 'Active', statusClass: 'success', date: '04 Jun 2026', color: 'linear-gradient(135deg,#635bff,#00b8ff)' },
            { name: 'Budi Darma', email: 'budi.darma@email.com', role: 'Member', roleClass: 'primary', status: 'Inactive', statusClass: 'danger', date: '03 Jun 2026', color: 'linear-gradient(135deg,#ff7a59,#f59e0b)' },
            { name: 'Ratna Dewi', email: 'ratna@email.com', role: 'Editor', roleClass: 'warning', status: 'Active', statusClass: 'success', date: '02 Jun 2026', color: 'linear-gradient(135deg,#6d28d9,#635bff)' },
            { name: 'Tono Supriyadi', email: 'tono@email.com', role: 'Member', roleClass: 'primary', status: 'Pending', statusClass: 'warning', date: '01 Jun 2026', color: 'linear-gradient(135deg,#16a34a,#22d3ee)' },
            { name: 'Yuni Astuti', email: 'yuni@email.com', role: 'Admin', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '31 May 2026', color: 'linear-gradient(135deg,#ef4444,#ff7a59)' },
            { name: 'Dedi Corbuzier', email: 'dedi@email.com', role: 'Member', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '30 May 2026', color: 'linear-gradient(135deg,#635bff,#00b8ff)' },
            { name: 'Siska Annisa', email: 'siska@email.com', role: 'Editor', roleClass: 'warning', status: 'Active', statusClass: 'success', date: '29 May 2026', color: 'linear-gradient(135deg,#ff7a59,#f59e0b)' },
            { name: 'Rudi Hermawan', email: 'rudi@email.com', role: 'Member', roleClass: 'primary', status: 'Inactive', statusClass: 'danger', date: '28 May 2026', color: 'linear-gradient(135deg,#6d28d9,#635bff)' },
            { name: 'Wati Sulastri', email: 'wati@email.com', role: 'Editor', roleClass: 'warning', status: 'Active', statusClass: 'success', date: '27 May 2026', color: 'linear-gradient(135deg,#16a34a,#22d3ee)' },
            { name: 'Herman Yusuf', email: 'herman@email.com', role: 'Admin', roleClass: 'primary', status: 'Active', statusClass: 'success', date: '26 May 2026', color: 'linear-gradient(135deg,#ef4444,#ff7a59)' },
        ];

        const PER_PAGE = 5;
        let currentPage = 1;
        let filteredData = [...tableData];

        function getFilteredData() {
            const q = searchInput.value.toLowerCase().trim();
            const role = roleFilter?.value || '';
            const status = statusFilter?.value || '';

            return tableData.filter(item => {
                const matchesQuery =
                    item.name.toLowerCase().includes(q) ||
                    item.email.toLowerCase().includes(q) ||
                    item.role.toLowerCase().includes(q) ||
                    item.status.toLowerCase().includes(q) ||
                    item.date.toLowerCase().includes(q);

                const matchesRole = !role || item.role === role;
                const matchesStatus = !status || item.status === status;

                return matchesQuery && matchesRole && matchesStatus;
            });
        }

        function renderTable() {
            const totalPages = Math.max(1, Math.ceil(filteredData.length / PER_PAGE));
            if (currentPage > totalPages) currentPage = totalPages;

            const start = (currentPage - 1) * PER_PAGE;
            const end = start + PER_PAGE;
            const pageData = filteredData.slice(start, end);

            if (pageData.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:40px 20px;color:var(--rt-muted);font-weight:700">No items found</td></tr>';
            } else {
                tableBody.innerHTML = pageData.map(item => {
                    const initials = item.name.split(' ').map(n => n[0]).slice(0, 2).join('');
                    return `
                    <tr>
                        <td>
                            <div class="rt-table_user">
                                <div class="rt-table_avatar" style="background:${item.color}">${initials}</div>
                                <div>
                                    <div class="rt-table_name">${item.name}</div>
                                    <div class="rt-table_email">${item.email}</div>
                                </div>
                            </div>
                        </td>
                        <td><span class="rt-badge rt-badge--${item.roleClass}"><span class="rt-badge_dot"></span>${item.role}</span></td>
                        <td><span class="rt-badge rt-badge--${item.statusClass}"><span class="rt-badge_dot"></span>${item.status}</span></td>
                        <td>${item.date}</td>
                        <td>
                            <div style="display:flex;gap:4px">
                                <button class="btn btn-ghost btn-sm btn-icon" title="Edit">
                                    <i class="rt rt-edit" aria-hidden="true"></i>
                                </button>
                                <button class="btn btn-ghost btn-sm btn-icon" title="Delete" style="color:var(--rt-danger)">
                                    <i class="rt rt-delete" aria-hidden="true"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
                }).join('');
            }

            const showing = filteredData.length === 0 ? 0 : start + 1;
            const showingEnd = Math.min(end, filteredData.length);
            tableInfo.innerHTML = `Showing <strong>${showing}-${showingEnd}</strong> of <strong>${filteredData.length}</strong> items`;
            if (paginationInfo) {
                paginationInfo.textContent = `Page ${currentPage} / ${totalPages}`;
            }
            pageText.textContent = `Page ${currentPage} / ${totalPages}`;
            prevBtn.disabled = currentPage <= 1;
            nextBtn.disabled = currentPage >= totalPages;
        }

        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderTable();
            }
        });

        nextBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredData.length / PER_PAGE);
            if (currentPage < totalPages) {
                currentPage++;
                renderTable();
            }
        });

        function applyFilters() {
            filteredData = getFilteredData();
            currentPage = 1;
            renderTable();
        }

        searchInput.addEventListener('input', applyFilters);
        roleFilter?.addEventListener('change', applyFilters);
        statusFilter?.addEventListener('change', applyFilters);

        resetFilterBtn?.addEventListener('click', () => {
            searchInput.value = '';
            if (roleFilter) roleFilter.value = '';
            if (statusFilter) statusFilter.value = '';
            applyFilters();
        });

        filteredData = getFilteredData();
        renderTable();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRetroTerm, { once: true });
    } else {
        initRetroTerm();
    }
})();
