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
    var giphy = [ "assets/images/TNY-Livestream-Gif.gif", "assets/images/anigif_enhanced-5260-1406732708-8.gif", "assets/images/eclipse.transitGIF.gif", "assets/images/Solar.mp4", "assets/images/vF7MiG.gif"];
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
{
    q:"Which lunar phase does a solar eclipse happen in?",
    a:["Full Moon","Half Moon", "New Moon", "Crescent Moon"],
    correct:2
},
{
    q:"Which lunar phase does a solar eclipse happen in?",
    a:["Full Moon","Half Moon", "New Moon", "Crescent Moon"],
    correct:2
},
];
/*when the page loads*/
    $("#questionPage").hide();
    $("#resultsPage").hide();
/*when the start button is clicked*/
    $('.btn').on("click", function() {
          $("#startPage").hide();
          $("#questionPage").show();
          // getQuestions();
          run(); 
    });
 /*this function starts the timer*/
  function run() {
    var correctAnswer = allQuestions[i].a[allQuestions[i].correct];
    var html = "";
    html += allQuestions[i].q + "<br><br>";
    $.each(allQuestions[i].a, function( index, value ) {
      if (value === correctAnswer) {
        html += '<button class="correct" type="button">'+value+'</button>';
      } else {
        html += '<button class="incorrect" type="button">'+value+'</button>';
      }
    });
    html += '<br>';
    $('#question').html(html);
    i++;
    timerId = setInterval(decrement, 1000);
    console.log(question);
  }
/*this function has the timer count down*/
  function decrement(){
    timeRemaining--;
    $("#timer").html("<p>" + "Time Remaining: " + timeRemaining + "</p>"); 
    if (timeRemaining === 0 ) {
    timeRemaining = 5;
    // $('.gameTitle').html("Times Up!");
    // $('#timer').hide();
    // $('#question').hide();

    console.log('new giphy:' + giphy[j]);
  } 
 }
//use this to update the next question, add giphys, 
  $("html").on( "click", ".correct", function() {
    $('#timer').hide();
    $('#question').hide();
    $('.gameTitle').html("Correct!");
    $('#giphyImage').html("<img src=" + giphy[j] + " width='200px'/>"); 
     nextQuestion();
    //getGiphy();
   console.log( "you answered it correct");
  });
  $( "html" ).on( "click", ".incorrect", function() {
   console.log( "you answered it incorrect");
  });

function getGiphy (){
    // clearInterval(timerId);
  
    // for (j = 0; j < giphy.length; j++) {
   // document.write("<img src = '" + giphy[j] + "' width = 200 height = 200/>"); 
    // $.each(giphy[j], function(index) {     
      $('#giphyImage').html("<img src=" + giphy[j] + " width='200px'/>"); 
     j++;
      console.log(j + giphy[j]); 
      setTimeout(nextQuestion,1000*5); 
    // });
  }
    
function nextQuestion() {
  $('#startPage').hide();
  $("#resultsPage").hide();
  $("#giphyImage").hide();
   $('#timer').show();
  run();
  $('#selections').show();
  $('#question').show();
  clearInterval(timerId);
  timeRemaining = 10;
}
});
