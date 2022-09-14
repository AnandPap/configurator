import { useState, useEffect } from "react";
import Question from "./Question";
import data from "./data/questionnaireData.json";
import "./App.css";
import "./buttons/Buttons.css";

function App() {
  const [slideNumber, setSlideNumber] = useState({
    previous: 0,
    current: 0,
  });
  const [welcomeScreenClassName, setWelcomeScreenClassName] = useState(
    "fade-in-from-center"
  );

  useEffect(() => {
    if (slideNumber.current > 0 && slideNumber.previous === 0)
      setWelcomeScreenClassName("fade-out-to-left");
    else if (slideNumber.current === 0 && slideNumber.previous > 0) {
      setWelcomeScreenClassName("fade-in-from-center");
    }
  }, [slideNumber]);

  return (
    <div className="App">
      <div className={`${welcomeScreenClassName}`}>
        <h1 className="welcome-screen-heading">
          Ermitteln Sie hier Ihren Bedarf für Ihre Fassadenreiningung
        </h1>
        <div className="welcome-screen-icons">
          <img
            src={`${process.env.PUBLIC_URL}/icons/icon1.svg`}
            alt=""
            className="welcome-screen-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/icons/icon2.svg`}
            alt=""
            className="welcome-screen-icon"
          />
          <img
            src={`${process.env.PUBLIC_URL}/icons/icon3.svg`}
            alt=""
            className="welcome-screen-icon"
          />
        </div>
        <p className="welcome-screen-introduction">
          Mit dem SC-Tool schnell zur Ihrer sauberen Fassade und Preisfindung.
        </p>
        <p className="welcome-screen-introduction">In 5 Schritten zum Ziel.</p>
        <div
          className="start-button-wrapper"
          onClick={() => setSlideNumber({ previous: 0, current: 1 })}
        >
          <button className="start-button">
            LOSLEGEN
            <div className="next-button-arrow"></div>
          </button>
        </div>
      </div>
      {Object.values(data).map((element, i) => (
        <Question
          element={element}
          key={i}
          slideNumber={slideNumber}
          setSlideNumber={setSlideNumber}
          questionNumber={i + 1}
        />
      ))}
    </div>
  );
}

export default App;
