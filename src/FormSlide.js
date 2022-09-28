import React, { useState } from "react";
import NextButton from "./buttons/NextButton";
import FormField from "./reusable/FormField";

const FormSlide = ({
  element,
  selectedAnswers,
  answerOnClickHandler,
  formData,
  setFormData,
}) => {
  const [warningMessage, setWarningMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let answerMissing = false;
    for (const property in selectedAnswers) {
      if (
        Object.values(selectedAnswers[property])[0] === undefined &&
        JSON.parse(property) !== selectedAnswers.length - 1
      ) {
        answerMissing = true;
        break;
      }
    }
    if (answerMissing)
      setWarningMessage(
        "Bitte, gehen Sie zurück und beantworten Sie alle Fragen."
      );
    else {
      for (const property in formData) {
        if (formData[property] === "") {
          answerMissing = true;
          break;
        }
      }
      if (answerMissing)
        setWarningMessage("Bitte, füllen Sie alle Formularfelder aus.");
      else {
        if (
          /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(
            Object.values(formData)[2]
          )
        ) {
          answerOnClickHandler(formData);
          localStorage.setItem("questionnaireCompleted", "true");
        } else {
          setWarningMessage("E-Mail-Fehler beim Ausfüllen des Formulars!");
        }
      }
    }
  };

  return (
    <>
      <form className="ending-form" onSubmit={submitHandler}>
        {element.fields.map((answer, i) => (
          <FormField
            key={i}
            i={i}
            formFieldTitle={answer.formFieldTitle}
            type={answer.type}
            formData={formData}
            setFormData={setFormData}
            warningMessage={warningMessage}
            setWarningMessage={setWarningMessage}
          />
        ))}
        <NextButton
          text="SENDEN"
          onClick={submitHandler}
          className="send-btn"
        />
        <p className="warning-message">{warningMessage}</p>
      </form>
    </>
  );
};

export default FormSlide;
