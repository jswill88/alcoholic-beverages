var age = prompt("How old are you?")
if (age < 21) {
    document.write('<h1 id="young">YOU ARE TOO YOUNG. PLEASE LEAVE THIS SITE</h1><!--')
} else {
var howMany = prompt("How many beers do you drink each day?")

if (howMany > 9) {
    document.write('<h3>Please visit <a href="https://www.aa.org/">Alcoholics Anonymous</a></h3>');
} else {

var today = new Date();
var hourNow = today.getHours();
var minutesLeft = 60 - today.getMinutes();
var shouldDrink;

if (hourNow >= 17) {
    shouldDrink = "It's already past 5pm, time to drink!";
} else {
   var timeToDrink = 16 - hourNow;
   shouldDrink = "You should start drinking in " + timeToDrink + " hours and "
   + minutesLeft + " minutes!";
}
if (howMany > 4) {
    document.write('<h3>You like to party!</h3>');
} else {
    document.write('<h3>You seem like a reasonable drinker.</h3>');
}

document.write('<h3>' + shouldDrink + '</h3>');
}}