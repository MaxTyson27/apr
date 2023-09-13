import { FC } from 'react'
import { IUserProps } from '../../types/types'

import { avatars } from '../../constants/avatars'

const UserContent: FC<IUserProps> = ({ address, company, name , id}) => {
  return (
    <div>
      <img src={ avatars[id] } alt="" />
      <h2>Имя: { name }</h2>
      <p>Группировка: { company.name }</p>
      <p>Город: { address.city }</p>
      <p>Улица: { address.street }</p>
    </div>
  )
}

export default UserContent
