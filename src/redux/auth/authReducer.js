import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as  authOperation from "./authOperation";

const entitiesUser = createReducer({}, {
    [authOperation.axiosAddUser.fulfilled]: (_, action) => action.payload.user,
    [authOperation.axiosLogIn.fulfilled]: (_, action) => action.payload.user,
    [authOperation.axiosGetUserInfo.fulfilled]: (_, action) => action.payload,
    [authOperation.axiosLogOut.fulfilled]: () => {
        return { name: '', email: '' };
    }
});

const token = createReducer(null, {
    [authOperation.axiosAddUser.fulfilled]: (_, action) => action.payload.token,
    [authOperation.axiosLogIn.fulfilled]: (_, action) => action.payload.token,
    [authOperation.axiosLogOut.fulfilled]: () => {
        return '';
    }
});

const isLogIn = createReducer(false, {
    [authOperation.axiosAddUser.fulfilled]: () => true,
    [authOperation.axiosLogIn.fulfilled]: () => true,
    [authOperation.axiosLogOut.fulfilled]: () => false,
    [authOperation.axiosGetUserInfo.fulfilled]: () => true,
});

export default combineReducers({
    entitiesUser,
    token,
    isLogIn
});
