import React from "react";
import styles from "./IPResultContainer.module.css";
import IPResultSubContainer from "./component/IPResultSubContainer";

function IPResultContainer(){
    return(
        <div className={styles.positioningContainer}>
            <div className={styles.IPResultContainer}>
                <IPResultSubContainer title="IP Address" address={12}/>
                <IPResultSubContainer title="Location" address={12}/>
                <IPResultSubContainer title="IP Address" address={12}/>
                <IPResultSubContainer title="IP Address" address={12}/>
            </div>
        </div>
    );
}

export default IPResultContainer;