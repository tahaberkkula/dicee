var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomDice1 = "dice" + randomNumber1 + ".png";
var randomİmage1 = "images/" + randomDice1 ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomİmage1);

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomİmage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomİmage2);

if ( randomNumber1 > randomNumber2 ) {
   document.querySelector("h1").innerHTML = "1.oyuncu kazandı!"
}
else if ( randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "2.oyuncu kazandı!"
}
else if ( randomNumber1 = randomNumber2) {
    document.querySelector("h1").innerHTML = "berabereee!"
}