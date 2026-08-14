import { createBrowserRouter } from 'react-router';
import LandingLayout from '../layout/LandingLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home/Home';
import MainLayout from '../layout/MainLayout';
import MyLinks from '../pages/Links/MyLinks/MyLinks';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: LandingLayout,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                Component: Home,
            },
        ],
    },
    // Links Layout
    {
        path: 'links',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: 'mylinks',
                Component: MyLinks,
            },
        ],
    },
]);
