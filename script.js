// Jeffrey Phelps - DU Web Dev Bootcamp 2017/2018 - Week-5 Homework - Trivia Game

// Setting up game audio



// Creating random background music



// Wait until the document loads to...











var questions = [{
    question: "Which department store created Rudolph the Red-Nosed Reindeer?",
    choices: [" Dillards", " Montgomery Ward", " Macy's", " JC Penny's"],
    correctAnswer: 1
}, {
    question: "What is the capital of Christmas Island?",
    choices: [" Jackson", " St. John", " The Settlement", " Boothville"],
    correctAnswer: 2
}, {
    question: "The Christmas cracker was invented by?",
    choices: [" Tom Smith", " John Doenut", " Mark Daniels", " Peter Smith"],
    correctAnswer: 0
}, {
    question: "In what year was the first commercial Christmas card made?",
    choices: [" 1764", " 1843", " 1856", " 1902"],
    correctAnswer: 1
}, {
    question: "What is the best selling Christmas song ever?",
    choices: [" Here Comes Santa Claus", " Jingle Bells", " White Christmas", " Silent Night"],
    correctAnswer: 2
}, {
    question: "Brenda Lee was doing what around the Christmas tree?",
    choices: [" Walkin'", " Skippin'", " Rockin'", " Jumpin'"],
    correctAnswer: 2
}, {
    question: "Which reindeer is left out of the 'Night Before Christmas' song?",
    choices: [" Dasher", " Blitzen", " Donner", " Rudolph"],
    correctAnswer: 3
}, {
    question: "Who decided the date for Christmas would be December 25th?",
    choices: [" Pope John Paul", " Pope Julius I", " Emperor Constantine", " Pope Clement V"],
    correctAnswer: 1
}, {
    question: "What do traditional Ukrainians put on their Christmas tree for good luck?",
    choices: [" Candles", " A Bird's Nest", " A Spider's Web", " Goose Feathers"],
    correctAnswer: 2
}, {
    question: "Which Christmas cartoon was based on a New York Sun editorial?",
    choices: [" Yes, Virginia There is a Santa Claus", " Frosty the Snowman", " White Christmas", " The Grinch"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;




$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    displayScore();
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}