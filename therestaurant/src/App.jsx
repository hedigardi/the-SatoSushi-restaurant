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

  const updateBookings = useCallback(async () => {
    try {
      const result = await readContract.getAllBookings();
      setBookings(result);

      isLoadingBookings && setIsLoadingBookings(false);
    } catch (error) {
      console.error('Error fetching all bookings:', error);
    }
  }, [isLoadingBookings, readContract]);

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
      updateBookings();
    }
  }, [readContract, updateBookings]);

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
      updateBookings();
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

      updateBookings();
    } catch (error) {
      console.error(`Error deleting booking with ${id}:`, error);
    }
  };

  const handleUpdateBooking = async (id, formData) => {
    try {
      const result = await writeContract.updateBooking(id, formData);
      await result.wait();

      setBookingMessage('Uppdatering av bokning genomfört!');
      updateBookings();
    } catch (error) {
      console.error(`Error updating booking with ${id}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBooking = async (bookingId, setEditBooking) => {
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
    <>
      {!web3Provider && (
        <section className="provider-missing">
          <img
            className="logo"
            src="/src/assets/images/logo_transparent_light.png"
            alt="SatoSuShi logo"
          />

          <header>
            <h1>Hej och välkommen till SatoSuShi!</h1>
          </header>

          <p>
            Din webbläsare saknar en Web3-leverantör som krävs för att använda
            denna applikation. För att fortsätta, vänligen installera en
            Web3-leverantör i din webbläsare.
          </p>

          <p>
            Vi rekommenderar MetaMask för bästa användarupplevelse och
            kompatibilitet med Web3-applikationer.
          </p>

          <p>
            Besök{' '}
            <a
              href="https://metamask.io/"
              target="_blank"
              rel="noreferrer"
            >
              Metamask.io
            </a>{' '}
            för att ladda ner och installera MetaMask.
          </p>
        </section>
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

          fetchBooking,

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
