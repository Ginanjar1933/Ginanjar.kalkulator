import React from 'react';
import Button from './Button';

const Keypad = ({ onNumberClick, onOperatorClick, onSpecialClick, onCalculate }) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = [
    { symbol: '%', className: 'button-special' },
    { symbol: '/', className: 'button-operator' },
    { symbol: 'x', className: 'button-operator' },
    { symbol: '+', className: 'button-operator' },
    { symbol: '-', className: 'button-operator' }
  ];
  
  return (
    <div className="buttons-grid">
      {/* Special Operations Row */}
      <Button onClick={() => onSpecialClick('C')} className="button-clear">
        C
      </Button>
      <Button onClick={() => onSpecialClick('+-')} className="button-toggle">
        +-
      </Button>
      <Button onClick={() => onSpecialClick('!')} className="button-special">
        !
      </Button>
      <Button onClick={() => onOperatorClick('^')} className="button-special">
        ^
      </Button>

      {/* Numbers and Operators */}
      {numbers.map((num) => (
        <Button
          key={num}
          onClick={() => onNumberClick(String(num))}
          className="button-number"
        >
          {num}
        </Button>
      ))}

      {/* Operators */}
      {operators.map(({ symbol, className }) => (
        <Button
          key={symbol}
          onClick={() => onOperatorClick(symbol)}
          className={className}
        >
          {symbol}
        </Button>
      ))}

      {/* Decimal Point */}
      <Button onClick={() => onNumberClick('.')} className="button-decimal">
        .
      </Button>

      {/* Equals Button */}
      <Button onClick={onCalculate} className="button-equals">
        =
      </Button>
    </div>
  );
};

export default Keypad;