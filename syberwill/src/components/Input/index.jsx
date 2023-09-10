import React, { useState } from 'react'
import styles from './Input.module.sass'

const Input = ({ placeholder, value, setInputValue, inputError, setInputError, width, height }) => {
  const [activeText, setActiveText] = useState(true);
  

  const handleFocusInput = () => setActiveText(false);

  const handleBlurInput = () => setActiveText(true);

  const handleChangeInput = (e) => {
    if (inputError) {
      setInputError(false);
    }
    setInputValue(e.target.value);
  };

  const renderPlaceholder = () => {
    if (value || !activeText) return null;

    return (
      <p className={ styles.placeholder }>{ placeholder }</p>
    )
  }

  return (
    <div className={ styles.root }>
      <input
        value={value}
        type="text"
        className={ styles.input }
        onFocus={ handleFocusInput }
        onBlur={ handleBlurInput }
        onChange={ handleChangeInput }
        style={ { borderColor: inputError ? '#FF0000' : '#03E7D9', width, height } }
      />
      { renderPlaceholder() }
    </div>
  )
}

export default Input
