import React from 'react';
import Display from './Display';
import Keypad from './Keypad';
import { useCalculator } from '../hooks/useCalculator';
import '../styles/Calculator.css';

const Calculator = () => {
  const {
    input1,
    input2,
    operator,
    result,
    handleNumber,
    handleOperator,
    handleSpecialOperations,
    calculate
  } = useCalculator();

  return (
    <div className="calculator-container">
      <div className="calculator-title">
        Kalkulator by Ginanjar
      </div>
      
      <Display
        input1={input1}
        operator={operator}
        input2={input2}
        result={result}
      />
      
      <Keypad
        onNumberClick={handleNumber}
        onOperatorClick={handleOperator}
        onSpecialClick={handleSpecialOperations}
        onCalculate={calculate}
      />
    </div>
  );
};

export default Calculator;