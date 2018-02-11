$(document).ready(function() {

    var randomNumber;
    var theScore = 0;
    var wins = 0;
    var losses = 0;
    
  var resetGame = function() {
  theScore = 0;   
  $(".crystals").empty();
  

   var images = [
       'assets/images/bluecrystal.png',
       'assets/images/pinkcrystal.png',
       'assets/images/purplecrystal.png',
       'assets/images/yellowcrystal.png'
   ]
    
        //generate random number for player to match between 19 and 120
        randomNumber = Math.floor(Math.random() * 101) + 19;
        //console.log("Random number: " + randomNumber);
  
  
       $("#randomNumberMain").html("Random Number: <br/>" + randomNumber);
  
           console.log("Main Random Number: " + randomNumber);
  
        //generate crystals dynamically
        for(var i = 0; i < 4; i++) {
         var crystalRandomNumber = Math.floor(Math.random() *12) +1;
         console.log("Crystal Random Numbers: " + crystalRandomNumber);
  
         var crystal = $("<div>");
             crystal.addClass("crystal");
             crystal.attr("random", crystalRandomNumber);
             crystal.css('background-image', 'url(' + images[i] +')');
         $(".crystals").append(crystal);
         
        }
    
   }
   resetGame();
  

  //add the randomNumber of the crystal when clicked to score
   //blue crystal button
   $(document).on("click", ".crystal", function() {
         var num = parseInt($(this).attr("random"));

         theScore += num;  //add number to itself
  
         console.log(theScore);
         $("#score").html("Your Total: <br/>" + theScore);
  
         if (theScore > randomNumber) {
         losses++;
         $("#lossesDisplay").html(losses);
         theScore === 0;
         $("#score").html("You Lose, click a crystal to keep playing");
         resetGame();
         }
     
         else if (theScore === randomNumber) {
         wins++;
         $("#winsDisplay").html(wins);
         theScore === 0;
         $("#score").html("You win!  Click a crystal to keep playing");
         resetGame();
         }
   });
   
   
   
   });
  
  
  
  
  
  
  
  