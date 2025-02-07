import React from "react";
import styles from "./IPResultSubContainer.module.css";

function IPResultSubContainer({title, content}){
    return(
        <div className={styles.IPResultSubContainer}>
            <p className={styles.Title}>{title.toUpperCase()}</p>
            <p className={styles.Detail}>{content}</p>
        </div>
    );
}

export default IPResultSubContainer