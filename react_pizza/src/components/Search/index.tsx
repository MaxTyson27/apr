import React from 'react'
import cn from './Search.module.scss'
import debounce from 'lodash.debounce';
import closeIcon from '../../assets/img/close.svg';
import { setSearchValue } from '../../redux/slices/filter/slice';
import { useDispatch } from 'react-redux';

const Search: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const [value, setValue] = React.useState<string>('')

  const handleResetInput = () => {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current?.focus()
  }
  const updateSearchInput = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str))
    }, 1000), []
  )
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchInput(e.target.value)
  }

  return (
    <div className={cn.root}>
      <input className={cn.input} ref={inputRef} value={value} onChange={(e) => handleInput(e)} type="text" placeholder='Поиск пиццы...' />
      {value && <img className={cn.reset} src={closeIcon} onClick={handleResetInput} alt="close" />}
    </div>
  )
}

export default Search