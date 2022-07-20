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
                margin: "10px",
                height: "30px",
                width: "60px",
                display: "flex",
                justifyContent: "center",
                cursor: "context-menu"
              }}
            >
              <h3 style={{margin: "auto"}}>{item.option}</h3>
            </div>
          ))}
        </div>
      )}
    </GameDataContext.Consumer>
  );
};

export default OptionList;
