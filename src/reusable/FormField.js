import React from "react";

const FormField = ({
  i,
  formFieldTitle,
  type,
  formData,
  setFormData,
  warningMessage,
  setWarningMessage,
}) => {
  const inputHandler = (e) => {
    if (warningMessage !== "") setWarningMessage("");
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
        value={Object.values(formData)[i]}
        onChange={inputHandler}
      />
    </div>
  );
};

export default FormField;
