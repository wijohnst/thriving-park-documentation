import React from 'react';
import styles from './styles.module.css';

const Table = ({ header = [], body = [] }) => (
    <div className={styles[`table-wrapper`]} style={{'--columns': header.length}}>
        {header.map((item, i) => (
            <div className={styles[`table-header-item`]} key={i}>
                {item}
            </div>
        ))}
        {body.map((item, i) => (
            <div className={styles[`table-body-item`]} key={i}>
                {item}
            </div>
        ))}
    </div>
)

export default Table;