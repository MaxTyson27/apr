import axios from 'axios';
import { makeAutoObservable } from "mobx"

import { GenericUsercResponse, IUser } from "./types"
import { GET_USER, GET_USERS } from '../api/routes';


 class Users {
  users: IUser[] | null = null
  user: IUser = {
    address: {
      city: '',
      geo: {
        lat: '',
        lng: '',
      },
      street: '',
      suite: '',
      zipcode: '',
    },
    company: {
      bs: '',
      catchPhrase: '',
      name: '',
    },
    email: '',
    id: 0,
    name: '',
    phone: '',
    username: '',
    website: '',
  }

  constructor() {
      makeAutoObservable(this)
  }

  setUsers = (data: IUser[]) => {
    this.users = data;
  }

  getUsers = async () => {
    try {
      const { data }: GenericUsercResponse<IUser[]> = await axios.get(GET_USERS);

      this.setUsers(data);
    } catch (e) {
      console.log(e);
    }
  }

  getUser = async (id: string) => {
    try {
      const { data }: GenericUsercResponse<IUser> = await axios.get(GET_USER(id));

      this.user = data;
    } catch (e) {
      console.log(e);
    }
  }
}

const usersStore = new Users();

export { usersStore };