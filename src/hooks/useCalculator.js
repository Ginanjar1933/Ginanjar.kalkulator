import { useState } from 'react';

export const useCalculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [currentInput, setCurrentInput] = useState('1');

  const handleNumber = (num) => {
    if (currentInput === '1') {
      setInput1(input1 + num);
    } else {
      setInput2(input2 + num);
    }
  };

  const handleOperator = (op) => {
    if (input1) {
      setOperator(op);
      setCurrentInput('2');
    }
  };

  const calculateFactorial = (n) => {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
  };

  const handleSpecialOperations = (operation) => {
    switch (operation) {
      case 'C':
        setInput1('');
        setInput2('');
        setOperator('');
        setResult('');
        setCurrentInput('1');
        break;
      case '+-':
        if (currentInput === '1') {
          setInput1(String(-parseFloat(input1)));
        } else {
          setInput2(String(-parseFloat(input2)));
        }
        break;
      case '!':
        if (currentInput === '1' && input1) {
          const num = parseInt(input1);
          const factorial = calculateFactorial(num);
          if (factorial !== undefined) {
            setResult(String(factorial));
          }
        }
        break;
      default:
        return;
    }
  };

  const calculate = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    if (isNaN(num1) || isNaN(num2)) return;

    let calculatedResult;
    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case 'x':
        calculatedResult = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          // Handle division by zero
          return;
        }
        calculatedResult = num1 / num2;
        break;
      case '^':
        calculatedResult = Math.pow(num1, num2);
        break;
      case '%':
        calculatedResult = num1 % num2;
        break;
      default:
        return;
    }

    setResult(String(calculatedResult));
  };

  return {
    input1,
    input2,
    operator,
    result,
    handleNumber,
    handleOperator,
    handleSpecialOperations,
    calculate
  };
};