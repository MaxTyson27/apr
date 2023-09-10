import React, { useState } from 'react'
import './sass/main.sass'
import Solution from './components/Solution'
import BottomContent from './components/BottomContent'
import Popup from './components/Popup'

const App = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className='wrapper'>
      <Solution/>
      <BottomContent setPopup={ setPopup }/>
      { popup && <Popup setPopup={ setPopup }/>}
    </div>
  )
}

export default App
