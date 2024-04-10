import { useEffect, useState } from 'react';
import bookableDates from '../utils/bookableDates';

const FormBookingInfo = ({ handleChange, formData, sittings }) => {
  const [sittingOne, setSittingOne] = useState(true);
  const [sittingTwo, setSittingTwo] = useState(true);

  const validateActiveSittings = (date) => {
    setSittingOne(true);
    setSittingTwo(true);

    if (date) {
      console.info(date);
      const currentSittings = sittings[date];

      if (currentSittings) {
        console.info(currentSittings);

        currentSittings.one > 0 ? setSittingOne(true) : setSittingOne(false);

        currentSittings.two > 0 ? setSittingTwo(true) : setSittingTwo(false);
      } else {
        console.info('no booking');
      }
    } else {
      console.warn('no date');
    }
  };

  useEffect(() => {
    if (!formData.date) return;
    validateActiveSittings(formData.date);
  });

  return (
    <div>
      <label>
        Datum:{' '}
        <select
          name="date"
          onChange={(e) => {
            handleChange(e);
            validateActiveSittings(e.target.value);
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
              {date}
              {sittings[date] &&
                sittings[date].one <= 0 &&
                sittings[date].two <= 0 &&
                ' (Full bokat)'}
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
          onInvalid={(e) => e.target.setCustomValidity('Välj en giltigt tid')}
          onInput={(e) => e.target.setCustomValidity('')}
        >
          <option value="">
            {!sittingOne && !sittingTwo
              ? '-- Full bokat --'
              : '-- Välj en sittning --'}
          </option>

          <option value={sittingOne ? 1 : ''}>
            Sitting 1 ({sittingOne ? 'Kl. 18:00 - 20:00' : 'Full bokat'})
          </option>

          <option value={sittingTwo ? 2 : ''}>
            Sitting 2 ({sittingTwo ? 'Kl. 21:00 - 23:00' : 'Full bokat'})
          </option>
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
          onInvalid={(e) => e.target.setCustomValidity('Välj antal personer')}
          onInput={(e) => e.target.setCustomValidity('')}
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
