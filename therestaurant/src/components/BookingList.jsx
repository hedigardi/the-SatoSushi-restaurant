import { Link } from 'react-router-dom';

const BookingList = ({ bookings, handleDeleteBooking }) => {
  return (
    <ul>
      {bookings.map((booking) => {
        let { id, numberOfGuests: guests, name: person, date, time } = booking;
        id = Number(id);
        guests = Number(guests);
        person = JSON.parse(person);
        time = Number(time);

        return (
          <li key={id}>
            <span>Guests: {guests}</span>
            <br />

            <span>Name: {person.name}</span>
            <br />

            <span>E-mail: {person.email}</span>
            <br />

            <span>Tel: {person.tel}</span>
            <br />

            <span>Date: {date}</span>
            <br />

            <span>Time: {time === 1 ? '18:00 - 20:00' : '21:00 - 23:00'}</span>
            <br />

            <Link to={'/admin/' + id}>
              <button>Edit</button>
            </Link>

            <button
              onClick={() => {
                handleDeleteBooking(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BookingList;
