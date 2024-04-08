import { Outlet } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Page</h2>

      <Outlet />
    </div>
  );
};

export default AdminPage;
