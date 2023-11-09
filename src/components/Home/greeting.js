import React from 'react';
import './Home.css'

const Greetings = () => {
    let myDate = new Date();
    let hours= myDate.getHours();
    let greet;

    if (hours < 12)
        greet =  "Morning";
    else if (hours >= 12 && hours <= 17)
        greet = "Afternoon";
    else if (hours > 17 && hours <= 24)
        greet = "Evening";
    
    return <span> Good <span className='time'>{greet}</span>!</span>
}

export default Greetings; 