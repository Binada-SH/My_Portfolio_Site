document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const content = document.querySelector('.content');
    const decoration = document.querySelector('.decoration');
    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        decoration.style.opacity = '1';
    }, 100);
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    
    if (scrollPosition > 50) {
        header.style.opacity = 1 - (scrollPosition / 500);
    } else {
        header.style.opacity = 1;
    }
});