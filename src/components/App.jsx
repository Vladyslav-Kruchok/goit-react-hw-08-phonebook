import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { Snippet } from './Snippet/Snippet';

import { PhonebookView } from '../views/PhonebookView';

const LayoutView = lazy(() => import('views/LayoutView.jsx' /* webpackChunkName: "LayoutView" */));

const HomeView = lazy(() => import('views/HomeView.jsx' /* webpackChunkName: "HomeView" */));
const RegisterView = lazy(() => import('views/RegisterView.jsx' /* webpackChunkName: "RegisterView" */));
const LoginView = lazy(() => import('views/LoginView.jsx' /* webpackChunkName: "LoginView" */));

const NotFoundView = lazy(() => import('views/NotFoundView.jsx' /* webpackChunkName: "NotFound" */));


export const App = () => {
  const dispatch = useDispatch();
  //store
  const auth = useSelector(authSelectors.auth);
  
  useEffect(() => {
    if (!auth.token) {
      return;
    }  
    dispatch(authOperations.axiosGetUserInfo(auth.token));
  }, [dispatch, auth.token]);
  
  return (
    <Suspense fallback={<Snippet />}>
      <Routes>
        <Route path="/" element={
          <LayoutView />
        }>
          <Route path="goit-react-hw-08-phonebook" element={
            <Navigate to="/" replace/>
          } />
          <Route index element={
            <HomeView />
          } />
          {/* PUBLIC */}
          <Route path="/register" element={
            !auth.isLogIn ? <RegisterView /> : <Navigate to="/contacts" replace/>
          } />
          {/* PUBLIC */}
          <Route path="/login" element={
            !auth.isLogIn ? <LoginView /> : <Navigate to="/contacts" replace/>
          } />
          {/* PRIVATE */}
          <Route path="/contacts" element={
            auth.isLogIn ? <PhonebookView /> : <LoginView/>
          } />
          {/* PUBLIC */}
          <Route path="*" element={
            <NotFoundView />
          } />
        </Route>
      </Routes>
    </Suspense>
  );
};