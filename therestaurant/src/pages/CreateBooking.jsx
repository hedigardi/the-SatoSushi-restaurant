import React from 'react';
import BookingForm from '../components/BookingForm';
import { getAllBookings } from '../services/bookingService';

const CreateBooking = () => {
  const handleSaveBooking = async (formData) => {
    try {
      await getAllBookings(formData);
      console.log('Booking created successfully!');
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <section>
      <header>
        <h2>Lägg till en ny bokning</h2>
      </header>

      <BookingForm handleSaveBooking={handleSaveBooking} />
    </section>
  );
};

export default CreateBooking;