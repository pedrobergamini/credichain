import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Footer from '~/components/Footer';

import history from './services/history';

import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

export default function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
      <Footer />
    </>
  );
}
