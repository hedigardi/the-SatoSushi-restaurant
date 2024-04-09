import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.jsx';
import {
  createRestaurant,
  getBookingCount,
  getAllBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
} from './services/bookingService.js';
import GlobalContext from './context/GlobalContext.js';
import { useCallback, useEffect, useState } from 'react';

const currentRestaurant = await createRestaurant('Sato Sushi');

function App() {
  const [restaurantId, setRestaurantId] = useState(currentRestaurant);

  const [bookings, setBookings] = useState([]);
  const [bookingMessage, setBookingMessage] = useState('');

  const [isLoadingBookings, setIsLoadingBookings] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [readContract, setReadContract] = useState({
    getAllBookings,
    getBooking,
    getBookingCount,
  });
  const [writeContract, setWriteContract] = useState({
    createBooking,
    deleteBooking,
    updateBooking,
  });

  useEffect(() => {
    if (bookings.length > 0) return;
    setIsLoadingBookings(true);
    setIsLoadingForm(true);
  }, [bookings]);

  const fetchBookings = useCallback(async () => {
    try {
      const result = await readContract.getAllBookings();
      setBookings(result);

      setIsLoadingBookings(false);
      setIsLoadingForm(false);
    } catch (error) {
      console.error('Error fetching all bookings:', error);
    }
  }, [readContract]);

  useEffect(() => {
    if (readContract) {
      fetchBookings();
    }
  }, [readContract, fetchBookings]);

  const handleCreateBooking = async (formData, setFormData) => {
    try {
      const result = await writeContract.createBooking(restaurantId, formData);
      await result.wait();

      setFormData({
        numberOfGuests: '',
        name: { name: '', email: '', tel: '' },
        date: '',
        time: '',
      });

      setBookingMessage('Tack! Din bokning är skapad!');
      fetchBookings();
    } catch (error) {
      console.error('Fel vid skapande av bokning:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      const result = await writeContract.deleteBooking(id);
      await result.wait();

      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const handleUpdateBooking = async (id, formData) => {
    try {
      const result = await writeContract.updateBooking(id, formData);
      await result.wait();

      setBookingMessage('Updatering av bokning genomfört!');
      fetchBookings();
    } catch (error) {
      console.error('Fel vid updatering av bokning:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          bookings,
          bookingMessage,
          setBookingMessage,

          isLoading,
          setIsLoading,
          isLoadingBookings,
          setIsLoadingBookings,
          isLoadingForm,
          setIsLoadingForm,

          readContract,
          writeContract,

          handleCreateBooking,
          handleDeleteBooking,
          handleUpdateBooking,
        }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
