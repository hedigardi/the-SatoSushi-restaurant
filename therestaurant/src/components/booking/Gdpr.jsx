import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const Gdpr = () => {
  const { formValidationMessages } = useContext(GlobalContext);

  return (
    <div>
      <span>
        <input
          type="checkbox"
          required
          onInvalid={(e) =>
            e.target.setCustomValidity(formValidationMessages.gdpr)
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
