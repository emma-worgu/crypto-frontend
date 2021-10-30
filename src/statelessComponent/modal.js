import React from 'react';

import '../css/modal.css';

const Modal = ({ isClose }) => {
  return (
    <div>
      <div className={isClose ? 'modalOpen' : 'modalClose'}>
        <div className='modal-head'>
          <h1 style={{ fontSize: '25px', paddingTop: '20px'}}>Add Money</h1>
        </div>
        <div className='modal-body'>
          <div className='modal-input'>
            <label className='modal-text'>Account Number</label>
            <br/>
            <input type='number' className='mdIn' />
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Routing Number</label>
            <br/>
            <input type='number' className='mdIn'/>
          </div>
          <div className='modal-input'>
            <label className='modal-text'>Amount</label>
            <br/>
            <input type='number' className='mdIn'/>
          </div>
        </div>
        <div className='modal-bt'>
          <button className='deposit'>Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;