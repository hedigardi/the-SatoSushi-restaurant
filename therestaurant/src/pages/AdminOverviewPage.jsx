import { useContext } from 'react';
import BookingList from '../components/BookingList';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

const AdminOverviewPage = () => {
  const { isLoadingBookings } = useContext(GlobalContext);

  return (
    <>
      {isLoadingBookings ? (
        <div className="center-content">
          <div className="loading-spinner big-spinner"></div>
        </div>
      ) : (
        <div>
          <Link to={'/admin/create'}>
            <button>Skapa ny bokning</button>
          </Link>

          <BookingList />
        </div>
      )}
    </>
  );
};

export default AdminOverviewPage;
