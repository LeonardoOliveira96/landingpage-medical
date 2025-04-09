
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle menu on click
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
      navLinks.classList.remove('active');
    }
  });
  
  // Smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only prevent default if it's not just "#" (which would be the top of the page)
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const yOffset = -80; // Navbar height offset
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
          
          // Update URL
          history.pushState(null, null, targetId);
        }
      }
    });
  });
  
  // Testimonial Slider
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
  
  function showSlide(index) {
    testimonialItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialItems[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }
  
  // Next slide
  nextBtn.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % testimonialItems.length;
    showSlide(currentSlide);
  });
  
  // Previous slide
  prevBtn.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + testimonialItems.length) % testimonialItems.length;
    showSlide(currentSlide);
  });
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      showSlide(index);
    });
  });
  
  // Auto slide every 5 seconds
  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialItems.length;
    showSlide(currentSlide);
  }, 5000);
  
  // Pause auto slide on hover
  const testimonialSlider = document.querySelector('.testimonials-slider');
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  testimonialSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialItems.length;
      showSlide(currentSlide);
    }, 5000);
  });
  
  // Form submission with validation
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;
      
      if (name && email && phone && service && date) {
        // Form is valid, you would normally send data to server here
        alert('Obrigado! Recebemos seu pedido de agendamento e entraremos em contato em breve para confirmação.');
        appointmentForm.reset();
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    });
  }
  
  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');
  
  function highlightNavItem() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
    
    // If we're at the top of the page, highlight the first link
    if (scrollPosition < 100) {
      navItems.forEach(item => item.classList.remove('active'));
      navItems[0].classList.add('active');
    }
  }
  
  window.addEventListener('scroll', highlightNavItem);
  highlightNavItem(); // Run once on page load
});

// URL handling for internal navigation
window.addEventListener('load', function() {
  // Check if the URL contains a hash and scroll to that section
  if (window.location.hash) {
    const targetId = window.location.hash;
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      setTimeout(() => {
        const yOffset = -80; // Navbar height offset
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }, 100);
    }
  }
});

// Create a 404 page
function create404Page() {
  const is404 = window.location.pathname !== '/' && 
                window.location.pathname !== '/index.html' &&
                !window.location.pathname.endsWith('/');
  
  if (is404) {
    document.body.innerHTML = `
      <header class="navbar">
        <div class="container">
          <div class="logo">
            <a href="/">Consultório<span class="text-medical-dark-blue">Médico</span></a>
          </div>
          <nav>
            <ul class="nav-links">
              <li><a href="/">Início</a></li>
              <li><a href="/#sobre">Sobre</a></li>
              <li><a href="/#servicos">Serviços</a></li>
              <li><a href="/#depoimentos">Depoimentos</a></li>
              <li><a href="/#contato">Contato</a></li>
            </ul>
          </nav>
          <div class="menu-toggle">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </header>
      
      <main class="not-found">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.</p>
        <a href="/" class="btn-primary">Voltar para a Página Inicial</a>
      </main>
      
      <footer class="footer">
        <div class="container">
          <div class="footer-bottom">
            <p>&copy; 2025 Consultório Médico. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    `;
    
    // Re-initialize menu toggle for 404 page
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
      });
    }
  }
}

// Run 404 page check after DOM is fully loaded
document.addEventListener('DOMContentLoaded', create404Page);
