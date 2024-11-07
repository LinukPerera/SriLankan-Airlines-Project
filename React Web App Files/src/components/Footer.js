import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Keeping Data Backups is a Recomemnded Best Practice
        </p>
        <p className='footer-subscription-text'>
          View and Save Recorded Data.
        </p>
        <div className='input-areas'>
          
            
            <Button buttonStyle='btn--outline'>DATA</Button>
          
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/user-manual'>How it works</Link>
            <Link to='/contact'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/user-manual'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/srilankanairlinesofficial/?hl=en'>Instagram</Link>
            <Link to='https://web.facebook.com/flysrilankan/?_rdc=1&_rdr'>Facebook</Link>
            <Link to='https://www.youtube.com/@iflysrilankan'>Youtube</Link>
            <Link to='https://x.com/flysrilankan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='' className='social-logo'>
              SriLankan Airlines
              {/*<i class='fab fa-typo3' />*/}
            </Link>
          </div>
          <small class='website-rights'>SriLankan Airlines 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://web.facebook.com/flysrilankan/?_rdc=1&_rdr'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/srilankanairlinesofficial/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com/@iflysrilankan'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://x.com/flysrilankan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/company/flysrilankan/mycompany/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;