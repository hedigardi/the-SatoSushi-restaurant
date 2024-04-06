import { Link } from 'react-router-dom';

const AdminOverview = ({ bookings, handleCreateBooking }) => {
  return (
    <>
      <ul>
        {bookings.map((booking) => {
          let {
            id,
            numberOfGuests: guests,
            name: person,
            date,
            time,
          } = booking;
          id = Number(id);
          guests = Number(guests);
          person = JSON.parse(person);
          time = Number(time);

          return (
            <li key={id}>
              <span>Guests: {guests}</span>
              <span>Name: {person.name}</span>
              <span>E-mail: {person.email}</span>
              <span>Tel: {person.tel}</span>
              <span>Date: {date}</span>
              <span>
                Time: {time}:00 - {time + 2}:00
              </span>
              <Link to={'/admin/' + id}>Edit</Link>
            </li>
          );
        })}
      </ul>

      <button onClick={handleCreateBooking}>Create Dummy Booking</button>
    </>
  );
};

export default AdminOverview;
