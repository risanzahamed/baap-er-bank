document.getElementById("btn-deposit").addEventListener('click', function () {
    const depositFeild = document.getElementById('deposit-input');
    const NewdepositAmountString = depositFeild.value;
    const NewDepositAmount = parseFloat(NewdepositAmountString)


    const depositTotalElement = document.getElementById("deposit-amount")
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)


    const currentDeposit = NewDepositAmount + previousDepositTotal
    depositTotalElement.innerText = currentDeposit

    const balanceTotalElement = document.getElementById("balance-amount");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    const currentBalanceTotal = previousBalanceTotal + NewDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal

    depositFeild.value = '';
})