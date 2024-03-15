import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import SolicitationsPage from './pages/Solicitations.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error.tsx';
import Users from './components/UsersTable.tsx';

const router = createBrowserRouter([
  {
    path: "/solicitations",
    element: <SolicitationsPage />,
    errorElement: <Error />,
    
  },
  {
    path: "/solicitation/:id",
    element: <SolicitationsPage />,
    errorElement: <Error />,
  },
  {
    path: "/users",
    element: <Users />,
    errorElement: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
