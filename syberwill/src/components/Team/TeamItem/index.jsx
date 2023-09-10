import React, { useState } from 'react'
import styles from '../Team.module.sass'

const TeamItem = ({ img, name, prof, text, dots }) => {
  const [cirlceImageStyles, setCirlceImageStyles] = useState('');

  return (  
    <div className={ styles.item }>
      <div className={`${styles.item_top} ${ styles[cirlceImageStyles] }`}>
        <div className={`${styles.circle}`}>
          <img
            src={ img }
            alt="adad"
            onMouseEnter={ () => setCirlceImageStyles('active') }
           />
        </div>
        <div className={styles.circle_second}></div>
        <div className={styles.circle_third}></div>
      </div>
      <div className={styles.item_content}>
        <div className={styles.item_content_top}>
          <p className={styles.name}>{ name }</p>
          <p className={styles.prof}>{ prof }</p>
        </div>
        <p className={styles.item_text}>{ text }</p>
        <div className={styles.dots} style={ dots.coords }>
          <img src={ dots.img } alt="" />
        </div>
      </div>
    </div>
  )
}

export default TeamItem
