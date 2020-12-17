import React from "react";
import { Link } from "react-router-dom";
import "./header-top.css";



function HeaderTop(){
return(
    <div className="header-top">
    <div className="luxury-container">
     <div className="luxury">LUXURY</div>
     <div className="Hotels">H&ensp;O&ensp;T&ensp;E&ensp;L&ensp;S</div>
    </div>
    <div className="navigation">
 <Link to="/" className="home">Home</Link>
 <Link to="/Facilities" className="facilities">Facilities</Link>
 <Link to="/Rooms" className="rooms">Rooms</Link>
 <Link to="/Contact-us">Contact-us</Link>
   
 </div>
    </div>
)
}

export {HeaderTop};

