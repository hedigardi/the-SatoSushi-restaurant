const ContactForm = () => {
  return (
    <section>
      <header>
        <h2>Kontaktformulär</h2>
      </header>
      <div className="booking-admin">
        <form>
          <div className="label-input">
            <label htmlFor="name">
              Namn:
              <input
                type="text"
                name="name"
                placeholder="Ange namn"
                required
              />
            </label>
          </div>

          <div className="label-input">
            <label htmlFor="email">
              E-post:
              <input
                type="email"
                name="email"
                placeholder="Ange e-post adress"
                required
              />
            </label>
          </div>

          <div className="label-input">
            <label htmlFor="message">
              Meddelande:
              <textarea
                id="message"
                name="message"
                placeholder="Skriv ditt meddelande här..."
                rows="4"
                required
              ></textarea>
            </label>
          </div>

          <button type="submit">Skicka</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
