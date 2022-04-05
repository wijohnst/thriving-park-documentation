import React from 'react';
import styles from './styles.module.css';

const Table = ({ header = ['Test', "2"], body = [1] }) => {

    const TableLeftoverSpace = () => {
        const hasLeftoverSpace = body.length % header.length !== 0;
        
        if(hasLeftoverSpace) {
            return (
                <div className={styles[`table-leftover-space`]} />
            );
        }

        return null;
    };

    return (
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
            <TableLeftoverSpace />
        </div>
    )
}

export default Table;