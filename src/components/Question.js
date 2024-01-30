import { AnswerButton } from "./AnswerButton";

//questionAnswered: 0=unanswered, 1=incorrect, 2=correct
export function Question({ question, image, answers, correctAnswer, handleCorrect, handleIncorrect, questionAnswered }) {
    const answerButtons = answers.map((answer, idx) => <AnswerButton key={idx} text={answer} onClick={idx === correctAnswer ? handleCorrect : handleIncorrect} questionAnswered={questionAnswered} correct={idx === correctAnswer} />);
    // class = regular button || correct button || incorrect button
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{question}</h1>
                <img className="object-cover w-full h-48 md:w-48" src={image} width={400} height={200} />
                <div className="flex flex-col mt-4 md:mt-5 gap-4 md:w-48 text-center">
                    {answerButtons}
                </div>
            </div>
        </div>
    );
}
