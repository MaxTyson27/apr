import React from 'react'
import styles from './Figure.module.sass'

const Figure = ({ width, height, coords }) => {
  const stylesRoot = {
    width,
    height,
    ...coords,
  }

  return (
    <div className={ styles.root } style={ stylesRoot }> 
      <div className={styles.figure}></div>
      <div className={styles.light}></div>
    </div>
  )
}

export default Figure
