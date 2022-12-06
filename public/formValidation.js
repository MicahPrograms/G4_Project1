function confirm_reset() {
    return confirm("Are you sure you want to reset the form?");
}
//Form validation from Micah
var creditCardNum = document.getElementById("Credit").value;

function validate(myForm) {
    console.log("made it into the function");
    var formLength = 11;
    for (i=0; i<formLength; i++) {
        console.log(myForm[i].name);

        if(myForm[i].value == "") {
            console.log(myForm[i].name + " must have an input.");
            alert(myForm[i].name + " must have an input.");
            myForm[i].focus();
            return false;
        }
    }

    // - Micah: Comparing credit card number to regular expressions for each major credit card type to make sure card is valid 
    var creditCardNum = document.getElementById("Credit").value;

    // Mastercard
    var regMaster = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    var regVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var regAMEX = /^3[47][0-9]{13}$/;
    if(!regMaster.test(creditCardNum) && !regVisa.test(creditCardNum) && !regAMEX.test(creditCardNum))
    {
        alert("Please enter a valid credit card number. Remember: no spaces between numbers!");
        Credit.focus();
        return false;
    } 
    
    //Expiry date test
    var regExp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    var Expiry = document.getElementById("ExpiryDate").value;
    if(!regExp.test(Expiry))
    {
        alert("Please enter a valid Expiry Date.");
        ExpiryDate.focus();
        return false;
    } 

    var regCVV = /^[0-9]{3,4}$/;
    var CVVnumber = document.getElementById("CVV").value;
    if(!regCVV.test(CVVnumber))
    {
        alert("Please enter a valid CVV. This is found on the back of your credit card.");
        CVV.focus();
        return false;
    }    

    return confirm("Continue submitting?");
}

    function cardIdentify(){
        var creditCardNum = document.getElementById("Credit").value;
        var regMaster = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
        var regVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
        var regAMEX = /^3[47][0-9]{13}$/;
    
        if(regMaster.test(creditCardNum)) {
            document.getElementById('card').className = "cardvisible";
            document.getElementById('card').src = "mastercard.png";
            return false;
        }
        if(regVisa.test(creditCardNum)) {
            document.getElementById('card').className = "cardvisible";
            document.getElementById('card').src = "visa.png";
            return false;
        }
        if(regAMEX.test(creditCardNum)) {
            document.getElementById('card').className = "cardvisible";
            document.getElementById('card').src = "amex.png";
            return false;
        }
    
} 

