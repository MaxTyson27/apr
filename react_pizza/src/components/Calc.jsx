import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plus, minus, multiply, divide } from '../redux/slices/calcSlice'
const Calc = () => {
  const result = useSelector(state => state.calc.result)
  const dispatch = useDispatch()
  const [leftInputValue, setLeftInputValue] = useState(0)
  const [rightInputValue, setRightInputValue] = useState(0)

  return (
    <>
      <div className='calc'>
        <input
          value={leftInputValue}
          onChange={({ target }) => setLeftInputValue(target.value)} className='calc__input'
          type="number"
        />
        <button
          onClick={() => dispatch(plus({ leftInputValue, rightInputValue }))}
          className='calc__btn'>+</button>
        <button
          onClick={() => dispatch(minus({ leftInputValue, rightInputValue }))}
          className='calc__btn'>-</button>
        <button
          onClick={() => dispatch(multiply({ leftInputValue, rightInputValue }))}
          className='calc__btn'>*</button>
        <button
          onClick={() => dispatch(divide({ leftInputValue, rightInputValue }))}
          className='calc__btn'>/</button>
        <input
          value={rightInputValue}
          onChange={({ target }) => setRightInputValue(target.value)}
          className='calc__input'
          type="number"
        />
      </div>
      <span className='calc__res'>{result}</span>
    </>
  )
}

export default Calc
