import * as userAPI from '../../services/herokuApi';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const axiosAddUser = createAsyncThunk('auth/axiosAddUser', async (userData) => { 
    const user = await userAPI.addUser(userData);
    return user;
});

export const axiosLogIn = createAsyncThunk('auth/axiosLogIn', async (userData) => {
    const logIn = await userAPI.logIn(userData);
    return logIn;
});

export const axiosLogOut = createAsyncThunk('auth/axiosLogOut', async (storeToken) => {
    const logOut = await userAPI.logOut(storeToken);
    return logOut;
});