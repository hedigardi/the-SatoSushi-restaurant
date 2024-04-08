import BookingList from '../components/BookingList';
import { Link } from 'react-router-dom';

const AdminOverviewPage = () => {
  return (
    <div>
      <Link to={'/admin/create'}>
        <button>Skapa ny bokning</button>
      </Link>

      <BookingList />
    </div>
  );
};

export default AdminOverviewPage;
