/**
* 1. get the mobile number input
* 2. get the pin input
* 3. match pin and mobile number
*     3-1. true:::>> alert> homepage
*     3-2. false:::>> alert> return
*/

document.getElementById('login-btn').addEventListener("click", function () {


    // 1. get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber)

    // 2. get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin)

    // 3. match pin and mobile number
    if (contactNumber == '01842847370' && pin == "1234") {
        // 3-1. true:::>> alert> homepage
        alert('Login Success');

        // window.location.replace("/home.html");
        window.location.assign("/home.html");

    } else {
        // 3-2. false:::>> alert> return
        alert('Login Failed');

    }

})