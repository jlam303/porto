import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Projects from './components/Projects';
import Training from './components/Training';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/training',
    element: <Training />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
