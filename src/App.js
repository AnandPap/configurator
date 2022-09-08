import { useState, useEffect } from "react";
import Question from "./Question";
import data from "./questionnaireData.json";
import "./App.css";

function App() {
  const [selectedOptions, setSelectedOptions] = useState({
    previous: 0,
    current: 0,
  });
  const [welcomeScreenClassName, setWelcomeScreenClassName] = useState(
    "fade-in-from-center"
  );

  useEffect(() => {
    console.log(selectedOptions);
    if (selectedOptions.current > 0 && selectedOptions.previous === 0)
      setWelcomeScreenClassName("fade-out-to-left");
    else if (selectedOptions.current === 0 && selectedOptions.previous > 0) {
      setWelcomeScreenClassName("fade-in-from-center");
    }
  }, [selectedOptions]);

  return (
    <div className="App">
      <div className={`${welcomeScreenClassName} absolutely-positioned`}>
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
          onClick={() => setSelectedOptions({ previous: 0, current: 1 })}
        >
          Start assessment
        </button>
        <p>🕑 Aproximately 2 minutes.</p>
      </div>
      {Object.values(data).map((element, i) => (
        <Question
          element={element}
          key={i}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          questionNumber={i + 1}
        />
      ))}
    </div>
  );
}

export default App;
