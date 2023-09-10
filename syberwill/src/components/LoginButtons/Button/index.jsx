import React from 'react'
import styles from '../LoginButtons.module.sass'

const Button = ({ title }) => {
  return (
    <button className={ styles.btn }>{ title }</button>
  )
}

export default Button
