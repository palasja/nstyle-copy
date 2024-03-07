import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';
import ErrorMessage from '../errorMessage/errorMessge';
import './inputField.css';
type InputProp = {
  type: string;
  labelProp: string;
  refProp: UseFormRegisterReturn;
  placeholder?: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
};

const InputField = (props: InputProp) => {
  return (
    <fieldset className="feedback-form_fieldset">
      <label>
        {props.labelProp}
        <input
          placeholder={props.placeholder}
          className="feedback-form_input"
          type={props.type}
          {...props.refProp}
          data-testid={props.labelProp}
        />
      </label>
      {props.error && <ErrorMessage errorMessage={props.error.message?.toString()} />}
    </fieldset>
  );
};

export default InputField;
