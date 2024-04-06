import BookingForm from '../components/BookingForm';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi, contractAddress } from '../utils/config';

const BookingPage = () => {
  return (
    <section>
      <header>
        <h2>Boka Tid</h2>
      </header>

      <BookingForm />
    </section>
  );
};

export default BookingPage;
