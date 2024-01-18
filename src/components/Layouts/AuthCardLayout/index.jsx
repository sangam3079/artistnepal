import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logoWhite from "../../../assets/images/Logo/logo-secondary.png";
import logo from "../../../assets/images/logoartist.png";
import arrowLeft from '../../../assets/images/arrow-left.png';

export default ({children, backLink}) => {
  return (
    <div className='authcardlayout'>
      <div className='authcardlayout_container'>
        <div className='authcardlayout_container_left'>
          <div className='authcardlayout_container_left_overlay'/>
          <img className='authcardlayout_container_left_image' src={logoWhite} />
        </div>
        <div className='authcardlayout_container_right'>
          <div className='authcardlayout_container_right_title'>
            <div className='authcardlayout_container_right_title_logo'>
              <Link to={'/'}>
                <img src={logo} />
              </Link>
            </div>
            {backLink ? 
              <div className='authcardlayout_container_right_title_button'>
                <Link to={backLink}>
                  <img className='authcardlayout_container_right_title_button_image' src={arrowLeft} />
                  Back
                </Link>
              </div>
            : null}
          </div>
          <div className='authcardlayout_container_right_body'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}