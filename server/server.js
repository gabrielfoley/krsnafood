const express = require('express');
const stripeRoute = require('./routes/stripe.js');
const cors = require('cors');

require('dotenv').config();
const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/stripe', stripeRoute);

app.get('/', (req, res) => res.send('Homepage'));
app.listen(process.env.PORT || PORT, () =>
  console.log(`Running on port ${PORT}`)
);
