import React from 'react';

import Nav from './nav';
import '../css/home.css';

import Banner from '../assest/banner-png.png';

const Home = () => {
  return (
    <div>
      <Nav />
      <div>
        <section className='home-banner'>
          <div className='container'>
            <div className='hero-txt'>
              <h1>Invest In Crypto Way</h1>
            </div>
            <div className='hero-img'>
              <img src={Banner} alt='' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;