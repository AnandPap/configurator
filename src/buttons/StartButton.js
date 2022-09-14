import React from "react";

const StartButton = ({ text, onClick }) => {
  return (
    <div className="start-button-wrapper" onClick={onClick}>
      <button className="start-button">
        <p className="next-button-text">{text}</p>
        <div className="next-button-arrow"></div>
      </button>
    </div>
  );
};

export default StartButton;
