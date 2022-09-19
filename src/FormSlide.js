import React, { useState } from "react";
import NextButton from "./buttons/NextButton";
import FormField from "./reusable/FormField";

const FormSlide = ({ element, selectedAnswers, answerOnClickHandler }) => {
  const [warningMessage, setWarningMessage] = useState("");
  const [formData, setFormData] = useState({
    address: "",
    telefon: "",
    email: "",
  });
  console.log(formData);
  const submitHandler = (e) => {
    let answerMissing = false;
    for (let i = 0; i < selectedAnswers.length - 1; i++) {
      if (selectedAnswers[i] === "") {
        answerMissing = true;
        break;
      }
    }
    if (answerMissing)
      setWarningMessage("Please provide answer to all questions.");
    else {
      // for (const property in formData) {
      //   if(form)
      // }
      Object.values(formData).map((element, i) => {
        if (element === "") {
          answerMissing = true;
        }
      });
      if (answerMissing) setWarningMessage("Please fill out all form fields.");
      else {
        if (
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            Object.values(formData)[2]
          )
        ) {
          e.preventDefault();
          answerOnClickHandler();
        } else {
          setWarningMessage("Error filling out form.");
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
            formFieldTitle={answer.formFieldTitle}
            type={answer.type}
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
      </form>
      <div className="warning-message">{warningMessage}</div>
    </>
  );
};

export default FormSlide;
