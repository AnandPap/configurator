import React from "react";

const NextButton = ({ onClick }) => {
  return (
    <div className="next-button-wrapper" onClick={onClick}>
      <button className="next-button">
        NÄCHSTE
        <div className="next-button-arrow"></div>
      </button>
    </div>
  );
};

export default NextButton;
