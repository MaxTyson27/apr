type IMainLinkRoute = '/';

const GET_USERS = 'https://jsonplaceholder.typicode.com/users';
const GET_USER = (id: string) => `https://jsonplaceholder.typicode.com/users/${id}`;

const PROFILE_LINK_ROUTE = (id: number) => `/profile/${id}`;
const MAIN_LINK_ROUTE: IMainLinkRoute = '/';

export { GET_USERS, GET_USER, PROFILE_LINK_ROUTE, MAIN_LINK_ROUTE };