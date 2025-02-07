import React from "react";
import styles from "./IPSearchBar.module.css"

function IPSearchBar({getIpDetail, setIpDetail}){
    return(
        <div className={styles.Container}>
            <input type="text" placeholder="Search for any IP address or domain" id="ipSearch" ></input>
            <button type="submit" className={styles.SearchButton}>
                <img src="../images/icon-arrow.svg"></img>
            </button>
        </div>
    );
}

//TODO
function handleSearch(){
    
}

export default IPSearchBar;