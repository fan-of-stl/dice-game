import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button.styled";
import GameRules from "./GameRules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setError={setError}
          setSelectedNumber={setSelectedNumber}
          error={error}
        />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice} />

      <div className="buttons">
        <Button onClick={resetScore}>RESET</Button>
        <OutlineButton onClick={toggleRules}>
          {showRules ? "HIDE" : "SHOW"} RULES
        </OutlineButton>
      </div>

      {showRules && <GameRules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
