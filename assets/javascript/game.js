
$(document).ready(function() { 

var randomNumber;
var blueCrystalRandomNumber;
var pinkCrystalRandomNumber;
var whiteCrystalRandomNumber;
var yellowCrystalRandomNumber;
var theScore = 0;
var wins = 0;
var losses = 0;



// generate random number for player to match between 19 and 120

var randomNumber = Math.floor(Math.random()*101) + 19;
console.log("Random number:" + randomNumber);
//Display random number

$("#randomNumberMain").text("Random Number: " + randomNumber);



//generate random numbers for each crystal between 1 and 12
 blueCrystalRandomNumber = Math.floor(Math.random() *12) + 1;
console.log("blue crystal:" + blueCrystalRandomNumber);

 pinkCrystalRandomNumber = Math.floor(Math.random()*12) + 1;
console.log("pink crystal:" + pinkCrystalRandomNumber);

 whiteCrystalRandomNumber = Math.floor(Math.random()*12) + 1;
console.log("white crystal:" + whiteCrystalRandomNumber);

 yellowCrystalRandomNumber = Math.floor(Math.random()*12) + 1;
console.log("yellow crystal:" + yellowCrystalRandomNumber);
 

//add the randomNumber of the crystal when clicked to score 

//blue Crystal button
$("#blueCrystal").on("click", function() {
  $(blueCrystalRandomNumber).val();

    #score").text("Score:" + theAddedScore);
});

//pink Crystal button
$("#pinkCrystal").on("click", function() {
    theAddedScore = pinkCrystalRandomNumber + theScore;  //is this right?  It doesn't look right
    $("#score").text("Score:" + theScore);
    });
 
 //white Crystal button
    $("#whiteCrystal").on("click", function() {
        theAddedScore = whiteCrystalRandomNumber + theScore;  //is this right?  It doesn't look right
        $("#score").text("Score:" + theScore);
        });

        //yellow Crystal button
    $("#yellowCrystal").on("click", function() {
        var theAddedScore = yellowCrystalRandomNumber + theScore;  //is this right?  It doesn't look right
        $("#score").text("Score:" + theScore);
        });


//if they are equal, generate a "you win"
if (theAddedScore = randomNumber) {
  $().text("You Win!");
  wins++;
}
//if the player goes over the amount, they lose
  if (theAddedScore > randomNumber) {
      $().text("You Lose");
      losses++;
  }
//keep track of wins and losses
  $(winDisplay).text(wins);
  $(lossesDisplay).text(losses);
//reset the game
function clear() {
//generate new main random number
    $(randomNumber).empty();
    randomNumber = [Math.floor(Math.random()*120) + 19];
    console.log("Random number:" + randomNumber);

//empty ALL things except wins and losses
        score = 0;
        $(blueCrystalRandomNumber).empty();
        $(pinkCrystalRandomNumber).empty();
        $(whiteCrystalRandomNumber).empty();
        $(yellowCrystalRandomNumber).empty();


    //new crystal random numbers
        blueCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];
        console.log("blue crystal:"+ blueCrystalRandomNumber);

        pinkCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];
        console.log("pink crystal:" + pinkCrystalRandomNumber);

        whiteCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];
        console.log("white crystal:" + whiteCrystalRandomNumber);

        yellowCrystalRandomNumber = number[Math.floor(Math.random()*12) + 1];
        console.log("yellow crystal:" + yellowCrystalRandomNumber);
}






});










