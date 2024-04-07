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
        />
      </label>

      <label>
        {' '}
        E-post:{' '}
        <input
          type="email"
          name="email"
          placeholder="Ange e-post adress"
          onChange={handleChange}
          value={formData.name.email}
        />
      </label>

      <label>
        {' '}
        Telefon:{' '}
        <input
          type="tel"
          name="tel"
          placeholder="Ange telefon-nummer"
          onChange={handleChange}
          value={formData.name.tel}
        />
      </label>
    </div>
  );
};

export default FormGuestInfo;
