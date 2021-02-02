import React, { Component } from 'react'
import styles from '../../styles/Home.module.css';

export default function PageName (props) {

    return (
        <div className={styles.pageName}>
            <h3>{props.pageName}</h3>
            <hr/>
        </div>
    )

}