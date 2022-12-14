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
    // Go through inputs and check if its empty
    for(i=0;i<registrationFormArray.length;i++){
        // country already has a value selected as default
        // check the value of the name to see if its empty
        if(myForm[i].id == registrationFormArray[7]){
            continue;
        }     
        if(myForm[i].id == registrationFormArray[10] && myForm[i].value ==""){
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
    // validate postal code to be correct format 
    // index 7 is country
    if(document.getElementById(registrationFormArray[7]).value == "canada"){
        // Canada postal code
        var postalRegExp = new RegExp(/^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/);
        if(!postalRegExp.test(myForm.postal.value)){
            alert("Invalid postal code");
            myForm.postal.focus();
            return false;
        }
    }
    else{
        // USA Zip Code
        var postalRegExp = new RegExp(/(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/);
        if(!postalRegExp.test(myForm.postal.value)){
            alert("Invalid zip code"); 
            myForm.postal.focus();
            return false; 
        }
    }

    // validate phone number format
    var phoneNoRegExp = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
    if(!phoneNoRegExp.test(myForm.phone.value)){
        alert("Invalid phone number");
        myForm.phone.focus();
        return false;
    }
    // Check if busphone has been filled in
    // index 10 = busphone
    var busPhoneindex = 10;
    var busPhoneNoRegExp = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    if(registrationFormArray[busPhoneindex].name == "busPhone" && registrationFormArray[busPhoneindex].value != ""){
        if(!busPhoneNoRegExp.test(myForm.busPhone.value)){
            alert("Invalid Bus Phone Number");
            myForm.busphone.focus();
            return false;
        }
    }
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
    provincePlaceholder = document.getElementById("province");
    postalPlaceholder = document.getElementById("postal");
    flagImg = document.getElementById("flagImg");
    if(val == "usa"){
        provinceText.textContent = "State:";
        postalText.textContent = "ZIP Code:";
        provincePlaceholder.placeholder = "Your State...";
        postalPlaceholder.placeholder = "Your ZIP code...";
        flagImg.src = "usa";

    }
    else{
        provinceText.textContent = "Province:";
        postalText.textContent = "Postal Code:";
        provincePlaceholder.placeholder = "Your Province...";
        postalPlaceholder.placeholder = "Your Postal code...";
        flagImg.src = "canada";
    }
}

