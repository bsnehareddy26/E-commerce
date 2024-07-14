document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Countdown timer
    const countdown = () => {
      const endDate = new Date('2024-12-31T23:59:59').getTime();
      const now = new Date().getTime();
      const distance = endDate - now;
  
      if (distance < 0) {
        clearInterval(timer);
        document.querySelector('.countdown').innerHTML = "SALE ENDED";
        return;
      }
  
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 24)) / (1000 * 60 * 60 *24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.querySelector('.countdown .days').innerText = days;
      document.querySelector('.countdown .hours').innerText = hours;
      document.querySelector('.countdown .minutes').innerText = minutes;
      document.querySelector('.countdown .seconds').innerText = seconds;
    };
  
    const timer = setInterval(countdown, 1000);
  
    // Carousel for best seller and popular products
    const initCarousel = (containerSelector, navSelector) => {
      const container = document.querySelector(containerSelector);
      const navPrev = document.querySelector(`${navSelector} .prev`);
      const navNext = document.querySelector(`${navSelector} .next`);
  
      let scrollPosition = 0;
  
      navPrev.addEventListener('click', () => {
        scrollPosition -= container.clientWidth;
        if (scrollPosition < 0) scrollPosition = 0;
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      });
  
      navNext.addEventListener('click', () => {
        scrollPosition += container.clientWidth;
        if (scrollPosition > container.scrollWidth - container.clientWidth) {
          scrollPosition = container.scrollWidth - container.clientWidth;
        }
        container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      });
    };
  
    initCarousel('.seller__grid', '.seller__nav');
    initCarousel('.product__grid', '.product__nav');
  });
  