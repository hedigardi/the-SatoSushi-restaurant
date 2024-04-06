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
      const processBooking = {
        date: fetchedBooking.date,
        time: Number(fetchedBooking.time),
        numberOfGuests: Number(fetchedBooking.numberOfGuests),
        name: JSON.parse(fetchedBooking.name).name,
        email: JSON.parse(fetchedBooking.name).email,
        tel: JSON.parse(fetchedBooking.name).tel,
      };

      setEditBooking(processBooking);
    } catch (error) {
      console.error('Error fetching booking by id:', error);
    }
  };

  return (
    <>
      <h3>Edit Booking</h3>
      {editBooking && <BookingForm booking={editBooking} />}
    </>
  );
};

export default AdminEditPage;
