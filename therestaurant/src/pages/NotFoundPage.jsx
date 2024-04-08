import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section>
      <h1>404 Not Found</h1>
      <Link to={'/'}>
        <button>Tillbaka</button>
      </Link>
    </section>
  );
};

export default NotFoundPage;
