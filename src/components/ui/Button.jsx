import React from 'react';

const Button = ({ text, onClick, classNameText }) => {
  return (
    <button
      onClick={onClick}
      className={`${classNameText}
      px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200`}>
      {text}
    </button>
  );
};

//Custom button
export default Button;