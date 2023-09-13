import { IUser } from '../../../mobx/types';
import UserContent from '../../UserContent';

import styles from '../Profile.module.sass';

interface ProfileContentProps {
  user: IUser
}

const ProfileContent = ({ user }: ProfileContentProps) => {
  const {
    address,
    company,
    name,
    id,
    company: {
      catchPhrase,
    },
    email,
    phone,
    username,
    website,
  } = user;

  return (
    <div className={styles.profile}>
      <UserContent
        id={ id }
        address={ address }
        company={ company }
        name={ name }
      />
      <p>Слоган: <span>{ catchPhrase }</span></p>
      <p>Почта: { email }</p>
      <p>Телефон: { phone }</p>
      <p>Псевдоним: { username }</p>
      <p>Сайт: { website }</p>
    </div>
  )
}

export default ProfileContent
