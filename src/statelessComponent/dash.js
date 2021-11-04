import React, { useState } from 'react';

import TransCard from './transCard';
import Modal from './modal';
import NavModel from './navModal';

import '../css/dash.css';

const Dash = () => {
  const [isClose, setIsClose] = useState(false);

  const closeModal = () => {
    setIsClose(false);
  };

  const openModal = () => {
    setIsClose(!isClose);
  };
  return (
    <div className='dash-body'>
      {/* <NavModel /> */}
      <div className='dash-hd'>
        <div className='harm-hd'>
          <button>Menu</button>
        </div>
        <div className='logo-hd'>
          <h3>LOGO</h3>
        </div>
      </div>
      <div className='wallet-card-section section pt-1'>
        <div className='wallet-card' >
          <div className='balance'>
            <div className='left' onClick={closeModal}>
              <span className='title'>Total Balance</span>
              <h1 className='total'>$ 2,562.50</h1>
            </div>
            <div className='right'>
              <a href='#' className='button'>
                <button className='add' onClick={openModal}>Add Money</button>
              </a>
            </div>
          </div>
          <div className='wallet-footer'>
            <div className='item'>
              <div className='item'>
                <button className='item-wt'>Withdraw Money</button>
              </div>
              <div className='item'>
                <button className='item-sd'>Send Money</button>
              </div>
              {/* <div className='item'>
                <button>Card</button>
              </div> */}
            </div>
          </div>
          <div className='trans-card'>
            <div className='sm-card'>
              <span className='title align-center'>Income</span>
              <h1 className='total align-center'>$300</h1>
            </div>
            <div className='sm-card'>
              <span className='title align-center'>Income</span>
              <h1 className='total align-center'>$300</h1>
            </div>
          </div>
          <div className='trans-card'>
            <div className='sm-card'>
              <span className='title align-center'>Income</span>
              <h1 className='total align-center'>$300</h1>
            </div>
            <div className='sm-card'>
              <span className='title align-center'>Income</span>
              <h1 className='total align-center'>$300</h1>
            </div>
          </div>
          <h2 className='trans-head'>Transactions</h2>
          <TransCard />
          <TransCard />
          <TransCard />
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
      <Modal isClose={isClose} />
    </div>
  );
};

export default Dash;