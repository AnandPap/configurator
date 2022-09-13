import React from "react";

const ImageCard = ({ imageURL, imageTitle, imagePrice, i, onClick }) => {
  const letter =
    i === 1 ? "A" : i === 2 ? "B" : i === 3 ? "C" : i === 4 ? "D" : "E";
  return (
    <div className="property-image-wrapper" onClick={onClick}>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/${imageURL}`}
          alt=""
          className="property-image"
        ></img>
        <div className="answer">
          <div className="answer-circle">
            <p>{letter}</p>
          </div>
          <div className="image-title-and-price-container">
            <p className="image-title">{imageTitle}</p>
            <p className="image-price">{imagePrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
