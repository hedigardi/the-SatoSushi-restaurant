import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="hat">
          <a href="/">
            <img
              className="logo"
              src="src/assets/images/logo_transparent_light.png"
              alt="SatoSuShi logo"
            />
          </a>
        </div>

        <div className="navigation">
          <input
            type="checkbox"
            className="navigation-checkbox"
            id="navi-toggle"
          />
          <label
            for="navi-toggle"
            className="navigation-button"
          >
            <span className="navigation-icon">&nbsp;</span>
          </label>
          <div className="navigation-background">&nbsp;</div>
          <nav className="navigation-nav">
            <ul className="navigation-list">
              <li className="navigation-item">
                <a
                  href=""
                  className="navigation-link"
                >
                  <NavLink to={'/'}>Om oss</NavLink>
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href=""
                  className="navigation-link"
                >
                  <NavLink to={'/menu'}>Meny</NavLink>
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href=""
                  className="navigation-link"
                >
                  <NavLink to={'/booking'}>Boka bord</NavLink>
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href=""
                  className="navigation-link"
                >
                  <NavLink to={'/contact'}>Kontakt</NavLink>
                </a>
              </li>
              <li className="navigation-item">
                <a
                  href=""
                  className="navigation-link"
                >
                  <NavLink to={'/admin'}>Admin</NavLink>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-container">
          <nav>
            <ul>
              <li>
                <NavLink to={'/'}>Om oss</NavLink>
              </li>

              <li>
                <NavLink to={'/menu'}>Meny</NavLink>
              </li>

              <li>
                <NavLink to={'/booking'}>Boka bord</NavLink>
              </li>

              <li>
                <NavLink to={'/contact'}>Kontakt</NavLink>
              </li>

              <li>
                <NavLink to={'/admin'}>Admin</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
