(function () {
    const RT = window.RT || (window.RT = {});

    // ===== ACCORDION COMPONENT =====
    function initAccordions() {
        document.querySelectorAll('.rt-accordion').forEach(accordion => {
            const allowMultiple = accordion.classList.contains('rt-accordion--multiple');
            
            accordion.querySelectorAll('.rt-accordion-item').forEach(item => {
                const trigger = item.querySelector('.rt-accordion-trigger');
                
                if (!trigger) return;
                
                trigger.addEventListener('click', () => {
                    const isOpen = item.classList.contains('is-open');
                    
                    // Close other items if not multiple
                    if (!allowMultiple && !isOpen) {
                        accordion.querySelectorAll('.rt-accordion-item.is-open').forEach(openItem => {
                            openItem.classList.remove('is-open');
                            openItem.querySelector('.rt-accordion-trigger')?.classList.remove('is-active');
                        });
                    }
                    
                    // Toggle current item
                    item.classList.toggle('is-open');
                    trigger.classList.toggle('is-active');
                });
            });
        });
    }

    // ===== CAROUSEL COMPONENT =====
    function initCarousels() {
        document.querySelectorAll('.rt-carousel').forEach(carousel => {
            const track = carousel.querySelector('.rt-carousel-track');
            const slides = carousel.querySelectorAll('.rt-carousel-slide');
            const prevBtn = carousel.querySelector('.rt-carousel-btn--prev');
            const nextBtn = carousel.querySelector('.rt-carousel-btn--next');
            const indicators = carousel.querySelectorAll('.rt-carousel-indicator');
            
            if (!track || slides.length === 0) return;
            
            let currentIndex = 0;
            const totalSlides = slides.length;
            let autoPlayInterval = null;
            const autoPlayDelay = carousel.dataset.autoplay || 5000;
            
            function updateCarousel() {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update indicators
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('is-active', index === currentIndex);
                });
                
                // Update active slide for thumbnail carousels
                slides.forEach((slide, index) => {
                    slide.classList.toggle('is-active', index === currentIndex);
                });
            }
            
            function goToSlide(index) {
                if (index < 0) index = totalSlides - 1;
                if (index >= totalSlides) index = 0;
                currentIndex = index;
                updateCarousel();
                resetAutoPlay();
            }
            
            function nextSlide() {
                goToSlide(currentIndex + 1);
            }
            
            function prevSlide() {
                goToSlide(currentIndex - 1);
            }
            
            function startAutoPlay() {
                if (carousel.hasAttribute('data-autoplay')) {
                    autoPlayInterval = setInterval(nextSlide, parseInt(autoPlayDelay));
                }
            }
            
            function resetAutoPlay() {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                    startAutoPlay();
                }
            }
            
            function pauseAutoPlay() {
                if (autoPlayInterval) {
                    clearInterval(autoPlayInterval);
                    autoPlayInterval = null;
                }
            }
            
            // Event listeners
            prevBtn?.addEventListener('click', () => {
                prevSlide();
                pauseAutoPlay();
            });
            
            nextBtn?.addEventListener('click', () => {
                nextSlide();
                pauseAutoPlay();
            });
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    goToSlide(index);
                    pauseAutoPlay();
                });
            });
            
            // Touch/swipe support
            let touchStartX = 0;
            let touchEndX = 0;
            
            track.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                pauseAutoPlay();
            }, { passive: true });
            
            track.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
            
            function handleSwipe() {
                const swipeThreshold = 50;
                const diff = touchStartX - touchEndX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        nextSlide();
                    } else {
                        prevSlide();
                    }
                }
            }
            
            // Keyboard navigation
            carousel.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                    pauseAutoPlay();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    pauseAutoPlay();
                }
            });
            
            // Initialize
            updateCarousel();
            startAutoPlay();
            
            // Pause on hover
            carousel.addEventListener('mouseenter', pauseAutoPlay);
            carousel.addEventListener('mouseleave', startAutoPlay);
        });
    }

    // ===== NAVBAR COMPONENT =====
    function initNavbars() {
        document.querySelectorAll('.rt-navbar').forEach(navbar => {
            const toggle = navbar.querySelector('.rt-navbar-toggle');
            const menu = navbar.querySelector('.rt-navbar-menu');
            
            // Mobile menu toggle
            toggle?.addEventListener('click', () => {
                toggle.classList.toggle('is-open');
                menu?.classList.toggle('is-open');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (menu && !navbar.contains(e.target)) {
                    toggle?.classList.remove('is-open');
                    menu.classList.remove('is-open');
                }
            });
            
            // Scroll effect
            const handleScroll = () => {
                if (window.scrollY > 10) {
                    navbar.classList.add('rt-navbar--scrolled');
                } else {
                    navbar.classList.remove('rt-navbar--scrolled');
                }
            };
            
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Initial check
        });
    }

    // Initialize all components
    function initRetroTermComponents() {
        initAccordions();
        initCarousels();
        initNavbars();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRetroTermComponents, { once: true });
    } else {
        initRetroTermComponents();
    }

    // Expose to global scope
    RT.initAccordions = initAccordions;
    RT.initCarousels = initCarousels;
    RT.initNavbars = initNavbars;
    RT.initComponents = initRetroTermComponents;
})();
