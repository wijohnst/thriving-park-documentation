import React from 'react';
import styles from './styles.module.css';

const Table = ({ header = [], body = [] }) => (
    <div className={styles[`table-wrapper`]} style={{'--columns': header.length}}>
        {header.map((item, index) => (
            <div className={styles[`table-header-item`]} key={index}>
                {item}
            </div>
        ))}
        {body.map((item, index) => (
            <div className={styles[`table-body-item`]} key={index}>
                {item}
            </div>
        ))}
    </div>
)

export default Table;