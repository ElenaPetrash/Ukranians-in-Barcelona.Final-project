import React from "react";
import { ReactDOM } from "react";
import "./CardsLine.css";

function CardsLine(props) {
  return (
    <div className="cardLine">
      <div className="cardLine-body">
        <img src={props.element.foto} width="50px" className="cardLine-image" />
        <h3 className="cardLine-title">{props.element.name_event}</h3>
      </div>
      <button className="cardLine-btn"> Read</button>
    </div>
  );
}

export default CardsLine;
