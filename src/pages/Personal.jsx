import React from "react";
import { useRef } from "react";

function Personal({ handleForm, hasError, name }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const ErrorMsg = () => {
    return <span className="error">This field is required</span>;
  };
  // const handleData = () => {
  //   handleForm(formRef);
  //   console.log(formRef);
  // };
  // handleForm(nameRef, emailRef, phoneRef);
  return (
    <div className="form ">
      <div className="head">
        <h3>Personal info</h3>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form>
        <label htmlFor="name">Name</label>
        {hasError.name ? <ErrorMsg /> : null}

        <br />
        <input
          className={hasError.name ? "error-background" : ""}
          ref={nameRef}
          type="text"
          placeholder="e.g, Stephen King"
          onChange={() => handleForm(nameRef, emailRef, phoneRef)}
        />
        <br />
        <label htmlFor="email">Email Address</label>
        {hasError.email ? <ErrorMsg /> : null}
        <br />
        <input
          className={hasError.email ? "error-background" : ""}
          ref={emailRef}
          type="email"
          placeholder="e.g, StephenKing@lorem.com"
          onChange={() => handleForm(nameRef, emailRef, phoneRef)}
        />
        <br />
        <label htmlFor="name">Phone number</label>
        {hasError.phone ? <ErrorMsg /> : null}
        <br />
        <input
          className={hasError.phone ? "error-background" : ""}
          ref={phoneRef}
          type="text"
          placeholder="e.g, +1 234 567 890"
          onChange={() => handleForm(nameRef, emailRef, phoneRef)}
        />
        <br />
      </form>
    </div>
  );
}

export default Personal;
