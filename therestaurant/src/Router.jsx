import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import BaseLayout from './pages/BaseLayout';
import AdminPage from './pages/admin/AdminPage';
import AdminOverviewPage from './pages/admin/AdminOverviewPage';
import AdminCreatePage from './pages/admin/AdminCreatePage';
import AdminEditPage from './pages/admin/AdminEditPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
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
