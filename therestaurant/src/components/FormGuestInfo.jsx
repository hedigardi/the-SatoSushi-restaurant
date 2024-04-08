const FormGuestInfo = ({ handleChange, formData }) => {
  return (
    <div>
      <label>
        {' '}
        Namn:{' '}
        <input
          type="text"
          name="name"
          placeholder="Ange namn"
          onChange={handleChange}
          value={formData.name.name}
          required
          onInvalid={(e) => e.target.setCustomValidity('Fyll in ditt namn')}
          onInput={(e) => e.target.setCustomValidity('')}
        />
      </label>
      <br />

      <label>
        {' '}
        E-post:{' '}
        <input
          type="email"
          name="email"
          placeholder="Ange e-post adress"
          onChange={handleChange}
          value={formData.name.email}
          required
          onInvalid={(e) => e.target.setCustomValidity('Fyll in din e-mail')}
          onInput={(e) => e.target.setCustomValidity('')}
        />
      </label>
      <br />

      <label>
        {' '}
        Telefon:{' '}
        <input
          type="tel"
          name="tel"
          placeholder="Ange telefon-nummer"
          onChange={handleChange}
          value={formData.name.tel}
          required
          onInvalid={(e) =>
            e.target.setCustomValidity('Fyll in ditt telefonnummer')
          }
          onInput={(e) => e.target.setCustomValidity('')}
        />
      </label>
    </div>
  );
};

export default FormGuestInfo;
