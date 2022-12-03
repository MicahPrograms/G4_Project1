function confirm_reset() {
    return confirm("Are you sure you want to reset the form?");
}
//Form validation from Micah
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

    return confirm("Continue submitting?");
}





// Javascript to validate credit card numbers by Micah
var card_number = document.getElementsByName("Credit")[0].value;
    var card1, card2, card3, card4, card5, card6, card7, card8;
    var sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8;
    var card9, card10, card11, card12, card13, card14, card15, card16;
    var final_value, remainder;
    
    function cardUpdated() {
        alert(card_number);
        return(card_number);
    }

    //Multiply the 2nd last, 4th last, 6th last, etc. numbers by 2 and store as new variable.
    card1 = ((card_number % 100)/10)*2;
    card2 = ((card_number % 10000)/1000)*2;
    card3 = ((card_number % 1000000)/100000)*2;
    card4 = ((card_number % 100000000)/10000000)*2;
    card5 = ((card_number % 10000000000)/1000000000)*2;
    card6 = ((card_number % 1000000000000)/100000000000)*2;
    card7 = ((card_number % 100000000000000)/10000000000000)*2;
    card8 = ((card_number % 10000000000000000)/1000000000000000)*2;

    //Add the digits of the above variables.
    sum1 = (card1 / 10) + (card1 % 10);
    sum2 = (card2 / 10) + (card2 % 10);
    sum3 = (card3 / 10) + (card3 % 10);
    sum4 = (card4 / 10) + (card4 % 10);
    sum5 = (card5 / 10) + (card5 % 10);
    sum6 = (card6 / 10) + (card6 % 10);
    sum7 = (card7 / 10) + (card7 % 10);
    sum8 = (card8 / 10) + (card8 % 10);

    var sum = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8;

    //Add the above sums of digits 1-8 to the remaining digits that were not used yet in the credit card number.
    card9 = ((card_number % 10));
    card10 = ((card_number % 1000)/100);
    card11 = ((card_number % 100000)/10000);
    card12 = ((card_number % 10000000)/1000000);
    card13 = ((card_number % 1000000000)/100000000);
    card14 = ((card_number % 100000000000)/10000000000);
    card15 = ((card_number % 10000000000000)/1000000000000);
    card16 = ((card_number % 1000000000000000)/100000000000000);

    final_value = card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16 + sum;
    remainder = (final_value % 10);

    //Identifying the type of credit card.
    var length = 0;
    var visa = card_number;
    var amex = card_number;
    var mastercard = card_number;
    var card_length = card_number;

    //Length of card
    while (card_length > 0)
    {
        card_length /= 10;
        length++;
    }

    //VISA
        while (visa >= 10)
        {
            visa /= 10;
        }

        if (visa ==4 && (length == 13 || length == 16) && remainder == 0)
        {
            printf("VISA\n");
            return (0);
        }

        //AMEX
        while (amex >= 100)
        {
            amex /= 10000000000000;
        }

        if ((amex == 34 || amex == 37) && length == 15 && remainder == 0)
        {
            return("AMEX");
        }

        //Mastercard
        while (mastercard >= 100)
        {
            mastercard /= 100000000000000;
        }

        if ((mastercard == 51 || mastercard == 52 || mastercard == 53 || mastercard == 54 || mastercard == 55) && length == 16 && remainder == 0)
        {
            
        }

    