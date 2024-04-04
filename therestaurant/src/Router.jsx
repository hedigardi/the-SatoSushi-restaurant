import { Outlet, createBrowserRouter } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
// TODO: Ändra placeholder elementen med the korekta komponenterna.
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      {
        index: true,
        element: <h1>Home/About Us</h1>,
      },
      {
        path: '/menupage',
        element: <MenuPage />,
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
