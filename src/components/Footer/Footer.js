import React from "react";
import "./Footer.css";
import {FaFacebookF as Facebook} from "react-icons/fa";
import {FaTwitter as Twitter} from "react-icons/fa";
import {AiFillInstagram as Instagram} from "react-icons/ai";
import {IoChevronBackSharp as Backward} from "react-icons/io5";
import {IoChevronForwardSharp as Forward} from "react-icons/io5";


function Footer(){
    return(
    <div>
        <div className="Testimonials-container">
            <div className="Testimonials">
                Testimonials
            </div>
            <div className="Testimonials-paragraph">
                "Calm, Serene, Retro- What a way to relax and enjoy"
            </div>
            <div className="Mr">
                Mr. and Mrs. Baxter, UK
            </div>
            <div className="Testimonials-navigation">
                <div className="arrow"><Backward size="15px" /></div>
                <div className="arrow"><Forward size="15px" /></div>
            </div>

        </div>

        <div>
        <div className="triangle"></div>
        <footer className="footer">
        <div className="footer-first">
            <div className="luxury-footer">
                LUXURY
            </div>
            <div className="home-footer">
            H&ensp;O&ensp;T&ensp;E&ensp;L&ensp;S
            </div>
            <div className="paragraph-footer">
                497 Evergeen Rd. Roseville, CA 95673 <br />
                +44 345 678 903<br />
                luxury_hotels@gamil.com
            </div>

     </div>

     <div>
        <div className="about-us">About Us</div> 
         <div className="contact">Contact</div>
         <div className="terms">Terms & conditions </div>
     </div>

     <div className="social-media">
         <div className="logos">
          <Facebook size="12px" />
          <Twitter size="12px" />
          <Instagram size="12px" />
         </div>

         <div className="words">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
         </div>
         
     </div>

     <div className="subscribe">
         Subscribe to our newsletter
         <div className="email-container">
       <span className="email">
           Email Address
       </span>
       <button className="button">OK</button>
        </div> 
     </div>
        </footer>
        </div>

    </div>
    )
}

export {Footer};