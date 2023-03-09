import React, { useEffect, useState } from "react";
import NextButton from "../components-buttons/NextButton";
import FormField from "../components-reusable/FormField";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { formDataType, updateSelectedAnswers } from "../redux/questionnaire";

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
  const dispatch = useAppDispatch();

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
    for (let i = 0; i < selectedAnswers.length - 1; i++) {
      if (!selectedAnswers[i]) {
        e.preventDefault();
        setWarningMessage(
          "Bitte, gehen Sie zurück und beantworten Sie alle Fragen."
        );
        return;
      }
    }
    for (const key in formData) {
      if (formData[key as keyof formDataType] === "") {
        e.preventDefault();
        setWarningMessage("Bitte, füllen Sie alle Formularfelder aus.");
        return;
      }
    }
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      let text = "\nUser info: ";
      for (let i = 0; i < 3; i++) {
        text += Object.keys(formData)[i] + ": " + Object.values(formData)[i];
        if (i !== 2) text += ", ";
      }
      dispatch(updateSelectedAnswers({ id: slideId, text: text }));
      localStorage.setItem("questionnaireCompleted", "true");
    } else {
      e.preventDefault();
      setWarningMessage("E-Mail-Fehler beim Ausfüllen des Formulars!");
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
