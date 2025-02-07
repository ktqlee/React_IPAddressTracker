import React from "react";
import styles from "./SearchContainer.module.css";
import IPSearchBar from "./component/IPSearchBar";
import IPResultContainer from "./IPResultContainer";

import { useRef, useEffect } from "react";

function SearchContainer({ipDetail, getIpDetail, setIpDetail}){
    
    return(
        <div className={styles.SearchContainer}>
            <h1>IP Address Tracker</h1>
            <IPSearchBar getIpDetail={getIpDetail} setIpDetail={setIpDetail} />
            <IPResultContainer ipDetail={ipDetail} />
        </div>
    );
}

export default SearchContainer;