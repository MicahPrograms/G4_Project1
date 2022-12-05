function confirm_reset() {
    return confirm("Are you sure you want to reset the form?");
}
//Form validation from Micah




var formLength = myForm.length;

function validate(myForm) {
console.log(myForm[i].value);

for (i=0; i<orderFormTotal; i++) {
    console.log(myForm[i].name);

    if(myForm[i].value == "") {
        console.log(myForm[i].name + " must have an input.");
        alert(myForm[i].name + " must have an input.");
        myForm[i].focus();
        return false;
    }
}







/*
function validate(myForm)
{
    var FirstName = document.getElementById("FirstName");
    if (FirstName.value == "")
    {
        alert("You must provide your first name");
        FirstName.focus();
        return false;
    }

    var LastName = document.getElementById("LastName");
    if (LastName.value == "")
    {
        alert("You must provide your last name");
        LastName.focus();
        return false;
    }

    var HomeAddress = document.getElementById("HomeAddress");
    if (HomeAddress.value == "")
    {
        alert("You must provide your Home Address");
        HomeAddress.focus();
        return false;
    }

    var ProvState = document.getElementById("ProvState");
    if (ProvState.value == "")
    {
        alert("You must provide your Province/State");
        ProvState.focus();
        return false;
    }

    var Country = document.getElementById("Country");
    if (Country.value == "")
    {
        alert("You must provide your Country of residence");
        Country.focus();
        return false;
    }

    var Email = document.getElementById("Email");
    if (Email.value == "")
    {
        alert("You must provide your Email Address (so we can send you spam)");
        Email.focus();
        return false;
    }

    */


    // - Micah: Comparing credit card number to regular expressions for each majot credit card type to make sure card is valid 
    var creditCardNum = document.getElementById("Credit").value;

    // Mastercard
    var regMaster = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    var regVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var regAMEX = /^3[47][0-9]{13}$/;
    if(!regMaster.test(creditCardNum) && !regVisa.test(creditCardNum) && !regAMEX.test(creditCardNum))
    {
        alert("Please enter a valid credit card number.");
        Credit.focus();
        return false;
    } 
    
    //Expiry date test
    var regExp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    var ExpiryDate = document.getElementById("ExpiryDate").value;
    if(!regExp.test(ExpiryDate))
    {
        alert("Please enter a valid Expiry Date.");
        ExpiryDate.focus();
        return false;
    } 

return confirm("Continue submitting?");




function cardValidate(){
    
    
} 
}