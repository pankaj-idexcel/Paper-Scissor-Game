import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../Utils/AxiosInstance";

export const GameDataContext = createContext();

export const GameDataProvider = ({ children }) => {
  const [option, setOption] = useState([]);
  const [userSelectedOpt, setUserSelectedOpt] = useState("");
  const [computerSelectedOpt, setComputerSelectedOpt] = useState("");
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [rounds, setrounds] = useState(3)
  const [count, setcount] = useState(0)

  useEffect(() => {
    axiosInstance.get("/options").then((res) => {
      setOption([...res.data]);
    });
    result(userSelectedOpt, computerSelectedOpt);
  }, [userSelectedOpt, computerSelectedOpt]);


  const handleOption = async (selectedOption) => {
    const randomValues =
      option[Math.floor(Math.random() * option.length)].option;
      if(count<rounds){
    if (selectedOption === randomValues) {
      handleOption(selectedOption);
    } else {
      setUserSelectedOpt(selectedOption);
      setComputerSelectedOpt(randomValues);
    }
}

  };

  const result = (userSelectedOpt, computerSelectedOpt) => {
    const value = userSelectedOpt + computerSelectedOpt;
    if(count<rounds){
    if (
      value === "paperrock" ||
      value === "rockscissor" ||
      value === "scissorpaper"
    ) {
      setUserWins(userWins + 1);
      setcount(prev=>prev+1)
    } else if (
      value === "rockpaper" ||
      value === "scissorrock" ||
      value === "paperscissor"
    ) {
      setComputerWins(computerWins + 1);
      setcount(prev=>prev+1)
    }
    
  }
  

};



  return (
    <GameDataContext.Provider
      value={{
        option,
        userWins,
        computerWins,
        userSelectedOpt,
        computerSelectedOpt,
        rounds,
        count,
        handleOption,
      }}
    >
      {children}
    </GameDataContext.Provider>
  );
};
