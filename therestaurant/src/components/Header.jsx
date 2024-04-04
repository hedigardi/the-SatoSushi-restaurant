import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="hat">
        <a href="/">
          <img
            className="logo"
            src="src/assets/images/logo_blackbg_noBG.png"
            alt="SatoSuShi logo"
          />
        </a>
        <h1 className="title">SatoSuShi</h1>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>Hem</NavLink>
            </li>

            <li>
              <NavLink to={'/menu'}>Meny</NavLink>
            </li>

            <li>
              <NavLink to={'/booking'}>Boka Tid</NavLink>
            </li>

            <li>
              <NavLink to={'/contact'}>Kontakta Oss</NavLink>
            </li>

            <li>
              <NavLink to={'/admin'}>Personal Portal</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
