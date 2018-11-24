import Quiz from './quiz.js';

const quiz = new Quiz();
const root = document.getElementById('exam');
root.appendChild(quiz.render());