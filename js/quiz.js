import html from './html.js';

//below is tutorial follow-along for learning, from https://simplestepscode.com/javascript-quiz-tutorial/
function makeQuiz(questions, quizTemplate, resultsTemplate, submitGuesses) {
    function showQuestions(questions, quizTemplate) {
        //
    }   
    function showResults(questions, quizTemplate, resultsTemplate) {
        //
    }
    showQuestions(questions, quizTemplate);
    submitGuesses.onClick = function() {
        showResults(questions, quizTemplate, resultsTemplate);
    };
}

function showQuestions(questions, quizTemplate) {
    var output = [];
    var answers;
    
    for(var i = 0; i < questions.length; i++) {
        answers = [];
        for(letters in questions[i].answers) {
            answers.push(
                '<label>'
                    + '<input type="radio" name="question' + i + '" value="'+ letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizTemplate.innerHTML = output.join('');
}
showQuestions(questions.quizTemplate); 

functon showResults
// function makeTemplate() {
//     return html`
//         <header>
//             <div>
//                 <h1>Check the Exam - Code Challenge</h1>
//             </div>
//         </header>
//         <form name="exam">
//             <section class="q1" name="q1">
//                 Question 1:   What was Houdini's favorite flavor of pop-tarts?
//                 <div class="start">
//                     <input type="radio" name="q1a">
//                     <label>
//                         a. Brown-Sugar Cinnamon
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q1b">
//                     <label>
//                         b. Strawberry
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q1c">
//                     <label>
//                         c. Blueberry
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q1d">
//                     <label>
//                         d. Trick question - Houdini famously hated pop-tarts!
//                     </label>
//                 </div>
//             </section>
//             <section class="q2" name="q2">
//                 Question 2:   What was Herodotus' favorite flavor of popsicle?
//                 <div class="start">
//                     <input type="radio" name="q2a">
//                     <label>
//                         a. Grape
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q2b">
//                     <label>
//                         b. Orange
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q2c">
//                     <label>
//                         c. Red
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q2d">
//                     <label>
//                         d. Another trick question - the ancient Greeks' freezers were notoriously inefficient
//                     </label>
//                 </div>
//             </section>
//             <section class="q3" name="q3">
//                 Question 3:   Which well-known figure was the most accomplished figure skater?
//                 <div class="start">
//                     <input type="radio" name="q3a">
//                     <label>
//                         a. Peggy Fleming
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q3b">
//                     <label>
//                         b. Mrs. Claus
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q3c">
//                     <label>
//                         c. Brian Denehee
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q3d">
//                     <label>
//                         d. Napoleon Bonaparte
//                     </label>
//                 </div>
//             </section>
//             <section class="q4" name="q4">
//                 Question 4:   Which question in this quiz is the silliest?
//                 <div>
//                     <input type="radio" name="q4a">
//                     <label>
//                         a. Question 1
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q4b">
//                     <label>
//                         b. Question 2
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q4c">
//                     <label>
//                         c. Question 3
//                     </label>
//                 </div>
//                 <div>
//                     <input type="radio" name="q4d">
//                     <label>
//                         d. Trick question - it's this one - they're all ridiculous!
//                     </label>
//                 </div>
//                 <input type="submit" name="submit">
//             </section>
//         </form>
// `;}

// // const guesses = [''];
// class Quiz {
//     constructor(scoreQuiz) {
//         this.scoreQuiz = scoreQuiz;
//     }
//     render() {
//         const dom = makeTemplate();
//         const form = dom.querySelector('form');
    
//         form.addEventListener('submit', event => {
//             event.preventDefault();
//             const elements = form.elements;
//             const guesses = {
//                 q1: elements.q1.value,
//                 q2: elements.q2.value,
//                 q3: elements.q3.value,
//                 q4: elements.q4.value
//             };
//             this.scoreQuiz(guesses);
//         });
//         return dom;
//     }
// }
// export default Quiz;
export default 