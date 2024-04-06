import { ethers } from 'ethers';
import { abi, contractAddress } from '../utils/config';

let provider;
let readContract;
let writeContract;
let restaurantId = 0;

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

export const createRestaurant = async (name) => {
  const currentRestaurant = await readContract['restaurants'](1);
  restaurantId = Number(currentRestaurant.id);
  if (restaurantId === 0) {
    await writeContract.createRestaurant(name);
  } else {
    console.log('Restaurant already exists');
  }
};

export const getAllBookings = async () => {
  const count = await readContract['bookingCount']();
  const temp = [];

  for (let i = 0; i <= Number(count); ++i) {
    const booking = await readContract['bookings'](i);
    if (booking.id > 0) temp.push(booking);
  }

  return temp;
};

export const getBooking = async (id) => {
  return await readContract['bookings'](id);
};

export const createBooking = async (newBooking) => {
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

