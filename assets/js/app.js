$(document).ready(function() {
    var questionsIndex = 0;
    var question = 0;
    var choices = $('#selections');
    var nextButton = $('nextButton');
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var i = 0;
    var timeRemaining = 5;
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
   timerId = setInterval(decrement, 1000);

    $('#question').html(allQuestions[i].q + "<br><br>" + allQuestions[i].a + '<br>');
    i++;
    console.log(question);
   }
/*this function has the timer count down*/
  function decrement(){
    timeRemaining--;
    $("#timer").html("<p>" + "Time Remaining: " + timeRemaining + "</p>"); 
    if (timeRemaining === 0 ) {
    timeRemaining = 5;
    getGiphy();
    console.log('new giphy:' + giphy[j]);
  } 
 }
// for (i = 0; i < allQuestions.length; i++) {
//     // console.log(allQuestions[0].q + allQuestions[0].a);
//     getQuestions(allQuestions[0]);
//     questionsIndex++;
//     // console.log("questions asked:" + questionsIndex);
// };
// for (j = 0; j < giphy.length; j++) {
//     getGiphy(giphy[0]);
//     console.log("giphy:" + giphy[j]);
// };

//  function getQuestions() {
//      allQuestions.forEach(function(question, index) {
//         $('#question').html(allQuestions[i].q + '<br><br>' + allQuestions[i].a + '<br>');
//             console.log("Question : " + allQuestions[i].q);
//             i++;
//             nextQuestion();
//            //  setTimeout(getGiphy,1000*5);  
//            // decrement();
//         })
// }
function getGiphy (){
    // clearInterval(timerId);
    $('#timer').hide();
    $('#question').hide();
    $('#instructions').hide();
    $('#nextButton').hide();
    // for (j = 0; j < giphy.length; j++) {
   // document.write("<img src = '" + giphy[j] + "' width = 200 height = 200/>");      
      $('#image-page').html("<img src=" + giphy[j] + " width='200px'/>"); 
      j++;
      console.log(j + giphy[j]); 
      setTimeout(nextQuestion,1000*5); 
};
   


// //  function pushAnswers() {
// //         allQuestions.forEach(function(question, index) {

// //         console.log("Answer:" + allQuestions[i].a);
// //          })}
// // //         pushAnswers();  
function nextQuestion() {
  $('#startPage').hide();
  $("#resultsPage").hide();
  $("#image-page").hide();
   $('#timer').show();
  run();
  decrement();
  $('#selections').show();
  $('#question').show();
  clearInterval(timerId);
  timeRemaining = 5;

   
 
  
  // getQuestions();
  // console.log(getQuestions());
}
});