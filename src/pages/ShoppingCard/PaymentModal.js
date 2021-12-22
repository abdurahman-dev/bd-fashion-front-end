import React from 'react';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
  } from "@stripe/react-stripe-js";
import { requiredErrorHandle, requiredSuccessHandle } from '../../helper/toastNotification';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

 

const PaymentModal = ({setPaymentId,handleClose}) => {
  const { isAuthenticated } = useSelector((state) => state.authLoginReducer);
 
    const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async event => {
    event.preventDefault();

    if(!isAuthenticated){
      return <Redirect to='/'/>
    }

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    
    const {paymentMethod,error}=payload
    if(error) requiredErrorHandle(error.message)
    if(paymentMethod){
        setPaymentId({
            success:true,
            id:paymentMethod.id
        })
        requiredSuccessHandle('Payment Success')
        handleClose()
    }
  };
  if(!isAuthenticated){
    return <Redirect to='/login' />
  }
    return (
<form onSubmit={handleSubmit} >
      <label className='mb-2'>
        Card  Number
        <CardNumberElement
         className='bg-gray-50 px-2 py-2 rounded-md w-48 h-8 text-blue-400'
         
        />
      </label>
      <br />
      <label className='mb-2'>
        Expiration Date
        <CardExpiryElement 
            className='bg-gray-50 px-2 py-2 rounded-md w-48 h-8 text-blue-400'
          
        />
      </label>
      <br />
      <label className='mb-2'>
        CVC
        <CardCvcElement
          className='bg-gray-50 px-2 py-2 rounded-md w-48 h-8 text-blue-400'
          
        />
      </label>
      <br />
      <button type="submit" disabled={!stripe}  className='bg-blue-400 py-1 px-3 text-gray-50 rounded-md'>
       Pay Now
      </button>
    </form>
    );
};

export default PaymentModal;