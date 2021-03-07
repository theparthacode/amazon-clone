import React from "react";
import { Link } from "react-router-dom";

function Boxlists(props) {
  return (
    <div className="catbox">
      <h3>{props.title}</h3>
      <img src={props.imgsrc} alt="" />
      <Link to={props.link}>{props.linktext}</Link>
    </div>
  );
}

export default Boxlists;
