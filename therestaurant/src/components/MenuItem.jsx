const MenuItem = ({ item }) => {
  return (
    <section className="booking-admin">
      <header>
        <img
          className="dish-image"
          src={item.dishImg}
          alt={item.dishTitle}
        />

        <h3 className="dish-title">{item.dishTitle}</h3>
      </header>

      <div>
        <p className="dish-description">Ings: {item.dishDescription}</p>

        <p className="dish-price">{item.dishPrice} SEK</p>
      </div>
    </section>
  );
};

export default MenuItem;
