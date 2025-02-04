import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

// leaflet map center : [latitude, longitude]

function Map(PositionRef){
    // center={[51.505, -0.09]}
    const [position, setPosition] = useState();

    let latitude = (PositionRef.current === undefined)? 51.505 : PositionRef.current.latitude; 
    let longitude = (PositionRef.current === undefined)? -0.09 :PositionRef.current.longitude;
    
    return(
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} className={styles.Map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    );
}

export default Map;

