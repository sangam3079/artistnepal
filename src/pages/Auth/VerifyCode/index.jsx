import React from 'react';
import { Link } from 'react-router-dom';
import ReactCodeInput from 'react-code-input';

import routes from '../../../constants/routes';

import './styles.scss';
import logo from '../../../assets/images/logoartist.png';
import arrowLeft from '../../../assets/images/arrow-left.png';
import verifyCode from '../../../assets/images/verify-code.png';

export default ({}) => {
  return (
    <div className='verifycode'>
      <div className='verifycode_container'>
        <div className='verifycode_container_header'>
          <div className='verifycode_container_header_logo'>
            <img src={logo} />
          </div>
          <div className='verifycode_container_header_button'>
            <Link to={routes.LOGIN_V2}>
              <img className='verifycode_container_header_button_image' src={arrowLeft} />
              Back
            </Link>
          </div>
        </div>
        <div className='verifycode_container_image'>
          <img src={verifyCode} />
        </div>
        <div className='verifycode_container_title'>
          Enter code sent to your email
        </div>
        <div className='verifycode_container_subtitle'>
          A confirmation code has been sent to your email
        </div>
        <div className='verifycode_container_input'>
          <ReactCodeInput type={'number'} fields={4} onChange={(e) => console.log(e.length)} placeholder={'0'} inputStyle={{border: 'none'}} autoFocus />
        </div>
        <div className='verifycode_container_footer'>
          <div className='verifycode_container_footer_text'>
            It may take a minute to receive your code. Haven't received it? Resend a new code.
          </div>
          <div className='verifycode_container_footer_button'>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}