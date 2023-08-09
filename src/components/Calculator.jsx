import React from 'react';
import CalculatorButton from './Button';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons-row">
        <CalculatorButton label="AC" />
        <CalculatorButton label="+/-" />
        <CalculatorButton label="%" />
        <CalculatorButton label="÷" />
      </div>
      <div className="buttons-row">
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="x" />
      </div>
      <div className="buttons-row">
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" />
      </div>
      <div className="buttons-row">
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" />
      </div>
      <div className="buttons-row last-buttons">
        <CalculatorButton label="0" />
        <CalculatorButton label="." />
        <CalculatorButton label="=" />
      </div>
    </div>
  );
}

export default Calculator;
