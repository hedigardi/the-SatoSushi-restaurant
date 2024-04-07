import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import BaseLayout from './pages/BaseLayout';
import AdminPage from './pages/AdminPage';
import AdminOverviewPage from './pages/AdminOverviewPage';
import AdminCreatePage from './pages/AdminCreatePage';
import AdminEditPage from './pages/AdminEditPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
      },
      {
        path: '/booking',
        element: <BookingPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
        children: [
          {
            path: '/admin/',
            element: <AdminOverviewPage />,
          },
          {
            path: '/admin/create',
            element: <AdminCreatePage />,
          },
          {
            path: '/admin/:bookingId',
            element: <AdminEditPage />,
          },
        ],
      },
    ],
  },
]);
