import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Home from './routes/Home';
import Login from './routes/Login'
import News from './routes/Noticias'
import NoticiaD from './routes/NoticiaD';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root /> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registro",
        element: <Login />,
      },
      {
        path: "/noticias",
        element: <News />,
      },
      {
        path: "/noticias/:id_noticia",
        element: <NoticiaD />,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
