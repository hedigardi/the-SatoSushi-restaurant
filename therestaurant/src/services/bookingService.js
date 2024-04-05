import { ethers } from 'ethers';
import { abi, contractAddress } from '../utils/config';

let provider;
let readContract;
let writeContract;

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
  // console.log(await currentRestaurant.id);
  if (Number(currentRestaurant.id) === 0)  {
   await writeContract.createRestaurant(name);
} else {
  console.log('Restaurant already exists');
}}

export const getBookings = async () => {
  const count = await readContract['bookingCount']();
  const temp = [];

  for (let i = 0; i <= Number(count); ++i) {
    const booking = await readContract['bookings'](i);
    if (booking.id > 0) temp.push(booking);
  }

  return temp;
};

export const createBooking = async (newBooking) => {
  return await writeContract.createBooking(
    3,
    JSON.stringify({
      name: 'Antonio Lingårdsson Luna',
      email: 'toni.lingardsson@gmail.com',
      tel: '07012345678',
    }),
    '2024-04-05',
    18,
    2
  );
};

export const deleteBooking = async (id) => {

  await writeContract.removeBooking(id);

};

export const updateBooking = async (updatedBooking) => {
  await axios.put(
    `...här läggs in adressen till API:t.../${updatedBooking.id}`,
    updatedBooking
  );
  console.log('Updating booking:', updatedBooking);
};
