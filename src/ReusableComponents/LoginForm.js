import { useState } from "react";
import Button from "./Button";
import "./loginform.css";
import { hideIc } from "./svg";

const LoginForm = (props) => {
  const [l1hoverd , setl1Hover] = useState(false)
  const [l2hoverd , setl2Hover] = useState(false)
  
  const whenl1Hoverd = (e) => {
    setl1Hover (true)
  }
  
  const whenl1NotHoverd = (e) => {
    setl1Hover (false)
  }
  const whenl2Hoverd = (e) => {
    setl2Hover (true)
  }
  
  const whenl2NotHoverd = (e) => {
    setl2Hover (false)
  }

  return (
    <form>
      <div className="formContainer">
        <label
          className="emaillable"
          htmlFor="e-mail"
          style = {l1hoverd? {top: "12px", fontSize:"14px"} : {top:"30px", fontSize:"15px"}}
          >Email Adress
          </label>
        <input
          onFocus={whenl1Hoverd}
          // onBlur={whenl1NotHoverd}
          className="emailInput"
          type="text"
          name="email"
          id="e-mail"
          aria-describedby="emailHelp"
          />
        <div id="emailHelp" className="emailWarr"></div>
        <label 
          className="emaillable"
          htmlFor="password"
          style = {l2hoverd? {top: "12px", fontSize:"14px"} : {top:"30px", fontSize:"15px"}}
          >Password</label>
        <input
          onFocus={whenl2Hoverd}
          // onBlur={whenl2NotHoverd}
          className="passInput"
          type="password"
          name="pass"
          id="password"
          aria-describedby="passHelp"
          />
        <div 
          id="passHelp" 
          className="passWarr">

        </div>
      <Button 
        type="submit" 
        bgColor="rgb(170, 216, 218)" 
        color="black" 
        name="Login"
        w="250px"
        />
      </div>
    </form>
  );
};

export default LoginForm;
