document.getElementById("btn-withdraw").addEventListener('click', function () {
    const withdrawFeild = document.getElementById('withdraw-feild');
    const NewWithdrawAmountString = withdrawFeild.value;
    const NewWithdrawAmount = parseFloat(NewWithdrawAmountString)
    

    const withdrawTotalElement = document.getElementById("withdraw-amount")
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalString)

    const currentWithdraw = NewWithdrawAmount + previousWithdrawAmount
    withdrawTotalElement.innerText = currentWithdraw

    const balanceTotalElement = document.getElementById("balance-amount");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    const newBalanceTotal = previousBalanceTotal - NewWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal

    withdrawFeild.value = '';
})