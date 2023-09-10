import React from 'react'
import styles from './LoginButtons.module.sass'
import Button from './Button'

const LoginButtons = () => {
  return (
    <div className={ styles.root }>
      <Button title='Log In'/>
      <Button title='Log In'/>
    </div>
  )
}

export default LoginButtons
