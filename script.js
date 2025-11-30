// ========================================
// Navigation System
// ========================================

class CrossroadsNavigation {
    constructor() {
        this.currentView = 'home';
        this.views = document.querySelectorAll('.view');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.pathNodes = document.querySelectorAll('.path-node');
        
        this.init();
    }
    
    init() {
        // Set up navigation listeners
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const path = e.target.dataset.path;
                this.navigateTo(path);
            });
        });
        
        // Set up path node listeners
        this.pathNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const path = e.currentTarget.dataset.path;
                this.navigateTo(path);
            });
        });
        
        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.view) {
                this.navigateTo(e.state.view, false);
            }
        });
        
        // Set initial state
        const initialPath = this.getPathFromURL() || 'home';
        this.navigateTo(initialPath, false);
    }
    
    getPathFromURL() {
        const hash = window.location.hash.substring(1);
        return hash || null;
    }
    
    navigateTo(viewName, updateHistory = true) {
        if (viewName === this.currentView) return;
        
        // Hide current view
        const currentViewEl = document.querySelector(`.view-${this.currentView}`);
        if (currentViewEl) {
            currentViewEl.classList.remove('active');
        }
        
        // Show new view
        const newViewEl = document.querySelector(`.view-${viewName}`);
        if (newViewEl) {
            newViewEl.classList.add('active');
            this.currentView = viewName;
            
            // Update URL
            if (updateHistory) {
                window.history.pushState(
                    { view: viewName },
                    '',
                    `#${viewName}`
                );
            }
            
            // Update active nav link
            this.updateActiveNavLink(viewName);
            
            // Animate threads based on path
            this.animateThreads(viewName);
            
            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    updateActiveNavLink(viewName) {
        this.navLinks.forEach(link => {
            if (link.dataset.path === viewName) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    animateThreads(viewName) {
        const threads = document.querySelectorAll('.thread');
        const threadMap = {
            'diplomacy': '.thread-diplomacy',
            'venture': '.thread-venture',
            'thought': '.thread-thought',
            'events': '.thread-event'
        };
        
        threads.forEach(thread => {
            thread.style.opacity = '0.3';
        });
        
        if (viewName !== 'home' && threadMap[viewName]) {
            const activeThread = document.querySelector(threadMap[viewName]);
            if (activeThread) {
                activeThread.style.opacity = '0.8';
            }
        } else {
            threads.forEach(thread => {
                thread.style.opacity = '0.6';
            });
        }
    }
}

// ========================================
// Thread Animation Enhancement
// ========================================

class ThreadAnimator {
    constructor() {
        this.threads = document.querySelectorAll('.thread');
        this.init();
    }
    
    init() {
        this.threads.forEach(thread => {
            thread.addEventListener('mouseenter', () => {
                thread.style.strokeWidth = '2.5px';
                thread.style.opacity = '1';
            });
            
            thread.addEventListener('mouseleave', () => {
                thread.style.strokeWidth = '1.5px';
                thread.style.opacity = '0.6';
            });
        });
    }
}

// ========================================
// Card Interaction Enhancement
// ========================================

class CardInteractions {
    constructor() {
        this.cards = document.querySelectorAll('.card');
        this.init();
    }
    
    init() {
        this.cards.forEach((card, index) => {
            // Stagger animation on load
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Add subtle tilt on hover (optional enhancement)
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
}

// ========================================
// Nexus Circle Animation
// ========================================

class NexusAnimator {
    constructor() {
        this.nexus = document.querySelector('.nexus-circle');
        this.init();
    }
    
    init() {
        if (!this.nexus) return;
        
        // Add interactive glow on hover
        this.nexus.addEventListener('mouseenter', () => {
            this.nexus.style.boxShadow = `
                0 0 30px rgba(79, 195, 247, 0.5),
                0 0 60px rgba(212, 255, 71, 0.4),
                0 0 90px rgba(199, 125, 255, 0.4)
            `;
        });
        
        this.nexus.addEventListener('mouseleave', () => {
            this.nexus.style.boxShadow = `
                0 0 20px rgba(79, 195, 247, 0.3),
                0 0 40px rgba(212, 255, 71, 0.2),
                0 0 60px rgba(199, 125, 255, 0.2)
            `;
        });
    }
}

// ========================================
// Timeline Node Interactions
// ========================================

class TimelineInteractions {
    constructor() {
        this.timelineItems = document.querySelectorAll('.timeline-item');
        this.init();
    }
    
    init() {
        this.timelineItems.forEach((item, index) => {
            const card = item.querySelector('.card');
            const node = item.querySelector('.timeline-node');
            
            if (!card || !node) return;
            
            // Animate cards on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        card.style.animationDelay = `${index * 0.15}s`;
                        card.style.opacity = '0';
                        card.style.animation = 'card-slide-in 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards';
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(item);
            
            // Node hover effect
            node.addEventListener('mouseenter', () => {
                node.style.transform = 'scale(1.5)';
                node.style.boxShadow = '0 0 30px rgba(255, 179, 71, 0.8)';
            });
            
            node.addEventListener('mouseleave', () => {
                node.style.transform = '';
                node.style.boxShadow = '0 0 0 4px rgba(255, 179, 71, 0.2)';
            });
        });
    }
}

// ========================================
// Smooth Scroll Enhancement
// ========================================

class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Add smooth scroll to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ========================================
// Keyboard Navigation
// ========================================

class KeyboardNav {
    constructor(navigation) {
        this.navigation = navigation;
        this.views = ['home', 'diplomacy', 'venture', 'thought', 'events'];
        this.init();
    }
    
    init() {
        document.addEventListener('keydown', (e) => {
            // Arrow key navigation
            if (e.key === 'ArrowRight') {
                this.navigateNext();
            } else if (e.key === 'ArrowLeft') {
                this.navigatePrev();
            } else if (e.key === 'Home') {
                this.navigation.navigateTo('home');
            }
        });
    }
    
    navigateNext() {
        const currentIndex = this.views.indexOf(this.navigation.currentView);
        const nextIndex = (currentIndex + 1) % this.views.length;
        this.navigation.navigateTo(this.views[nextIndex]);
    }
    
    navigatePrev() {
        const currentIndex = this.views.indexOf(this.navigation.currentView);
        const prevIndex = (currentIndex - 1 + this.views.length) % this.views.length;
        this.navigation.navigateTo(this.views[prevIndex]);
    }
}

// ========================================
// Preloader (Optional)
// ========================================

class PageLoader {
    constructor() {
        this.init();
    }
    
    init() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            this.animateInitialLoad();
        });
    }
    
    animateInitialLoad() {
        // Add any initial load animations here
        const threads = document.querySelectorAll('.thread');
        threads.forEach((thread, index) => {
            setTimeout(() => {
                thread.style.opacity = '0.6';
            }, index * 100);
        });
    }
}

// ========================================
// Mobile Menu Toggle (for very small screens)
// ========================================

class MobileMenu {
    constructor() {
        this.init();
    }
    
    init() {
        // Check if we need mobile menu
        if (window.innerWidth <= 480) {
            this.createMobileMenu();
        }
        
        // Re-check on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 480 && !document.querySelector('.mobile-menu-toggle')) {
                this.createMobileMenu();
            } else if (window.innerWidth > 480 && document.querySelector('.mobile-menu-toggle')) {
                this.removeMobileMenu();
            }
        });
    }
    
    createMobileMenu() {
        const nav = document.querySelector('.header-nav');
        if (!nav || document.querySelector('.mobile-menu-toggle')) return;
        
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.innerHTML = '☰';
        toggle.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            display: none;
        `;
        
        if (window.innerWidth <= 480) {
            toggle.style.display = 'block';
            nav.style.display = 'none';
        }
        
        toggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
        });
        
        document.querySelector('.header-content').appendChild(toggle);
    }
    
    removeMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.header-nav');
        if (toggle) toggle.remove();
        if (nav) nav.style.display = 'flex';
    }
}

// ========================================
// Initialize Everything
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize core navigation
    const navigation = new CrossroadsNavigation();
    
    // Initialize enhancements
    new ThreadAnimator();
    new CardInteractions();
    new NexusAnimator();
    new TimelineInteractions();
    new SmoothScroll();
    new KeyboardNav(navigation);
    new PageLoader();
    new MobileMenu();
    
    console.log('🌏 The Crossroads initialized');
});

// ========================================
// Easter Egg: Konami Code
// ========================================

(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    function activateEasterEgg() {
        const threads = document.querySelectorAll('.thread');
        threads.forEach(thread => {
            thread.style.animation = 'pulse-glow 0.3s ease-in-out infinite';
            thread.style.strokeWidth = '4px';
        });
        
        setTimeout(() => {
            threads.forEach(thread => {
                thread.style.animation = '';
                thread.style.strokeWidth = '1.5px';
            });
        }, 3000);
        
        console.log('🎉 You found the easter egg! The crossroads shine brighter.');
    }
})();
