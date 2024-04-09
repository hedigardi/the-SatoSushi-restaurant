const ContactForm = () => {
  return (
    <section>
      <header>
        <h2>Contact Form</h2>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
