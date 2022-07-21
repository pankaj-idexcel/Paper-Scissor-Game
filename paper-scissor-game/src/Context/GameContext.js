/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../Utils/AxiosInstance";

export const GameDataContext = createContext();

export const GameDataProvider = ({ children }) => {
  const [options, setOptions] = useState([]);
  const [userSelectedOpt, setUserSelectedOpt] = useState("");
  const [computerSelectedOpt, setComputerSelectedOpt] = useState("");
  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const rounds = 3;
  const [count, setcount] = useState(0);

  useEffect(() => {
    axiosInstance.get("/options").then((res) => {
      setOptions([...res.data]);
    });
  }, []);

  useEffect(() => {
    result(userSelectedOpt, computerSelectedOpt);
  }, [userSelectedOpt, computerSelectedOpt]);

  const handleOption = async (selectedOption) => {
    const randomValues =
      options[Math.floor(Math.random() * options.length)].option;
    if (count < rounds) {
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
    if (count < rounds) {
      if (
        value === "paperrock" ||
        value === "rockscissor" ||
        value === "scissorpaper"
      ) {
        setUserWins(userWins + 1);
        setcount((prev) => prev + 1);
      } else if (
        value === "rockpaper" ||
        value === "scissorrock" ||
        value === "paperscissor"
      ) {
        setComputerWins(computerWins + 1);
        setcount((prev) => prev + 1);
      }
    }
  };

  return (
    <GameDataContext.Provider
      value={{
        options,
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
