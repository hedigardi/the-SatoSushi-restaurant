import { Outlet, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <h1>Home/About Us</h1>,
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
        element: <h1>Admin</h1>,
      },
    ],
  },
]);
