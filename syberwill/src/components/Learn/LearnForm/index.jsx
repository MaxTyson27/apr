import React, { useState } from 'react'
import styles from '../Learn.module.sass'
import Input from '../../Input'
import Agreement from '../../Agreement'
import SendButton from '../../SendButton'


const LearnForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [checkobxValue, setCheckboxValue] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);

  const handleFrom = (e) => {
    e.preventDefault();

    if (inputValue.length < 2) {
      if (!checkobxValue) {
        setCheckboxError(true)
      } else {
        setCheckboxError(false);
      }

      return setInputError(true);

    } else if (!checkobxValue) {
      setInputError(false);

      return setCheckboxError(true);
    }

    setInputError(false);
    setCheckboxError(false);

    console.log('send!');
  }

  return (
    <form className={ styles.form } onSubmit={ handleFrom }>
      <Input 
        placeholder='Your name'
        value={ inputValue }
        setInputValue={ setInputValue }
        inputError={ inputError }
        setInputError={ setInputError }
      />
      <Input placeholder='Your email'/>
      <Input placeholder='Your phone'/>
      <div className={ styles.form_bottom }>
        <Agreement
          id='checkobx1'
          checkobxValue={ checkobxValue }
          setCheckboxValue={ setCheckboxValue }
          checkboxError={ checkboxError }
          setCheckboxError={ setCheckboxError }
        />
        <SendButton/>
      </div>
    </form>
  )
}

export default LearnForm
