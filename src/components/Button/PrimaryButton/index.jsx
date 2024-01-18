import React from 'react';

import './styles.scss';

export default ({ title, onClick }) => {
  return (
    <div className='primarybutton'>
      <button className='primarybutton_button' onClick={onClick}>{title}</button>
    </div>
  );
}