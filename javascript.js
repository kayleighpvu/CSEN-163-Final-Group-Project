document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
  
    if (form) {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const usernameError = document.getElementById('username-error');
      const passwordError = document.getElementById('password-error');
  
      form.addEventListener('submit', function (event) {
        event.preventDefault();
  
        let hasError = false;
  
        [usernameInput, passwordInput].forEach(input => input.classList.remove('error'));
        [usernameError, passwordError].forEach(el => {
          el.style.display = 'none';
          el.textContent = '';
        });
  
        if (usernameInput.value.trim() === '') {
          usernameInput.classList.add('error');
          usernameError.textContent = 'Please fill out this field.';
          usernameError.style.display = 'block';
          hasError = true;
        }
  
        if (passwordInput.value.trim() === '') {
          passwordInput.classList.add('error');
          passwordError.textContent = 'Please fill out this field.';
          passwordError.style.display = 'block';
          hasError = true; 
        }
  
        if (!hasError) {
          const username = usernameInput.value.trim();
          localStorage.setItem('loggedInUser', username);
          window.location.href = 'thrift-store.html';
        }
      });
    }
  
    const greetingEl = document.getElementById('user-greeting');
    const storedUsername = localStorage.getItem('loggedInUser');
    if (greetingEl && storedUsername) {
      greetingEl.innerHTML = `<b>Welcome, ${storedUsername}!</b>`;
    }
  
    const userIcon = document.getElementById('user-icon');
    const userPopup = document.getElementById('user-popup');
    const signOutButton = document.getElementById('sign-out-button');
  
    if (userIcon && userPopup) {
      userIcon.addEventListener('click', () => {
        userPopup.style.display = userPopup.style.display === 'block' ? 'none' : 'block';
      });
  
      document.addEventListener('click', function (event) {
        if (!userIcon.contains(event.target) && !userPopup.contains(event.target)) {
          userPopup.style.display = 'none';
        }
      });
    }
  
    if (signOutButton) {
      signOutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'login.html';
      });
    }
  
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }
  
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        question.classList.toggle('open');
      });
    });
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        let hasError = false;
  
        [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('error'));
        [nameError, emailError, messageError].forEach(el => {
          el.style.display = 'none';
          el.textContent = '';
        });
  
        if (nameInput.value.trim() === '') {
          nameInput.classList.add('error');
          nameError.textContent = 'Please fill out this field.';
          nameError.style.display = 'block';
          hasError = true;
        }
  
        if (emailInput.value.trim() === '') {
          emailInput.classList.add('error');
          emailError.textContent = 'Please fill out this field.';
          emailError.style.display = 'block';
          hasError = true;
        }
  
        if (messageInput.value.trim() === '') {
          messageInput.classList.add('error');
          messageError.textContent = 'Please fill out this field.';
          messageError.style.display = 'block';
          hasError = true;
        }
  
        if (!hasError) {
          alert('Message sent successfully!');
          contactForm.reset();
        }
      });
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".toggle-star");

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const filled = "images/filled-star.jpeg";
      const notFilled = "images/not-filled-star.png";

      star.src = star.src.includes("not-filled-star.png") ? filled : notFilled;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("genderPopup");
  const genderOptions = document.querySelectorAll(".gender-option");

  genderOptions.forEach(option => {
    option.addEventListener("click", () => {
      popup.style.display = "none";
      // Optional: store the gender selection if needed
      // localStorage.setItem("gender", option.dataset.gender);
    });
  });
});