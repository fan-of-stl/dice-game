import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  transition: 0.5s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  border: 1px solid;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: #fff;
  }
`;
