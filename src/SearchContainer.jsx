import React from "react";
import styles from "./SearchContainer.module.css";
import IPSearchBar from "./component/IPSearchBar";
import IPResultContainer from "./IPResultContainer";

function SearchContainer({ipDetail, setSearchRequest, errorState}){
    return(
        <div className={styles.SearchContainer}>
            <h1>IP Address Tracker</h1>
            <IPSearchBar setSearchRequest={setSearchRequest} errorState={errorState} />
            <IPResultContainer ipDetail={ipDetail} />
        </div>
    );
}

export default SearchContainer;