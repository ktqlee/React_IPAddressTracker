import React from "react";
import styles from "./IPSearchBar.module.css"
import { useState } from "react";

function IPSearchBar({setSearchRequest, errorState}){

    const [query, setQuery] = useState();
    
    const handleInput = (event) => {
        setQuery(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault()
        setSearchRequest(query);
    }
    
    return(
        <div className={styles.Container}>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search for any IP address or domain" 
                    onChange={handleInput} className={`${errorState? styles.InputError: styles.InputSuccess}`}>
                </input>
                <button type="submit" className={styles.SearchButton}>
                    <img src="../images/icon-arrow.svg"></img>
                </button>
            </form>
        </div>
    );
}



export default IPSearchBar;