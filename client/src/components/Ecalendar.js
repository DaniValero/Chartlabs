import React, { useEffect, componentDidMount } from "react";
import { useLocation } from 'react-router-dom';

import './global.css'

const Ecalendar = () => {

    // This fixzes the issue of the calendar not showing when navigating back to the homepage

    useEffect(() => {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if(reloadCount < 2) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload();
        } else {
            sessionStorage.removeItem('reloadCount');
        }
    
    }, [])
   

    useEffect(() => {
    
        const script = document.createElement("script");
        script.async = true;
        script.setAttribute("data-type", "calendar-widget");
        script.src = `https://www.tradays.com/c/js/widgets/calendar/widget.js?v=12`;
        script.text = JSON.stringify({
        width: "100%",
        height: "100%",
        mode: "1",
        lang: "en",
        theme: 1,
        });

        document.getElementById("economicCalendarWidget").appendChild(script);
        
    }, []);

   
  
       
   



  return (
    <div className="calendar-wrapper">
        <div id="economicCalendarWidget"></div>
    </div>
  );
}

export default Ecalendar;
