import { ethers } from 'ethers';
import { abi, contractAddress } from '../utils/config';

let provider = null;
let readContract = null;
let writeContract = null;
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

const getAll = async (name, getCount) => {
  const count = getCount;
  const temp = [];

  for (let i = 0; i <= count; ++i) {
    const item = await readContract[name](i);
    if (item.id > 0) temp.push(item);
  }

  return temp;
};

export const getRestaurantCount = async () => {
  const count = await readContract['restaurantCount']();
  return Number(count);
};

export const createRestaurant = async (name) => {
  const input = ['restaurants', async () => await getRestaurantCount()];
  const setRestaurantId = (list, name) => {
    list.find((restaurant) => {
      if (restaurant.name === name) restaurantId = Number(restaurant.id);
    });
  };

  setRestaurantId(await getAll(input[0], await input[1]()), name);

  if (!restaurantId) {
    const result = await writeContract.createRestaurant(name);
    await result.wait();

    setRestaurantId(await getAll(input[0], await input[1]()), name);

    console.log(`Restaurant "${name}" has been created`);
  } else {
    console.log('Restaurant already exists');
  }

  console.log('current:', restaurantId);
  return restaurantId;
};

export const getBookingCount = async () => {
  const count = await readContract['bookingCount']();
  return Number(count);
};

export const getAllBookings = async () => {
  return await getAll('bookings', await getBookingCount());
};

export const getBooking = async (id) => {
  return await readContract['bookings'](id);
};

export const createBooking = async (newBooking) => {
  console.log('create:', restaurantId);
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
