/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
    <div className="calculator">
      <div className="display">
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
  );
}

export default Calculator;
