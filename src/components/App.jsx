import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Snippet } from './Snippet/Snippet';

import { PhonebookView } from '../views/PhonebookView';

const LayoutView = lazy(() => import('views/LayoutView.jsx' /* webpackChunkName: "LayoutView" */));

const HomeView = lazy(() => import('views/HomeView.jsx' /* webpackChunkName: "HomeView" */));
const RegisterView = lazy(() => import('views/RegisterView.jsx' /* webpackChunkName: "RegisterView" */));
const LoginView = lazy(() => import('views/LoginView.jsx' /* webpackChunkName: "LoginView" */));

const NotFoundView = lazy(() => import('views/NotFoundView.jsx' /* webpackChunkName: "NotFound" */));


export const App = () => {
    return(
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Snippet />}>
            <LayoutView />
          </Suspense>
        }>
          <Route path="goit-react-hw-08-phonebook" element={
            <NavLink to={"/"}>Back Home</NavLink>
          } />
          <Route index element={
            <Suspense fallback={<Snippet />}>
              <HomeView />
            </Suspense>
          } />
          {/* PUBLIC */}
          <Route path="/register" element={
            <Suspense fallback={<Snippet />}>
              <RegisterView />
            </Suspense>
          } />
          {/* PUBLIC */}
          <Route path="/login" element={
            <Suspense fallback={<Snippet />}>
              <LoginView />
            </Suspense>
          } />
          {/* PRIVATE */}
          <Route path="/contacts" element={
            <Suspense fallback={<Snippet />}>
              <PhonebookView />
            </Suspense>
          } />
          {/* PUBLIC */}
          <Route path="*" element={
            <Suspense fallback={<Snippet />}>
              <NotFoundView />
            </Suspense>
          } />
        </Route>
      </Routes>
    );
};