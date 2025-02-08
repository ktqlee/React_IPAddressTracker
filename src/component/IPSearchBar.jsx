import React from "react";
import styles from "./IPSearchBar.module.css"
import { useState } from "react";

function IPSearchBar({setSearchRequest}){

    const [query, setQuery] = useState();
    const handleInput = (event) => {
        console.log("event value: ", event.target.value);
        setQuery(event.target.value);
        
    }
    console.log("query", query);
    const handleSearch = () => {
        console.log("Handle IP search: ", query);
        setSearchRequest(query);
    }
    
    return(
        <div className={styles.Container}>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search for any IP address or domain" onChange={handleInput}></input>
                <button type="submit" className={styles.SearchButton}>
                    <img src="../images/icon-arrow.svg"></img>
                </button>
            </form>
        </div>
    );
}



export default IPSearchBar;