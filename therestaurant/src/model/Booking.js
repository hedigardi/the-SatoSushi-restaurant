class Booking {
  numberOfGuests;
  name;
  date;
  time;
  constructor(numberOfGuests, name, date, time) {
    this.numberOfGuests = numberOfGuests;
    this.name = name;
    this.date = date;
    this.time = time;
  }
}

export default Booking;
