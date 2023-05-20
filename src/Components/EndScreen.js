import React from 'react';
import { Quizcontext } from '../Helpers/Contexts';
import { useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';

export default function EndScreen() {
    const { score, setScore, gameState, setGameState } = useContext(Quizcontext);

    const restart = () => {
        setScore(0);
        setGameState("menu");
    }
    return ( <
        div className = 'endScreen' >
        <
        h1 > Quiz Finished < /h1> <
        h3 > { score }
        / {Questions.length} <
        /h3> <
        button onClick = { restart } > Restart < /button> <
        /div>
    )
}