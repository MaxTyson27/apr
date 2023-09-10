import React from 'react'
import styles from './SendButton.module.sass'

const SendButton = ({ onClick }) => {
  return (
    <button onClick={ onClick } className={ styles.root }>
      <span>Send</span>
      <div className={ styles.hover_bg }></div>
    </button>
  )
}

export default SendButton
