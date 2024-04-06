import React from 'react';
import BookingForm from '../components/BookingForm';
import { createBooking } from '../services/bookingService';

const BookingPage = () => {
  const handleSaveBooking = async (formData) => {
    try {
      await createBooking(formData);
      console.log('Booking created successfully!');
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <section>
      <header>
        <h2>Boka Tid</h2>
      </header>

      <BookingForm handleSaveBooking={handleSaveBooking} />
    </section>
  );
};

export default BookingPage;
