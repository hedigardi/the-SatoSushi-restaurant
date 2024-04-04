import '../App.css'
// Render the main page of a Sushi restaurant

export default function HomePage() {
  return (
    <>
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
                      Savor the exquisite taste of traditional Japanese cuisine
                      at SatoSuShi. Our master chefs artfully prepare each dish
                      to perfection, combining fresh ingredients with
                      centuries-old culinary techniques.
                    </p>
                    <p className="about_us">
                      Immerse yourself in the rich flavors of sushi, sashimi,
                      and other Japanese delicacies as you embark on a culinary
                      journey like no other.
                    </p>
                    <p className="about_us">
                      Experience the essence of Japan right here at SatoSuShi.
                    </p>

                    {/* <img
                      className="sushiHero hero"
                      src="src/assets/images/sushiHero.jpg"
                      alt="sushiHero image"
                    /> */}
                  </div>
                </div>
              </div>
              <div className="content">
                <p>
                  Welcome to SatoSuShi, your number one source for all things
                  sushi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
