import React, { useState } from "react";

const FormField = ({
  formFieldTitle,
  type,
  setFormData,
  warningMessage,
  setWarningMessage,
}) => {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    if (warningMessage !== "") setWarningMessage("");
    setInputText(e.target.value);
    if (type === "text")
      setFormData((s) => ({ ...s, address: e.target.value }));
    else if (type === "tel")
      setFormData((s) => ({ ...s, telefon: e.target.value }));
    else setFormData((s) => ({ ...s, [type]: e.target.value }));
  };

  return (
    <div className="form-field">
      <div className="form-field-title">{formFieldTitle} *</div>
      <input
        className="form-input"
        type={type}
        placeholder="Antwort hier"
        value={inputText}
        onChange={inputHandler}
        required
      />
    </div>
  );
};

export default FormField;
