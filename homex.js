function scrollToHero() {
    const heroSection = document.querySelector('.hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
  }

  function showForm(formType) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Hide both forms initially
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';

    // Show the selected form
    if (formType === 'login') {
      loginForm.style.display = 'block';
    } else if (formType === 'signup') {
      signupForm.style.display = 'block';
    }
  }

  function hideForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
  }

  function togglePasswordVisibility(fieldId, button) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField.type === "password") {
      passwordField.type = "text";
      button.textContent = "Hide";
      button.classList.remove('hide');
      button.classList.add('show');
    } else {
      passwordField.type = "password";
      button.textContent = "Show";
      button.classList.remove('show');
      button.classList.add('hide');
    }
  }

  function handleLoginSubmit() {
    // Redirect to main page after successful login
    window.location.href = 'main.html';
    return false; // Prevents form submission
  }

  function handleSignupSubmit() {
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match. Please try again.";
      return false; // Prevents form submission
    }

    // If passwords match, proceed to the next step (e.g., switch to login form)
    showForm('login');
    return false; // Prevents form submission
  }

  function updateBodyTypeImages() {
    const gender = document.getElementById('gender').value;
    const bodyTypeImages = document.getElementById('bodyTypeImages');

    if (gender === 'female') {
      bodyTypeImages.style.display = 'flex';
      // Load female body type images
      document.getElementById('ectomorph').src = 'img/female-ecto.png';
      document.getElementById('mesomorph').src = 'img/female-meso.png';
      document.getElementById('endomorph').src = 'img/female-endo.png';
    } else if (gender === 'male') {
      bodyTypeImages.style.display = 'flex';
      // Load male body type images
      document.getElementById('ectomorph').src = 'img/male-ecto.jpg';
      document.getElementById('mesomorph').src = 'img/male-meso.jpg';
      document.getElementById('endomorph').src = 'img/male-endo.jpg';
    } else {
      bodyTypeImages.style.display = 'none';
    }
  }

  function scrollToHero() {
    document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
  }