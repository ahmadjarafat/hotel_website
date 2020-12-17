import React from "react";
import "./ComponentHome.css";




function ComponentHome(props){

    return(
        
<div className="component-home-all">
<div className="vector"></div>
    <div className="component-home-container">
        <div className="component-home-header">
            {props.header}
        </div>
        <div className="home-paragraph">
            {props.paragraph1} <br />
            {props.paragraph2} <br />
            {props.paragraph3} <br />
            {props.paragraph4} <br />
        </div>
        <div className="explore">
           Explore
        </div>

    </div>
    <div className="home-photo" style={{backgroundImage:`url(${props.img.results && props.img.results[4].urls.full})`}}></div>
    </div>
    
    )
}

export {ComponentHome};