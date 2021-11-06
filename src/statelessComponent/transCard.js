import React from 'react';

const TransCard = ({ status, amount}) => {
  return (
    <div>
      <div className='lg-card'>
        <p className='trans-name'>{status}</p>
        <p className='processing'>- ${amount}</p>
      </div>
    </div>
  );
};

export default TransCard;