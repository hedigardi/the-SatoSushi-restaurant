import { useCallback, useEffect, useState } from 'react';
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
import {
  availableTables,
  formValidationMessages,
  menuList,
} from './utils/restaurant.config.js';
import GlobalContext from './context/GlobalContext.js';
import './App.css';

const web3Provider = window.ethereum;

if (web3Provider) {
  await createRestaurant('Sato Sushi');
}

function App() {
  const [bookings, setBookings] = useState([]);
  const [bookingMessage, setBookingMessage] = useState('');

  const [isLoadingBookings, setIsLoadingBookings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [readContract, setReadContract] = useState();
  const [writeContract, setWriteContract] = useState();

  useEffect(() => {
    if (bookings.length > 0) return;
    setIsLoadingBookings(true);
  }, [bookings]);

  const fetchBookings = useCallback(async () => {
    try {
      const result = await readContract.getAllBookings();
      setBookings(result);
      setIsLoadingBookings(false);
    } catch (error) {
      console.error('Error fetching all bookings:', error);
    }
  }, [readContract]);

  useEffect(() => {
    const setupProviders = async () => {
      if (web3Provider) {
        setReadContract({
          getAllBookings,
          getBooking,
          getBookingCount,
        });

        setWriteContract({
          createBooking,
          deleteBooking,
          updateBooking,
        });
      }
    };
    setupProviders();
  }, []);

  useEffect(() => {
    if (readContract) {
      fetchBookings();
    }
  }, [readContract, fetchBookings]);

  const handleCreateBooking = async (formData, setFormData) => {
    try {
      const result = await writeContract.createBooking(formData);
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
      console.error('Error creating a booking:', error);
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
      console.error(`Error deleting booking with ${id}:`, error);
    }
  };

  const handleUpdateBooking = async (id, formData) => {
    try {
      const result = await writeContract.updateBooking(id, formData);
      await result.wait();

      setBookingMessage('Updatering av bokning genomfört!');
      fetchBookings();
    } catch (error) {
      console.error(`Error updating booking with ${id}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!web3Provider && (
        <div>
          <p>Du saknar METAMASK!</p>
        </div>
      )}

      <GlobalContext.Provider
        value={{
          bookings,
          bookingMessage,
          setBookingMessage,

          isLoading,
          setIsLoading,
          isLoadingBookings,
          setIsLoadingBookings,

          handleCreateBooking,
          handleDeleteBooking,
          handleUpdateBooking,

          availableTables,
          formValidationMessages,
          menuList,
        }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
