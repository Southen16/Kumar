document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
  
    // Toggle navigation menu for small screens
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.element a');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth',
          });
  
          // Close the navigation menu on small screens after clicking a link
          if (navList.classList.contains('show')) {
            navList.classList.remove('show');
          }
        }
      });
    });
  
    // Form validation for the contact form
    const contactForm = document.querySelector('#contact form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Simple form validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
  
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
          alert('Please fill out all fields in the form.');
          return;
        }
  
        // You can add more advanced validation or form submission logic here
  
        // Display a confirmation modal
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'block';
  
        // Reset the form after submission if needed
        contactForm.reset();
      });
    }
  
    // Close the modal when the close button is clicked
    const closeModalButton = document.getElementById('closeModalButton');
    if (closeModalButton) {
      closeModalButton.addEventListener('click', function () {
        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'none';
      });
    }
  
    // Interactive features for the menu section
    const menuItems = document.querySelectorAll('.menu__content');
  
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('mouseover', function () {
        this.classList.add('active');
      });
  
      menuItem.addEventListener('mouseout', function () {
        this.classList.remove('active');
      });
    });
  });




// script.js

// ... (previous JavaScript code)

document.addEventListener('DOMContentLoaded', function () {
  // ... (existing code)

  // Login form logic
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // Redirect to the main page or perform other actions
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  // Registration form logic
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = registerForm.registerEmail.value;
    const password = registerForm.registerPassword.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // Redirect to the main page or perform other actions
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  // ... (existing code)
});

  