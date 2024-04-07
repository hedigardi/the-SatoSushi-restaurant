import { useState, useEffect } from 'react';
import {
  deleteBooking,
  updateBooking,
  createBooking,
  getAllBookings,
  getBooking,
} from '../services/bookingService';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Booking from '../model/Booking';
import AdminContext from '../context/AdminContext';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const fetchedBookings = await getAllBookings();
      setBookings(fetchedBookings);
    } catch (error) {
      console.error('Error fetching all bookings:', error);
    }
  };

  /*
  const handleEditBooking = (booking) => {
    setSelectedBooking(booking);
  };

  const handleSaveBooking = async (updatedBooking) => {
    try {
      await updateBooking(updatedBooking);
      fetchBookings();
      setSelectedBooking(null);
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  
  const handleCreateBooking = async (newBooking) => {
    try {
      await createBooking(newBooking);
      fetchBookings();
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  }; */

  const handleCreateBooking = async () => {
    try {
      await createBooking(
        new Booking(
          3,
          { name: 'Hig', email: 'you@n.n', tel: '0123654789' },
          '2024-04-14',
          1
        )
      );
      fetchBookings();
    } catch (error) {
      console.error('Error creating booking:', error);
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

      <AdminContext.Provider value={[bookings, handleDeleteBooking]}>
        <Outlet />
      </AdminContext.Provider>
    </div>
  );
};

export default AdminPage;
