const express = require('express');
const stripe = require('stripe')('sk_test_YOUR_STRIPE_SECRET_KEY'); // Remplacez par votre clé secrète Stripe
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('.'));
app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cart } = req.body;

  const lineItems = cart.map(item => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // Stripe utilise les centimes
    },
    quantity: item.qty,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:${port}/confirmation.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:${port}/cart.html`,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  res.json({
    status: session.status,
    customer_email: session.customer_details.email,
    amount_total: session.amount_total,
    currency: session.currency,
    line_items: session.line_items, // Note: line_items might need expansion
  });
});