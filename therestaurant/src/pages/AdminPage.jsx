import React, { useState, useEffect } from 'react';
import { getBookings, deleteBooking, updateBooking, createBooking } from '../services/bookingService';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

const AdminPage = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    // Hämtar alla aktiva bokningar när komponenten mountas
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
  };

  return (
    <div>
      <h2>Admin Page</h2>
      <Link to="/CreateBooking">Create New Booking</Link>
      <BookingList bookings={bookings} handleEditBooking={handleEditBooking} handleDeleteBooking={handleDeleteBooking} />
      {selectedBooking && (
        <BookingForm booking={selectedBooking} handleSaveBooking={handleSaveBooking} />
      )}
    </div>
  );
};

export default AdminPage;
