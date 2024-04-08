import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.jsx';
import {
  createRestaurant,
  deleteBooking,
  getAllBookings,
} from './services/bookingService.js';
import GlobalContext from './context/GlobalContext.js';
import { useEffect, useState } from 'react';

await createRestaurant('Sato Sushi');

function App() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);

  useEffect(() => {
    if (bookings.length > 0) return;
    setIsLoadingBookings(true);
  }, [bookings]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchBookings();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchBookings = async () => {
    try {
      const fetchedBookings = await getAllBookings();
      setBookings(fetchedBookings);
      setIsLoadingBookings(false);
    } catch (error) {
      console.error('Error fetching all bookings:', error);
    }
  };

  const handleDeleteBooking = async (id) => {
    try {
      await deleteBooking(id);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          bookings,
          handleDeleteBooking,
          isLoading,
          setIsLoading,
          isLoadingBookings,
        }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
