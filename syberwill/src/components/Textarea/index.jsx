import React, { useState } from 'react'
import styles from './Textarea.module.sass'

const MAX_LENGTH = 101;

const Textarea = ({ placeholder, width, height }) => {
  const [activeText, setActiveText] = useState(true);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  const [error, setError] = useState({});

  const handleFocusInput = () => setActiveText(false);

  const handleBlurInput = () => {
    setActiveText(true);
    setCount(value.length);
  };

  const handleChangeInput = (e) => {
    if (e.target.value.length >= MAX_LENGTH) {
      setError({ color: '#FF0000' })
    } else {
      setError({ color: '#ffffff' })
    }

    setValue(e.target.value);
    setCount(e.target.value.length);
  };

  const renderPlaceholder = () => {
    if (value || !activeText) return null;

    return (
      <p className={ styles.placeholder }>{ placeholder }</p>
    )
  }

  const renderCount = () => {
    return (
      <div className={ styles.count } style={ error }>
        { count }/100
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <textarea
        className={styles.input}
        onFocus={ handleFocusInput }
        onBlur={ handleBlurInput }
        onChange={ handleChangeInput }
        style={{ width, height }}
      >
      </textarea>
      { renderPlaceholder() }
      { renderCount() }
    </div>
  )
}

export default Textarea
