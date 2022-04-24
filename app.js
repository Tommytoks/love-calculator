var firstinput = prompt("Input your name");
var secondinput = prompt("Input your partner name");

function loveCalculator (Mary, John) {
var lovecomp = (Math.random() * 100) + 1;
var result = Math.floor(lovecomp);

    alert("You got the game, " + firstinput + "!!!  Your love compatibility with  " + secondinput + " is " + result + "% ");
    // return("you got the game, " + firstinput + " your love compatibility with " + secondinput + " is " + result + "% ");

 }
loveCalculator(firstinput, secondinput)