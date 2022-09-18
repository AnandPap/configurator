import React, { useState } from "react";
import NextButton from "./buttons/NextButton";
import FormField from "./reusable/FormField";

const FormSlide = ({ element, setSlideNumber, questionNumber }) => {
  const [formData, setFormData] = useState({
    address: "",
    telefonNumber: "",
    email: "",
  });
  return (
    <>
      <h1 className="slide-heading">{element.title}</h1>
      <form
        className="ending-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
      >
        {element.fields.map((answer, i) => (
          <FormField
            key={i}
            formFieldTitle={answer.formFieldTitle}
            type={answer.type}
          />
        ))}
        <NextButton
          text="SENDEN"
          onClick={() => {
            setSlideNumber({
              previous: questionNumber,
              current: questionNumber + 1,
            });
            console.log(5);
          }}
          className="send-btn"
        />
      </form>
    </>
  );
};

export default FormSlide;
