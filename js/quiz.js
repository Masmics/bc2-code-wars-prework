//tutorial work-through for learning, from https://simplestepscode.com/javascript-quiz-tutorial/

var theQuestions = [
    {
        question: 'Question 1:  Which flavor of pop-tarts did Houdini prefer?',
        answers: {
            a: 'Brown-Sugar Cinnamon',
            b: 'Strawberry',
            c: 'Blueberry',
            d: 'Trick question - Houdini famously hated pop-tarts!',
        },
        correctAnswer: 'd',
    },
    {
        question: 'Question 2:  What flavor of popsicle did Herodotus prefer?',
        answers: {
            a: 'Grape',
            b: 'Red',
            c: 'Red is not a flavor',
            d: 'Trick question - The refrigerators of his time were notoriously inefficient!',
        },
        correctAnswer: 'd',
    },
    {
        question: 'Question 3:  Which well-known figure was the most accomplished figure skater?',
        answers: {
            a: 'Peggy Fleming',
            b: 'Mrs. Claus - her access to ice rinks was unparalleled',
            c: 'Brian Dennehy',
            d: 'Napoleon Bonaparte',
        },
        correctAnswer: 'a',
    },
    {
        question: 'Question 4:   Which question in this quiz is the silliest?',
        answers: {
            a: 'Question 1',
            b: 'Question 2',
            c: 'Question 3',
            d: 'Trick question - they are all ridiculous!',
        },
        correctAnswer: 'd'
    },
];

function makeQuiz(theQuestions, quizTemplate, resultsTemplate, submitButton) {
    function showQuestions(theQuestions, quizTemplate) {
        var output = [];
        var answers;

        for(var i = 0; i < theQuestions.length; i++) {
            answers = [];
            for(letter in theQuestions[i].answers) {
                answers.push(
                    '<label>'
                         + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                         + letter + ': '
                         + theQuestions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + theQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizTemplate.innerHTML = output.join('');
    }
    showQuestions(theQuestions, quizTemplate);

    function showResults(theQuestions, quizTemplate, resultsTemplate) {
        var answerTemplate = quizTemplate.querySelectorAll('.answers');
        var userGuess = '';
        var correctGuesses = 0;

        for(var i = 0; i < theQuestions.length; i++){
            userGuess = (answerTemplate[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            if(userGuess === theQuestions[i].correctAnswer){
                correctGuesses++;
            }
        }
        resultsTemplate.innerHTML = 'You got ' + correctGuesses + 'out of 4 correct!';
    }
    submitButton.onClick = function() {
        showResults(theQuestions, quizTemplate, resultsTemplate);
    };
}

var quizTemplate = document.getElementById('exam');
var resultsTemplate = document.getElementById('score');
var submitButton = document.getElementById('submit');

makeQuiz(theQuestions, quizTemplate, resultsTemplate, submitButton);