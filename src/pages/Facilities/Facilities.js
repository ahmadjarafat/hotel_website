import React from "react";
import {HeaderFr} from "../../components/HeaderFR/HeaderFR"
import "./Facilities.css"
import {ComponentFacilities} from "../../components/ComponentFacilities/ComponentFacilities"
import {useState, useEffect} from "react";
import axios from "axios";

function Facilities()
{

    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    const [data4, setData4] = useState({});
    const [data5, setData5] = useState({});
    const [data6, setData6] = useState({});

    useEffect(() => {
        let mount = true;
       
        axios.all([
           axios.get(`https://api.unsplash.com/search/photos?query=gym&page=1&per_page
                 =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
         axios.get(`https://api.unsplash.com/search/photos?query=pool bar&page=1&per_page
         =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
         axios.get(`https://api.unsplash.com/search/photos?query=spa&page=1&per_page
         =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
         axios.get(`https://api.unsplash.com/search/photos?query=swimming pool&page=1&per_page
                 =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
         axios.get(`https://api.unsplash.com/search/photos?query=restaurant&page=1&per_page
         =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`),
         axios.get(`https://api.unsplash.com/search/photos?query=Laundry&page=1&per_page
         =5&client_id=Yt3xViqzEAQTpm1lvXBTN0gt4hRDuZwryKCv0K2dc3c`)])
   
       .then(axios.spread((data1, data2,data3,data4,data5,data6) => {
         if(mount){
            setData1(data1.data);
            setData2(data2.data);
            setData3(data3.data);
            setData4(data4.data);
            setData5(data5.data);
            setData6(data6.data);
         }
       }));
       
       return () => {
          mount = false;
       }
       },[]);

    return(
        <>
    <div className="Facilities-container">
       <HeaderFr head="FACILITIES" paragraph1="We want your stay at our lush hotel to be truly unforgettable.
       That is why we give special attention to all of your needs so"
       paragraph2="that we can ensure an experience quit unique. luxury hotels
       offers the perfect setting with stunning views for leisure"
       paragraph3="and our modern luxury resort facilities will help you enjoy the best of all." /> 
    </div>
    <div className="components-container">
         <ComponentFacilities image={data1} caption="THE GYM" />
         <ComponentFacilities image={data2} caption="POOLSIDE BAR" />
         <ComponentFacilities image={data3} caption="THE SPA" />
         <ComponentFacilities image={data4} caption="SWIMMING POOL" />
         <ComponentFacilities image={data5} caption="RESTAURANT" />
         <ComponentFacilities image={data6} caption="LAUNDRY" />
    </div>
   </>
    )
}

export {Facilities};