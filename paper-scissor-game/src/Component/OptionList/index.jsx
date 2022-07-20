import React from "react";
import { GameDataContext } from "../../Context/GameContext";

const OptionList = () => {
  return (
    <GameDataContext.Consumer>
      {({ option, handleOption }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          {option.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                handleOption(item.option);
              }}
              style={{
                border: "2px solid black",
                padding: "20px",
              }}
            >
              <h3 style={{margin: "10px"}}>{item.option}</h3>
            </div>
          ))}
        </div>
      )}
    </GameDataContext.Consumer>
  );
};

export default OptionList;
