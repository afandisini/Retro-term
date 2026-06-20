(function () {
    function initRetroTerm() {
        const html = document.documentElement;

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
            const childLinks = document.querySelectorAll('.rt-sd_child');
            const dropdowns = document.querySelectorAll('[data-sd]');

            navLinks.forEach(link => link.classList.remove('is-active'));
            childLinks.forEach(child => child.classList.remove('is-active'));
            dropdowns.forEach(sd => sd.classList.remove('is-open'));

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
                    const parent = child.closest('[data-sd]');
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

        // ===== SIDEBAR DROPDOWN (rt-sd) =====
        document.querySelectorAll('[data-sd]').forEach(sd => {
            const trigger = sd.querySelector('.rt-sd_trigger');
            trigger?.addEventListener('click', (e) => {
                e.preventDefault();
                sd.classList.toggle('is-open');
            });
        });

        document.querySelectorAll('.rt-sd_child').forEach(child => {
            child.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    sidebar?.classList.remove('is-open');
                    overlay?.classList.remove('is-open');
                }
            });
        });

        // ===== DROPDOWN (rt-dd) =====
        document.querySelectorAll('[data-dd]').forEach(dd => {
            const trigger = dd.querySelector('[data-dd-trigger]');
            trigger?.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('[data-dd]').forEach(o => {
                    if (o !== dd) o.classList.remove('is-open');
                });
                dd.classList.toggle('is-open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('[data-dd]')) {
                document.querySelectorAll('[data-dd]').forEach(dd => dd.classList.remove('is-open'));
            }
        });

        syncSidebarState();

        // ===== POPUP (rt-pp) =====
        const popupCloseDelay = 220;

        function openPopup(id) {
            const pp = document.getElementById(id);
            if (!pp) return;
            pp.classList.remove('is-closing');
            pp.classList.add('is-open');
            document.body.classList.add('rt-pp-open');
        }

        function closePopup(pp) {
            if (!pp || !pp.classList.contains('is-open') || pp.classList.contains('is-closing')) return;
            pp.classList.add('is-closing');
            const panel = pp.querySelector('.rt-pp_panel');
            const finish = () => {
                pp.classList.remove('is-open', 'is-closing');
                document.body.classList.remove('rt-pp-open');
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

        document.querySelectorAll('[data-pp-open]').forEach(btn => {
            btn.addEventListener('click', () => openPopup(btn.getAttribute('data-pp-open')));
        });

        document.querySelectorAll('[data-pp-close]').forEach(btn => {
            btn.addEventListener('click', () => {
                const pp = btn.closest('[data-pp]');
                if (pp) closePopup(pp);
            });
        });

        document.querySelectorAll('[data-pp]').forEach(pp => {
            pp.addEventListener('click', (e) => {
                if (e.target === pp) closePopup(pp);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('[data-pp].is-open').forEach(closePopup);
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
                                <button class="rt-tbl rt-tbl-ghost rt-tbl--sm rt-tbl--icon" title="Edit">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                </button>
                                <button class="rt-tbl rt-tbl-ghost rt-tbl--sm rt-tbl--icon" title="Delete" style="color:var(--rt-danger)">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
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
