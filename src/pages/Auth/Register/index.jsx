import React, {useState} from 'react';

import routes from '../../../constants/routes';

import AuthCardLayout from '../../../components/Layouts/AuthCardLayout';
import TextInput from '../../../components/Input/TextInput';
import PasswordInput from '../../../components/Input/PasswordInput';
import PrimaryButton from '../../../components/Button/PrimaryButton';

import './styles.scss';

export default ({history, match}) => {
  const {registerType} = match.params;
  if (registerType !== 'artist' && registerType !== 'company') {
    history.push(routes.REGISTER);
  }

  const [formData, setFormData] = useState({firstName: '', lastName: '', musicCompanyName: '', email: '', password: ''});

  const changeFormData = event => {
    const {name, value} = event.target;

    setFormData({...formData, [name]: value});
  }

  return (
    <AuthCardLayout backLink={'/register'}>
      <div className='register'>
        <div className='register_title'>
          Create an account
        </div>
        <div className='register_form'>
          <div className='register_form'>
            <div className='register_form_title'>
              Sign up with your email.
            </div>
            <div className='register_form_body'>
                <div className='register_form_body_row'>
                  <div className='register_form_body_row_input'>
                    <TextInput type={'text'} icon={'user'} name={'firstName'} value={''} placeholder={'First Name'} onChange={changeFormData} />
                  </div>
                  <div className='register_form_body_row_input'>
                    <TextInput type={'text'} icon={'user'} name={'lastName'} value={''} placeholder={'Last Name'} onChange={changeFormData} />
                  </div>
                </div>
                {registerType === 'company' ? 
                  <div className='register_form_body_input'>
                    <TextInput type={'text'} icon={'user'} name={'musicCompanyName'} value={''} placeholder={'Music Company Name'} onChange={changeFormData} />
                  </div>
                : null}
                <div className='register_form_body_input'>
                  <TextInput type={'text'} icon={'email'} name={'email'} value={''} placeholder={'Email'} onChange={changeFormData} />
                </div>
                <div className='register_form_body_input'>
                  <PasswordInput name={'password'} value={''} placeholder={'Password'} onChange={changeFormData} />
                </div>
                <div className='register_form_body_button'>
                  <PrimaryButton title={'SIGN UP'} onClick={() => console.log('submit')} />
                </div>
              </div>
          </div>
        </div>
      </div>
    </AuthCardLayout>
  );
}