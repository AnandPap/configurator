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
    if (answerMissing) {
      e.preventDefault();
      setWarningMessage(
        "Bitte, gehen Sie zurück und beantworten Sie alle Fragen."
      );
    } else {
      for (const property in formData) {
        if (formData[property] === "") {
          answerMissing = true;
          break;
        }
      }
      if (answerMissing) {
        e.preventDefault();
        setWarningMessage("Bitte, füllen Sie alle Formularfelder aus.");
      } else {
        if (
          /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(
            Object.values(formData)[2]
          )
        ) {
          // answerOnClickHandler(formData);
          localStorage.setItem("questionnaireCompleted", "true");
        } else {
          e.preventDefault();
          setWarningMessage("E-Mail-Fehler beim Ausfüllen des Formulars!");
        }
      }
    }
  };

  return (
    <>
      <form
        className="ending-form"
        action="https://formsubmit.co/iknowyoutoowel@hotmail.com"
        method="POST"
        onSubmit={submitHandler}
      >
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
          type="submit"
          text="SENDEN"
          onClick={submitHandler}
          className="send-btn"
        />
        <input type="hidden" name="_captcha" value="false"></input>
        {/*preporucuje se captcha zbog spam-a*/}
        <input
          type="hidden"
          name="_next"
          value="https://german-companies-configurator.herokuapp.com/"
        ></input>
        <textarea
          name="Question answers"
          value={selectedAnswers}
          readOnly
          style={{ display: "none" }}
        ></textarea>
        <p className="warning-message">{warningMessage}</p>
      </form>
    </>
  );
};

export default FormSlide;
