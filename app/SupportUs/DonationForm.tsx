'use client';

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useTheme } from '@/Components/ClientComponents/ThemeContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function DonationFormWrapper() {
  const { theme } = useTheme();
  const [style, setStyle] = useState<any>(null);

  // Update Stripe style when theme changes
  useEffect(() => {
  requestAnimationFrame(() => {
    const root = getComputedStyle(document.body);
    const fontColor = root.getPropertyValue('--primary-text').trim();
    setStyle({
        base: {
            color: fontColor,
            fontFamily: 'Arial, sans-serif',
            fontSize: "1.25rem",
            fontSmoothing: 'antialiased',
            '::placeholder': { color: fontColor },
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
        });
        });
    }, [theme]);

  if (!style) return null; // Wait until style is ready

  return (
    <Elements stripe={stripePromise} options={{ fonts: [], locale: 'auto' }} key={theme}>
      <CheckoutForm style={style} key={theme}/>
    </Elements>
  );
}
