import React from 'react';

import TelegramImg from '../assest/telegram.jpg';

import '../css/telegram.css';

const Telegram = () => {
  return (
    <div className='tele-body'>
      <a href='https://t.me/joinchat/VS-a8SXWdqo0M2U0' target='blank'>
        <img src={TelegramImg} alt='' className='tele-img' width='60px' height='10px' />
      </a>
    </div>
  );
};

export default Telegram;