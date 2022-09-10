import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//#region TOKEN #
const token = {
    set(token) {
        const AUTH_TOKEN = `Bearer ${token}`;
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    },
    unset() {
        axios.defaults.headers.common['Authorization'] = null;
    }
};
//#endregion #

//#region USER #
/**
 * @param {  "name": "Adrian Cross", "email": "across@mail.com",   "password": "examplepassword"} user
 * @returns 
 */
export async function addUser(user) { 
    const { data } = await axios.post('/users/signup', user);
    console.log(data.token);
    token.set(data.token);
    return data;
};

export async function logIn(user) { 
    const { data } = await axios.post('/users/login', user);
    console.log(data.token);
    token.set(data.token);
    return data;
};

export async function logOut(storeToken) {
    storeToken && token.set(storeToken);
    const { data } =  axios.post('/users/logout');
    token.unset();
    return data;
};

//#endregion #