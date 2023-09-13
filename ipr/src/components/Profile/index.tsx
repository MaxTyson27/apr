import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { usersStore } from '../../mobx/store';

import ProfileContent from './ProfileContent';
import YandexMap from './YandexMap';

import { MAIN_LINK_ROUTE } from '../../api/routes';

import styles from './Profile.module.sass';

const Profile = observer(() => {
  const { id: profileId } = useParams();
  const { user, getUser } = usersStore;

  useEffect(() => {
    if (profileId) getUser(profileId);
  }, [])

  return (
    <div className={ styles.root }> 
        <NavLink className={ styles.link } to={ MAIN_LINK_ROUTE }>На главную</NavLink>
        <div className={styles.row}>
          <ProfileContent
            user={ user }
          />
          <YandexMap
            geo={ user.address.geo }
          />
        </div>
    </div>
  )
});

export default Profile
