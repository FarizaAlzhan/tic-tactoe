import React from "react";
import "../App.css";
import { useState } from "react";
import {calculateWinner} from "../winner.js"
import Board from "./Board";
const Game = () => {
  const [board, SetBoard] = useState(Array(9).fill(null));
  const [xIsNext,SetXIsNext] = useState(true);
  const winner = calculateWinner(board);
  

  const handleClick = (index) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? 'X' : 'O';

    SetBoard(boardCopy);
    SetXIsNext(!xIsNext);
  }

  const startNewGame = () =>{
    return(
      <button className="start_btn" onClick={() => SetBoard(Array(9).fill(null))}>Play again</button>
    );
     
  }
  return (
     <div>
      {startNewGame()}
      <Board squares={board} click={handleClick}/>
      <center>
        <h1>
        {winner?'Победитель'+ winner:'Сейчас ходит ' + (xIsNext?'X':'O')}
        </h1>
      </center>
     </div>
  );
};

export default Game