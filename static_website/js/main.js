// Main JavaScript file for Shezen Construction Website

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                document.getElementById('newsletterEmail').value = '';
            }
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            if (name && phone && message) {
                // Store form data in localStorage for demo purposes
                const contactData = {
                    name: name,
                    phone: phone,
                    message: message,
                    timestamp: new Date().toISOString()
                };
                
                let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
                contacts.push(contactData);
                localStorage.setItem('contacts', JSON.stringify(contacts));
                
                // Redirect to success page
                window.location.href = 'success.html';
            }
        });
    }

    // Career form handling
    const careerForm = document.getElementById('careerForm');
    if (careerForm) {
        careerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const resume = document.getElementById('resume').files[0];
            const coverLetter = document.getElementById('cover_letter').value;
            
            if (name && email && resume && coverLetter) {
                // Store form data in localStorage for demo purposes
                const careerData = {
                    name: name,
                    email: email,
                    resumeName: resume.name,
                    coverLetter: coverLetter,
                    timestamp: new Date().toISOString()
                };
                
                let careers = JSON.parse(localStorage.getItem('careers') || '[]');
                careers.push(careerData);
                localStorage.setItem('careers', JSON.stringify(careers));
                
                // Redirect to success page
                window.location.href = 'success.html';
            }
        });
    }

    // Counter animation for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('[data-toggle="counter-up"]');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const increment = target / 200;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 10);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }

    // Initialize counter animation when page loads
    setTimeout(animateCounters, 1000);

    // Smooth scrolling for anchor links
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

    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Back to top button functionality
    const backToTopBtn = document.createElement('a');
    backToTopBtn.href = '#';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fa fa-chevron-up"></i>';
    backToTopBtn.style.display = 'none';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Image lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}

// Service modal functionality (if needed)
function showServiceDetails(serviceName, description) {
    alert(`${serviceName}\n\n${description}\n\nContact us for more information!`);
}

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}