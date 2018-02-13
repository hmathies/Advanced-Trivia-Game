/*---Built by Heather Mathies August 2017---*/

/*---when the page loads...---*/
$(document).ready(function() {

   /*----------global variables---------*/
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var i = 0;
    var timeRemaining = 30;
    var timerId;
    var giphy = ["assets/images/TNY-Livestream-Gif.gif", "assets/images/anigif_enhanced-5260-1406732708-8.gif",  "assets/images/vF7MiG.gif"];
    var j = 0;

    /*-----------------------these questions will be dyanimcally displayed one at a time----------------------------------------*/
    var allQuestions = [
        {
            q: "What year was the last solar eclipse?",
            a: ["1978", "1979", "1980", "1981"],
            correct: 1
        }, {
            q: "Which lunar phase does a solar eclipse happen in?",
            a: ["Full Moon", "Half Moon", "New Moon", "Crescent Moon"],
            correct: 2
        }, {
            q: "Which U.S. state was the first to experience the Solar Eclipse Totality?",
            a: ["Oregon", "California", "Montana", "South Carolina"],
            correct: 0
        }, {
            q: "The center line of totatlity passes through how many states?",
            a: ["5", "1", "20", "10"],
            correct: 3
        }, {
            q: "A solar eclipse is the lineup of the following celestial objects?",
            a: ["Sun Moon Earth", "Sun Earth Venus", "Earth Moon Stars", "Wind Earth Fire"],
            correct: 0
        }, {
            q: "The solar eclipse totality last almost..",
            a: ["60 minutes", "30 minutes", "3 minutes", "24 hours"],
            correct: 2
        },
        {
            q:"What year was the last total solar eclipse seen exclusively over the continental United States?",
            a:["1980","1930", "1880", "1830"],
            correct: 2
        }
    ];

    /*------when the page first loads------*/
    $("#questionPage").hide();
    $("#resultsPage").hide();


    /*----when the start button is clicked--------*/
    $('.btn').on("click", function() {
        $("#startPage").hide();
        $("#questionPage").show();
        run();
    });

    /*---this starts the timer, displays the questions with answers, and checks the value of the user answers-----*/
    function run() {
            clearInterval(timerId);
            timerId = setInterval(decrement, 1000);
            var correctAnswer = allQuestions[i].a[allQuestions[i].correct];
            var html = "";

            html += allQuestions[i].q + "<br><br>";

            $.each(allQuestions[i].a, function(index, value) {
                if (value === correctAnswer) {
                    html += '<button class="correct" type="button">' + value + '</button>';
                    $("#correct").html("<h3>" + "Correct: " + correct + "</h3>");

                } else  {
                    html += '<button class="incorrect" type="button">' + value + '</button>';
                    $("#incorrect").html("<h3>" + "Incorrect: " + incorrect + "</h3>");

                }
            });
            html += '<br>';
            $('#question').html(html);
            i++;

              if (i > allQuestions.length-1) {
            stop();

        }


        }

    /*--------------this has the timer count down and says what to do if the user doesn't answer before
    the timer runs out--------------------------------------*/
    function decrement() {

        timeRemaining--;
        $("#timer").html("<h4>" + "Time Remaining: " + timeRemaining + "</h4>");


        if (timeRemaining === 0) {
            $("#questionPage").hide();
            $("#giphyPage").show();
            $('#c-or-i').html("Times Up!");
            $('#giphyImage').html("<img src=" + giphy[0] + " width='350px'/>");
            clearInterval(timerId);
            setTimeout(nextQuestion, 1000 * 3);
            timeRemaining = 30;
            unanswered++;
            $("#unanswered").html("<h3>" + "Unanswered: " + unanswered + "</h3>");
        }


    }

    /*-----this onclick event detects the correct user answer----*/
    $("html").on("click", ".correct", function() {

        correct++;
        clearInterval(timerId);
        $('#questionPage').hide();
        $("#giphyPage").show();
        $('#c-or-i').html("Yup, that's correct!");
        $('#giphyImage').html("<img src=" + giphy[2] + " width='350px'/>");
        setTimeout(nextQuestion, 1000 * 5);
        timeRemaining = 30;

    });

    /*-----this onclick event detects the incorrect user answer----*/
    $("html").on("click", ".incorrect", function() {

        incorrect++;
        clearInterval(timerId);
        $('#questionPage').hide();
        $("#giphyPage").show();
        $('#c-or-i').html("Nope, that's incorrect!");
        $('#giphyImage').html("<img src=" + giphy[1] + " width='350px'/>");
        setTimeout(nextQuestion, 1000 * 5);
        timeRemaining = 30;
    });

    /*------this displays the next question to the user------*/
    function nextQuestion() {

        $('#startPage').hide();
        $("#resultsPage").hide();
        $("#giphyPage").hide();
        $('#questionPage').show();
        clearInterval(timerId);
        run();

    }

   /*---------this stops the timer and displays the results----*/
    function stop() {

        clearInterval(timerId);
        displayResults();
    }

  /*-------------displaying the results to the screen---------*/
    function displayResults() {

        $("#resultsPage").show();
        $('#questionPage').hide();
        setTimeout(reset, 1000 * 10);
    }

    /*-----------this function resets the trivia game----------*/
    function reset() {

        $('#startPage').show();
        $("#resultsPage").hide();
        $("#questionPage").hide();
        clearInterval(timerId);
        timeRemaining = 30;
        timerId;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        run();
    }

});
/*=======================END OF FILE===============================*/
