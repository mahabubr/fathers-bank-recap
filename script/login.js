document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;

    const passwordField = document.getElementById('password-field');
    const passwordFieldValue = passwordField.value;

    if (emailFieldValue === 'demo' && passwordFieldValue === '123') {
        window.location.href = 'dashboard.html'
    }
    else {
        alert('please input valid info')
    }
})