import { AnswerButton } from './AnswerButton';

export function Menu({ onClick }) {
    return (
        <>
            <h1>Sanji's Cooking Challenge</h1>
            <p>Bonjour! Welcome to mon petit challenge. Today you will be asked TEN easy cooking-related questions. You should know every one of these questions to even think of being a master chef like me.</p>
            <AnswerButton text="Start Quiz" onClick={onClick} />
        </>
    );
}