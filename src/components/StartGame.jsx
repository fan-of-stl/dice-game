import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button.styled";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="image-container">
        <img src="/images/dices.png" alt="" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}> Play Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 97vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
