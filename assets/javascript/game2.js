$(document).ready(function() {

    var randomNumber;
    var theScore = 0;
    var wins = 0;
    var losses = 0;
    var numberOptions = [];
    var number;

    //generate random number for player to match between 19 and 120
    var randNum = function(){
        return Math.floor(Math.random() * (121 - 19)) + 19;
    }
    randomNumber = randNum();

   // randomNumber = Math.floor(Math.random() * 101) + 19;
    //console.log("Random number: " + randomNumber);
    $("#randomNumberMain").text("Random Number" + randomNumber);

    // get a random number from 1 thru 12

    var randomCrystalNumber = function() {
        return Math.floor(Math.random() * (13 - 1)) +1;
        // console.log("Crystal Random Numbers: " + crystalRandomNumber);
  
        }//    console.log("Main Random Number: " + randomNumber);

 //generate crystals dynamically
 for(var i = 0; i < 4; i++) {
    // var crystalRandomNumber = Math.floor(Math.random() *12) +1;
    // console.log("Crystal Random Numbers: " + crystalRandomNumber);
    crystalRandomNumber = randomCrystalNumber();
    numberOptions.push(number);
    console.log("The numbers chosen are" + numberOptions[i]);
    console.log(numberOptions[1]);
    console.log(numberOptions[2]);
    console.log(numberOptions[3]);
    console.log(numberOptions[4]);
 }

    for(var i =0; i<numberOptions.length; i++){
        var crystal = $("<img>");
        crystal.addClass("crystal"); 
        if( i === 0){
            crystal.attr("src", "assets/images/bluecrystal.png");
        }else if( i ===1){
            crystal.attr("src", "assets/images/pinkcrystal.png");
        } else if(i === 2){
            crystal.attr("src", "assets/images/whitecrystal.png");
        } else if(i ===3){
            crystal.attr("src", "assets/images/yellowcrystal.png");
        }
        crystal.attr("random", numberOptions[i]);
    }
      //  crystal.css('background-image', 'url(' + images[i] +')');
    $(".crystals").append(crystal);
    $(".crystal").on("click", function(){
        var num = parseInt($(this).attr("random"));

        theScore += num;  //add number to itself
 
        console.log(theScore);
        $("#score").html("Your Total Score Is: " + theScore);
 
        if (theScore > randomNumber) {
        $(".win-lose-announcement").append("Sorry, you lost!");
        losses++;
        $("#lossesDisplay").html(losses);
        theScore === 0;
        resetGame();
        }
    
        else if (theScore === randomNumber) {
        $(".win-lose-announcement").append("You Win!");
        wins++;
        $("#winsDisplay").html(wins);
        theScore === 0;
        resetGame();
        }   
    });
    
    
     
    

  var resetGame = function() {
  theScore = 0;   
  $(".crystals").empty();
  $(".win-lose-announcement").empty();

});
   resetGame();
  
});
  //add the randomNumber of the crystal when clicked to score
   //blue crystal button
  
  
   
   
   
   
  
  
  
  
  
  
  
  