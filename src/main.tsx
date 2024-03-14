import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './pages/Home.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/solicitation/:id",
    element: <Error />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
