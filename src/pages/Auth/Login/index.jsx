import React,{useState} from 'react';

import routes from '../../../constants/routes';

import AuthCardLayout from '../../../components/Layouts/AuthCardLayout';
import TextInput from '../../../components/Input/TextInput';
import PasswordInput from '../../../components/Input/PasswordInput';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import OutlineButton from '../../../components/Button/OutlineButton';

import './styles.scss';
import googleLogo from '../../../assets/Icons/google.png';
import facebookLogo from '../../../assets/Icons/fb.png';
import { Link } from 'react-router-dom';

export default ({}) => {
  const [formData, setFormData] = useState({email: '', password: ''});

  const changeFormData = event => {
    const {name, value} = event.target;

    setFormData({...formData, [name]: value});
  }

  return (
    <AuthCardLayout>
      <div className='login'>
        <div className='login_title'>
          Lets sign you in
        </div>
        <div className='login_form'>
          <div className='login_form_title'>
            Sign in with your email.
          </div>
          <div className='login_form_body'>
              <div className='login_form_body_input'>
                <TextInput type={'text'} icon={'email'} name={'email'} value={formData.email} placeholder={'Email'} onChange={changeFormData} />
              </div>
              <div className='login_form_body_input'>
                <PasswordInput name={'password'} value={formData.password} placeholder={'Password'} onChange={changeFormData} />
              </div>
              <div className='login_form_body_link'>
                Forget your password?
              </div>
              <div className='login_form_body_button'>
                <PrimaryButton title={'LOGIN'} onClick={() => console.log('submit')} />
              </div>
            </div>
        </div>
        <div className='login_list'>
          <div className='login_list_title'>
            You can also use social login if you haven't registered your account
          </div>
          <div className='login_list_container'>
            <OutlineButton image={googleLogo} title={'Login With Google'} titleColor={'#DB4437'} />          
          </div>
          <div className='login_list_container'>
            <OutlineButton image={facebookLogo} title={'Login With Facebook'} titleColor={'#4267B2'} />          
          </div>
        </div>
        <div className='login_link'>
          Don't have an account? <Link to={routes.REGISTER}>Sign Up</Link>          
        </div>
      </div>
    </AuthCardLayout>
  );
}