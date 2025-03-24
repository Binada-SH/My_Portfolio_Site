document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Animate elements on page load
    const content = document.querySelector('.content');
    const decoration = document.querySelector('.decoration');
    
    setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        decoration.style.opacity = '1';
    }, 100);

    // Add subtle parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const header = document.querySelector('.header');
        const circle = document.querySelector('.circle');
        
        header.style.transform = `translate(${mouseX * -10}px, ${mouseY * -10}px)`;
        circle.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });
});

// Add some scroll animations
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    
    if (scrollPosition > 50) {
        header.style.opacity = 1 - (scrollPosition / 500);
    } else {
        header.style.opacity = 1;
    }
});