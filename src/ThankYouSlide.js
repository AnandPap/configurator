import React, { useState, useEffect } from "react";

const ThankYouSlide = ({ slideNumber }) => {
  const [thankYouSlideClassName, setThankYouSlideClassName] = useState("hide");
  useEffect(() => {
    if (slideNumber.current === 6)
      setThankYouSlideClassName("fade-in-from-right");
  }, [slideNumber]);
  return <div className={`${thankYouSlideClassName}`}>ThankYouSlide</div>;
};

export default ThankYouSlide;
