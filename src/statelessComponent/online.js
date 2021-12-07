import React from 'react';
import { useHistory } from 'react-router-dom';
import Flutter from '../statefulComponent/Flutterwave';

import heroku from '../assest/heroku_logo.png';

import '../css/online.css';

const Online = () => {
  const history = useHistory();

  const onSubmit = () => {
    history.push('/pay');
  };

  return (
    <div className='online_body'>
      <div className='online_img'>
        <img src={heroku} alt='heroku_logo' width='400px' height='200px' />
      </div>
      <div>
        <h2 className='online_hd'>Your Bandwidth has expired!!!</h2>
        <h3 className='online_hd'>Please click on the button below to Upgrade bandwidth or contact the system administrator.</h3>
        <div className='online_hd'>
          <button className='online_bt' onClick={onSubmit}><b className='bt_txt'>UPGRADE BANDWIDTH</b></button>
        </div>
      </div>
    </div>
  );
};

export default Online;