import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { availableTables } from '../utils/restaurant.config';
import GlobalContext from '../context/GlobalContext';
import FormBookingInfo from './FormBookingInfo';
import FormGuestInfo from './FormGuestInfo';
import Gdpr from './Gdpr';

const BookingForm = ({ booking, id }) => {
  const {
    bookings,
    bookingMessage,
    setBookingMessage,

    isLoading,
    setIsLoading,
    isLoadingForm,

    handleUpdateBooking,
    handleCreateBooking,
  } = useContext(GlobalContext);
  const [formData, setFormData] = useState(
    booking || {
      numberOfGuests: '',
      name: { name: '', email: '', tel: '' },
      date: '',
      time: '',
    }
  );
  const [sittings, setSittings] = useState({});
  const locationPath = useLocation().pathname;

  useEffect(() => {
    console.log('message');

    const timer = setTimeout(() => {
      setBookingMessage('');
    }, 5000);

    return () => clearTimeout(timer);
  }, [bookingMessage, setBookingMessage]);

  useEffect(() => {
    const checkSittings = async () => {
      const bookedSittings = {};

      bookings.forEach((booking) => {
        bookedSittings[booking.date] = bookedSittings[booking.date] || {
          one: availableTables,
          two: availableTables,
        };

        Number(booking.time) === 1
          ? (bookedSittings[booking.date].one -= 1)
          : (bookedSittings[booking.date].two -= 1);

        bookedSittings[booking.date].total =
          bookedSittings[booking.date].one + bookedSittings[booking.date].two;
      });

      setSittings(bookedSittings);
    };
    checkSittings();
  }, [bookings]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (booking) {
      handleUpdateBooking(id, formData);
    } else {
      handleCreateBooking(formData, setFormData);
    }
  };

  return (
    <>
      {isLoadingForm ? (
        <div className="center-content">
          <div className="loading-spinner big-spinner"></div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormBookingInfo
            handleChange={handleChange}
            formData={formData}
            sittings={sittings}
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

            {locationPath.includes('admin') && (
              <Link to={'/admin'}>
                <button type="button">Tillbaka</button>
              </Link>
            )}
          </div>

          <div className="button-container">
            {isLoading && <div className="loading-spinner"></div>}
          </div>
          {bookingMessage && (
            <p className="booking-message">{bookingMessage}</p>
          )}
        </form>
      )}
    </>
  );
};

export default BookingForm;
