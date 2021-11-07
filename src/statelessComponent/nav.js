import React from 'react';

import '../css/nav.css';

const Nav = () => {
  return (
    <div>
      <header className='transition'>
        <div className='nav-container'>
          <div className='nav-section'>
            <div className='logo'>
              <h1 style={{color: 'yellow'}}>BINANCE FX CRYPTO</h1>
            </div>
            <div className='sg-lg-bt'>
              <div className='sg-div'>
                <button className='signup'>SignUp</button>
              </div>
              <div className='lg-div'>
                <button className='login'>LogIn</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;