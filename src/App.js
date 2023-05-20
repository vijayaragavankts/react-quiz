import './App.css';
import React, { useState } from 'react';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import Quiz from './Components/Quiz';
import { Quizcontext } from './Helpers/Contexts';

function App() {
    const [gameState, setGameState] = useState("menu");
    const [score, setScore] = useState(0);
    return ( <
        div className = "App" >

        Quiz App <
        Quizcontext.Provider value = {
            { gameState, setGameState, score, setScore } } > { gameState === "menu" && < MainMenu / > } { gameState === "endScreen" && < EndScreen / > } { gameState === "quiz" && < Quiz / > } <
        /Quizcontext.Provider> <
        /div>
    );
}

export default App;