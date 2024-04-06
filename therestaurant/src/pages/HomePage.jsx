// import '../App.css';
// Render the main page of a Sushi restaurant

import {
  createBooking,
  createRestaurant,
  deleteBooking,
  getBookings,
  updateBooking,
} from '../services/bookingService';

await createRestaurant('Sato Sushi');

const HomePage = () => {
  const AX = async () => {
    // await createBooking();
    // await deleteBooking(3);
    // await updateBooking(1);
    const list = await getBookings();
    console.log(list);

    // console.log(JSON.parse(list[1].name).email);
  };

  return (
    <>
      <button onClick={AX}>HEJ</button>
      <div className="columns">
        <div className="column">
          <p className="subtitle">Sushi Restaurang sedan 2008</p>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <div className="hero is-medium is-primary is-bold">
                  <div className="hero-body">
                    <h2>Sushi</h2>
                    <p className="about_us">
                      Njut av den utsökta smaken av traditionell japansk mat på
                      SatoSuShi. Våra mästerkockar tillagar konstfullt varje
                      rätt till perfektion, och kombinerar färska ingredienser
                      med hundraåriga kulinariska tekniker.
                    </p>
                    <p className="about_us">
                      Fördjupa dig i de rika smakerna av sushi, sashimi och
                      andra japanska delikatesser när du ger dig ut på en
                      kulinarisk resa som ingen annan.
                    </p>
                    <p className="about_us">
                      Upplev essensen av Japan här på SatoSuShi.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="content">
                <p>
                  Välkommen till SatoSuShi, din främsta källa för allt som rör
                  sushi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
