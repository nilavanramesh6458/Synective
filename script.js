// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        
        // Show success message
        alert('Thank you for reaching out! We will get back to you soon.');
        
        // Reset form
        this.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.service-card, .feature-card, .step').forEach(card => {
    observer.observe(card);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle (optional)
const navLinks = document.querySelector('.nav-links');
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.className = 'mobile-menu-btn';
mobileMenuBtn.innerHTML = '☰';
mobileMenuBtn.style.display = 'none';
mobileMenuBtn.style.background = 'none';
mobileMenuBtn.style.border = 'none';
mobileMenuBtn.style.color = '#e2e8f0';
mobileMenuBtn.style.fontSize = '1.5rem';
mobileMenuBtn.style.cursor = 'pointer';

// Show mobile menu button on small screens
function handleResize() {
    if (window.innerWidth <= 768) {
        mobileMenuBtn.style.display = 'block';
    } else {
        mobileMenuBtn.style.display = 'none';
        navLinks.style.display = 'flex';
    }
}

window.addEventListener('resize', handleResize);
handleResize();
