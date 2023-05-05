import React from 'react';
import StripeContainer from './stripeContainer';
import './donate.css';
const Donate = () => {
  return (
    <div className='donateContainer'>
      <div className='donate'>
        <StripeContainer />
      </div>
    </div>
  );
};

export default Donate;




