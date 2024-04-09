import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <section>
        <header>
          <h2>Contact Information</h2>
        </header>

        <p>Address: Sushigatan 1</p>
        <p>Phone: +46 (0) 12 34 56 789</p>
        <p>Email: info@satosushi.com</p>
      </section>

      <ContactForm />

      <section>
        <header>
          <h2>FAQ</h2>
        </header>

        <p>Here you can find frequently asked questions.</p>
      </section>
    </div>
  );
};

export default ContactPage;
