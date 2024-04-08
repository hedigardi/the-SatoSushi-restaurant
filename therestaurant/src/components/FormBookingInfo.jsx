import { useEffect, useState } from 'react';
import { getAllBookings } from '../services/bookingService';
import bookableDates from '../utils/bookableDates';

const FormBookingInfo = ({ handleChange, formData }) => {
  const [sittings, setSittings] = useState({});
  const [sittingOne, setSittingOne] = useState(true);
  const [sittingTwo, setSittingTwo] = useState(true);
  const [validDate, setValidDate] = useState(null);

  useEffect(() => {
    checkSittings();
  }, []);

  const checkSittings = async () => {
    const bookings = await getAllBookings();
    const countSittings = {};

    bookings.forEach((booking) => {
      countSittings[booking.date] = countSittings[booking.date] || {
        one: 1,
        two: 1,
      };

      Number(booking.time) === 1
        ? (countSittings[booking.date].one -= 1)
        : (countSittings[booking.date].two -= 1);

      countSittings[booking.date].total =
        countSittings[booking.date].one + countSittings[booking.date].two;
    });

    setSittings(countSittings);
  };

  const checkDate = (date) => {
    setSittingOne(true);
    setSittingTwo(true);
    setValidDate(null);

    if (date) {
      const currentDate = sittings[date];

      if (currentDate) {
        console.log(currentDate);

        currentDate.one > 0 ? setSittingOne(true) : setSittingOne(false);

        currentDate.two > 0 ? setSittingTwo(true) : setSittingTwo(false);

        currentDate.one <= 0 && currentDate.two <= 0
          ? setValidDate('Full bokat för detta datumet!')
          : setValidDate(null);
      } else {
        console.log('no booking');
      }
    } else {
      console.warn('no date');
    }
  };

  return (
    <div>
      <label>
        Datum:{' '}
        <select
          name="date"
          onChange={(e) => {
            handleChange(e);
            checkDate(e.target.value);
          }}
          value={formData.date}
        >
          <option value="">-- Välj ett datum --</option>
          {bookableDates().map((date, index) => (
            <option
              key={index}
              value={date}
            >
              {date}
            </option>
          ))}
        </select>
        <span>{validDate && validDate}</span>
      </label>
      <br />

      <label>
        Tid/Sittning:{' '}
        <select
          name="time"
          onChange={handleChange}
          value={formData.time}
        >
          <option value="">
            {!sittingOne && !sittingTwo
              ? '-- Full bokat --'
              : '-- Välj en sittning --'}
          </option>
          {sittingOne ? (
            <option value="1">Sitting 1 (Kl. 18:00 - 20:00)</option>
          ) : (
            <option value="">Sitting 1 (Full bokat)</option>
          )}
          {sittingTwo ? (
            <option value="2">Sitting 2 (Kl. 21:00 - 23:00)</option>
          ) : (
            <option value="">Sitting 2 (Full bokat)</option>
          )}
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
          {[1, 2, 3, 4, 5, 6].map((number, index) => (
            <option
              key={index}
              value={number}
            >
              {number > 1 ? number + ' personer' : number + ' person'}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FormBookingInfo;
