const express = require('express');
const router = express();
const cors = require('cors');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

router.post('/donate', cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Krsnafood',
      payment_method: id,
      confirm: true,
    });
    console.log('Payment', payment);
    res.json({
      message: 'Payment successful',
      success: true,
    });
  } catch (error) {
    console.log('Error', error);
    res.json({
      message: 'Payment failed',
      success: false,
    });
  }
});

module.exports = router;
