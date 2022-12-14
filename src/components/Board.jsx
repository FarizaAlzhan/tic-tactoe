import React from "react";
import "../App.css";
import Square  from "./Square";
const Board = ({squares , click}) => {
  return (
     <div className="game-board">
        {
          squares.map((square,i)=>(
            <Square key={i} value={square} onClick={()=>click(i)}/>
          ))
        }
     </div>
  );
};
export default Board