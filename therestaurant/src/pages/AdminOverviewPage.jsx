import { useContext } from 'react';
import AdminContext from '../context/AdminContext';
import BookingList from '../components/BookingList';

const AdminOverviewPage = () => {
  const [bookings, handleCreateBooking, handleDeleteBooking] =
    useContext(AdminContext);

  return (
    <div>
      <BookingList
        bookings={bookings}
        handleDeleteBooking={handleDeleteBooking}
      />

      <button onClick={handleCreateBooking}>Create Dummy Booking</button>
    </div>
  );
};

export default AdminOverviewPage;
