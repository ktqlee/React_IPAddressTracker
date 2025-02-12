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

    const [searchRequest, setSearchRequest] = useState();
    const [errorState, setErrorState] = useState(false);

    // Get users' current location when the page is loaded
    useEffect(() => {
        getIPAddress(setIpDetail);
    }, []);

    useEffect(() => {
        // getIpDetail(searchRequest, setIpDetail, setErrorState);
        getIpDetail_V2(searchRequest, setIpDetail, setErrorState);
    }, [searchRequest]);

    return (
        <main>
            <SearchContainer 
                ipDetail={ipDetail} setSearchRequest={setSearchRequest} errorState={errorState}
            />
            <Map ipDetail={ipDetail} />
        </main>
    );
}

function getIPAddress(setIpDetail){
    // ipify api is used for getting users' IP address
    const getIPAddressAPI = "https://api.ipify.org?format=json";

    fetch(getIPAddressAPI)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // getIpDetail(data.ip, setIpDetail);
            getIpDetail_V2(data.ip, setIpDetail)
        })
        .catch((error) => {
            console.log("Getting IP Address Error\n", error);
        })
}

async function getIpDetail_V2(ipAddress, setIpDetail, setErrorState = ()=>{}){
    const APIpath = `https://freeipapi.com/api/json/${ipAddress}`;
    
    try{
        const response = await fetch(APIpath);
        const data = await response.json();
        setIpDetail({
            ipAddress: ipAddress,
            location: `${data.cityName}, ${data.regionName}, ${data.countryName}`,
            timezone: data.timeZone,
            // ips data is not available
            isp: data.zipCode,
            latitude: data.latitude,
            longitude: data.longitude
        });
        setErrorState(false);
    } 
    catch(error) {
        console.log("Get timeZone error\n", error);
        setErrorState(true);
    }
}  

// This function is abandoned as https request is not available for ip-api
async function getIpDetail(ipAddress, setIpDetail, setErrorState = ()=>{}){
    // ip-api IP Geolocation API is used
    const APIpath = "http://ip-api.com/json/" + ipAddress;
    
    try{
        if(ipAddress !== null && ipAddress !== undefined){
            const response = await fetch(APIpath);
            const data = await response.json();
                
            if(data.status === "success"){
                const timezone = await getTimeZone(ipAddress);
                setIpDetail({
                    ipAddress: ipAddress,
                    location: `${data.city}, ${data.regionName}, ${data.country}`,
                    timezone: timezone,
                    isp: data.isp,
                    latitude: data.lat,
                    longitude: data.lon
                });
                setErrorState(false);
            }
            else{
                // Invalid IP Address
                console.log("Invalid IP Address");
                setErrorState(true);
            }   
        }
    } 
    catch(error){
        console.log(`Get IP detail error:\nIP address: ${ipAddress}\n${error}`);
    }
    
}

// Another API is used for getting the time zone becuase ip-api's "offset" data is unavailbale (undefined)
async function getTimeZone(ipAddress){
    const APIpath = `https://freeipapi.com/api/json/${ipAddress}`;
    
    try{
        const response = await fetch(APIpath);
        const data = await response.json();
        return 'UTC ' + data.timeZone;
    } 
    catch(error) {
        console.log("Get timeZone error\n", error);
        return null;
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
