import React, { useState } from 'react';

import TransCard from './transCard';
import Modal from './modal';
import SendModal from './sendModal';
import WithdrawModal from './withdrawModal';
import Loading from './loading';
// import NavModel from './navModal';

import '../css/dash.css';

const Dash = ({ user, loading, withdraws, }) => {
  const { name, email, accountBalance, isClient, investmentPlan, } = user;
  let profit = 0;

  if (investmentPlan === undefined) {
    profit = 0
  } else {
    profit = investmentPlan.profit;
  }

  const [isClose, setIsClose] = useState(false);
  const[walletAddress, setWalletAddress] = useState('');
  const[amount, setAmount] = useState('');
  const[investment, setInvestment] = useState('');
  const[addAmount, setAddAmount] = useState('');

  const onWalletAddress = (e) => {
    setWalletAddress(e.target.value);
  };

  const onAmount = (e) => {
    setAmount(e.target.value);
  };

  const onInvestment = (e) => {
    setInvestment(e.target.value);
  };

  const closeModal = () => {
    setIsClose(false);
  };

  const onAddAmount = (e) => {
    setAddAmount(e.target.value);
  };

  const openModal = () => {
    setIsClose(!isClose);
  };

  let [sendModalClose, setSendModalClose] = useState(false);

  const closeSendModal = () => {
    setSendModalClose(false);
  };

  const openSendModal = () => {
    setSendModalClose(!sendModalClose);
  };

  // Withdrawal Methods

  const[withdrawalModalClose, setWithdrawalModalClose] = useState(false);
  const[accountNumber, setAccountNumber] = useState('');
  const[routingNumber, setRoutingNumber] = useState('');
  const[withdrawalAmount, setWithdrawalAmount] = useState('');

  const onAccountNumber = (e) => {
    setAccountNumber(e.target.value);
  };

  const onRoutingNumber = (e) => {
    setRoutingNumber(e.target.value);
  };

  const onWithdrawalAmount = (e) => {
    setWithdrawalAmount(e.target.value);
  };
  
  // Withdrawal Methods Ends Here

  const closewithdrawalModal = () => {
    setSendModalClose(false);
  };

  const openwithdrawalModal = () => {
    setWithdrawalModalClose(!withdrawalModalClose);
  };

  const addMoney = isClient ? 'none' : 'right';
  const sendMoney = isClient ? 'Withdraw Money': 'Send Money';
  const onClick = isClient ? openwithdrawalModal : openSendModal;

  const logic = () => {
    if (withdraws.length === 0) {
      return (
        <TransCard
          status={'N/a'}
          amount={0}
        />
      );
    }
    const mappedData = withdraws.map(data => <TransCard status={data.status} amount={data.amount} />);
    return (
      <div>
        {mappedData}
      </div>
    );
  };

  if (loading) {
    return (
      <Loading />
    );
  } else {
    return (
      <div className='dash-body'>
        {/* <NavModel /> */}
        <div className='dash-hd'>
          {/* <div className='harm-hd'>
            <button>Menu</button>
          </div> */}
          <div className='logo-hd' style={{marginLeft: '10px'}}>
            <h3 style={{color: 'yellow'}}>BINANCE CRYPTO FX</h3>
          </div>
        </div>
        <div className='wallet-card-section section pt-1'>
          <div className='wallet-card' >
            <div className='balance'>
              <div className='left' onClick={closeModal}>
                <h2 className='total' style={{ color: 'green'}}>Hi, {name}</h2>
                <span className='title'>Total Balance</span>
                <h1 className='total'>$ {accountBalance}</h1>
              </div>
              <div className={addMoney}>
                <a href='#' className='button'>
                  <button className='add' onClick={openModal}>Add Money</button>
                </a>
              </div>
            </div>
            <div>
                <h4>Your Wallet Address: <p style={{color: 'green'}}>{user.walletAddress}</p></h4>
              </div>
            <div className='wallet-footer'>
              <div className='item'>
                <div className='item'>
                  <button className={isClient ? 'item-wt' : 'item-sd'} onClick={onClick}>{sendMoney}</button>
                </div>
                {/* <div className='item'>
                  <button className='item-sd'>Send Money</button>
                </div> */}
                {/* <div className='item'>
                  <button>Card</button>
                </div> */}
              </div>
            </div>
            <div className='trans-card'>
              <div className='sm-card'>
                <span className='title align-center'>Investment</span>
                <h1 className='total align-center'>$ {accountBalance}</h1>
              </div>
              <div className='sm-card'>
                <span className='title align-center'>Profit Balance</span>
                <h1 className='total align-center'>$ {isNaN(accountBalance * profit) ? 0 :  accountBalance * profit}</h1>
              </div>
            </div>
            <div className='trans-card'>
              <div className='sm-card'>
                <span className='title align-center'>Withdrawals</span>
                <h1 className='total align-center'>{withdraws.length}</h1>
              </div>
              <div className='sm-card'>
                <span className='title align-center'>Referrals</span>
                <h1 className='total align-center'>0</h1>
              </div>
            </div>
            <h2 className='trans-head'>Withrawals</h2>
            {logic()}
            <footer>
              <div className='footer'>
                <div className='rights'>
                  <p>All Rights Reserved</p>
                </div>
                <div>
                  <ul className='footer-list'>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <Modal 
          isClose={isClose}
          amount={addAmount}
          onAddAmount={onAddAmount}
        />
        <SendModal 
          isClose={sendModalClose}
          walletAddress={walletAddress}
          amount={amount}
          investment={investment}
          onAmount={onAmount}
          onWalletAddress={onWalletAddress}
          onInvestment={onInvestment}
        />
        <WithdrawModal
          isClose={withdrawalModalClose}
          accountNumber={accountNumber}
          routingNumber={routingNumber}
          amount={withdrawalAmount}
          onAccountNumber={onAccountNumber}
          onRoutingNumber={onRoutingNumber}
          onWithdrawalAmount={onWithdrawalAmount}
        />
      </div>
    );
  }
};

export default Dash;