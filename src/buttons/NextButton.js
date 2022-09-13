import React from "react";

const NextButton = ({ text, onClick }) => {
  return (
    <div className="next-button-wrapper" onClick={onClick}>
      <button className="next-button">
        {text}
        <div className="next-button-arrow"></div>
      </button>
    </div>
  );
};

export default NextButton;
