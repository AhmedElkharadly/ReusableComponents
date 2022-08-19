import React from "react";
import "./App.css";
import Button from "./ReusableComponents/Button";
import NavBar from "./ReusableComponents/NavBar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  HbtnClick = () => { console.log("BTN Function"); };
  render() {
    return (
      <div className="App">
 
          <NavBar 
          homeRoute="\home"
          homeName="Home"
          contactusRoute="\contactUs"
          contactusName="Contact Us"
          profileRoute="\profile"
          profileName="Profile"
          productsRoute="\products"
          productsName="Products"
          imgSrc="../../public/1.JPG" 
          imgw="70px" 
          imgh="70px" />
        <div>
          <Button name="LogIn" color="black" HBC={this.HbtnClick} />
          <Button name="SignUp" color="White" bgColor="Black" HBC={() => {console.log("Put Here The Function")}} />
        </div>
      </div>
    );
  }
}

export default App;

{/* <h1>Hello For The Reusable Components</h1>
<h2>NavBar</h2>
<h2>Card</h2>
<h2>Button</h2>


<h2>Form</h2>
<h2>Footer</h2> */}