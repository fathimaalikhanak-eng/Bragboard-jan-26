// Admin credentials (for demonstration - in production use backend authentication)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

// Alternative admin accounts
const AUTHORIZED_USERS = {
  'admin': 'admin123',
  'manager': 'manager456',
  'supervisor': 'supervisor789'
};

// DOM Elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const dashboard = document.getElementById('dashboard');
const usernameDisplay = document.getElementById('username-display');
const logoutBtn = document.getElementById('logout-btn');

// Login Handler
loginBtn.addEventListener('click', function(e) {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  // Validate credentials
  if (validateLogin(username, password)) {
    // Store session
    sessionStorage.setItem('loggedInUser', username);
    
    // Show dashboard
    loginForm.style.display = 'none';
    dashboard.style.display = 'block';
    usernameDisplay.textContent = username;
  } else {
    alert('Invalid username or password!');
    usernameInput.value = '';
    passwordInput.value = '';
  }
});

// Validate Login
function validateLogin(username, password) {
  return AUTHORIZED_USERS[username] === password;
}

// Logout Handler
logoutBtn.addEventListener('click', function() {
  sessionStorage.removeItem('loggedInUser');
  loginForm.style.display = 'block';
  dashboard.style.display = 'none';
  usernameInput.value = '';
  passwordInput.value = '';
});

// Check if user is already logged in on page load
window.addEventListener('load', function() {
  const loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
    loginForm.style.display = 'none';
    dashboard.style.display = 'block';
    usernameDisplay.textContent = loggedInUser;
  }
});