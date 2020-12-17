import React from "react";
import {HeaderTop} from "../Header-top/header-top";
import "./Header.css";
import {IoHome} from "react-icons/io5";
import {IoIosArrowDown as Scroll} from "react-icons/io";




function Header(props){
    return(
       <div className="header" style={{backgroundImage: `url(${props.background})`}}>
            <HeaderTop />
            <div className="Paragraph-header">
      <div className="welcome">
        WELCOME TO
      </div>
      <div className="luxury-paragraph">
      LUXURY
      </div>
      <div className="hotels-paragraph">
          H O T E L S
      </div>
      </div>
      <div className="Book-now-container">
          <div className="home-book">
          <IoHome color="white" className="home" />
          <div className="book-now">
          BOOK NOW
          </div>
          
          </div>
          
      </div>
      <div className="Scroll-text">
          Scroll
      </div>

 <div className="scroll">
     <Scroll size="30px" />
 </div>
 </div>
    )
}

export default Header;