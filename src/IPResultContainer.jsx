import React from "react";
import styles from "./IPResultContainer.module.css";
import IPResultSubContainer from "./component/IPResultSubContainer";

function IPResultContainer({ipDetail}){
    return(
        <div className={styles.positioningContainer}>
            <div className={styles.IPResultContainer}>
                <IPResultSubContainer title="IP Address" content={ipDetail.ipAddress}/>
                <IPResultSubContainer title="Location" content={ipDetail.location}/>
                <IPResultSubContainer title="Timezone" content={ipDetail.timezone}/>
                <IPResultSubContainer title="ISP" content={ipDetail.isp}/>
            </div>
        </div>
    );
}

function getResult(userIPAdress, setResult){
    // ip-api IP Geolocation API is used
    const APIpath = "http://ip-api.com/json/" + userIPAdress;
    
    if(userIPAdress !== null && userIPAdress !== undefined){
        fetch(APIpath)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setResult({
                    ipAddress: userIPAdress,
                    location: `${data.city}, ${data.regionName}, ${data.country}`,
                    timezone: data.timezone,
                    isp: data.isp
                });
            })
            .catch((error) => {
                console.log(`Get IP info error:\n${error}`);
            })
    }
    else{
        console.log("IP Address is undefined");
    }
    
}

export default IPResultContainer;