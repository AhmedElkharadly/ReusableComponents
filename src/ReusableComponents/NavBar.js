import { NavLink } from "react-router-dom";
import "./navbar.css";
import { homeic, exploreic, notificationic, profileic, moreic } from "./svg";

function NavBar(props) {
  return (
    <div className="navBar">
      <img src="logo192.png" alt="Logo" style={{
        width: props.imgw,
        height: props.imgh,
        cursor: props.pointer
      }}/>
      <nav className="nav">
        <NavLink className="navLink" to={props.homeRoute}  activestyle={{ color: "red"}}>
          <span>{homeic} {props.homeName}</span>
        </NavLink>
        <NavLink className="navLink" to={props.contactusRoute} activestyle={{ color: "blue" }}>
          <span>{exploreic} {props.contactusName}</span>
        </NavLink>
        <NavLink className="navLink" to={props.productsRoute} activestyle={{ color: "blue" }}>
          <span>{notificationic} {props.productsName}</span>
        </NavLink>
        <NavLink className="navLink" to={props.profileRoute} activestyle={{ color: "blue" }}>
          <span>{profileic} {props.profileName}</span>
        </NavLink>
      </nav>
      <button className="more"><span>{moreic} {props.navButtonName}</span></button>
    </div>
  );
}

export default NavBar;
