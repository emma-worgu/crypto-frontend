import React from 'react';

import Nav from './nav';
import '../css/home.css';

import Banner from '../assest/banner-png.png';
import Process from '../assest/work-process.png';
import Safe from '../assest/feature-safe.png';
import Bonus from '../assest/feature-bonus.png';
import Access from '../assest/feature-access.png';
import Cost from '../assest/feature-cost.png';
import Profit from '../assest/feature-profit.png';
import Storage from '../assest/feature-storage.png';
import Team1 from '../assest/team-1.jpg';
import Team2 from '../assest/team-2.jpg';
import Team3 from '../assest/team-3.jpg';
import Team4 from '../assest/team-4.jpg';

const Home = () => {
  return (
    <div>
      <Nav />
      <div>
        <section className='home-banner'>
          <div className='container'>
            <div className='hero-txt fadeInLeft animation position'>
              <h1 className='banner-head'>SIMPLE. SECURE. WAY TO INVEST IN CRYPTO</h1>
              <p className='banner-des'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
              <div className='banner-bt-div'>
                <a href='#'>
                  <button className='banner-bt'>Learn More</button>
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
              <p className='heading-des'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
            </div>
          </div>
          <div className='work-process'>
            <div className='fadeInLeft animation text-align'>
              <img src={Process} alt='' className='rotation-img' />
            </div>
            <div className='fadeInRight animation'>
              <h3 className='work-process-title'>We’ve built a platform to buy and sell shares.</h3>
              <p className='work-process-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
              <ul className='check-list'>
                <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting</p></li>
                <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting</p></li>
                <li><p>Lorem Ipsum is simply dummy text of the printing and typesetting</p></li>
              </ul>
            </div>
          </div>
        </section>
        <section className='feature-sect'>
          <div className='fadeInUp animation'>
            <div className='heading-div' style={{ paddingBottom: 65, }}>
              <label></label>
              <h2 className='heading-title'>Best Features</h2>
              <p className='heading-des'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
            </div>
            <div className='row'>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Safe} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Safe & Secure</h2>
                  <p className='feature-des' >Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Bonus} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Early Bonus</h2>
                  <p className='feature-des' >Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Access} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Universal Access</h2>
                  <p className='feature-des' >Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
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
                  <p className='feature-des'>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Cost} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Low Cost</h2>
                  <p className='feature-des'>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
                </div>
              </div>
              <div className='feature-div'>
                <div className='feature-des'>
                  <img src={Profit} alt='safe' />
                </div>
                <div>
                  <h2 className='feature-des'>Several Profit</h2>
                  <p className='feature-des'>Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, labore et.Lorem ipsum dolor sit amet. </p>
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
              <p className='heading-des'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
            </div>
            <div className='team animation fadeInLeft'>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team1} alt='' style={{ maxWidth: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>John Doe</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
                </div>
              </div>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team2} alt='' style={{ maxWidth: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>John Doe</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
                </div>
              </div>
            </div>
            <div className='team animation fadeInRight'>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team3} alt='' style={{ maxWidth: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>John Doe</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
                </div>
              </div>
              <div className='team-div'>
                <div className='team-img'>
                  <img src={Team4} alt='' style={{ maxWidth: '100%'}}/>
                </div>
                <div className='team-des'>
                  <h2 className='member'>John Doe</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor it amet, consectetur</p>
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
  );
};

export default Home;