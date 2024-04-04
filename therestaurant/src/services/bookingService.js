import { ethers } from "ethers";
import { abi, contractAddress } from "../config";

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
    "Ethers.js: Web3 provider not found. Please install a wallet with Web3 support."
  );
}

export const getBookings = async () => {
  const response = await axios.get('...här läggs in adressen till API:t...');
  return response.data;
};

export const deleteBooking = async (id) => {
  await axios.delete(`...här läggs in adressen till API:t.../${id}`);
  console.log(`Deleting booking with id ${id}`);
};

export const updateBooking = async (updatedBooking) => {
  await axios.put(`...här läggs in adressen till API:t.../${updatedBooking.id}`, updatedBooking);
  console.log('Updating booking:', updatedBooking);
};

export const createBooking = async (newBooking) => {
  await axios.post('...här läggs in adressen till API:t...', newBooking);
  console.log('Creating new booking:', newBooking);
};

