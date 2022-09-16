import React, { useState } from "react";

const FormField = ({ formFieldTitle, type }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="form-field">
      <div className="form-field-title">{formFieldTitle}</div>
      <input
        className="form-input"
        type={type}
        placeholder="Antwort hier"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
};

export default FormField;
