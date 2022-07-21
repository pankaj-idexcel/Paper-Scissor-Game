import React from "react";
import { GameDataContext} from "../../Context/GameContext";
import PropTypes from 'prop-types'

const GameStats = () => {
  return (
    <GameDataContext.Consumer>
      {({ userSelectedOpt, computerSelectedOpt, userWins, computerWins, rounds, count}) => (
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}>
          <h1>User's Choice: {userSelectedOpt}</h1>
          <h1>Computer's Choice: {computerSelectedOpt}</h1>
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

GameStats.propTypes = {
  userSelectedOpt: PropTypes.string, 
  computerSelectedOpt: PropTypes.string, 
  userWins: PropTypes.number, 
  computerWins: PropTypes.number, 
  rounds: PropTypes.number,
  count: PropTypes.number
}

export default GameStats;
