import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.jsx';
import {
  createRestaurant,
  deleteBooking,
  getAllBookings,
} from './services/bookingService.js';
import GlobalContext from './context/GlobalContext.js';
import { useCallback, useEffect, useState } from 'react';

await createRestaurant('Sato Sushi');

function App() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);
  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const [readContract, setReadContract] = useState({ getAllBookings });
  const [writeContract, setWriteContract] = useState({ deleteBooking });

  const fetchBookings = useCallback(async () => {
    try {
      const result = await readContract.getAllBookings();
      setBookings(result);
      setIsLoadingBookings(false);
    } catch (error) {
      console.error('Error fetching all bookings:', error);
    }
  }, [readContract]);

  const handleDeleteBooking = async (id) => {
    try {
      const result = await writeContract.deleteBooking(id);
      await result.wait();
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  useEffect(() => {
    if (bookings.length > 0) return;
    setIsLoadingBookings(true);
    setIsLoadingForm(true);
  }, [bookings]);

  useEffect(() => {
    if (readContract) {
      fetchBookings();
    }
  }, [readContract, fetchBookings]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          bookings,
          handleDeleteBooking,
          isLoading,
          setIsLoading,
          isLoadingBookings,
          setIsLoadingBookings,
          isLoadingForm,
          setIsLoadingForm,
        }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
