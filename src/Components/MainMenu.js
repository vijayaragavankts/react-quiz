import React from 'react';
import { useContext } from 'react';
import { Quizcontext } from '../Helpers/Contexts';
import '../App.css';


export default function MainMenu() {
    const { gameState, setGameState } = useContext(Quizcontext);
    return ( <
        div className = 'Menu' >

        <
        button onClick = {
            () => { setGameState("quiz") } } > Start Quiz < /button> <
        /div>
    )
}