document.getElementById('btn-submit').addEventListener('click', function () {
  const emailField = document.getElementById('user-email');
  const emailOutput = emailField.value;
  console.log(emailOutput);
  const passwordField = document.getElementById('user-password');
  const passwordOutput = passwordField.value;
  console.log(passwordOutput);
  if (emailOutput == 'alvialmahamud@gmail.com' && passwordOutput == 'alvi 555 alvi') {
    window.location.href = 'bank.html'
  }
  else {
    alert('login error');
  }
}
)