/**
 *  1. get the agent number & validate
    2. get the amount, validate, convert to number
    3. get the Current Balance, validate, convert to number
    4. calculate new Balance
    5. get the pin and verify

        5-1: true:: show an alert > set Balance
        5-2: false:: show an error alert > return
*/

document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1. get the agent number & validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert("Invalid Agent Number");
        return;
    }

    // 2. get the amount, validate, convert to number
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // 3. get the Current Balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4. calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);

    if (newBalance < 0) {
        alert("invalid Amount");
        return;
    }


    // 5. get the pin and verify
    const cashoutPinInput = document.getElementById('cashout-pin')
    const pin = cashoutPinInput.value;

    if (pin === "1234") {
        // 5-1: true:: show an alert > set Balance
        alert("Cashout Successfull");
        console.log('Current Balance', newBalance);
        balanceElement.innerText = newBalance;

    } else {
        // 5-2: false:: show an error alert > return
        alert('invalid pin');
        return;
    }
    // console.log(Pin);


})