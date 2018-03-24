import React from "react";
import "./Navbar.css";

const Navbar = props => 
 <ul className="nav nav-pills nav-justified">
  <li className="title">{props.title}</li>
  <li>{props.msg}</li>
  <li>Score: {props.score} | Top Score: {props.topscore}</li>
 </ul>
	 
export default Navbar;


