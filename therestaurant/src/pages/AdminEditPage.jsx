import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import BookingForm from '../components/BookingForm';

const AdminEditPage = () => {
  const { fetchBooking } = useContext(GlobalContext);
  const { bookingId } = useParams();
  const [editBooking, setEditBooking] = useState();

  useEffect(() => {
    fetchBooking(bookingId, setEditBooking);
  }, []);

  return (
    <section>
      <header>
        <h3>Uppdatera en bokning</h3>
      </header>

      {editBooking ? (
        <BookingForm
          editBooking={editBooking}
          bookingId={bookingId}
        />
      ) : (
        <h3>404 Not Found</h3>
      )}
    </section>
  );
};

export default AdminEditPage;
