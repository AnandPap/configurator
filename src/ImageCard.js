import React from "react";

const ImageCard = ({ imageURL }) => {
  return (
    <div>
      <img src={imageURL} alt="" />
    </div>
  );
};

export default ImageCard;
