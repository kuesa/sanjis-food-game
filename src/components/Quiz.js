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

    let color;
    let reaction;

    if (score === 0) {
        color = 'red-600';
        reaction = 'OH MON DIEU!! YOU STINK!';
    } else if (score < 3) {
        color = 'amber-700';
        reaction = 'SACRE BLEU! WHAT A HORRIBEAULX SCORE!';
    } else if (score < 7) {
        color = 'yellow-500';
        reaction = 'NOT VERY GEAUXD. BACK TO ZE KITCHEN!!!';
    } else if (score < 10) {
        color = 'yellow-400';
        reaction = 'Ahhhh it was eaux-kay, but not good enough!';
    } else if (score === 10) {
        color = 'green-500';
        reaction = "MAGNIFIQUE!!! MERVEILLEUX!! C'EST PARFAIT!!";
    }

    let scoreClass = `mb-2 text-4xl font-bold tracking-tight text-${color} dark:text-${color} text-center`;

    return (
        <>
            {!finishedQuiz ? (
                <div>
                    <div className="flex flex-col">
                        {answerToast}
                        <Question question={curQuestion.question} image={curQuestion.image} answers={curQuestion.answers} correctAnswer={curQuestion.correctAnswer} handleCorrect={handleCorrect} handleIncorrect={handleIncorrect} questionAnswered={questionAnswered} />
                        {nextButton}
                    </div>
                    <div className="absolute bottom-4 right-4">
                        <p className="text-4xl font-black text-gray-900 dark:text-white text-left">Score: {score}</p>
                    </div>
                </div>
            ) : (
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">C'est Fini!</h1>
                        <img className="object-cover w-full h-48 md:w-48" src="https://c.tenor.com/d-3I9WL9NKYAAAAC/tenor.gif" />
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Congrateauxlations! You have finished? But how did you do? You got:</p>
                        <h1 className={scoreClass}>{score} / {Questions.length}</h1>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{reaction}</p>
                    </div>
                </div>
            )
            }
        </>
    );
}