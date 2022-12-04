// Author: Tim H
var registrationFormArray = ["fname","mname","lname","address","postal","city","province","country",
    "email","phone","busphone","userId","password"];

// Onfocus
function inFocus(currentInput, paraId){
    currentInput.style.background = "#2596be";
    document.getElementById(paraId).style.visibility = "visible";
}

// OnBlur
function outFocus(currentInput,paraId){
    currentInput.style.background = "#2596be";
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
    var postalRegExp = new RegExp(/^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/);
	if(!postalRegExp.test(myForm.postal.value)){
		alert("Invalid postal code");
		myForm.postal.focus();
		return false;
	}
}

// Reset Form
function confirmReset(){
    if(confirm("Are you sure you want to reset?")){
        alert("input has been cleared");
        document.getElementById("form").reset();
    }
}