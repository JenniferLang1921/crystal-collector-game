
$(document).ready(function() { 
var randomNumber;
var blueCrystalRandomNumber;
var pinkCrystalRandomNumber;
var whiteCrystalRandomNumber;
var yellowCrystalRandomNumber;
var theScore = 0;
var Wins = 0;
var Losses = 0;



// generate random number for player to match between 19 and 120

randomNumber = [Math.floor(Math.random()*120) + 19];
console.log(randomNumber);
//Display random number

$("#randomNumberMain").text("Random Number: " + randomNumber);

//generate random numbers for each crystal between 1 and 12
blueCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];
pinkCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];
whiteCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];
yellowCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];

//add the randomNumber of the crystal when clicked to score 

//blue Crystal button
$("#blueCrystal").on("click", function() {
theScore = blueCrystalRandomNumber + theScore;  //is this right?  It doesn't look right
$("#score").text("Score:" + theScore);
});

//pink Crystal button
$("#pinkCrystal").on("click", function() {
    theScore = pinkCrystalRandomNumber + theScore;  //is this right?  It doesn't look right
    $("#score").text("Score:" + theScore);
    });
 
 //white Crystal button
    $("#whiteCrystal").on("click", function() {
        theScore = whiteCrystalRandomNumber + theScore;  //is this right?  It doesn't look right
        $("#score").text("Score:" + theScore);
        });

        //yellow Crystal button
    $("#yellowCrystal").on("click", function() {
        theScore = yellowCrystalRandomNumber + theScore;  //is this right?  It doesn't look right
        $("#score").text("Score:" + theScore);
        });


//if they are equal, generate a "you win"

//if the player goes over the amount, they lose

//keep track of wins and losses

//reset the game
//function clear() {}

//regenerate 1 new random number to match
//regenerate 4 crystal random numbers
//reset score, but not wins and losses



});










