import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';

import styles from '../MainPage.module.sass'
import UserContent from '../../UserContent';
import { IUserProps } from '../../../types/types';

const User: FC<IUserProps> = ({ id, address, company, name }) => {

  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  }

  return (
    <NavLink to={ `/profile/${id}` } className={ styles.item }>
      <UserContent
        address={ address }
        company={ company }
        name={ name }
        id={ id }
      />
      <NavLink to={ `/profile/${id}` } onClick={ handleButtonClick } className={ styles.button }>Подробнее</NavLink>
    </NavLink>
  )
}

export default User
