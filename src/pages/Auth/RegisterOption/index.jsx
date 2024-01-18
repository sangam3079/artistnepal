import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../constants/routes';

import Footer from '../../../components/Layouts/Footer';

import './styles.scss';
import logo from "../../../assets/images/logoartist.png";
import artistManager from '../../../assets/images/artist-manager.jpg';
import musicLabel from '../../../assets/images/music-label.jpg';
import registerOptionImageFooter from '../../../assets/images/register-option-image-footer.png';

export default ({}) => {
  return (
    <div className='registeroption'>
      <div className='registeroption_header'>
        <div className='registeroption_header_logo'>
          <Link to={'/'}>
            <img src={logo} />
          </Link>
        </div>
        <div className='registeroption_header_button'>
          Already part of team? <Link to={routes.LOGIN_V2}>Login</Link>
        </div>
      </div>
      <div className='registeroption_container'>
        <div className='registeroption_container_title'>
          Get Songs Nepal for Artists
        </div>
        <div className='registeroption_container_subtitle'>
          Tell us who you are.
        </div>
        <div className='registeroption_container_list'>
          <Link to={routes.SIGNUP_V2.replace(':registerType', 'artist')}>
            <div className='registeroption_container_list_single'>
              <img className='registeroption_container_list_single_fullimage' src={artistManager} />
              <img className='registeroption_container_list_single_bottomimage' src={registerOptionImageFooter} />
              <div className='registeroption_container_list_single_bottomtext'>
                Artist or Manager
              </div>
            </div>
          </Link>
          <Link to={routes.SIGNUP_V2.replace(':registerType', 'company')}>
            <div className='registeroption_container_list_single'>
              <img className='registeroption_container_list_single_fullimage' src={musicLabel} />
              <img className='registeroption_container_list_single_bottomimage' src={registerOptionImageFooter} />
              <div className='registeroption_container_list_single_bottomtext'>
                Music Label or Company
              </div>
            </div>
          </Link>
        </div>
        <div className='registeroption_container_link'>
          Not sure which to choose?
        </div>
      </div>
      <Footer />
    </div>
  );
}