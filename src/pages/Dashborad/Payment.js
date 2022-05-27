import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from "../../shared/Loading";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L46XXIy95UgVzEZlnCyBMDy2XLpQkULSChWRCaTK46ESFFy4Tpgq3SbKIehLwN2BQKxBBd2cJEYcSnkaohnPt1c00sbk8czBs');

const Payment = () => {
    const {id} = useParams();
    const url = `https://boiling-garden-19713.herokuapp.com/purchased/${id}`;

    const {data: orders, isLoading} = useQuery(['purchased', id], () => fetch(url, {
        method: "Get",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading/>
    }

    const totalPrice = parseInt(orders.quantity) * parseInt(orders.price);

    return (
        <div>
            <div className='card w-50 max-w-md bg-white shadow-xl my-12'>
                <div className='card-body'>
                    <h2 className='card-title font-bold'>Hello {orders.name}</h2>
                    <h2 className='card-title'>Pay for {orders.itemName}</h2>
                    <p className='font-semibold'>Your orders Quantity <span className='text-primary'>{orders.quantity}</span>, per piece <span className='text-primary'>${orders.price}</span></p>
                    <p className='font-semibold'>Please pay <span className='text-primary'>${totalPrice}</span></p>
                </div>
            </div>
            <div className='card flex-shrink-0 w-50 max-w-md shadow-xl bg-white'>
                <div className='card p-6'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm totalPrice={totalPrice} />
                    </Elements>
                </div>

            </div>
        </div>
    );
};

export default Payment;