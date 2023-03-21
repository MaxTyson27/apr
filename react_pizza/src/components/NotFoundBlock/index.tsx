import React from 'react'
import cn from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
  return (
    <div className="container">
      <div className={cn.inner}>
        <span>😕</span>
        <br />
        <h1>Ничего не найдено</h1>
      </div>
    </div>
  )
}

export default NotFoundBlock
