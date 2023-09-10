import React from 'react'
import styles from './BottomContent.module.sass'
import Learn from '../Learn'
import Team from '../Team'
import Contacts from '../Contacts'
import Pricing from '../Pricing'
import Footer from '../Footer'
import gradientBg from '../../images/learn-team-bg.png'

const BottomContent = ({ setPopup }) => {
  return (
    <div className={ styles.root } style={{backgroundImage: `url(${gradientBg})`}}>
      <Learn setPopup={ setPopup }/>
      <Team/>
      <Contacts/>
      <Pricing/>
      <Footer/> 
    </div>
  )
}

export default BottomContent
