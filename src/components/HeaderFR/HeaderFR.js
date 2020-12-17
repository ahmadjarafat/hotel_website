import React from "react";
import "./HeaderFR.css";


function HeaderFr(props)
{
  return(
    <>
    <div className="head">
       {props.head}
    </div>
    <div className="paragraph">
      <div>{props.paragraph1}</div>
      <div>{props.paragraph2}</div>
      <div>{props.paragraph3}</div>
    </div>
    </>
  )
}

export {HeaderFr};