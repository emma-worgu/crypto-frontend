import React, { useState, useEffect } from 'react';

import '../css/modal.css';

const SendModal = ({ 
  isClose,
  walletAddress,
  amount,
  investmentBalance,
  onAmount,
  onWalletAddress,
  investment,
  onInvestment,
  onInvBalance,
  closeSendModal,
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
          setId(response.id);
          return setBene(response.user)
        } else {
          return setBene(response.message);
        }
    };

    beneficiary();
  }, [walletAddress])

  const sendFunc = async () => {
    try {
      setLoading(true);
    // const url = 'https://crypto-backend1.herokuapp.com/api/user/transfer/';
    const url = document.location.origin === 'http://localhost:3000' ? 'http://localhost:5000/api/user/transfer/' : 'https://crypto-backend1.herokuapp.com/api/user/transfer/';

    console.log(url);
  
      const body = {
        id,
        plan: investment,
        amount,
        investmentBalance,
      };
  
        const request = await fetch(url, {
          method: 'PUT',
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
          setLoading(false);
          setSend(response.message);
        }
    } catch (error) {
      setSend('Something Went Wrong!!');
      setLoading(false);
    }
  };


  return (
    <div>
      <div className={isClose ? 'sendModalOpen' : 'modalClose'}>
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
            <label className='modal-text'>Profit</label>
            <br/>
            <input type='number' className='mdIn' value={amount} onChange={onAmount}/>
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Investment</label>
            <br/>
            <input type='number' className='mdIn' value={investmentBalance} onChange={onInvBalance}/>
          </div>
        </div>
        <div>
          <h5 className='modal-error'>{send}</h5>
        </div>
        <div className='modal-bt'>
          <div>
            <button className='deposit' onClick={sendFunc}>{loading ? 'Sending...' : 'Send'}</button>
          </div>
          <div>
            <button className='close' onClick={closeSendModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendModal;