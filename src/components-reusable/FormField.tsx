import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setFormData } from "../redux/questionnaire";

type FormFieldProps = {
  i: number;
  formFieldTitle: string;
  type: string;
  warningMessage: string;
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>;
};

const FormField = ({
  i,
  formFieldTitle,
  type,
  warningMessage,
  setWarningMessage,
}: FormFieldProps) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.questionnaire.formData);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (warningMessage !== "") setWarningMessage("");
    if (type === "text") dispatch(setFormData({ address: e.target.value }));
    else if (type === "tel") dispatch(setFormData({ telefon: e.target.value }));
    else dispatch(setFormData({ email: e.target.value }));
  };

  return (
    <div className="form-field">
      <div className="form-field-title">{formFieldTitle} *</div>
      <input
        // name={type}
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
