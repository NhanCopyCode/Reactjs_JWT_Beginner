import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/UserPage.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/user',
                element: <UserPage />,
            },
        ],
    },
    {
        path: 'register',
        element: <RegisterPage />,
    },
    {
        path: 'login',
        element: <Login />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
