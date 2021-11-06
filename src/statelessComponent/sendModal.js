import React, { useState, useEffect } from 'react';

import '../css/modal.css';

const SendModal = ({ 
  sendModalClose, 
  walletAddress,
  amount,
  onAmount,
  onWalletAddress,
  investment,
  onInvestment,
}) => {
  const[bene, setBene] = useState('');
  const[send, setSend] = useState('');
  const[loading, setLoading] = useState(false);
  const[id, setId] = useState('');

  useEffect(() => {
    const beneficiary = async () => {
      const url = 'https://crypto-backend1.herokuapp.com/api/user/receipient';
  
      const body = {
        wallet: walletAddress,
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
          console.log(response);
          setId(response.id);
          return setBene(response.user)
        } else {
          return setBene(response.message);
        }
    };

    beneficiary();
  }, [walletAddress])

  const sendFunc = async () => {
    const url = 'https://crypto-backend1.herokuapp.com/api/user/receipient';
  
      const body = {
        id,
        plan: investment,
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
          setSend(response.message);
          sendModalClose = false;
          return;
        }
  };

  return (
    <div>
      <div className={sendModalClose ? 'modalOpen' : 'modalClose'}>
        <div className='modal-head'>
          <h1 style={{ fontSize: '25px', paddingTop: '20px'}}>Send Money</h1>
        </div>
        <div className='modal-body'>
          <div className='modal-input'>
            <label className='modal-text'>Wallet Address</label>
            <br/>
            <input type='text' className='mdIn' value={walletAddress} onChange={onWalletAddress} />
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Name</label>
            <br/>
            <input type='text' className='mdIn' disabled value={bene}/>
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Investment Plan</label>
            <br/>
            <select name="job-category"
              value={investment}
              onChange={onInvestment}
              className='mdIn'>
                <option value="">Choose Investment Plan</option>
                <option value="gold">Gold</option>
                <option value="diamond">Diamond</option>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
            </select>
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Amount</label>
            <br/>
            <input type='number' className='mdIn' value={amount} onChange={onAmount}/>
          </div>
        </div>
        <div className='modal-bt'>
          <button className='deposit'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default SendModal;