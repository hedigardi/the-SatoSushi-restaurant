import { ethers } from 'ethers';
import { abi, contractAddress } from '../utils/config';

let provider;
let readContract;
let writeContract;
let restaurantId;

if (window.ethereum) {
  provider = new ethers.BrowserProvider(window.ethereum);
  readContract = new ethers.Contract(contractAddress, abi, provider);
  const signer = await provider.getSigner();
  writeContract = new ethers.Contract(contractAddress, abi, signer);
} else {
  console.error(
    'Ethers.js: Web3 provider not found. Please install a wallet with Web3 support.'
  );
}

export const getRestaurantCount = async () => {
  const count = await readContract['restaurantCount']();
  return Number(count);
};

export const createRestaurant = async (name) => {
  const count = await getRestaurantCount();
  const temp = [];

  for (let i = 0; i <= count; ++i) {
    const restaurant = await readContract['restaurants'](i);
    if (restaurant.id > 0) temp.push(restaurant);
  }

  temp.find((restaurant) => {
    if (restaurant.name === name) restaurantId = Number(restaurant.id);
  });

  if (!restaurantId) {
    await writeContract.createRestaurant(name);
    console.log(`Restaurant "${name}" has been created`);
  } else {
    console.log('Restaurant already exists');
  }
};

export const getBookingCount = async () => {
  const count = await readContract['bookingCount']();
  return Number(count);
};

export const getAllBookings = async () => {
  const count = await getBookingCount();
  const temp = [];

  for (let i = 0; i <= count; ++i) {
    const booking = await readContract['bookings'](i);
    if (booking.id > 0) temp.push(booking);
  }

  return temp;
};

export const getBooking = async (id) => {
  return await readContract['bookings'](id);
};

export const createBooking = async (newBooking) => {
  console.log(restaurantId);
  return await writeContract.createBooking(
    newBooking.numberOfGuests,
    JSON.stringify(newBooking.name),
    newBooking.date,
    newBooking.time,
    restaurantId
  );
};

export const deleteBooking = async (id) => {
  return await writeContract.removeBooking(id);
};

export const updateBooking = async (id, updateBooking) => {
  return await writeContract.editBooking(
    id,
    updateBooking.numberOfGuests,
    JSON.stringify(updateBooking.name),
    updateBooking.date,
    updateBooking.time
  );
};
