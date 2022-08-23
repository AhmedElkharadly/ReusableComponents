import React from "react";
import Card from "./ReusableComponents/Card";
import LoginForm from "./ReusableComponents/LoginForm";
import Button from "./ReusableComponents/Button";
import NavBar from "./ReusableComponents/NavBar";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navArr: [
        {
          navRoute: "/home",
          navName: "Home",
          icon: "homeic",
        },
        {
          navRoute: "/profile",
          navName: "Profile",
          icon: "profileic",
        },
      ],
    };
  }
  HbtnClick = () => {
    console.log("BTN Function");
  };
  render() {
    return (
      <div className="App">
        {/* <NavBar 
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
        imgh="70px" /> */}

        <div>
          <Button name="LogIn" color="black" HBC={this.HbtnClick} />
          <Button
            name="SignUp"
            color="White"
            bgColor="Black"
            HBC={() => {
              console.log("Put Here The Function");
            }}
          />
            <LoginForm />
          <div style={{ display: "flex", justifyContent: "center" }}>
          </div>
          <div
            style={{
              padding: "10px",
              display: "grid",
              gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr",
              gridTemplateRows: "2fr 2fr 2fr ",
              flexWrap: "nowrap",
            }}
          >
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
            <Card
              imgSrc="pic.png"
              pBgColor="lightgray"
              pCategory="Shose Category"
              pName="Marsilia"
              pPrice="50$"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <h1>Hello For The Reusable Components</h1>
<h2>NavBar</h2>
<h2>Card</h2>
<h2>Button</h2>


<h2>Form</h2>
<h2>Footer</h2> */
}
