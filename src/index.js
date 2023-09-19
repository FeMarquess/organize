import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home'
import ToDo from './Pages/ToDo/ToDo'


const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "ToDo",
      element: <ToDo />,
    }
  ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
