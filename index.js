document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const emailOutput = emailField.value;

  const passwordField = document.getElementById('user-password');
  const passwordOutput = passwordField.value;
  
  if (emailOutput == 'alvialmahamud@gmail.com' && passwordOutput == 'alvi 555 alvi') {
    window.location.href = 'bank.html'
  }
  else {
    alert('login error');
  }
}
)