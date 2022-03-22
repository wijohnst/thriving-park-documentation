import React from 'react'
import styles from './styles.module.css'

export const FAQ = ({ questionText, answerText }) => {
    return (
        <div className={styles[`faq-wrapper`]}>
            <div className={styles[`faq-question`]}>
                {questionText}
            </div>
            <div className={styles[`faq-answer`]}>
                {answerText}
            </div>
        </div>
    )
}

export default FAQ;