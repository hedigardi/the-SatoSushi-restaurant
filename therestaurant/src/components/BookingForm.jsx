import React, { useState } from 'react';

const BookingForm = ({ booking, handleSaveBooking }) => {
  const [formData, setFormData] = useState(booking);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveBooking(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Booking Name" />
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="time" name="time" value={formData.time} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default BookingForm;
