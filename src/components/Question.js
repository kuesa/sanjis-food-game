import { AnswerButton } from "./AnswerButton";

//questionAnswered: 0=unanswered, 1=incorrect, 2=correct
export function Question({ question, image, answers, correctAnswer, handleCorrect, handleIncorrect, questionAnswered }) {
    const answerButtons = answers.map((answer, idx) => (questionAnswered != 2 || idx === correctAnswer) ? <AnswerButton key={idx} text={answer} onClick={idx === correctAnswer ? handleCorrect : handleIncorrect} /> : <></>);
    // class = regular button || correct button || incorrect button
    return (
        <>
            <h1>{question}</h1>
            <img src={image} width={400} height={200} />
            {answerButtons}
        </>
    );
}
