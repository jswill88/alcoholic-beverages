var age = prompt("How old are you? (0-120)")
var today = new Date();
var hourNow = today.getHours();
var minutesLeft = 60 - today.getMinutes();
var shouldDrink;

function isAge() {
    while ((age > 120) || (age < 0)) {
    age = prompt("Not a valid age. Please enter a valid age (0-120).")
         }
}

function tooYoung() {
    document.write('<h1 id="young">YOU ARE TOO YOUNG. PLEASE LEAVE THIS SITE</h1><!--')
}

function abvGuess() {
    for (var i = 0; i < 5; i++) {
        var pctGuess = prompt("Guess the low end alcohol percent of an IPA")
        if ((pctGuess == 6) || (pctGuess == '6%')) {
            alert("Cheers! You are correct!")
            break;
        } else  if (i == 4) {
            alert("You must be drunk! The answer is 6%")
        } else {
            alert("Wrong! Take a sip and try again!")
        }
    }
}

function alcoholic() {
    document.write('<h3>Please visit <a href="https://www.aa.org/">Alcoholics Anonymous</a></h3>');
}

function whenToDrink() {
    if (hourNow >= 17) {
        shouldDrink = "It's already past 5pm, time to drink!";
    } else {
    var timeToDrink = 16 - hourNow;
    shouldDrink = "You should start drinking in " + timeToDrink + " hours and "
    + minutesLeft + " minutes!";
    }
    document.write('<h3>' + shouldDrink + '</h3>');
} 

function userDescription() {
    if (howMany > 4) {
        document.write('<h3>You like to party!</h3>');
    } else {
        document.write('<h3>You seem like a reasonable drinker.</h3>');
    }
}
 
isAge();
if (age < 21) {
    tooYoung();
} else {
    abvGuess();
    var howMany = prompt("How many beers do you drink each day?")
    if (howMany > 10) {
        alcoholic();
    } else {
        userDescription();
        whenToDrink();
    }
}