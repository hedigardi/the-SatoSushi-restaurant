import "../App.css";
export default function HomePage() {
  return (
    <>
      {" "}
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
      <header>
        <nav>
          <ul>
            <li>
              <a href="/menu">Meny</a>
            </li>
            <li>
              <a href="/book">Boka bord</a>
            </li>
            <li>
              <a href="/contact">Kontakt</a>
            </li>
            <li>
              <a href="/about">Om oss</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="columns">
        <div className="column">
          <p className="subtitle">Sushi Restaurang sedan 2008</p>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2>Menu</h2>
                <div className="menu">
                  <div className="category">
                    <h3>Maki</h3>
                    <div className="menu-row">
                    <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="Lax Maki"
                    />                        <h3 className="dish-title">Lax Maki</h3>
                        <p className="dish-price">199 kr</p>
                      </div>
                      <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="Lax Maki"
                    />                          <h3 className="dish-title">Tonfisk Maki</h3>
                        <p className="dish-price">299 kr</p>
                      </div>
                    </div><div className="menu-row">
                    <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="En till Maki"
                    />                        <h3 className="dish-title">En till Maki</h3>
                        <p className="dish-price">399 kr</p>
                      </div>
                      <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="Två till Maki"
                    />                          <h3 className="dish-title">Två till Maki</h3>
                        <p className="dish-price">499 kr</p>
                      </div>
                    </div>
                  </div>
                  <div className="category">
                    <h3>Nigiri</h3>
                    <div className="menu-row">
                      <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_shrimp.jpg"
                      alt="Räk Nigiri"
                    />                          <h3 className="dish-title">Räk Nigiri</h3>
                        <p className="dish-price">99 kr</p>
                      </div>
                      <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_salmon.jpg"
                      alt="Räk Nigiri"
                    />                          <h3 className="dish-title">Lax Nigiri</h3>
                        <p className="dish-price">149 kr</p>
                      </div>
                    </div><div className="menu-row">
                      <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_tuna.jpg"
                      alt="Tonfisk Nigiri"
                    />                          <h3 className="dish-title">Tonfisk Nigiri</h3>
                        <p className="dish-price">199 kr</p>
                      </div>
                      <div className="menu-card">
                      <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_tuna.jpg"
                      alt="Tonfisk2 Nigiri"
                    />                          <h3 className="dish-title">Tonfisk2 Nigiri</h3>
                        <p className="dish-price">249 kr</p>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
              <div className="content">
                <p>
                  Välkommen till SatoSuShi, din främsta källa för allt som rör
                  sushi.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <ul>
          <li>
            <a href="/about">Villkor</a>
          </li>
          <li>
            <a href="/HomePage">© SatoSuShi 2024</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
