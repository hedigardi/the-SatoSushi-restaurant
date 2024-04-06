import { useState, useEffect } from 'react';
import {
  getBookings,
  deleteBooking,
  updateBooking,
  createBooking,
} from '../services/bookingService';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Booking from '../model/Booking';
import AdminOverview from './AdminOverview';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const fetchedBookings = await getBookings();
      setBookings(fetchedBookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  console.log(bookings);

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

  const handleDeleteBooking = async (id) => {
    try {
      await deleteBooking(id);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
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
          2,
          { name: 'hej', email: 'nej@n.n', tel: '0123654789' },
          '2024-04-06',
          21
        )
      );
      fetchBookings();
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div>
      <h2>Admin Page</h2>

      {useLocation().pathname === '/admin' ? (
        <AdminOverview
          bookings={bookings}
          handleCreateBooking={handleCreateBooking}
        />
      ) : (
        <Outlet />
      )}

      {/* <Link to="/CreateBooking">Create New Booking</Link>
      <BookingList
        bookings={bookings}
        handleEditBooking={() => {}}
        handleDeleteBooking={() => {}}
      />
      {selectedBooking && (
        <BookingForm
          booking={selectedBooking}
          handleSaveBooking={() => {}}
        />
      )} */}
    </div>
  );
};

export default AdminPage;
