import axios from 'axios';

const axiosInit = () => {
    axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
}


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
    axiosInit();
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    return data;
};

export async function logIn(user) {
    axiosInit();
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
};

export async function logOut(storeToken) {
    axiosInit();
    storeToken && token.set(storeToken);
    const { data } =  await axios.post('/users/logout');
    token.unset();
    return data;
};

export async function getUserInfo(storeToken) {
    axiosInit();
    storeToken && token.set(storeToken);
    const { data } = await axios.get('/users/current');
    return data;
}

//#endregion #


/**
    * name: Emma Bond
    * email: masijy@mailinator.com
    * password: Pa$$w0rd!
    
    * name: Dominique Watson
    * email: ziwifokezo@mailinator.com
    * password: Pa$$w0rd!
    * 
    * name: Domini Wat
    * email: domini.wat@mailinator.com
    * password: Pa$$w0rd!Dom
    * 
    * no reg
    * name: Vladyslav Go
    * email: vladyslav.go@gmail.com
    * password: Pa$$w0rd!
 */
