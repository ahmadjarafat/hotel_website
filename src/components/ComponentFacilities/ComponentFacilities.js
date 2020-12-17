import React from "react";
import "./ComponentFacilities.css";



function ComponentFacilities(props){
    console.log(props)
    return(
        <div className="Buffer" style={{backgroundImage: `url(${props.image.results && props.image.results[0].urls.regular})`}}>
        <div className="caption">
            {props.caption}
        </div>
        </div>   
)
}

export {ComponentFacilities};
       
        