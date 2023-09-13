interface GenericUsercResponse<Type> {
  data: Type,
  config: ICongigResponse,
}

interface ICongigResponse {
  adapter: string,
  data: any | null,
  env: {
    Blob: () => void,
    FormData: () => void,
  },
  headers: {
    Accept: 'application/json, text/plain, */*',
    ['Content-Type']: null | any,
  },
  maxBodyLength: number,
  maxContentLength: number,
  method: 'get',
  timeout: number,
  status: STATUS.SUCCESS | STATUS.NOT_FOUND | STATUS.EROR,
  statusText: string,
}

enum STATUS {
  SUCCESS = '200',
  NOT_FOUND = '404',
  EROR = '500',
}

interface IUser {
  address: IUserAdress,
  company: IUserCompany,
  email: string,
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
}

interface IUserCompany {
  bs: string,
  catchPhrase: string,
  name: string,
}

interface IUserAdress {
  city: string,
  geo: IUserGeo,
  street: string,
  suite: string,
  zipcode: string,
}

interface IUserGeo {
  lat: string,
  lng: string,
}

export type { GenericUsercResponse, IUser };