import React from 'react';

import '../css/loading.css';

import LoadingImg from '../assest/Curve-Loading.gif';

const Loading = () => {
  return (
    <div className='loading-body'>
      <div className='loading-card'>
        <img src={LoadingImg} alt='' className='loading-img' />
      </div>
    </div>
  );
};

export default Loading;