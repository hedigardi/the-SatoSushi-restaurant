import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const BookingList = () => {
  const { bookings, handleDeleteBooking } = useContext(GlobalContext);

  return (
    <ul className="booking-ul">
      {bookings.map((booking) => {
        let { id, numberOfGuests: guests, name: person, date, time } = booking;
        id = Number(id);
        guests = Number(guests);
        person = JSON.parse(person);
        time = Number(time);

        return (
          <li
            key={id}
            className="booking-admin"
          >
            <div key={id}>
              <div className="admin-wrapper">
                <span className="admin-text admin-break-word">
                  Antal Gäster:{' '}
                </span>
                <span className="admin-separator"></span>
                <span className="admin-break-word">{guests}</span>
              </div>

              <div className="admin-wrapper">
                <span className="admin-text">Namn: </span>
                <span className="admin-separator"></span>
                <span className="admin-break-word">{person.name}</span>
              </div>

              <div className="admin-wrapper">
                <span className="admin-text admin-break-word">E-post: </span>
                <span className="admin-separator"></span>
                <span className="admin-break-word">{person.email}</span>
              </div>

              <div className="admin-wrapper">
                <span className="admin-text admin-break-word">Telefon: </span>
                <span className="admin-separator"></span>
                <span className="admin-break-word">{person.tel}</span>
              </div>

              <div className="admin-wrapper">
                <span className="admin-text admin-break-word">Datum: </span>
                <span className="admin-separator"></span>
                <span className="admin-break-word">{date}</span>
              </div>

              <div className="admin-wrapper">
                <span className="admin-text admin-break-word">
                  Tid/Sittning:{' '}
                </span>
                <span className="admin-separator"></span>
                <span className="admin-break-word">
                  {time === 1 ? '18:00-20:00' : '21:00-23:00'}
                </span>
              </div>

              <Link to={'/admin/' + id}>
                <button>Redigera</button>
              </Link>

              <button
                onClick={() => {
                  handleDeleteBooking(id);
                }}
              >
                Tabort
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookingList;
