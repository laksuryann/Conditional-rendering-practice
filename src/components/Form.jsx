import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="User name" />
      <input type="password" placeholder="Password" />

      {!props.isRegistered && <input type="password" placeholder="Confirm password" />}
      
      <button type="submit">
      { props.isRegistered ? "Login" : "Register"}
      </button>
      
    </form>
  );
}

export default Form;
