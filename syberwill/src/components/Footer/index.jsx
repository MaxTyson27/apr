import React from 'react'
import styles from './Footer.module.sass'
import logo from '../../images/logo.svg'
import LoginButtons from '../LoginButtons'

const Footer = () => {
  return (
    <div className={ styles.root }>
      <div className="container">
        <div className={styles.inner}>
          <a href="/" className={ styles.logo }>
            <img src={ logo } alt="" />
            <p>Cyber Will</p>
          </a>
          <p className={styles.text}>
            All rights reserved
          </p>
          <a href='/' className={styles.privacy}>
            Privacy Policy
          </a>
          <LoginButtons/>
        </div>
      </div>
    </div>
  )
}

export default Footer
