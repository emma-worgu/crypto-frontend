import React, { useEffect, useState } from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useHistory } from 'react-router-dom';

function Flutterwave() {

  const history = useHistory();
  const config = {
    public_key: 'FLWPUBK-12312993f6d2b838c0c92154e059f86f-X',
    tx_ref: `slada-${Date.now()}${Math.floor(Math.random() * 1000000)}-X`,
    amount: 85,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'salahnze@gmail.com',
      phone_number: '09132757650',
      name: 'Victor Iheadigwu',
    },
    payment_plan: 59336,
    customizations: {
      title: 'Heroku',
      description: 'Upgrade Bandwith',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const paymentGateway = () => {
      handleFlutterPayment({
        callback: async (response) => {
          try {
            const data = {
              transaction_id: response.transaction_id,
            };
           const url = 'https://crypto-backend1.herokuapp.com/admin/verify-payment';
           const token = localStorage.getItem('jwt_token');

          //  Make a request to verify if the transaction was successful
           const verifyTransaction = await fetch(url, {
             method: 'PUT',
             body: JSON.stringify(data),
             headers: {
               'auth-token': token,
               'Content-Type': 'application/json',
               'Accept': 'application/json'
             }
           });

           const verificationResponse = await verifyTransaction.json();
           if (verifyTransaction.status !== 200) {
             alert('Payment was unsuccessful. Please Try Again')
           } else {
            closePaymentModal();  // this will close the modal programmatically
            history.push('/');
           }
          } catch (error) {
            history.push('/');
          }
        },
        onClose: () => {
          history.push('/');
        },
      });
  };

  useEffect(() => {
    paymentGateway();
    // return () => {
    //   mounted.current = false;
    // };
  });

  return (
    <div>
      <div>Please Wait While we setup everything...</div>
    </div>
  );
};

export default Flutterwave;