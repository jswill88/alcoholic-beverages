var age = prompt("How old are you?")
var today = new Date();
var hourNow = today.getHours();
var minutesLeft = 60 - today.getMinutes();
var shouldDrink;

function tooYoung() {
    document.write('<h1 id="young">YOU ARE TOO YOUNG. PLEASE LEAVE THIS SITE</h1><!--')
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

if (age > 21) {
    tooYoung();
} else {
    var howMany = prompt("How many beers do you drink each day?")
    if (howMany > 10) {
        alcoholic();
    } else {
        whenToDrink();
    }
    userDescription();
}