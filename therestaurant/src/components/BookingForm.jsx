import { useState } from 'react';
import bookableDates from '../utils/bookableDates';

const BookingForm = ({ booking, handleSaveBooking }) => {
  const [formData, setFormData] = useState(
    booking || {
      date: '',
      time: '',
      numberOfGuests: '',
      name: '',
      email: '',
      tel: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveBooking(formData);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label>
          Datum:{' '}
          <select
            name="date"
            onChange={handleChange}
            value={formData.date}
          >
            <option value="">-- Välj ett datum --</option>
            {bookableDates.map((date, index) => {
              return (
                <option
                  key={index}
                  value={date}
                >
                  {date}
                </option>
              );
            })}
          </select>
        </label>
        <br />

        <label>
          Tid/Sittning:{' '}
          <select
            name="time"
            onChange={handleChange}
            value={formData.time}
          >
            <option value="">-- Välj en sittning --</option>
            <option value="18">Sitting 1 (Kl. 18:00 - 20:00)</option>
            <option value="21">Sitting 2 (Kl. 21:00 - 23:00)</option>
          </select>
        </label>
        <br />

        <label>
          Antal Gäster:{' '}
          <select
            name="numberOfGuests"
            onChange={handleChange}
            value={formData.numberOfGuests}
          >
            <option value="">-- Välj antal gäster --</option>
            <option value="1">1 person</option>
            <option value="2">2 personer</option>
            <option value="3">3 personer</option>
            <option value="4">4 personer</option>
            <option value="5">5 personer</option>
            <option value="6">6 personer</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Namn:{' '}
          <input
            type="text"
            name="name"
            placeholder="Ange namn"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br />

        <label>
          E-post:{' '}
          <input
            type="email"
            name="email"
            placeholder="Ange e-post adress"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <br />

        <label>
          Telefon:{' '}
          <input
            type="tel"
            name="tel"
            placeholder="Ange telefon-nummer"
            onChange={handleChange}
            value={formData.tel}
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

      <button>Boka</button>
    </form>
  );
};

export default BookingForm;
