import React from 'react'
import styles from '../Contacts.module.sass'

const ContactsLink = ({ href, text, svg }) => {
  return (
    <a className={ styles.link } href={href}>
      <span>{ text }</span>
      { svg }
      <div className={ styles.hover_bg }></div>
    </a>
  )
}

export default ContactsLink
