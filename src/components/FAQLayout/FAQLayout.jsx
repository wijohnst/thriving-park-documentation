import React from 'react'
import styles from './styles.module.css'

const FAQLayout = (props) => {
	return (
		<div className={styles[`faq-layout`]}>
            {props.children}
		</div>
	)
}

export default FAQLayout;