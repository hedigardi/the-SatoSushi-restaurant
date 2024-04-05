const BookingPage = () => {
  return (
    <section>
      <h2>Boka Tid</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            Datum:{' '}
            <select>
              <option value="">-- Välj ett datum --</option>
              <option value="">2024-04-04</option>
              <option value="">2024-04-05</option>
            </select>
          </label>

          <label>
            Tid/Sittning:{' '}
            <select>
              <option value="">-- Välj en sittning --</option>
              <option value="">Sitting 1 (Kl. 18:00 - 20:00)</option>
              <option value="">Sitting 2 (Kl. 21:00 - 23:00)</option>
            </select>
          </label>

          <label>
            Antal Gäster:{' '}
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
            </select>
          </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            {' '}
            Namn:{' '}
            <input
              type="text"
              name="name"
              placeholder="Ange namn"
            />
          </label>

          <label>
            {' '}
            E-post:{' '}
            <input
              type="email"
              name="email"
              placeholder="Ange e-post adress"
            />
          </label>

          <label>
            {' '}
            Telefon:{' '}
            <input
              type="tel"
              name="tel"
              placeholder="Ange telefon-nummer"
            />
          </label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>
            <input type="checkbox" /> Jag har läst och samtycker till GDPR och
            samtliga villkor.{' '}
            <a href="">Tryck här för att få mer information om GDPR.</a>
          </span>
        </div>

        <button>Boka</button>
      </form>
    </section>
  );
};

export default BookingPage;
