import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { deleteBooking, getAllBookings } from '../services/bookingService';
import AdminContext from '../context/AdminContext';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);

  useEffect(() => {
    if (bookings.length > 0) return;
    setIsLoadingBookings(true);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchBookings();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchBookings = async () => {
    try {
      const fetchedBookings = await getAllBookings();
      setBookings(fetchedBookings);
      setIsLoadingBookings(false);
    } catch (error) {
      console.error('Error fetching all bookings:', error);
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      await deleteBooking(id);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

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
