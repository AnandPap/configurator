import React from "react";

const RestartButton = ({ text, onClick, className }) => {
  return (
    <div className={`restart-button-wrapper ${className}`}>
      <button className="restart-button" onClick={onClick}>
        <p className="restart-button-text">{text}</p>
      </button>
    </div>
  );
};

export default RestartButton;
