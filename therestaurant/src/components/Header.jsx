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
        <nav>
          <ul className="menu">
            <li>
              <a href="/menu">≠</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/book">Book</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
