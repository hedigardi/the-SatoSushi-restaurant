import { useState } from 'react';
import bookableDates from '../utils/bookableDates';
import { createBooking } from '../services/bookingService';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    numberOfGuests: '',
    name: { name: '', email: '', tel: '' },
    date: '',
    time: '',
  });
  const [bookingMessage, setBookingMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Datum:{' '}
          <select name="date" onChange={handleChange} value={formData.date}>
            <option value="">-- Välj ett datum --</option>
            {bookableDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </label>

        <label>
          Tid/Sittning:{' '}
          <select name="time" onChange={handleChange} value={formData.time}>
            <option value="">-- Välj en sittning --</option>
            <option value="1">Sitting 1 (Kl. 18:00 - 20:00)</option>
            <option value="2">Sitting 2 (Kl. 21:00 - 23:00)</option>
          </select>
        </label>

        <label>
          Antal Gäster:{' '}
          <select name="numberOfGuests" onChange={handleChange} value={formData.numberOfGuests}>
            <option value="">-- Välj antal gäster --</option>
            {[1, 2, 3, 4, 5, 6].map((number, index) => (
              <option key={index} value={number}>
                {number}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label>
          {' '}
          Namn:{' '}
          <input
            type="text"
            name="name"
            placeholder="Ange namn"
            onChange={handleChange}
            value={formData.name.name}
          />
        </label>

        <label>
          {' '}
          E-post:{' '}
          <input
            type="email"
            name="email"
            placeholder="Ange e-post adress"
            onChange={handleChange}
            value={formData.name.email}
          />
        </label>

        <label>
          {' '}
          Telefon:{' '}
          <input
            type="tel"
            name="tel"
            placeholder="Ange telefon-nummer"
            onChange={handleChange}
            value={formData.name.tel}
          />
        </label>
      </div>

      <div>
        <span>
          <input type="checkbox" /> Jag har läst och samtycker till GDPR och
          samtliga villkor.{' '}
          <a href="">Tryck här för att få mer information om GDPR.</a>
        </span>
      </div>

      <div className="button-container">
        <button>Boka</button>
        {isLoading && <div className="loading-spinner"></div>}
      </div>
      {bookingMessage && <p>{bookingMessage}</p>}
    </form>
  );
};

export default BookingForm;

