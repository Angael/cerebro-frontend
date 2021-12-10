import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Router from './components/Router';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import Layout from './components/Layout';

import './store/firebase';

function App() {
  return (
    <ThemeConfig>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeConfig>
  );
}

export default App;
