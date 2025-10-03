
document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

   
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');
    
    function updateActiveNav() {
        let current = '';
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
   
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
   
    const typedElement = document.getElementById('element');
    if (typedElement) {
      
        typedElement.style.textShadow = '0 0 10px rgba(100, 255, 218, 0.5)';
    }
    
    
    const cards = document.querySelectorAll('.service-card, .project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
   
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #64ffda;
        color: #0f0f23;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(100, 255, 218, 0.3);
    `;
    
    document.body.appendChild(scrollTopBtn);
    
   
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 20px rgba(100, 255, 218, 0.4)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(100, 255, 218, 0.3)';
    });
    
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    
    const openModalBtn = document.getElementById('openContactModal');
    const contactModal = document.getElementById('contactModal');
    const closeTriggers = document.querySelectorAll('[data-close]');
    const contactForm = document.getElementById('contactForm');

    if (openModalBtn && contactModal) {
        openModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            contactModal.classList.add('open');
            contactModal.setAttribute('aria-hidden', 'false');
        });
    }

    closeTriggers.forEach(el => {
        el.addEventListener('click', function() {
            contactModal.classList.remove('open');
            contactModal.setAttribute('aria-hidden', 'true');
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal && contactModal.classList.contains('open')) {
            contactModal.classList.remove('open');
            contactModal.setAttribute('aria-hidden', 'true');
        }
    });

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const subject = document.getElementById('contactSubject').value.trim();
            const message = document.getElementById('contactMessage').value.trim();

            const to = 'kunalshah1172@gmail.com';
            const body = `Name: ${name}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
            const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

            window.location.href = mailtoLink;

            contactModal.classList.remove('open');
            contactModal.setAttribute('aria-hidden', 'true');
        });
    }
});


const style = document.createElement('style');
style.textContent = `
    nav a.active {
        color: #64ffda !important;
    }
    
    nav a.active::after {
        width: 100% !important;
    }
    
    .scroll-top-btn:hover {
        background: #4cd8b0 !important;
    }
`;
document.head.appendChild(style);
