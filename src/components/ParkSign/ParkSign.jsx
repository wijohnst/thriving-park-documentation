import React from 'react'
import styles from './styles.module.css'

export const ParkSign = () => {
	return (
		<div className={styles[`park-sign-wrapper`]}>
			<div className={styles.signContent}>
				<h2 className={styles[`sign-h2`]}>WELCOME TO</h2>
				<h1 className={styles[`sign-h1`]}> THRIVING PARK</h1>
				<h3 className={styles[`sign-h3`]}>COLUMBUS, OHIO - ESTD. 1892</h3>
			</div>
		</div>
	)
}

export default ParkSign;
