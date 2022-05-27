import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({totalPrice, orders}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const price = totalPrice;
    const {name, itemName, userEmail} = orders;

    useEffect(() => {
        fetch('https://boiling-garden-19713.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data =>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
    },[price])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
            setCardError(error?.message || '');
            setSuccess('');

            // Confirm
            const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
                clientSecret,
                {
                  payment_method: {
                    card: card,
                    billing_details: {
                      name: name,
                      email: userEmail
                    },
                  },
                },
              );

            if(intentError){
                setCardError(intentError?.message);

            }else{
                setCardError('');
                setTransactionId(paymentIntent.id);
                console.log(paymentIntent);
                setSuccess('Congrate! Your paymet is complete!');
            }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
                <button className='btn btn-success btn-sm mt-5 font-bold' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p className='text-green-500'>Your Transaction Id: <span className='text-primary'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;