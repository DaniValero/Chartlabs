import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from '../pages/root';
import Home from '../pages/Home';
import Login from '../pages/Login'
import News from '../pages/Noticias'
import NoticiaD from '../pages/NoticiaD';
import Logout from "../pages/Logout";

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
        path: "/login",
        element: (
          <ProtectedRoute isAllowed={"isNotAuth"}>
            <Login />
          </ProtectedRoute>
        ),
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

export default router