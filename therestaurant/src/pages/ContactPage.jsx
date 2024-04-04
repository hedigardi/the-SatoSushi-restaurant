const ContactPage = () => {
  return (
    <div>
      <section>
        <h2>Contact Information</h2>
        <p>Address: Sushigatan 1</p>
        <p>Phone: +46 (0) 12 34 56 789</p>
        <p>Email: info@satosushi.com</p>
      </section>
      <section>
        <h2>Contact Form</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </section>
      <section>
        <h2>FAQ</h2>
        <p>Here you can find frequently asked questions.</p>
      </section>
    </div>
  );
};

export default ContactPage;
