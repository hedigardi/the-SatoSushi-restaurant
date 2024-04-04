import { Outlet, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

// TODO: Ändra "placeholder" elementen med de korrekta komponenterna.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <h1>Menu</h1>,
      },
      {
        path: '/booking',
        element: <h1>Booking</h1>,
      },
      {
        path: '/contact',
        element: <h1>Contact</h1>,
      },
      {
        path: '/admin',
        element: (
          <>
            <h1>Admin</h1>
            <Outlet />
          </>
        ),
        children: [
          {
            path: '/admin/create',
            element: <h2>Create Booking</h2>,
          },
          {
            path: '/admin/:bookingId',
            element: <h2>Edit Booking</h2>,
          },
        ],
      },
    ],
  },
]);
