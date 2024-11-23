// Function to show login card and hide register card
function showLogin() {
    document.getElementById('loginCard').style.display = 'block';
    document.getElementById('registerCard').style.display = 'none';
  }
  
  // Function to show register card and hide login card
  function showRegister() {
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('registerCard').style.display = 'block';
  }

  function login() {
    localStorage.setItem('usersName', 'Emily');
    window.location.href = 'index.html';
  }
  function logout() {
    localStorage.removeItem('usersName');
    window.location.href = 'login.html';
  }
  function checkIfLogin() {
    const usersName = localStorage.getItem('usersName');
    const userIcon = document.getElementById('userIcon');
    const loginLink = document.getElementById('loginLink');
    const loginOption = document.getElementById('loginOption');
    const logoutOption = document.getElementById('logoutOption');
    const accountOption = document.getElementById('accountOption');
  
    if (usersName) {
      userIcon.style.display = 'block';
      loginLink.style.display = 'none';
      accountOption.style.display = 'block';
      logoutOption.style.display = 'block';
      loginOption.style.display = 'none';
    } else {
      userIcon.style.display = 'none';
      loginLink.style.display = 'block';
      accountOption.style.display = 'none';
      logoutOption.style.display = 'none';
      loginOption.style.display = 'block';
    }
  }
  // Main or initial function
  function init() {
    // Initially show only login card
    checkIfLogin();
    showLogin();
  }
  
  // Call the main function when the document is ready
  document.addEventListener('DOMContentLoaded', init);
