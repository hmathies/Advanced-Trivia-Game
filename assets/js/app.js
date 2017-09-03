//Built by Heather Mathies August 2017
//when the page loads...
$(document).ready(function() {
    var questionsIndex = 0;
    var question = 0;
    var choices = $('#selections');
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var i = 0;
    var timeRemaining = 10;
    var timerId;
    var giphy = [ "assets/images/TNY-Livestream-Gif.gif", "assets/images/anigif_enhanced-5260-1406732708-8.gif", "assets/images/eclipse.transitGIF.gif", "assets/images/vF7MiG.gif"];
    var j = 0;
// var length1 = allQuestions.length;
var allQuestions = [
{
  	q: "What year was the last solar eclipse?",
  	a: ["1978", "1979", "1980",  "1981"],
  	correct: 1	
},
{
  	q:"Which lunar phase does a solar eclipse happen in?",
  	a:["Full Moon","Half Moon", "New Moon", "Crescent Moon"],
  	correct:2
},
{
    q:"Which U.S. state was the first to experience the Solar Eclipse Totality?",
    a:["Oregon","California", "Montana", "South Carolina"],
    correct:0
},
{
    q:"The center line of totatlity passes through how many states?",
    a:["5","1", "20", "10"],
    correct:3
},
{
    q:"A solar eclipse is the lineup of the following celestial objects?",
    a:["Sun Moon Earth","Sun Earth Venus", "Earth Moon Stars", "Wind Earth Fire"],
    correct:0
},
{
    q:"The solar eclipse totality last about..",
    a:["60 minutes","30 minutes", "3 minutes", "24 hours"],
    correct:2
},
// {
//     q:"Which lunar phase does a solar eclipse happen in?",
//     a:["Full Moon","Half Moon", "New Moon", "Crescent Moon"],
//     correct:2
// },
// {
//     q:"Which lunar phase does a solar eclipse happen in?",
//     a:["Full Moon","Half Moon", "New Moon", "Crescent Moon"],
//     correct:2
// },
];

  /*when the page loads*/
    $("#questionPage").hide();
    $("#resultsPage").hide();
  /*when the start button is clicked*/
    $('.btn').on("click", function() {
          $("#startPage").hide();
          $("#questionPage").show();
          run(); 
    });
 /*this function starts the timer and checks the value of the user answers*/
  function run() {
    timerId = setInterval(decrement, 1000);
    // timeRemaining = 30;
    var correctAnswer = allQuestions[i].a[allQuestions[i].correct];
    var html = "";
    html += allQuestions[i].q + "<br><br>";

    $.each(allQuestions[i].a, function( index, value ) {
      if (value === correctAnswer) {
        html += '<button class="correct" type="button">'+ value +'</button>';
        $("#correct").html("<h3>" + "Correct: " + correct + "</h3>");
        

        console.log(correct);
      } else {
        html += '<button class="incorrect" type="button">'+value+'</button>';
        $("#incorrect").html("<h3>" + "Incorrect: " + incorrect + "</h3>");     
      }
    });
    html += '<br>';
    $('#question').html(html);
    i++;
  }
/*this function has the timer count down*/
  function decrement(){

    timeRemaining--;
     $("#timer").html("<h3>" + "Time Remaining: " + timeRemaining + "</h3>"); 

     if (timeRemaining === 0 ) {
        $("#questionPage").hide();
        $("#giphyPage").show();
        $('#c-or-i').html("Times Up!");
        $('#giphyImage').html("<img src=" + giphy[0] + " width='200px'/>");
        console.log(giphy[j]);
        clearInterval(timerId);
        setTimeout(nextQuestion,1000*5);
        timeRemaining = 10;
        unanswered++;
        $("#unanswered").html("<h3>" + "Unanswered: " + unanswered + "</h3>"); 
    } 
  }

//use this to update the next question, add giphys, 
  $("html").on( "click", ".correct", function() {
        correct++;
        $('#questionPage').hide();
        $("#giphyPage").show();
        $('#c-or-i').html("Correct!");
        $('#giphyImage').html("<img src=" + giphy[3] + " width='200px'/>"); 
        clearInterval(timerId);
        setTimeout(nextQuestion,1000*5);
  });

  $("html").on( "click", ".incorrect", function() {
        incorrect++;
        $('#questionPage').hide();
        $("#giphyPage").show();
        $('#c-or-i').html("Nope, that's incorrect!");
        $('#giphyImage').html("<img src=" + giphy[1] + " width='200px'/>"); 
        clearInterval(timerId);
        setTimeout(nextQuestion,1000*5);
       
        
  });

  // function getGiphy (){
  
  //   for (j = 0; j < giphy.length; j++) {
  //             $('#giphyImage').html("<img src = '" + giphy[j] + "' width = 200 height = 200/>"); 
  //     // $('#giphyImage').html("<img src=" + giphy[j] + " width='200px'/>"); 
  //    j++;
  //     console.log(giphy[j]); 
  //     setTimeout(nextQuestion,1000*5);
    // $.each(giphy[j], function(index) {     
    //   $('#giphyImage').html("<img src = '" + giphy[j] + "' width = 200 height = 200/>"); 
    //   // $('#giphyImage').html("<img src=" + giphy[j] + " width='200px'/>"); 
    //  j++;
    //   console.log(giphy[j]); 
    //   setTimeout(nextQuestion,1000*5);
    //    });
   
  //   }
  // }
    
  function nextQuestion() {
      $('#startPage').hide();
      $("#resultsPage").hide();
      $("#giphyPage").hide();
      $('#questionPage').show();
      clearInterval(timerId);
      run();
      if (allQuestions[i] === undefined) {
        stop();
        
      }  
  }


  function stop() {
      clearInterval(timerId);
      displayResults(); 
  }

   // displaying the results to the screen
  function displayResults () {
     
      $("#resultsPage").show();
      $('#questionPage').hide();
      setTimeout(reset,1000*10);
  }
  //this function resets the trivia game
  function reset() {
      $('#startPage').show();
      $("#resultsPage").hide();
      $("#questionPage").hide();
      clearInterval(timerId);
      timeRemaining = 10;
      timerId;
      correct = 0;
      incorrect = 0;
      unanswered = 0; 
   }  

});
