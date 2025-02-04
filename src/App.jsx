import styles from './App.module.css';
import Map from './component/Map.jsx';
import SearchContainer from './SearchContainer.jsx';
import { useRef, useEffect } from "react";

function App() {
  
    // Only get the users' location once when they enter 
    //TODO should be useState 
    const PositionRef = useRef(null);    
    useEffect(() => {
        getLocation(PositionRef);
    }, []);
    // latitude={PositionRef.current.latitude} longitude={PositionRef.current.longitude}
    console.log("Position: ", PositionRef.current);

    return (
        <main>
        <SearchContainer />
        <Map PositionRef={PositionRef} />
        </main>
    );
}

function getLocation(PositionRef){

    console.log("Getting position from users");

    // HTML Geolocation API
    // Check if Geolocation API is supported
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // getCurrentPosition() method returns an object on success
                PositionRef.current = position.coords;
                console.log("Position fetched and assigned to PositionRef:\n", PositionRef.current);
            }
        );
    }
    else{
        console.log("GeoLocation API getCurrentPosition Failed");
    }
}

export default App;
