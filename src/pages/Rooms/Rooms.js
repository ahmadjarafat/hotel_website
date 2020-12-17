import React from "react";
import { ComponentRooms } from "../../components/ComponentRooms/ComponentRooms";
import { HeaderFr } from "../../components/HeaderFR/HeaderFR";
import "./Rooms.css";
import axios from "axios";
import {useState, useEffect} from "react";


function Rooms(){
    
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    useEffect(() => {
     let mount = true;
    
     axios.all([
        axios.get(`https://api.unsplash.com/search/photos?query=single room&page=1&per_page
              =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
      axios.get(`https://api.unsplash.com/search/photos?query= double room&page=1&per_page
      =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
      axios.get(`https://api.unsplash.com/search/photos?query= twin room &page=1&per_page
      =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`)])

    .then(axios.spread((data1, data2,data3) => {
      if(mount){
         setData1(data1.data);
         setData2(data2.data);
         setData3(data3.data);
      }
    }));
    
    return () => {
       mount = false;
    }
    },[]);

    return(
        <>
        <div className="rooms-container">
            <HeaderFr head="ROOMS AND RATES" 
            paragraph1="Each of our bright, light-flooded rooms come with everything you could
            possibly need for a comfortable stay. And yes," 
            paragraph2="comfort isn't our only objective, we also value good design, sleek
            contemporary furnishing complemented"
            paragraph3="by the rich tones of nature's palette as visible from our
            rooms' sea-view windows and terraces." />
        </div>
        <div className="component-container">
            <ComponentRooms type="SINGLE ROOM" cost="$147" img={data1} />
            <ComponentRooms type="DOUBLE ROOM" cost="$155" img={data2} />
            <ComponentRooms type="TWIN ROOM" cost="$155" img={data3} />
        </div>
        </>
    )
}

export {Rooms};