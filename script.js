document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
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
      if (decoration) {
        decoration.style.opacity = '1';
      }
    }, 100);
  });
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    const socialIcons = document.querySelector('.social_icons');
    const copyrights = document.querySelector('.copyrights');
    const skill = document.querySelector('.skills_section');
    
    if (scrollPosition > 50) {
      header.style.opacity = 1 - (scrollPosition / 500);
    } else {
      header.style.opacity = 1;
    }
    
    if (scrollPosition > 100) {
      socialIcons.style.opacity = 1 - ((scrollPosition - 100) / 400);
    } else {
      socialIcons.style.opacity = 1;
    }
    
    if (scrollPosition > 150) {
      copyrights.style.opacity = 1 - ((scrollPosition - 150) / 400);
    } else {
      copyrights.style.opacity = 1;
    }

    if (scrollPosition > 200) {
      skill.style.opacity = 1 - ((scrollPosition - 1500) / 400);
    } else {
      skill.style.opacity = 1;
    }
  });