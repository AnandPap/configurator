import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <div className="back-button-wrapper" onClick={onClick}>
      <button className="back-button">
        <div className="back-button-arrow"></div>
        <p>ZURÜCK</p>
      </button>
    </div>
  );
};

export default BackButton;
