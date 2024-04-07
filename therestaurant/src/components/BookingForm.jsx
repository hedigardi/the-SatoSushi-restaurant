import { useState, useEffect } from 'react';
import { createBooking, updateBooking } from '../services/bookingService';
import FormBookingInfo from './FormBookingInfo';
import FormGuestInfo from './FormGuestInfo';
import Gdpr from './Gdpr';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const BookingForm = ({ booking, id }) => {
  const [formData, setFormData] = useState(
    booking || {
      numberOfGuests: '',
      name: { name: '', email: '', tel: '' },
      date: '',
      time: '',
    }
  );
  const [bookingMessage, setBookingMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBookingMessage(''); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [bookingMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' || name === 'email' || name === 'tel') {
      setFormData({
        ...formData,
        name: { ...formData.name, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCreateBooking = async (formData) => {
    try {
      await createBooking(formData);
      setBookingMessage('Tack! Din bokning är skapad!');

      setFormData({
        numberOfGuests: '',
        name: { name: '', email: '', tel: '' },
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('Fel vid skapande av bokning:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateBooking = async (id, formData) => {
    try {
      await updateBooking(id, formData);
      setBookingMessage('Updatering av bokning genomfört!');
    } catch (error) {
      console.error('Fel vid updatering av bokning:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (booking) {
      handleUpdateBooking(id, formData);
    } else {
      handleCreateBooking(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormBookingInfo
        handleChange={handleChange}
        formData={formData}
      />

      <FormGuestInfo
        handleChange={handleChange}
        formData={formData}
      />

      <div>
        {booking ? (
          <button type="submit">Updatera</button>
        ) : (
          <>
            <Gdpr />
            <button type="submit">Boka</button>
          </>
        )}

        {useLocation().pathname.includes('admin') && (
          <Link to={'/admin'}>
            <button type="button">Tillbaka</button>
          </Link>
        )}
      </div>

      <div className="button-container">
        <button>Boka</button>
        {isLoading && <div className="loading-spinner"></div>}
      </div>
      {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
    </form>
  );
};

export default BookingForm;
