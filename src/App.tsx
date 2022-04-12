import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import Router from './components/Router';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import Layout from './components/Layout';

import './store/firebase';
import AnalyticsComponent from './components/analytics/AnalyticsComponent';

export const queryClient = new QueryClient();

function App() {
  return (
    <ThemeConfig>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
          <AnalyticsComponent />
        </BrowserRouter>
        <GlobalStyles />
      </QueryClientProvider>
    </ThemeConfig>
  );
}

export default App;
