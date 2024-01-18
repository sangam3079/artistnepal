import React from 'react';

import './styles.scss';
import email from '../../../assets/Icons/mail.png';
import user from '../../../assets/Icons/user.svg';

export default ({type, icon, name, value, placeholder, onChange}) => {
  const getIcon = icon => {
    if (icon === 'email') {
      return email
    }
    return user;
  }

  return (
    <div className='textinput'>
      {icon ? 
        <img className='textinput_image' src={getIcon(icon)} />
      : null}
      <input className='textinput_input' type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} style={{padding: icon ? '15px 15px 15px 45px' : '15px'}} />
    </div>
  );
}