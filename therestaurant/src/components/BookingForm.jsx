import { useState } from 'react';
import bookableDates from '../utils/bookableDates';

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label>
          Datum:{' '}
          <select>
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

        <label>
          Tid/Sittning:{' '}
          <select>
            <option value="">-- Välj en sittning --</option>
            <option value="">Sitting 1 (Kl. 18:00 - 20:00)</option>
            <option value="">Sitting 2 (Kl. 21:00 - 23:00)</option>
          </select>
        </label>

        <label>
          Antal Gäster:{' '}
          <select>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
            <option value="">6</option>
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
          />
        </label>

        <label>
          {' '}
          E-post:{' '}
          <input
            type="email"
            name="email"
            placeholder="Ange e-post adress"
          />
        </label>

        <label>
          {' '}
          Telefon:{' '}
          <input
            type="tel"
            name="tel"
            placeholder="Ange telefon-nummer"
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
