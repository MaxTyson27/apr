import React from 'react'
import styles from './Agreement.module.sass'

const Agreement = ({ id, setCheckboxValue, checkobxValue, checkboxError, setCheckboxError }) => {

  const handleChangeInput = (e) => {
    if (e.target.checked) setCheckboxError(false);
    
    setCheckboxValue(e.target.checked);
  };

  const renderCheckbox = () => (
    <div className={ styles.box }>
      <input value={ checkobxValue } onChange={ handleChangeInput } id={ id } type="checkbox" className={styles.checkbox} />
      <span
        className={ styles.fake }
        style={{ borderColor: checkboxError ? '#FF0000' : '#03E7D9' }}
      >
      </span>
    </div>
  );


  return (
    <div className={ styles.root }>
      <label htmlFor={ id } className={ styles.text }>
        { renderCheckbox() }
        <a href="/">privacy policy </a>
        <span>agreement</span>
      </label>
      
    </div>
  )
}

export default Agreement
