export function AnswerButton({ text, onClick, questionAnswered, correct }) {
    let defaultButton = "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    let correctButton = "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg cursor-not-allowed dark:bg-green-600";
    let incorrectButton = "inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg cursor-not-allowed dark:bg-red-600";

    let buttonClass;

    if (questionAnswered) {
        buttonClass = correct ? correctButton : incorrectButton;
    } else {
        buttonClass = defaultButton;
    }

    return (
        <button class={buttonClass} onClick={onClick} disabled={questionAnswered !== 0}>{text}</button>
    );
}
