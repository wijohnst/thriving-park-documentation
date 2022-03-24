import React from 'react'
import styles from './styles.module.css'

const FAQLayout = ({ children }) => {
	return (
		<div className={styles[`faq-layout`]}>
            {children}
		</div>
	)
}

export default FAQLayout;