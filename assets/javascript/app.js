var questions = [{
    ques: "What is the capital of Senegal?",
    ans: ["Abuja", "Pretoria", "Port Loius", "Dakar"],
    name: "mamaafrica",
    correct: "Dakar",
    divClass: ".mamaafrica"
},
{
    ques: "What is the capital of Ethopia?",
    ans: ["Kigali", "Kampala", "Cairo", "Addis Ababa"],
    name: "mamaafrica1",
    correct: "Addis Ababa",
    divClass: ".mamaafrica1"
},
{
    ques: "What is the capital of Ghana?",
    ans: ["Rwanda", "Freetown", "Accra", "Lusaka"],
    name: "mamaafrica2",
    correct: "Accra",
    divClass: ".mamaafrica2"
},
{
    ques: "What is the capital of Tanzania?",
    ans: ["Malabo ", "Cairo", "Dodoma", "Banjul"],
    name: "mamaafrica3",
    correct: "Dodoma",
    divClass: ".mamaafrica3"
},
{
    ques: "What is the capital of South Africa?",
    ans: ["Pretoria", "Kampala", "Djibouti", "Conakry"],
    name: "mamaafrica4",
    correct: "Pretoria",
    divClass: ".mamaafrica4"
},
{
    ques: "What is the capital of Gabon?",
    ans: ["Tunis", "Conakry", "Libreville", "Banjul"],
    name: "mamaafrica5",
    correct: "Libreville",
    divClass: ".mamaafrica5"
},
{
    ques: "What is the capital of Kenya?",
    ans: ["Mogadishu", "Lomé", "Harare", "Nairobi"],
    name: "mamaafrica6",
    correct: "Nairobi",
    divClass: ".mamaafrica6"
},
{
    ques: "What is the capital of Cameroon?",
    ans: ["Praia", " Yaounde", "N'Djamena", "Kigali"],
    name: "mamaafrica7",
    correct: "Yaounde",
    divClass: ".mamaafrica7"
},
{
    ques: "What is the capital of Nigeria?",
    ans: ["Porto-Novo", "Moroni", "Abuja", "Juba"],
    name: "mamaafrica8",
    correct: "Abuja",
    divClass: ".mamaafrica8"
},
{
    ques: "What is the capital of Zimbabwe?",
    ans: ["Cairo", "Kinshasa", "Bissau", "Harare"],
    name: "mamaafrica9",
    correct: "Harare",
    divClass: ".mamaafrica9"
}
    ]

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.container').show();
    countdown(60);
    questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
    $(".questions :not('#sub-but')").empty();
    // loops through the 10 questions 
    for (var j = 0; j < 10; j++) {
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
        // loops through answers for each radio button
        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


// function for countdown timer
var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;

            // loop through correctArray & radioName to match html elements & answers
            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            // display wrongAnswers
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();

            // alert("Times Up!");
            clearInterval(timer);
            return;
        }
    }, 1000);

    // click event for submit button to stop timer
    $('#sub-but').on('click', function() {
        clearInterval(timer);
    })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };

    // once submit is clicked...
    // tests
    // stop timer
    countdown();
    // fade out questions
    $('.container').fadeOut(500);
    // show answerScreen
    $('#answerScreen').show();
    // display correctAnswers
    $('#correctScreen').append(correctAnswers);
    // display wrongAnswers
    $('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz