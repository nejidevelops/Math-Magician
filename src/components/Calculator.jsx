import React, { useState } from 'react';
import { styled } from 'styled-components';
import CalculatorButton from './Button';
import calculate from '../logic/calculate';
import './Calculator.css';

function Calculator() {
  const [calc, setCalc] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    let newData = calculate(calc, buttonName);
    if (buttonName === '=') {
      newData = { ...newData, operation: null };
    }
    setCalc(newData);
  };

  return (
    <CalculatorComponent>
      <CalculatorText>
        <h3>Let&apos;s do some maths!</h3>
      </CalculatorText>
      <div className="calculator">
        <div className="display" data-testid="display">
          { calc.total }
          { calc.operation }
          { calc.next }
        </div>
        <div className="buttons-row">
          <CalculatorButton onClick={() => handleButtonClick('AC')} label="AC" />
          <CalculatorButton onClick={() => handleButtonClick('+/-')} label="+/-" />
          <CalculatorButton onClick={() => handleButtonClick('%')} label="%" />
          <CalculatorButton onClick={() => handleButtonClick('÷')} label="÷" />
        </div>
        <div className="buttons-row">
          <CalculatorButton onClick={() => handleButtonClick('7')} label="7" />
          <CalculatorButton onClick={() => handleButtonClick('8')} label="8" />
          <CalculatorButton onClick={() => handleButtonClick('9')} label="9" />
          <CalculatorButton onClick={() => handleButtonClick('x')} label="x" />
        </div>
        <div className="buttons-row">
          <CalculatorButton onClick={() => handleButtonClick('4')} label="4" />
          <CalculatorButton onClick={() => handleButtonClick('5')} label="5" />
          <CalculatorButton onClick={() => handleButtonClick('6')} label="6" />
          <CalculatorButton onClick={() => handleButtonClick('-')} label="-" />
        </div>
        <div className="buttons-row">
          <CalculatorButton onClick={() => handleButtonClick('1')} label="1" />
          <CalculatorButton onClick={() => handleButtonClick('2')} label="2" />
          <CalculatorButton onClick={() => handleButtonClick('3')} label="3" />
          <CalculatorButton onClick={() => handleButtonClick('+')} label="+" />
        </div>
        <div className="buttons-row last-buttons">
          <CalculatorButton onClick={() => handleButtonClick('0')} label="0" />
          <CalculatorButton onClick={() => handleButtonClick('.')} label="." />
          <CalculatorButton onClick={() => handleButtonClick('=')} label="=" />
        </div>
      </div>
    </CalculatorComponent>
  );
}

const CalculatorComponent = styled.div`
  display: flex;
  min-height: 93vh;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  background-color: #f5f5f5;
  gap: 2rem;
`;

const CalculatorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 30vh;
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #12ae23;
  }
`;

export default Calculator;
