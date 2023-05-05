import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { generalRequest } from '../../httpService';
import './donate.css';

const DonateForm = () => {
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState(3000);
  const stripe = useStripe();
  const elements = useElements();
  const [stripeErrorMessage, setStripeErrorMessage] = useState('');
  const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: 'springgreen',
        fontWeight: 500,
        color: '#fff',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '18px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': { color: '#fce883' },
        '::placeholder': { color: '#fff' },
      },
      invalid: {
        iconColor: 'red',
        color: 'red',
      },
    },
  };

  const handleSubmit = async (value) => {
    // e.preventDefault();

    setAmount(value);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Makeing sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const { data } = await generalRequest.post('/stripe/donate', {
          amount: amount,
          id,
        });

        if (data.success) {
          console.log(data);
          console.log('Successful payment');
          setSuccess(true);
        }
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      console.log(error.message);
      setStripeErrorMessage(error.message);
    }
  };

  const payButtons = [
    {
      id: 1,
      value: 30,
    },
    {
      id: 2,
      value: 40,
    },
    {
      id: 3,
      value: 50,
    },
    {
      id: 4,
      value: 60,
    },
    {
      id: 5,
      value: 70,
    },
  ];

  return (
    <div>
      {!success && (
        <>
          <CardElement options={CARD_OPTIONS} />
          <div className='buttonContainer'>
            {payButtons.map((payButton) => (
              <button
                key={payButton.id}
                className='payButton'
                onClick={() => handleSubmit(payButton.value)}
              >
                Donate ${payButton.value}
              </button>
            ))}
          </div>
          {stripeErrorMessage && (
            <span className='errorMessage'>{stripeErrorMessage}</span>
          )}{' '}
        </>
      )}
      {success && <span className='success'>Payment Successfull!</span>}
    </div>
  );
};
export default DonateForm;
