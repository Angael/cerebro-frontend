import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './home/Home';
import UploadPage from './upload/UploadPage';
import NotFound from './NotFound';
import Browse from './browse/Browse';
import Login from './login/Login';
import ViewItem from './view-item/ViewItem';
import ImportPage from './import/ImportPage';

interface IProps {}

const Router = (props: IProps) => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/item/:id',
      element: <ViewItem />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/import',
      element: <ImportPage />,
    },
    {
      path: '/upload',
      element: <UploadPage />,
    },
    { path: '*', element: <NotFound /> },
  ]);
};

export default Router;
