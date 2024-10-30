import React from 'react';

const Button = ({ onClick, className, children, disabled }) => {
  const baseClass = "button-base";
  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;