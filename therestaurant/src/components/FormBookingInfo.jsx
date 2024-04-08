import { useEffect, useState } from 'react';
import { getAllBookings } from '../services/bookingService';
import bookableDates from '../utils/bookableDates';
import { availableTables } from '../utils/restaurant.config';

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

  const checkDate = (date) => {
    setSittingOne(true);
    setSittingTwo(true);
    setValidDate(null);

    if (date) {
      console.log(date);
      const currentSittings = sittings[date];

      if (currentSittings) {
        console.log(currentSittings);

        currentSittings.one > 0 ? setSittingOne(true) : setSittingOne(false);

        currentSittings.two > 0 ? setSittingTwo(true) : setSittingTwo(false);

        currentSittings.one <= 0 && currentSittings.two <= 0
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
      <p>{validDate && validDate}</p>
      <label>
        Datum:{' '}
        <select
          name="date"
          onChange={(e) => {
            handleChange(e);
            checkDate(e.target.value);
          }}
          value={formData.date}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity('Välj ett giltigt datum')
          }
          onInput={(e) => e.target.setCustomValidity('')}
        >
          <option value="">-- Välj ett datum --</option>
          {bookableDates().map((date, index) => (
            <option
              key={index}
              value={
                sittings[date] &&
                sittings[date].one <= 0 &&
                sittings[date].two <= 0
                  ? ''
                  : date
              }
            >
              {date}{' '}
              {sittings[date] &&
                sittings[date].one <= 0 &&
                sittings[date].two <= 0 &&
                '(Full bokat)'}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Tid/Sittning:{' '}
        <select
          name="time"
          onChange={handleChange}
          value={formData.time}
          required
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
          required
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
