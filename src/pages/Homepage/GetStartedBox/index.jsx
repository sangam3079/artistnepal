import React, { useState } from 'react';

import './styles.scss';

export default ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`getstartedbox ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className='getstartedbox_text'>
          <div className='getstartedbox_text_title'>
            {title}
          </div>
          <div className='getstartedbox_text_description' style={{display: isOpen ? 'block' : 'none', maxHeight: isOpen ? 'fit-content' : '0'}}>
            {description}
          </div>
        </div>
        <div className='getstartedbox_icon'>
          {isOpen ? '-' : '+'}
        </div>
    </div>
  );
}