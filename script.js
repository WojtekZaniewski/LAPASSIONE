// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .process-step, .testimonial');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background img');
    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${parallax}px)`;
        });
    }

    // Form validation and submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const inputs = this.querySelectorAll('input[required], select[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ff6b6b';
                    isValid = false;
                } else {
                    input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
            });
            
            if (isValid) {
                // Show success message
                showSuccessMessage();
                this.reset();
            }
        });
    }

    // Portfolio modal functionality
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;
            
            showPortfolioModal(img.src, title, description);
        });
    });

    // CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-button, .submit-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Success message function
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message liquid-glass';
    message.innerHTML = `
        <h3>Dziękujemy!</h3>
        <p>Twoja rezerwacja została wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
        <button onclick="this.parentElement.remove()">Zamknij</button>
    `;
    
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        padding: 2rem;
        text-align: center;
        max-width: 400px;
        animation: fadeInScale 0.3s ease;
    `;
    
    document.body.appendChild(message);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 5000);
}

// Portfolio modal function
function showPortfolioModal(imageSrc, title, description) {
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
        <div class="modal-content liquid-glass">
            <button class="modal-close" onclick="this.closest('.portfolio-modal').remove()">&times;</button>
            <img src="${imageSrc}" alt="${title}">
            <div class="modal-info">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
    `;
    
    document.body.appendChild(modal);
}

// Add CSS for animations and effects
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
    }
    
    .modal-content {
        position: relative;
        max-width: 600px;
        max-height: 80vh;
        overflow: hidden;
        border-radius: 16px;
    }
    
    .modal-content img {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    
    .modal-info {
        padding: 2rem;
    }
    
    .modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1;
    }
    
    .success-message button {
        background: var(--accent-gold);
        color: var(--text-dark);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 1rem;
    }
`;
document.head.appendChild(style);
