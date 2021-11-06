import React from 'react';

import '../css/errorModal.css';

const ErrorModal = ({ error, closeError }) => {
  const { message, isError } = error;

  const errorClass = isError ? 'error-body' : 'error-none';
  
  return (
    <div className={errorClass}>
      <div className='error-card'>
        <h2 className='error-header'>Error</h2>
        <p className='error-para'>{message}</p>
        <div className='error-bt-body'>
          <button className='error-bt' onClick={closeError}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;