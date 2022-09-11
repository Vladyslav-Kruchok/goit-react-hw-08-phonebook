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
    }
};
//#endregion #

export async function getContacts() { 
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact(contacts, storeToken) {
    axiosInit();
    storeToken && token.set(storeToken);
    const { data } = await axios.post(`/contacts/`, contacts);
    return data;
};

export async function delContact(contactId) { 
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
};

export async function findContact(filter) { 
    const { data } = await axios.get(`/contacts?filter=${filter}`);
    return data;
};