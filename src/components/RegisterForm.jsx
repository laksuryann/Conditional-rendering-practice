import React from "react";
import Input from "./Input";
import Button from "./Button";

function RegisterForm() {
  return (
    <form className="form">
      <Input
      type="text"
      placeholder="Username"
      />
      <Input
      type="password"
      placeholder="password"
      />
      <Input
      type="password"
      placeholder="Confirm Password"
      />
      <Button
      name="Register"
      />
      
    </form>
  );
}

export default RegisterForm;
