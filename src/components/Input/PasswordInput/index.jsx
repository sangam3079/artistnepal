import React from 'react';

import './styles.scss';
import passwordLogo from '../../../assets/Icons/password.png';

export default ({type, name, value, placeholder, onChange}) => {
  return (
    <div className='passwordinput'>
      <img className='passwordinput_image' src={passwordLogo} />
      <input className='passwordinput_input' type={'password'} name={name} value={value} placeholder={placeholder} onChange={onChange} />
      {/* <img className='passwordinput_image' src={emailLogo} /> */}
    </div>
  );
}