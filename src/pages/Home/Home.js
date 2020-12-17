import React from "react";
import "./Home.css";
import {ComponentHome} from "../../components/ComponentHome/ComponentHome";
import axios from "axios";
import {useState, useEffect} from "react";





function Home(props){

   const [data1, setData1] = useState({});
   const [data2, setData2] = useState({});
   useEffect(() => {
     let mount = true;

     axios.all([
        axios.get(`https://api.unsplash.com/search/photos?query=hotel room&page=1&per_page
              =3&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
      axios.get(`https://api.unsplash.com/search/photos?query=hotel beach&page=1&per_page
      =3&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`)])
    .then(axios.spread((data1, data2) => {
      if(mount){
         setData1(data1.data);
         setData2(data2.data);
      }
    }));

    return () => {
       mount = false;
    }
   },[]);


   return(
<div className="home-container">
    <div className="home-comment">
       All our room types are including complementary breakfast
    </div>
    <div className="component-1">
    <ComponentHome paragraph1="Our rooms are designed to transport you"
    paragraph2="you into an environment made for leisure"
    paragraph3="Take your mind off the day-to-day of home"
    paragraph4="life and find a private paradise for yourself"
    header="Luxury redefined"
    img={data1} />
  </div>
<div className="component-2">
<ComponentHome paragraph1="Our rooms are designed to transport you"
    paragraph2="you into an environment made for leisure"
    paragraph3="Take your mind off the day-to-day of home"
    paragraph4="life and find a private paradise for yourself"
    header="Luxury redefined"
    img={data2} />
    </div>
    
</div>
   )
}

export {Home};
  
