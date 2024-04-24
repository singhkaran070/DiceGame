import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play the Dice Game</h2>
      <div className="text">
        <p>select any number</p>
        <p>Click on Dice image</p>
        <p>
          After click on dice if selected number is equal to the dice number you
          will get the same point as on dice
        </p>
        <p>
          If you got different number than on dice, 2 points will be deducted
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
