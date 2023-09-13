import { observer } from 'mobx-react-lite'
import React, { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import { usersStore } from '../../mobx/store';
import { PROFILE_LINK_ROUTE } from '../../api/routes';

import UserContent from '../UserContent';

import styles from './MainPage.module.sass';

const MainPage: FC = observer(() => {
  const { getUsers, users } = usersStore;

  useEffect(() => {
    getUsers();
  }, []);

  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  }

  const usersElements = users && users.map(({ id, address, company, name }) => {
    return (
      <NavLink to={ PROFILE_LINK_ROUTE(id) } key={ id } className={ styles.item }>
        <UserContent
          key={ id }
          address={ address }
          company={ company }
          name={ name }
          id={ id }
        />
        <NavLink to={ PROFILE_LINK_ROUTE(id) } onClick={ handleButtonClick } className={ styles.button }>Подробнее</NavLink>
      </NavLink>
    );
  });

  return (
    <div className={ styles.root }>
      <h1>Разыскиваемые преступники</h1>
      <div className={ styles.inner }>
        { usersElements }
      </div>
    </div>
  )
});

export default MainPage
