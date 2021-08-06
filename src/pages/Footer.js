import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'
import schoolLogo from '../etherion.png'

function Footer() {
    return (
        <div className='footer-container'>
          <section className='footer-subscription'>
            <p className='footer-subscription-text'>
              Receive announcements from the University
            </p>
            <div className='input-areas'>
              <form>
                <input
                  className='footer-input'
                  name='email'
                  type='email'
                  placeholder='Your Email'
                />
                <Button buttonStyle='btn--outline'>Get Updates</Button>
              </form>
            </div>
          </section>
          <section className='social-media'>
            <div className='social-media-wrap'>
              <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                  EU
                  <img src={schoolLogo} alt="Icon"/>
                </Link>
              </div>
              <small className='website-rights'>Etherion University © 2020</small>
              <div className='social-icons'>
                <Link
                  className='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i className='fab fa-facebook-f' />
                </Link>               
              </div>
            </div>
          </section>
        </div>
      );
}

export default Footer
