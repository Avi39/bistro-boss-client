/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckOut from './CheckOut';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2 className='text-3xl'>taka</h2>
            <Elements stripe={stripePromise}>
            <CheckOut></CheckOut>
            </Elements>
           
        </div>
    );
};

export default Payment;