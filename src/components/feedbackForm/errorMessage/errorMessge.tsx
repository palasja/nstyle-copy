import './errorMessge.css';
import { FieldError } from 'react-hook-form';

type ErrorMessgeProp = {
  errorMessage: string | undefined | FieldError | undefined;
};

const ErrorMessage = (props: ErrorMessgeProp) => {
  return (
    <p className="form-error-message" data-testid="errorMessage">
      {props.errorMessage?.toString()}
    </p>
  );
};

export default ErrorMessage;
