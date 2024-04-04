// Render the main page of a Sushi restaurant

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
                <div class="menu-category">
                  <h3>Maki</h3>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Ikura (lax) maki</h3>
                    <p class="dish-price">199 kr</p>
                  </div>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Ikura (lax) maki</h3>
                    <p class="dish-price">199 kr</p>
                  </div>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Ikura (lax) maki</h3>
                    <p class="dish-price">199 kr</p>
                  </div>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/ikura_salmon_maki.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Ikura (lax) maki</h3>
                    <p class="dish-price">199 kr</p>
                  </div>
                </div>
                <div class="menu-category">
                  <h3>Nigiri</h3>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_salmon.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Lax nigiri</h3>
                    <p class="dish-price">199 kr</p>
                  </div>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_shrimp.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Räka nigiri</h3>
                    <p class="dish-price">199 kr</p>
                  </div>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_tuna.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Tonfisk nigiri</h3>
                    <p class="dish-price">1999 kr</p>
                  </div>
                  <div class="menu-card">
                    <img
                      className="dish-image"
                      src="./src/assets/images/dishes/nigiri_with_salmon.jpg"
                      alt="Sushi rätt"
                    />
                    <h3 class="dish-title">Lakrits nigiri</h3>
                    <p class="dish-price">19 kr</p>
                  </div>
                </div>
              </div>
              <div className="content">
                <p>
                Välkommen till SatoSuShi, din främsta källa för allt som rör sushi.                </p>
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
