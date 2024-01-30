import { useState } from "react";
import Questions from '../questions.json';
import { Question } from "./Question";

export function Quiz() {
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(0);
    const [questionAnswered, setQuestionAnswered] = useState(0);
    const [finishedQuiz, setFinishedQuiz] = useState(false);

    function handleCorrect() {
        setScore(score + 1);
        setQuestionAnswered(2);
    }

    function handleIncorrect() {
        setQuestionAnswered(1);
    }

    function handleNext() {
        if (question >= Questions.length - 1) {
            // end state
            setQuestion(0);
            setFinishedQuiz(true);
            return;
        }
        setQuestionAnswered(0);
        setQuestion(question + 1);
    }

    let curQuestion = Questions[question];
    let nextButton = questionAnswered ? <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 max-w-24 self-end" onClick={handleNext}>Next</button> : <></>;
    let answerToastStyle = questionAnswered === 2 ?
        "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 text-center" : "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center";
    let answerToast = questionAnswered ?
        <div className={answerToastStyle} role="alert">
            <span className="font-medium">{questionAnswered === 2 ? "CORRECT ANSWER! C'est Magnifique!!!" : "WRONG ANSWER! Sacre Bleu!!"}</span>
        </div>
        : null;
    return (
        <>
            {!finishedQuiz ? (
                <div>
                    <div className="flex flex-col">
                        {answerToast}
                        <Question question={curQuestion.question} image={curQuestion.image} answers={curQuestion.answers} correctAnswer={curQuestion.correctAnswer} handleCorrect={handleCorrect} handleIncorrect={handleIncorrect} questionAnswered={questionAnswered} />
                        {nextButton}
                    </div>
                    <div class="absolute bottom-4 right-4">
                        <p class="text-4xl font-black text-gray-900 dark:text-white text-left">Score: {score}</p>
                    </div>
                </div>
            ) : (
                <h1>h</h1>
            )
            }
        </>
    );
}