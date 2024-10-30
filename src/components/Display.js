import React from 'react';

const Display = ({ input1, operator, input2, result }) => {
  return (
    <div className="display-container">
      <div className="display-screen">
        {input1} {operator} {input2}
      </div>
      <div className="display-screen">
        {result}
      </div>
    </div>
  );
};

export default Display;