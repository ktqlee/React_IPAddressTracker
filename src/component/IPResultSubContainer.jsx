import React from "react";
import styles from "./IPResultSubContainer.module.css";

function IPResultSubContainer({title, address}){
    return(
        <div className={styles.IPResultSubContainer}>
            <p className={styles.Title}>{title.toUpperCase()}</p>
            <p className={styles.Detail}>192.212.174.101</p>
        </div>
    );
}

export default IPResultSubContainer