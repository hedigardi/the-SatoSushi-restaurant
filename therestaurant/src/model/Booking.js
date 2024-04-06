class Booking {
  numberOfGuests;
  name;
  date;
  time;

  constructor(numberOfGuests, { name, email, tel }, date, time) {
    this.numberOfGuests = numberOfGuests;
    this.name = { name, email, tel };
    this.date = date;
    this.time = time;
  }
}

export default Booking;
