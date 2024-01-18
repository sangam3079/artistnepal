import React from 'react';

import './styles.scss';

export default ({ image, title, titleColor, onClick }) => {
  return (
    <div className='outlinebutton'>
      <button className='outlinebutton_button' onClick={onClick} style={{color: titleColor ? titleColor : '#302E2E'}}>
        <img className='outlinebutton_button_image' src={image}/>
        {title}
      </button>
    </div>
  );
}