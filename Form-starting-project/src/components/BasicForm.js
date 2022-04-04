import useInput from "../hooks/use-input";

const isEmpty = (value) => value !== '';

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isEmpty);

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLNameInput,
  } = useInput(isEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmpty);

  let formIsValid = false;

  if (enteredNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName,enteredLName,enteredEmail);

    resetNameInput();
    resetLNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lnameInputClasses = lnameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor="Lname">Last Name</label>
          <input
            type="text"
            id="Lname"
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
            value={enteredLName}
          />
          {lnameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
