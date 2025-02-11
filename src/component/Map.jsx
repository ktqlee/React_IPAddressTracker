import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

// leaflet map center : [latitude, longitude]

function Map({ipDetail}){
    return(
        <div className={styles.MapOuterContainer}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className={styles.Map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController ipDetail={ipDetail}/>
            </MapContainer>
        </div>
        

    );
}

function MapController({ipDetail}){
    const map = useMap();
    const [Markerposition, setMarkerPosition] = useState({
        // Default value
        latitude: 51.505,
        longitude: -0.09
    });
    
    useEffect(() => {
        if(ipDetail.latitude !== null){
            setMarkerPosition({
                latitude: ipDetail.latitude,
                longitude: ipDetail.longitude
            });
            // ipDetail's data is used instead of markerPosition
            // as markerPosition is not yet updated when flyTo() is called
            map.flyTo([ipDetail.latitude, ipDetail.longitude], 13);
        }
    }, [ipDetail]);
    
    return(
        <Marker position={[Markerposition.latitude, Markerposition.longitude]}>
            <Popup>
            Location: <br /> {ipDetail.location}
            </Popup>
        </Marker>
    );
}

export default Map;

