import { useContext } from 'react';
import AdminContext from '../context/AdminContext';
import BookingList from '../components/BookingList';
import { Link } from 'react-router-dom';

const AdminOverviewPage = () => {
  const [bookings, handleDeleteBooking] = useContext(AdminContext);

  return (
    <div>
      <BookingList
        bookings={bookings}
        handleDeleteBooking={handleDeleteBooking}
      />

      <Link to={'/admin/create'}>
        <button>Skapa ny bokning</button>
      </Link>
    </div>
  );
};

export default AdminOverviewPage;
