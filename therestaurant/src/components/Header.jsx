import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuClick = () => {
    setToggleMenu(false);
  };

  return (
    <header>
      <div className="header-container">
        <div className="hat">
          <Link to={'/'}>
            <img
              className="logo"
              src="/src/assets/images/logo_transparent_light.png"
              alt="SatoSuShi logo"
            />
          </Link>
        </div>

        <div className="navigation">
          <input
            type="checkbox"
            className="navigation-checkbox"
            id="navi-toggle"
            checked={toggleMenu}
            onChange={() => {
              setToggleMenu(!toggleMenu);
            }}
          />
          <label
            htmlFor="navi-toggle"
            className="navigation-button"
          >
            <span className="navigation-icon">&nbsp;</span>
          </label>
          <div className="navigation-background">&nbsp;</div>

          <nav className="navigation-nav">
            <ul className="navigation-list">
              <li className="navigation-item">
                <NavLink
                  to={'/'}
                  className="navigation-link"
                  onClick={handleMenuClick}
                >
                  Om oss
                </NavLink>
              </li>

              <li className="navigation-item">
                <NavLink
                  to={'/menu'}
                  className="navigation-link"
                  onClick={handleMenuClick}
                >
                  Meny
                </NavLink>
              </li>

              <li className="navigation-item">
                <NavLink
                  to={'/booking'}
                  className="navigation-link"
                  onClick={handleMenuClick}
                >
                  Boka bord
                </NavLink>
              </li>

              <li className="navigation-item">
                <NavLink
                  to={'/contact'}
                  className="navigation-link"
                  onClick={handleMenuClick}
                >
                  Kontakt
                </NavLink>
              </li>

              <li className="navigation-item">
                <NavLink
                  to={'/admin'}
                  className="navigation-link"
                  onClick={handleMenuClick}
                >
                  Admin
                </NavLink>
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
