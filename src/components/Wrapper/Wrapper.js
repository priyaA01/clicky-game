import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className= {props.style}>{props.children}</div>;
export default Wrapper;
