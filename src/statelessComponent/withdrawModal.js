import React, { useState } from 'react';

import '../css/modal.css';

const WithdrawModal = ({ 
  isClose,
  amount,
  accountNumber,
  routingNumber,
  onAccountNumber,
  onRoutingNumber,
  onWithdrawalAmount,
  closewithdrawalModal,
 }) => {
  const[loading, setLoading] = useState(false);
  const[message, setMessage] = useState('')

  const depoFunc = async () => {
    try {
      setLoading(true);
    const url = 'https://crypto-backend1.herokuapp.com/api/user/withdraw/';
  
      const body = {
        accountNumber,
        routingNumber,
        amount,
      };
  
        const request = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'auth-token': localStorage.getItem('jwt'),
          }
        });
  
        const response = await request.json();

        if (request.status === 200) {
          setLoading(false);
          isClose = false;
          document.location.reload();
        } else {
          setMessage(response.message);
          setLoading(false);
        }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className={isClose ? 'sendModalOpen' : 'modalClose'}>
        <div className='modal-head'>
          <h1 style={{ fontSize: '25px', paddingTop: '20px'}}>Withraw Money</h1>
        </div>
        <div className='modal-body'>
          <div className='modal-input'>
            <label className='modal-text'>Account Number</label>
            <br/>
            <input type='number' className='mdIn' value={accountNumber} onChange={onAccountNumber}/>
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Routing Number</label>
            <br/>
            <input type='number' className='mdIn' value={routingNumber} onChange={onRoutingNumber}/>
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Amount</label>
            <br/>
            <input type='number' className='mdIn' value={amount} onChange={onWithdrawalAmount}/>
          </div>
        </div>
        <div>
          <h5 className='modal-error'>{message}</h5>
        </div>
        <div className='modal-bt'>
          <div>
            <button className='deposit' onClick={depoFunc}>{loading ? 'Withdrawing...' : 'Withdraw'}</button>
          </div>
          <div>
            <button className='close' onClick={closewithdrawalModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;