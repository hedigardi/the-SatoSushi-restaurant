import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBooking } from '../services/bookingService';

const AdminEditPage = () => {
  const { bookingId } = useParams();
  const [editBooking, setEditBooking] = useState();

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const fetchedBooking = await getBooking(bookingId);
      setEditBooking(fetchedBooking);
    } catch (error) {
      console.error('Error fetching booking by id:', error);
    }
  };

  return (
    <>
      <h3>Edit Booking</h3>
      <p>{bookingId}</p>
      <p>{editBooking}</p>
    </>
  );
};

export default AdminEditPage;
