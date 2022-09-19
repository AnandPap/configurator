import React from "react";

const ImageCard = ({
  imageClass,
  imageTitle,
  imagePrice,
  i,
  onClick,
  selectedAnswer,
}) => {
  const border =
    selectedAnswer.imageTitle === imageTitle ? "border" : "no-border";
  const letter =
    i === 1 ? "A" : i === 2 ? "B" : i === 3 ? "C" : i === 4 ? "D" : "E";
  return (
    <div className={`slider-img ${imageClass} ${border}`} onClick={onClick}>
      <div className="answer-img">
        <div className="answer-circle">
          <p>{letter}</p>
        </div>
        <div>
          <p className="img-title">{imageTitle}</p>
          <p className="img-price">{imagePrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
