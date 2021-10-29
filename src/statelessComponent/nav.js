import React from 'react';

import '../css/nav.css';

const Nav = () => {
  return (
    <div>
      <header className='transition'>
        <div className='container'>
          <div className='nav-section'>
            <div className='logo'>
              <h1>LOGO</h1>
            </div>
            {/* <div>
              HOME
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;