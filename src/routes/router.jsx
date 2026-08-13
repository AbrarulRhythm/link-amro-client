import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home,
            },
        ],
    },
]);
