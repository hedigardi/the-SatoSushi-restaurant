import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBooking } from '../services/bookingService';
import BookingForm from '../components/BookingForm';

const AdminEditPage = () => {
  const { bookingId } = useParams();
  const [editBooking, setEditBooking] = useState();

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const fetchedBooking = await getBooking(bookingId);

      setEditBooking({
        date: fetchedBooking.date,
        time: Number(fetchedBooking.time),
        numberOfGuests: Number(fetchedBooking.numberOfGuests),
        name: {
          name: JSON.parse(fetchedBooking.name).name,
          email: JSON.parse(fetchedBooking.name).email,
          tel: JSON.parse(fetchedBooking.name).tel,
        },
      });
    } catch (error) {
      console.error('Error fetching booking by id:', error);
    }
  };

  return (
    <section>
      <header>
        <h3>Updatera en bokning</h3>
      </header>

      {editBooking ? (
        <BookingForm
          editBooking={editBooking}
          id={bookingId}
        />
      ) : (
        <h3>404 Not Found</h3>
      )}
    </section>
  );
};

export default AdminEditPage;
