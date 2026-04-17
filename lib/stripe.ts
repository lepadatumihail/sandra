import Stripe from 'stripe';

let instance: Stripe | undefined;

export function getStripe(): Stripe {
  if (instance) return instance;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  instance = new Stripe(key);
  return instance;
}
