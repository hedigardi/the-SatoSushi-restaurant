import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="contact-wrapper">
      <section>
        <header>
          <h2>Kontaktuppgifter</h2>
        </header>

        <p>Adress: Sushigatan 1</p>
        <p>Telefon: +46 (0) 12 34 56 789</p>
        <p>E-post: info@satosushi.com</p>
      </section>

      <ContactForm />
    </div>
  );
};

export default ContactPage;
