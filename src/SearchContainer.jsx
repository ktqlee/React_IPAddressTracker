import React from "react";
import styles from "./SearchContainer.module.css";
import IPSearchBar from "./component/IPSearchBar";
import IPResultContainer from "./IPResultContainer";

import { useRef, useEffect } from "react";

function SearchContainer(){
    const PositionRef = useRef(null);
    // Only get the users' location once when they enter 
    useEffect(() => {
        getLocation(PositionRef);
    }, []);
    console.log("Position: ", PositionRef.current);

    return(
        <div className={styles.SearchContainer}>
            <h1>IP Address Tracker</h1>
            <IPSearchBar />
            <IPResultContainer />
        </div>
    );
}

function getLocation(PositionRef){
    console.log("Getting");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                PositionRef.current = position.coords;
                console.log("Position fetched and assigned: ", PositionRef.current);
            }
        );
    }
    else{
        console.log("GeoLocation API getCurrentPosition Failed");
    }
}

export default SearchContainer;