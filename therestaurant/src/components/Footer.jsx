import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to={'/about'}>Villkor</Link>
        </li>
        <li>
          <Link to={'/contact'}>Kontakt</Link>
        </li>
        <li>
          <Link>&copy; 2024 SatoSushi</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
