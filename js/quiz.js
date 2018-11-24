import html from './html.js';

function makeTemplate() {
    return html`
        <header>
            <div>
                <h1>Check the Exam - Code Challenge</h1>
            </div>
        </header>
        <form name="exam">
            <section class="q1" name="q1">
                Question 1: What was Houdini's favorite flavor of pop-tarts?
                <label>
                    a. Brown-Sugar Cinnamon
                    <input type="radio" name="q1a">
                </label>
                <label>
                    b. Strawberry
                    <input type="radio" name="q1b">
                </label>
                <label>
                    c. Blueberry
                    <input type="radio" name="q1c">
                </label>
                <label>
                    d. Trick question - Houdini famously hated pop-tarts!
                    <input type="radio" name="q1d">
                </label>
            </section>
            <section class="q2" name="q2">
                Question 2: What was Herodotus' favorite flavor of popsicle?
                <label>
                    a. Grape
                    <input type="radio" name="q2a">
                </label>
                <label>
                    b. Orange
                    <input type="radio" name="q2b">
                </label>
                <label>
                    c. Red
                    <input type="radio" name="q2c">
                </label>
                <label>
                    d. Another trick question - the ancient Greeks' freezers were notoriously inefficient
                    <input type="radio" name="q2d">
                </label>
            </section>
            <section class="q3" name="q3">
                Question 3: Which well-known figure was the most accomplished figure skater?
                <label>
                    a. Peggy Fleming
                    <input type="radio" name="q3a">
                </label>
                <label>
                    b. Mrs. Claus
                    <input type="radio" name="q3b">
                </label>
                <label>
                    c. Brian Denehee
                    <input type="radio" name="q3c">
                </label>
                <label>
                    d. Napoleon Bonaparte
                    <input type="radio" name="q3d">
                </label>
            </section>
            <section class="q4" name="q4">
                Question 4: Which question in this quiz is the silliest?
                <label>
                    a. Question 1
                    <input type="radio" name="q4a">
                </label>
                <label>
                    b. Question 2
                    <input type="radio" name="q4b">
                </label>
                <label>
                    c. Question 3
                    <input type="radio" name="q4c">
                </label>
                <label>
                    d. Trick question - it's this one - they're all ridiculous!
                    <input type="radio" name="q4d">
                </label>
                <input type="submit" name="submit">
            </section>
        </form>
`;}

// const guesses = [''];
class Quiz {
    constructor(scoreQuiz) {
        this.scoreQuiz = scoreQuiz;
    }
    render() {
        const dom = makeTemplate;
        const form = dom.querySelector('form');
    
        form.addEventListener('submit', event => {
            event.preventDefault();
            const elements = form.elements;
            const guesses = {
                q1: elements.q1.value,
                q2: elements.q2.value,
                q3: elements.q3.value,
                q4: elements.q4.value
            };
            this.scoreQuiz(guesses);
        });
        return dom;
    }
}
export default Quiz;