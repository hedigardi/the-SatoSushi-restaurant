const Gdpr = () => {
  return (
    <div>
      <span>
        <input
          type="checkbox"
          required
          onInvalid={(e) =>
            e.target.setCustomValidity('Godkänn till GDPR för att fortsätta')
          }
          onInput={(e) => e.target.setCustomValidity('')}
        />
        Jag har läst och samtycker till GDPR och samtliga villkor.{' '}
        <a href="">Tryck här för att få mer information om GDPR.</a>
      </span>
    </div>
  );
};

export default Gdpr;
