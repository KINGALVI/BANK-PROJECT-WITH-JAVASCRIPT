// Add an event listener for the submit button
document.getElementById('btn-submit').addEventListener('click', function () {

  // Get the email input field and retrieve the user's entered email
  const emailField = document.getElementById('user-email');
  const emailOutput = emailField.value;

  // Get the password input field and retrieve the user's entered password
  const passwordField = document.getElementById('user-password');
  const passwordOutput = passwordField.value;

  // Check if the entered email and password match the predefined credentials
  if (emailOutput === 'KINGALVI360@gmail.com' && passwordOutput === 'king alvi devoloper') {
    window.location.href = 'bank.html'; // Redirects the user to the bank dashboard upon successful login
  } else {
    // Alerts the user if the login details are incorrect
    alert('Wrong Login Information !! Please Provide Correct Login Credentials.');
  }
});