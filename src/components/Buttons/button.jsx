import React from "react";
import "../../App.css";

const Button = props => (
  <div
    className={props.className ? `button1 ${props.className}` : "button1"}
    {...props}
  >
    {props.children}
  </div>
);

export default Button;
export { Button as Button1 };
