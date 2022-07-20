import React from "react";
import { GameDataContext, memo } from "../../Context/GameContext";


const GameStats = () => {
  return (
    <GameDataContext.Consumer>
      {({ userSelectedOpt, computerSelectedOpt, userWins, computerWins, winner, rounds, count}) => (
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}>
          <h1>User's Choice: {userSelectedOpt}</h1>
          <h1>Computer's Choice: {computerSelectedOpt}</h1>
          <h1>{winner}</h1>
          <div>
            <span>User wins: {userWins}</span>
          </div>
          <div>
            <span>Computer wins: {computerWins}</span>
          </div>
           <h1> 
            {
                count===rounds ? userWins> computerWins? "user Wins!": "Computer Wins!":""
            }
            </h1>
          
        </div>
      )}
    </GameDataContext.Consumer>
  );
};

export default GameStats;
