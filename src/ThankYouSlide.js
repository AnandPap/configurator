import React, { useState, useEffect } from "react";

const ThankYouSlide = ({ slideNumber }) => {
  const [thankYouSlideClassName, setThankYouSlideClassName] = useState("hide");

  useEffect(() => {
    if (slideNumber.current === 6)
      setThankYouSlideClassName("fade-in-from-right");
  }, [slideNumber]);

  return (
    <p className={`thank-you-screen ${thankYouSlideClassName}`}>Vielen Dank!</p>
  );
};

export default ThankYouSlide;
