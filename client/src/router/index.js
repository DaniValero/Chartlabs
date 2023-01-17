import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from '../pages/root';
import Home from '../pages/Home';
import Login from '../pages/Login'
import News from '../pages/Noticias'
import NoticiaD from '../pages/NoticiaD';
import Logout from "../pages/Logout";
import Registro from '../pages/Registro'

import ProtectedRoute from "../utils/ProtectedRoute";


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
        path: "/noticias",
        element: <News />,
      },
      {
        path: "/noticias/:id_noticia",
        element: <NoticiaD />,
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute isAllowed={"isNotAuth"}>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: "/registro",
        element: (
          <ProtectedRoute isAllowed={"isNotAuth"}>
            <Registro />
          </ProtectedRoute>
        ),
      },
      {
        path: "/logout",
        element: (
          <ProtectedRoute isAllowed={"isAuth"}>
            <Logout />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;