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
    console.log(slideNumber);
    if (slideNumber.current > 0 && slideNumber.previous === 0)
      setWelcomeScreenClassName("fade-out-to-left");
    else if (slideNumber.current === 0 && slideNumber.previous > 0) {
      setWelcomeScreenClassName("fade-in-from-center");
    }
  }, [slideNumber]);

  return (
    <div className="App">
      <div className={`absolutely-positioned ${welcomeScreenClassName}`}>
        <h1 className="welcome-screen-heading">
          How much will the facade cleaning cost you?
        </h1>
        <p className="initial-text">
          We are the right partner when it comes to the professional cleaning of
          plaster, clinker, eternit and metal on building facades. The company
          SC SystemCare GmbH stands for good advice and clean execution of the
          work on the object. Your satisfaction is important to us!
          <br></br>
          <br></br>
          💡 Complete the following questionnaire do get an estimate of how
          serious your situation is.
        </p>
        <button
          className="start-button button"
          onClick={() => setSlideNumber({ previous: 0, current: 1 })}
        >
          Start assessment
        </button>
        <p>🕑 Aproximately 2 minutes.</p>
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
