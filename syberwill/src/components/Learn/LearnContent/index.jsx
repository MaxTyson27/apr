import React from 'react'
import styles from '../Learn.module.sass'

const LearnContent = ({ dots, icon, text }) => {
  return (
    <div className={ styles.item_top }>
      <div className={ styles.item_top_row }>
        <div className={styles.icon}>
          <img src={ icon } alt="icon" />
        </div>
        <p className={ styles.item_title }>{text}</p>
      </div>
      <img src={dots} alt="dots" />
    </div>  
  )
}

export default LearnContent
