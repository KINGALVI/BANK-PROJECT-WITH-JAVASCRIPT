document.getElementById('btn-Diposit').addEventListener('click', function () {

  const DipositInput = document.getElementById('Diposit-field');
  const DipositInputAmountString = DipositInput.value;
  DipositInput.value = '';
  const DipositInputAmountTotal = parseFloat(DipositInputAmountString);

  const DipositAmount = document.getElementById('Diposit-amount');
  const DipositAmountString = DipositAmount.innerText;
  const DipositAmountTotal = parseFloat(DipositAmountString);

  const DipositTotalAmountResult = DipositInputAmountTotal + DipositAmountTotal;
  DipositAmount.innerText = DipositTotalAmountResult;


  const BalanceTotal =document.getElementById('Balance-amount');
  const BalanceTotalString = BalanceTotal.innerText;
  const BalanceTotalAmount =parseFloat(BalanceTotalString);
  const BalanceTotalAmountResult=  BalanceTotalAmount+DipositTotalAmountResult;
  BalanceTotal.innerText=BalanceTotalAmountResult;

})

document.getElementById('btn-Withdraw').addEventListener('click', function () {

  const Withdrawinput = document.getElementById('Withdraw-field');
  const Withdrawinputstring = Withdrawinput.value;
  Withdrawinput.value = '';
  const WithdrawinputTotal = parseFloat(Withdrawinputstring);

  const WithdrawAmount = document.getElementById('Withdraw-amount');
  const WithdrawAmountstring = WithdrawAmount.innerText;
  const WithdrawAmountTotal = parseFloat(WithdrawAmountstring);

  const WithdrawTotalAmountResult = WithdrawinputTotal + WithdrawAmountTotal;
  WithdrawAmount.innerText = WithdrawTotalAmountResult;


  const BalanceTotal =document.getElementById('Balance-amount');
  const BalanceTotalString = BalanceTotal.innerText;
  const BalanceTotalAmount =parseFloat(BalanceTotalString);
  const BalanceTotalAmountResult=  BalanceTotalAmount+WithdrawTotalAmountResult;
  BalanceTotal.innerText=BalanceTotalAmountResult;

})