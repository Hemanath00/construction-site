document.addEventListener("DOMContentLoaded", () => {
  // ─── PAGE LOADER ───
  const loader = document.getElementById("loader");
  if (loader) {
    window.addEventListener("load", () => {
      setTimeout(() => { 
        loader.classList.add("hidden"); 
      }, 600);
    });
  }

  // ─── NAVBAR SCROLL EFFECT ───
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ─── MOBILE MENU TOGGLE ───
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mobileNav.classList.toggle("open");
    });
    
    // Close mobile menu when link is clicked
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        mobileNav.classList.remove("open");
      });
    });
  }

  // ─── REVEAL ON SCROLL ANIMATION ───
  const revealItems = document.querySelectorAll(".reveal");
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealItems.forEach(item => {
      if (item.getBoundingClientRect().top < triggerBottom) {
        item.classList.add("revealed");
      }
    });
  };
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // ─── PROJECT FILTER FUNCTIONALITY ───
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".proj-card");
  
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      filterTabs.forEach(t => t.classList.remove("active"));
      // Add active class to clicked tab
      tab.classList.add("active");
      
      const filter = tab.getAttribute("data-filter");
      
      // Filter project cards
      projectCards.forEach(card => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ─── CONTACT FORM SUBMISSION ───
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Get form data
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const projType = document.getElementById("proj_type").value;
      const message = document.getElementById("msg").value.trim();
      
      // Basic validation
      if (!name || !email || !phone || !message) {
        alert("Please fill all fields");
        return;
      }
      
      // Email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

if (!emailRegex.test(email)) {
  alert("Please enter a valid Gmail address");
  return;
}
      // Phone validation
      // Phone validation (10 digits only)
const phoneRegex = /^\d{10}$/;

if (!phoneRegex.test(phone)) {
  alert("Please enter a valid 10-digit phone number");
  return;
}

const nameRegex = /^[A-Za-z\s]+$/;
if (!nameRegex.test(name)) {
  alert("Name should contain only letters");
  return;
}
      
      // Success message
      const whatsappNumber = "916369378550"; // your number with country code

const whatsappMessage = `Hello, I would like to enquire about construction services.

Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projType}
Message: ${message}`;

const whatsappURL =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

window.open(whatsappURL, "_blank");
      // Reset form
      contactForm.reset();
    });
  }

  // ─── TESTIMONIALS SLIDER ───
  const tesliderWrap = document.querySelector(".testi-slider-wrap");
  const teslider = document.querySelector(".testi-slider");
  const testiDots = document.querySelectorAll(".testi-dot");
  const testiLtBtn = document.querySelectorAll(".testi-btn")[0];
  const testiRtBtn = document.querySelectorAll(".testi-btn")[1];
  
  if (teslider && testiLtBtn && testiRtBtn) {
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll(".testi-card").length;
    const slideWidth = 100 / 3; // 3 cards per view
    
    const goToSlide = (index) => {
      currentSlide = (index + totalSlides) % totalSlides;
      const offset = -(currentSlide * slideWidth);
      teslider.style.transform = `translateX(${offset}%)`;
      
      // Update active dot
      testiDots.forEach(dot => dot.classList.remove("active"));
      if (testiDots[currentSlide]) {
        testiDots[currentSlide].classList.add("active");
      }
    };
    
    testiLtBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
    testiRtBtn.addEventListener("click", () => goToSlide(currentSlide + 1));
    
    testiDots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });
    
    // Initial state
    goToSlide(0);
  }
});
