import React from "react";

const FormField = ({ formFieldTitle }) => {
  return (
    <div className="form-field">
      <div className="form-field-title">{formFieldTitle}</div>
      <input className="form-input" type="text" placeholder="Antwort hier" />
    </div>
  );
};

export default FormField;
