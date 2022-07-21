import React from "react";
import { GameDataContext } from "../../Context/GameContext";
import PropTypes from 'prop-types'

const OptionList = () => {
  return (
    <GameDataContext.Consumer>
      {({ options, handleOption }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px",
          }}
        >
          {options.map((item) => (
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

OptionList.propTypes ={
  options: PropTypes.shape({
    option: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  handleOption: PropTypes.func
}

export default OptionList;
