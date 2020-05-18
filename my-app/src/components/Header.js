import React from "react"
/**import { render } from "react-dom";
let video;
function Header(props){

    fetch('https://images-api.nasa.gov/asset/ISS%204K%20Crew%20Earth%20Observations')
     .then((response) => response.json())
     .then((data) => {
        video = data.collection.items[1];
        console.log(video);
       
     })
     //.catch((error) => console.log(error));
     return(
        <div>
            <h1>Satellite Tracker</h1>
            <video autoPlay = {true} >
                <source src = {"http://images-assets.nasa.gov/video/ISS 4K Crew Earth Observations/ISS 4K Crew Earth Observations~large.mp4"} type = "video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
    
}

export default Header
**/