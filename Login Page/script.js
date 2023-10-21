const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate login logic (Replace with actual authentication)
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'yourusername' && password === 'yourpassword') {
        // Redirect to the dashboard or perform the desired action
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
