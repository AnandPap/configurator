import React from "react";

const NextButton = ({ text, onClick, className }) => {
  return (
    <div className={`next-button-wrapper ${className}`} onClick={onClick}>
      <button type="submit" className="next-button">
        <p className="next-button-text">{text}</p>
        <div className="next-button-arrow"></div>
      </button>
    </div>
  );
};

export default NextButton;
