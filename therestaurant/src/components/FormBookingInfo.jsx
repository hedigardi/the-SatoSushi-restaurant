import bookableDates from '../utils/bookableDates';

const FormBookingInfo = ({ handleChange, formData }) => {
  return (
    <div>
      <label>
        Datum:{' '}
        <select
          name="date"
          onChange={handleChange}
          value={formData.date}
        >
          <option value="">-- Välj ett datum --</option>
          {bookableDates.map((date, index) => (
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
          <option value="">-- Välj en sittning --</option>
          <option value="1">Sitting 1 (Kl. 18:00 - 20:00)</option>
          <option value="2">Sitting 2 (Kl. 21:00 - 23:00)</option>
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
