import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home/Home.jsx';
import MainProfile from './components/MainProfile/MainProfile.jsx';
import Auth from './Layout/Auth/Auth.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Auth></Auth>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/profile",
        element: <MainProfile></MainProfile>,
      },
      // {
      //   path: "/auth",
      //   element: <Auth></Auth>
      // }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
