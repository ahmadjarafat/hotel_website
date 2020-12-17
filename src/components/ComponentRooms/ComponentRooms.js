import React from "react";
import "./ComponentRooms.css"
import {BsFillPlusCircleFill as Plus} from "react-icons/bs";


function ComponentRooms (props)
{
    return(
        <div className="container">
         <div className="top" style={{backgroundImage:`url(${props.img.results && props.img.results[0].urls.regular})`}}>
             <div></div>
             <div className="dots">
             <div className="circle fill"></div>
             <div className="circle"></div>
             <div className="circle"></div>
             </div>
         </div>
         <div className="bottom">
             <div className="room-type">
                 {props.type}
             </div>
             <div className="cost">
                  <Plus style={{color:  "#e0b973", marginLeft:"80px", marginBottom:"3px"}} size="25px" />
                  <div className="view">
                   VIEW ROOM DETAILS
                  </div>
                  <div className="per-night">
                      {props.cost}  Avg/night
                  </div>
             </div>
         </div>
        </div>
    )
}
                      
                

export {ComponentRooms};