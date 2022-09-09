import React from "react";

const ImageCard = ({ imageURL, i }) => {
  const letter =
    i === 1 ? "A" : i === 2 ? "B" : i === 3 ? "C" : i === 4 ? "D" : "E";
  console.log(letter);
  return (
    <div className="property-image-wrapper">
      <img
        src={`${process.env.PUBLIC_URL}/images/${imageURL}`}
        alt=""
        className="property-image"
        width="180px"
        height="150px"
      ></img>
      <div>
        <div className="answer-circle">
          <p>{letter}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
