import styles from './App.module.css';
import Map from './component/Map.jsx';
import SearchContainer from './SearchContainer.jsx';
import { useState, useEffect } from "react";

function App() {
    const [ipDetail, setIpDetail] = useState({
            ipAddress: "Fetching...",
            location: "Fetching...",
            timezone: "Fetching...",
            isp: "Fetching...",
            latitude: null,
            longitude: null
        });

    // Get users' current location when the page is loaded
    useEffect(() => {
        getIPAddress(setIpDetail);
    }, []);

    return (
        <main>
            <SearchContainer 
                ipDetail={ipDetail} getIpDetail={getIpDetail} setIpDetail={setIpDetail} 
            />
            <Map ipDetail={ipDetail} />
        </main>
    );
}

function getIPAddress(setIpDetail){
    // ipify api is used for getting users' IP address
    const getIPAddressAPI = "https://api.ipify.org?format=json";
    
    console.log("Getting IP Address...");
    fetch(getIPAddressAPI)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            getIpDetail(data.ip, setIpDetail);
        })
        .catch((error) => {
            console.log("Getting IP Address Error\n", error);
        })
}

function getIpDetail(ipAddress, setIpDetail){
    // ip-api IP Geolocation API is used
    const APIpath = "http://ip-api.com/json/" + ipAddress;
    
    if(ipAddress !== null && ipAddress !== undefined){
        console.log("Getting IP Detail With The Address...")
        fetch(APIpath)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setIpDetail({
                    ipAddress: ipAddress,
                    location: `${data.city}, ${data.regionName}, ${data.country}`,
                    //TODO Converting timezone
                    timezone: data.timezone,
                    isp: data.isp,
                    latitude: data.lat,
                    longitude: data.lon
                });
            })
            .catch((error) => {
                console.log(`Get IP info error:\n${error}`);
            })
    }
    
}

export default App;


// This function is abandoned due to low accuracy and speed
// function getLocation(setUserPosition){

//     console.log("Getting position from users");

//     // HTML Geolocation API
//     // Check if Geolocation API is supported
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 // getCurrentPosition() method returns an object on success
//                 setUserPosition({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude
//                 });
//             },
//             (error) => {
//                 console.log("Error occur in getCurrentPosition:\n", error);
//             },
//             {
//                 maximumAge: 10000,
//                 enableHighAccuracy: true
//             }
//         );
//     }
//     else{
//         console.log("GeoLocation API getCurrentPosition Failed");
//     }
// }
