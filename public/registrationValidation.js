// Author: Tim H

var registrationFormArray = ["fname","mname","lname","address","postal","city","province","country",
    "email","phone","busPhone","userId","password"];

// Onfocus
function inFocus(currentInput, paraId){
    currentInput.style.background = "lightblue";
    document.getElementById(paraId).style.visibility = "visible";
}

// OnBlur
function outFocus(currentInput,paraId){
    currentInput.style.background = "white";
    document.getElementById(paraId).style.visibility = "hidden";
}

// Submit Form
function confirmSubmit(myForm){
    console.log(myForm[0].value);
    // Go through inputs and check if its empty
    for(i=0;i<registrationFormArray.length;i++){
        console.log(myForm[i].name);
        // country already has a value selected as default
        // check the value of the name to see if its empty
        if(myForm[i].name == "country"){
            continue;
        }
        if(myForm[i].name =="busPhone"){
            continue;
        }
        else if(myForm[i].value ==""){
            console.log(myForm[i].name +" must have a value");
            alert(myForm[i].name +" must have a value");
            myForm[i].focus();
            return false;
        }
    }
    // validate email to be correct format
    var emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (!emailRegExp.test(myForm.email.value)){
        alert("Invalid email address");
        myForm.email.focus();
        return false;
    }
    alert(myForm.postal.value);
    // validate postal code to be correct format 
    if(document.getElementById("country").value == "canada"){
        // Canada postal code
        var postalRegExp = new RegExp(/^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/);
        if(!postalRegExp.test(myForm.postal.value)){
            return postalAlertInvalid();
        }
    }
    else{
        // USA Zip Code
        var postalRegExp = new RegExp(/(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/);
        if(!postalRegExp.test(myForm.postal.value)){
            return postalAlertInvalid();
        }
    }

}

function postalAlertInvalid(){
    document.getElementById("postal").focus();
    return false;
}

// Reset Form
function confirmReset(){
    if(confirm("Are you sure you want to reset?")){
        alert("input has been cleared");
        document.getElementById("form").reset();
    }
}

// Country value changes
function countryVal(){
    val = document.getElementById("country").value;
    // change text of Province to State when USA is chosen
    // Change text of State to Province when Canada is chosen
    provinceText = document.getElementById("provLabel");
    postalText = document.getElementById("postalLabel");
    if(val == "usa"){
        provinceText.textContent = "State:"
        postalText.textContent = "ZIP Code:"
    }
    else{
        provinceText.textContent = "Province:"
        postalText.textContent = "Postal Code:"
    }
}