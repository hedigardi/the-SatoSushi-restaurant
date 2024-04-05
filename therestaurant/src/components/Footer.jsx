import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to={'/about'}>Villkor och Avtal</Link>
        </li>
      </ul>

      <div>
        <p>&copy; 2024 SatoSushi. All rights reserved.</p>
        <p>Contact us at info@satosushi.com</p>
      </div>
    </footer>
  );
};

export default Footer;
