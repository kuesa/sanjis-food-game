import { Quiz } from './components/Quiz';
import { Menu } from './components/Menu';
import { useState } from 'react';

export function App() {
    const [quizStarted, setQuizStarted] = useState(false);
    let content;

    function handleClick() {
        setQuizStarted(true);
    }

    if (quizStarted) {
        content = <Quiz />;
    } else {
        content = <Menu onClick={handleClick} />;
    }
    return (
        <div>
            {quizStarted ? (
                <Quiz />
            ) : (
                <Menu onClick={handleClick} />
            )}
        </div>
    );
}