import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
//#region USER #
/**
 * @param {  "name": "Adrian Cross", "email": "across@mail.com",   "password": "examplepassword"} user 
 * @returns 
 */
export async function addUser(user) { 
    const { data } = await axios.post('/users/signup', user);
    return data;
};

//#endregion #