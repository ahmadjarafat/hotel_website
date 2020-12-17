import React from "react";
import "./Contact-us.css"
import {BsArrowRight} from "react-icons/bs"


function ContactUS(){
    return (
        <div className="contact-us-all">
    <div className="container-contact">
    <div className="head">
        WE ARE HERE FOR YOU 
    </div>
    <div className ="paragraph-contact">
        At Luxury Hotels, We take our customers seriously. Do you have any enquiries,
        complaints or requests,<br />
        please forward it to support desk and we will get back
        to you as soon as possible. 
    </div>
    <div className="bottom-contact">
        <div>
    <div className="address">
      <div className="Evergreen">
          479 Evergreen Rd. Roseville,<br />
          CA 95673 
      </div>
      <div className="view-contact">
          <span className="map">View map</span>
          <div className="arrow-contact-us">
           <BsArrowRight size="40px"  />
           </div>
      </div>
      <div className="phone">
         Phone: +44 345 678 903<br />
         Email: luxury_hotels@gmail.com
      </div>
    </div>
    </div>
    <div className="form-contact">
    <form className="form">
  <label>
    Name <br />
    <input type="text" name="name" className="Name" />
  </label>
  <label className="email-address-contact">
    Email Address <br />
    <input type="text" name="name" className="email-address-input" />
  </label>
  <label className="message-label">
    Message <br />
    <input type="text" name="name" className="message" />
  </label>
  <input type="submit" value="Submit" className="submit" />
</form>
    </div>
    </div>
    </div>
    </div>
    )

}

export{ContactUS};
