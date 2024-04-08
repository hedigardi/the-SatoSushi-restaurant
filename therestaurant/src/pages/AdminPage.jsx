import { Outlet } from 'react-router-dom';
import AdminContext from '../context/AdminContext';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const AdminPage = () => {
  const [bookings, handleDeleteBooking, isLoadingBookings] =
    useContext(GlobalContext);

  return (
    <div>
      <h2>Admin Page</h2>

      <AdminContext.Provider
        value={[bookings, handleDeleteBooking, isLoadingBookings]}
      >
        <Outlet />
      </AdminContext.Provider>
    </div>
  );
};

export default AdminPage;
