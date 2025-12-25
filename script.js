// script.js - Custom JavaScript untuk SMA Pancasila

// Fungsi untuk mengatur active state pada navbar
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Hapus active class dari semua
        link.classList.remove('active');
        
        // Set active berdasarkan halaman saat ini
        if ((currentPage === '' || currentPage === 'index.html') && linkPage === 'index.html') {
            link.classList.add('active');
        } else if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
}

// Fungsi untuk smooth scrolling (hanya untuk link internal #)
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Hanya jalankan smooth scroll untuk link internal dalam halaman yang sama
            if (targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Fungsi untuk animasi pada scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    // Animasi untuk semua cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
}

// Fungsi untuk optimasi gambar carousel (hanya di halaman beranda)
function optimizeCarouselImages() {
    const carousel = document.querySelector('#headerCarousel');
    if (carousel) {
        const carouselImages = document.querySelectorAll('.carousel-item img');
        
        carouselImages.forEach(img => {
            img.addEventListener('error', function() {
                console.warn('Gagal memuat gambar:', this.src);
                this.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                this.alt = 'Gambar tidak tersedia';
            });
        });
    }
}

// Fungsi untuk form validation (untuk halaman pendaftaran)
function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Validasi manual untuk nomor WhatsApp (pattern)
            const waInput = form.querySelector('input[name="no_wa"]');
            if (waInput && waInput.value && !/^08[0-9]{8,12}$/.test(waInput.value)) {
                waInput.setCustomValidity('Format nomor WhatsApp tidak valid');
            } else if (waInput) {
                waInput.setCustomValidity('');
            }

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

// Fungsi untuk back to top button
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopButton.className = 'btn btn-primary-custom back-to-top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.zIndex = '1000';
    backToTopButton.style.display = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// Ripple effect universal untuk card
function createRipple(event, element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Fungsi inisialisasi semua
function initAll() {
    setActiveNavItem();
    initSmoothScrolling();
    initScrollAnimations();
    optimizeCarouselImages();
    initFormValidation();
    initBackToTop();
    function initAll() {
    setActiveNavItem();
    initSmoothScrolling();
    initScrollAnimations();
    optimizeCarouselImages();
    initFormValidation();
    initBackToTop();
    initEkstrakurikulerModal();
    initProgramUnggulanClick();
}
}

// Jalankan ketika DOM siap
document.addEventListener('DOMContentLoaded', initAll);
document.querySelectorAll('.extra-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.dataset.title;
        const desc = card.dataset.desc;
        const list = card.dataset.list.split(',');

        document.getElementById('extraTitle').textContent = title;
        document.getElementById('extraDesc').textContent = desc;

        const ul = document.getElementById('extraList');
        ul.innerHTML = '';
        list.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });

        const modal = new bootstrap.Modal(document.getElementById('extraModal'));
        modal.show();
    });
});
// Fungsi Program Unggulan → buka modal detail 
function initProgramUnggulanClick() {
    const cards = document.querySelectorAll('.program-card');

    if (!cards.length) return;

    cards.forEach(card => {
        card.style.cursor = 'pointer';

        card.addEventListener('click', (e) => {
            createRipple(e, card);

            const title = card.querySelector('h4')?.textContent || '';
            const desc = card.querySelector('p')?.textContent || '';
            const listItems = card.querySelectorAll('ul li');

            document.getElementById('extraTitle').textContent = title;
            document.getElementById('extraDesc').textContent = desc;

            const ul = document.getElementById('extraList');
            ul.innerHTML = '';

            listItems.forEach(li => {
                const newLi = document.createElement('li');
                newLi.textContent = li.textContent;
                ul.appendChild(newLi);
            });

            setTimeout(() => {
                new bootstrap.Modal(
                    document.getElementById('extraModal')
                ).show();
            }, 150);
        });
    });
}
// Ripple effect untuk ekstrakulikuler
document.querySelectorAll('.ekstra-item').forEach(item => {
    item.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';

        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

        item.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});
const ekstraItems = document.querySelectorAll('.row.text-center > div');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 150);
        }
    });
}, {
    threshold: 0.2
});

ekstraItems.forEach(item => observer.observe(item));

// ANIMASI SCROLL EKSTRAKURIKULER
document.addEventListener('DOMContentLoaded', () => {
    const ekstraItems = document.querySelectorAll(
        'section.container.py-5 .row.g-4 > div'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 150); // stagger
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25
    });

    ekstraItems.forEach(item => observer.observe(item));
});
