import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

  const numberSelecterHandler = (value) => {
    setSelectedNumber(value);

    setError("");
  };

  return (
    <NumberSlectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumbers.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelecterHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p> Select Number</p>
    </NumberSlectorContainer>
  );
};

export default NumberSelector;

const NumberSlectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
