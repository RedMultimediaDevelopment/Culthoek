import Stripe from 'stripe';

export const stripe = new Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc', {
  apiVersion: '2022-11-15',
});

export default stripe;
