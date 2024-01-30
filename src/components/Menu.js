import { AnswerButton } from './AnswerButton';

export function Menu({ onClick }) {
    return (
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col items-center pb-10">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Sanji's Cooking Challenge</h1>
                <img className="object-cover w-full h-48 md:w-48" src="https://i.ibb.co/qsyn6g8/Vinsmoke-Sanji-Pre-Timeskip-Original.png" />
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Bonjour! Welcome to mon petit challenge. Today you will be asked TEN easy cooking-related questions. You should know every one of these questions to even think of being a master chef like me.</p>
                <AnswerButton text="Start Quiz" onClick={onClick} questionAnswered={0} />
            </div>
        </div>
    );
}