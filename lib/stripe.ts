import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const REPORT_PRICE_ID = process.env.STRIPE_REPORT_PRICE_ID || '';
export const REPORT_PRICE_AMOUNT = 4900; // $49.00 in cents
