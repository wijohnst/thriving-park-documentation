import React from 'react'
import styles from './styles.module.css'

export const ParkSign = () => {
  return (
    <div className={styles[`park-sign-wrapper`]}>
      <h1 className={styles[`sign-h1`]}>
        WELCOME TO
				<div>
					<span className={styles[`sign-h1-large`]}>THRIVING PARK</span>
				</div>
        <span className={styles[`sign-h1-small`]}>
          COLUMBUS, OHIO - ESTD. 1892
        </span>
      </h1>
    </div>
  )
}

export default ParkSign
