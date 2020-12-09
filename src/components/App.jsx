import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
    {userIsRegistered ? <LoginForm /> : <RegisterForm />}   
    </div>
  );
}

export default App;
