import { useEffect, useState } from 'react';
import { getAllBookings } from '../services/bookingService';
import bookableDates from '../utils/bookableDates';

const FormBookingInfo = ({ handleChange, formData }) => {
  const [sittings, setSittings] = useState({});
  const [sittingOne, setSittingOne] = useState(true);
  const [sittingTwo, setSittingTwo] = useState(true);

  useEffect(() => {
    checkSittings();
  }, []);

  const checkSittings = async () => {
    const list = await getAllBookings();
    const countSittings = {};

    list.forEach((item) => {
      countSittings[item.date] = countSittings[item.date] || { one: 0, two: 0 };

      Number(item.time) === 1
        ? (countSittings[item.date].one += 1)
        : (countSittings[item.date].two += 1);
    });

    setSittings(countSittings);
  };

  const checkDate = (date) => {
    setSittingOne(true);
    setSittingTwo(true);

    if (date) {
      const currentDate = sittings[date];

      if (currentDate) {
        console.log(currentDate);

        currentDate.one < 1 ? setSittingOne(true) : setSittingOne(false);

        currentDate.two < 1 ? setSittingTwo(true) : setSittingTwo(false);

        currentDate.one >= 1 && currentDate.two >= 1
          ? console.warn('date: full')
          : console.log('date: bookable');
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
          {sittingOne && (
            <option value="1">Sitting 1 (Kl. 18:00 - 20:00)</option>
          )}
          {sittingTwo && (
            <option value="2">Sitting 2 (Kl. 21:00 - 23:00)</option>
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
