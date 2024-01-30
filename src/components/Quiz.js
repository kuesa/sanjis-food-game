import { useState } from "react";
import Questions from '../questions.json';
import { Question } from "./Question";

export function Quiz() {
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(0);
    const [questionAnswered, setQuestionAnswered] = useState(0);

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
            return;
        }
        setQuestionAnswered(0);
        setQuestion(question + 1);
    }

    let curQuestion = Questions[question];
    let nextButton = questionAnswered ? <button onClick={handleNext}>Next</button> : <></>;
    let answerToast = questionAnswered ? <h2>{questionAnswered === 1 ? 'WRONG' : 'SO TRUE BESTIE'}</h2> : <></>;
    return (
        <>
            <h1>Score: {score}</h1>
            {answerToast}
            <Question question={curQuestion.question} image={curQuestion.image} answers={curQuestion.answers} correctAnswer={curQuestion.correctAnswer} handleCorrect={handleCorrect} handleIncorrect={handleIncorrect} />
            {nextButton}
        </>
    );
}