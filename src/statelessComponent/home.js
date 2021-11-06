import React from 'react';

import Nav from './nav';
import Telegram from './telegram';
import '../css/home.css';

import Banner from '../assest/banner-png.png';
import Process from '../assest/work-process.png';
import Safe from '../assest/feature-safe.png';
import Bonus from '../assest/feature-bonus.png';
import Access from '../assest/feature-access.png';
import Cost from '../assest/feature-cost.png';
import Profit from '../assest/feature-profit.png';
import Storage from '../assest/feature-storage.png';
import Team1 from '../assest/frank.jpg';
import Team2 from '../assest/glad.jpg';
import Team3 from '../assest/richard.jpg';
import Team4 from '../assest/team-4.jpg';

const Home = () => {
  return (
    <div>
      <div className='home-body'>
      <Nav />
      <div>
        <section className='home-banner'>
          <div className='container'>
            <div className='hero-txt fadeInLeft animation position'>
              <h1 className='banner-head'>SIMPLE. SECURE. WAY TO INVEST IN CRYPTO</h1>
              <p className='banner-des'>BINANCE FX CRYPTO is an EASY, SECURE way to invest in crytocurrency and recieve high ROI</p>
              <div className='banner-bt-div'>
                <a href='/register'>
                  <button className='banner-bt'>INVEST NOW</button>
                </a>
              </div>
            </div>
            <div className='hero-img animation fadeInRight position'>
              <div className='banner-img text-align'>
                <img src={Banner} alt='' />
              </div>
            </div>
          </div>
        </section>
        <section className='work-part hd'>
          <div className='hd'>
            <div className='heading-div'>
              <label></label>
              <h2 className='heading-title'>How it Works</h2>
              <p className='heading-des'>We have really made investing in cryptocurrency very easy. Just follow these steps to earn high rotation</p>
            </div>
          </div>
          <div className='work-process'>
            <div className='fadeInLeft animation text-align'>
              <img src={Process} alt='' className='rotation-img' />
            </div>
            <div className='fadeInRight animation'>
              <h3 className='work-process-title'>We’ve built a platform to invest in Crytocurrency.</h3>
              <p className='work-process-p'>As binancefxcrypto.com showed exceptional execution and fundamentally extended its advantages in the past period, it was chosen to begin offering its venture items through particular online administrations.</p>
              <ul className='check-list'>
                <li><p>Register On Our Website As An Investor</p></li>
                <li><p>Log In & Open In Your Personal Account</p></li>
                <li><p>We Provide Best Investment Plans Deposit Your Amount</p></li>
                <li><p>Withdraw Your Profit In Your Personal Account</p></li>
              </ul>
            </div>
          </div>
        </section>
        <section className='feature-sect'>
          <div className='fadeInUp animation'>
            <div className='heading-div' style={{ paddingBottom: 65, }}>
              <label></label>
              <h2 className='heading-title'>Best Features</h2>
              <p className='heading-des'>Our features make that us stand out in the market.</p>
            </div>
            <div className='row'>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Safe} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Safe & Secure</h2>
                  <p className='feature-des' >Stored in a safe place, a backup of your wallet can protect you against computer failures and many human mistakes and encrypted using advance technologies</p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Bonus} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Early Bonus</h2>
                  <p className='feature-des' >We give our investors early bonus to all our product and services. So you earn we earn!!</p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Access} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Universal Access</h2>
                  <p className='feature-des' >You can access and withdraw your profit wherever you are so long you have access to the internet.</p>
                </div>
              </div>
            </div>
            <div className='row' style={{ paddingBottom: 65, }}>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Storage} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Secure Storage</h2>
                  <p className='feature-des'>All of your information is stored securely on our database using cryptographic technology</p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Cost} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Low Cost</h2>
                  <p className='feature-des'>We offer the best price in the market.</p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Profit} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Several Profit</h2>
                  <p className='feature-des'>Earn high ROI on any investment you purchase with Us</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className='heading-div' style={{ paddingBottom: 65, }}>
              <label></label>
              <h2 className='heading-title'>Our Team</h2>
              <p className='heading-des'>Meet the team behind Binance FX Crypto</p>
            </div>
            <div className='team animation fadeInLeft'>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team1} alt='' style={{ maxWidth: '100%', height: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>Frank Gibson</h2>
                  <p>Founder & CEO</p>
                </div>
              </div>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team2} alt='' style={{ maxWidth: '100%', height: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>Sonia Glad</h2>
                  <p>CFO - Chief Finance Officer</p>
                </div>
              </div>
            </div>
            <div className='team animation fadeInRight'>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team3} alt='' style={{ maxWidth: '100%', height: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>Benson Richard</h2>
                  <p>CIO - Chief Investment Officer</p>
                </div>
              </div>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team4} alt='' style={{ maxWidth: '100%', height: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>Beatrice Walter</h2>
                  <p>AG - Accountant General</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='investment'>
          <div>
            <div className='heading-div' style={{ paddingBottom: 65, }}>
              <label></label>
              <h2 className='heading-title'>Our Investment Plans</h2>
              <p className='heading-des'>Earn High Returns on any Investment you purchase with Us.</p>
            </div>
            <div className='investment-cards'>
              <div className='investment-card'>
                <div className='bronze-head'>
                  <h5>Bronze</h5>
                </div>
                <div className='bronze-body'>
                  <p>4.5% After 8 hours</p>
                  <p>10% Referral Bonus</p>
                  <p>Instant Cashback</p>
                  <p>24/7 Tech Support</p>
                  <div>
                    <button className='investment-button'>Get Started</button>
                  </div>
                </div>
              </div>
              <div className='investment-card'>
                <div className='bronze-head'>
                  <h5>Silver</h5>
                </div>
                <div className='bronze-body'>
                  <p>5.0% After 24 hours</p>
                  <p>15% Referral Bonus</p>
                  <p>Instant Cashback</p>
                  <p>24/7 Tech Support</p>
                  <div>
                    <button className='investment-button'>Get Started</button>
                  </div>
                </div>
              </div>
              <div className='investment-card'>
                <div className='bronze-head'>
                  <h5>Gold</h5>
                </div>
                <div className='bronze-body'>
                  <p>6.5% After 48 hours</p>
                  <p>20% Referral Bonus</p>
                  <p>Instant Cashback</p>
                  <p>24/7 Tech Support</p>
                  <div>
                    <button className='investment-button'>Get Started</button>
                  </div>
                </div>
              </div>
              <div className='investment-card'>
                <div className='bronze-head'>
                  <h5>Diamond</h5>
                </div>
                <div className='bronze-body'>
                  <p>7.0% After 3 days</p>
                  <p>25% Referral Bonus</p>
                  <p>Instant Cashback</p>
                  <p>24/7 Tech Support</p>
                  <div>
                    <button className='investment-button'>Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='bg-pattern'>
          <div className='footer'>
            <div className='rights'>
              <p>© Cryptcon all Rights Reserved.</p>
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
    <Telegram />
    </div>
  );
};

export default Home;