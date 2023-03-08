import React, { useEffect, useState } from "react";
import NextButton from "../components-buttons/NextButton";
import FormField from "../components-reusable/FormField";
import { useAppSelector } from "../redux/hooks";
import { formDataType } from "../redux/questionnaire";

type FormSlideProps = {
  slideId: number;
};

const FormSlide = ({ slideId }: FormSlideProps) => {
  const formFields = [
    { formFieldTitle: "Dein Adresse: ", type: "text" },
    { formFieldTitle: "TelefonnummerDiese: ", type: "tel" },
    { formFieldTitle: "Email: ", type: "email" },
  ];
  const [warningMessage, setWarningMessage] = useState("");
  const [className, setClassName] = useState("hide");
  const selectedAnswers = useAppSelector(
    (state) => state.questionnaire.selectedAnswers
  );
  const slideNumber = useAppSelector(
    (state) => state.questionnaire.slideNumber
  );
  const formData = useAppSelector((state) => state.questionnaire.formData);

  useEffect(() => {
    if (slideNumber.current === slideId && slideNumber.previous === slideId - 1)
      setClassName("fade-in-from-right");
    else if (
      slideNumber.current === slideId &&
      slideNumber.previous === slideId + 1
    ) {
      setClassName("fade-in-from-left");
    }
  }, [slideNumber]);

  const submitHandler = (e: React.FormEvent) => {
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
        if (formData[property as keyof formDataType] === "") {
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
    <div className={`slide ${className}`}>
      <h1 className="slide-heading">Dein Info</h1>
      <form
        className="ending-form"
        action="https://formsubmit.co/iknowyoutoowel@hotmail.com"
        method="POST"
        onSubmit={submitHandler}
      >
        {formFields.map((answer, i) => (
          <FormField
            key={i}
            i={i}
            formFieldTitle={answer.formFieldTitle}
            type={answer.type}
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
          value="https://configurator-anandpap.vercel.app/"
        ></input>
        <textarea
          name="Question answers"
          value={selectedAnswers}
          readOnly
          style={{ display: "none" }}
        ></textarea>
        <p className="warning-message">{warningMessage}</p>
      </form>
    </div>
  );
};

export default FormSlide;
