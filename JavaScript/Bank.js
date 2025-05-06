// Event listener for the deposit button
document.getElementById('btn-Diposit').addEventListener('click', function () {
  // Get the input field for deposit and remove any extra spaces
  const DipositInput = document.getElementById('Diposit-field');
  const DipositInputAmountString = DipositInput.value.trim();
  DipositInput.value = ''; // Clear input field after entry

  // Validate input: Ensure the user enters a numeric value
  if (!DipositInputAmountString || isNaN(DipositInputAmountString)) {
    alert("Please enter a valid numeric amount for deposit!");
    return; // Stop execution if input is invalid
  }

  // Convert the deposit input into a floating-point number
  const DipositInputAmountTotal = parseFloat(DipositInputAmountString);

  // Get the current deposit amount and balance
  const DipositAmount = document.getElementById('Diposit-amount');
  const DipositAmountTotal = parseFloat(DipositAmount.innerText);
  const BalanceTotal = document.getElementById('Balance-amount');
  const BalanceTotalAmount = parseFloat(BalanceTotal.innerText);

  // Update the deposit display and balance total
  DipositAmount.innerText = DipositAmountTotal + DipositInputAmountTotal;
  BalanceTotal.innerText = BalanceTotalAmount + DipositInputAmountTotal;
});

// Event listener for the withdraw button
document.getElementById('btn-Withdraw').addEventListener('click', function () {
  // Get the input field for withdrawal and remove any extra spaces
  const WithdrawInput = document.getElementById('Withdraw-field');
  const WithdrawInputString = WithdrawInput.value.trim();
  WithdrawInput.value = ''; // Clear input field after entry

  // Validate input: Ensure the user enters a numeric value
  if (!WithdrawInputString || isNaN(WithdrawInputString)) {
    alert("Please enter a valid numeric amount for withdrawal!");
    return; // Stop execution if input is invalid
  }

  // Convert the withdrawal input into a floating-point number
  const WithdrawInputTotal = parseFloat(WithdrawInputString);

  // Get the current withdrawal amount and balance
  const WithdrawAmount = document.getElementById('Withdraw-amount');
  const WithdrawAmountTotal = parseFloat(WithdrawAmount.innerText);
  const BalanceTotal = document.getElementById('Balance-amount');
  const BalanceTotalAmount = parseFloat(BalanceTotal.innerText);

  // Check if withdrawal exceeds available balance
  if (WithdrawInputTotal > BalanceTotalAmount) {
    alert("Insufficient balance for withdrawal!");
    return; // Stop execution if balance is insufficient
  }

  // Update the withdrawal display and adjust balance
  WithdrawAmount.innerText = WithdrawAmountTotal + WithdrawInputTotal;
  BalanceTotal.innerText = BalanceTotalAmount - WithdrawInputTotal;
});