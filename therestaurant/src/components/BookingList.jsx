const BookingList = ({ bookings, handleEditBooking, handleDeleteBooking }) => {
  return (
    <ul>
      {bookings.map((booking) => (
        <li key={booking.id}>
          {booking.name} - {booking.date} - {booking.time}{' '}
          <button onClick={() => handleEditBooking(booking)}>Edit</button>
          <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookingList;
