interface IUserProps {
  address: IUserAdress,
  company: {
    name: string,
  },
  name: string,
  id: number,
}

interface IUserAdress {
  city: string,
  street: string,
}

export type { IUserProps };