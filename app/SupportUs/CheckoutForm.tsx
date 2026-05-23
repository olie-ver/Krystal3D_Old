'use client';

import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import style from './DonationForm.module.css';

export default function CheckoutForm({ style: stripeStyle }: { style: any }) {
  const stripe = useStripe();
  const elements = useElements();

  const [amountInput, setAmountInput] = useState("1.00");
  const amount = parseFloat(amountInput) || 0;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || amount <= 0) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    const res = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Failed to create payment intent');
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (result.error) {
      setError(result.error.message || 'Payment failed');
    } else if (result.paymentIntent?.status === 'succeeded') {
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={style.DonationForm}>
      <CardElement options={{ style: stripeStyle }} className={style.CardInfo} />

      <input
        type="text"
        inputMode="decimal"
        value={`$${amountInput}`}
        onChange={(e) => {
          const raw = e.target.value.replace(/^\$/, '');
          setAmountInput(formatCurrency(raw));
        }}
        className={style.DonationAmount}
        placeholder="$1.00"
      />

      <button
        type="submit"
        disabled={!stripe || loading || amount <= 0}
        className={style.Submit}
      >
        {loading ? 'Processing...' : `Donate $${amount}`}
      </button>

      {error && <div className={style.StatusText}>{error}</div>}
      {success && <div className={style.StatusText}>Thank you for your donation!</div>}
    </form>
  );
}

function formatCurrency(value: string): string {
    const cleaned = value.replace(/[^0-9.]/g, '');
    const [dollars, cents] = cleaned.split('.');
    const formattedCents = cents?.slice(0, 2);
    return formattedCents !== undefined ? `${dollars}.${formattedCents}` : dollars;
}
