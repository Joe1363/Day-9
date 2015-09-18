$(document).ready(function() {
var secretnumber = Math.floor((Math.random() * 100) + 1);
var userinput;
var currentcount = 1;
var difference;
var responses = ["Really Freakin' Close!", "Pretty Close!", "Getting There!", "Not Even Close!"];
var toohigh = "Too High! ";
var toolow = "Too Low! ";
var index;
$('#textbox').focus();
//Click Function Starts Here
  $("#guessbtn").click(function(){
     userinput = parseInt($("#textbox").val());
     //checks if count is less than 8
     if (currentcount < 8) {
       //validates user input
       if (isNaN(userinput)) {  //number
         alert('Please enter a valid number between 1 and 100.');
         $('#textbox').val('');
       } else if (userinput <= 100 && userinput >= 1) { //user is within range and is valid #
         difference = Math.abs(secretnumber - userinput);//calculates difference and range
           if (difference > 0 && difference < 11) {
             index = 0;
           } else if (difference > 10 && difference < 21) {
             index = 1;
           } else if (difference > 20 && difference < 40) {
             index = 2;
           } else if (difference > 40) {
             index = 3;
           } //difference check ends
           //correct input options
         if (userinput === secretnumber) { //correct answer win condition
           $(".guesses").append("<button id='win' class='btn-lg btn-danger'>You Win!!!</button>");
           $("#guessbtn").attr("disabled", "disabled");
           $(".content").effect("bounce", {times: 3}, "slow");
           setTimeout(explode, 3000);
           function explode() { //random win effects
             $('#win').effect('explode');
             $(".guesses").append("<h2>Play again!!!</h2>");
           }
         } else if (userinput > secretnumber) { //user inpus is bigger than secret #
              //checks condition for right reponse
             if (currentcount > 3 && currentcount < 6) {
               $(".guesses").append("<h4 id='guesstext' class='orangetext'>Guess " + currentcount + ": " + userinput + " - " + toohigh + responses[index] + "</h4>");
             } else if (currentcount > 5) {
               $(".guesses").append("<h4 id='guesstext' class='redtext'>Guess " + currentcount + ": " + userinput +  " - " + toohigh + responses[index] + "</h4>");
             } else {
             $(".guesses").append("<h4 id='guesstext' class='whitetext'>Guess " + currentcount + ": " + userinput +  " - " + toohigh + responses[index] + "</h4>");
             }
             $('#textbox').val('');
             currentcount++;
             if (currentcount === 8) { // if count limit is reach lose condition and button disabled
               $(".guesses").append("<h2 id='losetext'>You have no more guesses left. You lose. Go home!</h2>");
               $("#guessbtn").attr("disabled", "disabled");
             }
           } else if (userinput < secretnumber) { //user input less than secret #
               //checks condition for right reponse
               if (currentcount > 3 && currentcount < 6) {
                 $(".guesses").append("<h4 id='guesstext' class='orangetext'>Guess " + currentcount + ": " + userinput +  " - " + toolow + responses[index] + "</h4>");
               } else if (currentcount > 5) {
                 $(".guesses").append("<h4 id='guesstext' class='redtext'>Guess " + currentcount + ": " + userinput + " - " + toolow + responses[index] + "</h4>");
               } else {
               $(".guesses").append("<h4 id='guesstext' class='whitetext'>Guess " + currentcount + ": " + userinput +  " - " + toolow + responses[index] + "</h4>");
               };
               $('#textbox').val('');
               currentcount++
               if (currentcount === 8) { // if count limit is reach lose condition and button disabled
                 $(".guesses").append("<h2 id='losetext'>You have no more guesses left. You lose. Go home!</h2>");
                 $("#guessbtn").attr("disabled", "disabled");
               }
            }
       } else { //number too high/low
         alert('Please enter a number between 1 and 100.');
         $('#textbox').val('');
         currentcount;
       }
     };
   });//click function end

  $('#restart').click(function() { //resets game
    secretnumber = Math.floor((Math.random() * 100) + 1);
    userinput = "";
    $('#textbox').val('');
    currentcount = 1;
    $('h4').remove();
    $('h2').remove();
    $('#win').remove();
    $("#guessbtn").removeAttr("disabled", "disabled");
    $("#textbox").focus();
  });

  event.preventDefault();
});//documentready
