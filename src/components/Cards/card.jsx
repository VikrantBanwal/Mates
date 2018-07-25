import React from "react";
import "../../App.css";

const Card = props => {
  return (
    <div
      style={props.style}
      className={props.className ? props.className : "card"}
    >
      {props.children}
    </div>
  );
};

export default Card;
