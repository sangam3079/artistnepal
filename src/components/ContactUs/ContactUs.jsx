import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import routes from "../../constants/routes";
import ApplicationLayout from '../Layouts/ApplicationLayout'
import '../../styles/contact-us.scss'
import {fontStyles} from '../../styles/fonts'
import locationIcon from '../../assets/Icons/Icon material-location-on.png'
import callIcon from '../../assets/Icons/Icon ionic-ios-call.png'
import mailIcon from '../../assets/Icons/mail.png'
import instaIcon from '../../assets/Icons/Icon awesome-instagram.png'
import twitterIcon from '../../assets/Icons/Icon awesome-twitter.png'
import fbIcon from '../../assets/Icons/fb.png'
import { Col, Form, Input, message, Row } from "antd";
import SpinButton from "../Common/SpinButton";

const { TextArea } = Input;




const ContactUs = () => {

	const history = useHistory();

	const [url, setUrl] = useState('mailto:stagingsongsnepal@gmail.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   //console.log(data)

    const handleClick = (e) => {
       e.preventDefault();
      window.open(`mailto:stagingsongsnepal@gmail.com?subject=${'conatct message'}
			&body= Name:${name}  
			Email:${email}  
			Message:${message}`);
			history.push('/')
    }
    
	return (
		<ApplicationLayout>
			<div className="contact-us">
				<p style={{...fontStyles.large, color: "#FFFFFF"}}>Contact us</p>
				<p style={{...fontStyles.mediumRegular, color: "#FFFFFFCC", marginTop:"-3%"}}>We'll be happy to answer any of your questions</p>
			</div>
			<div className="container">
				<div className="container-info">
					<div className="container-info-title">
					<h1 style={{...fontStyles.largeSemiBold}}>Our address</h1>
					<p style={{...fontStyles.mediumRegular, color:"#99999F"}}>Fill up the form and our team will get back to you.</p>
					</div>
					<div className="container-info-main">
					<div style={{...fontStyles.mediumRegular, color: "#04158566" }} className="container-info-main-location">
					  <img src={locationIcon} alt='location' />
					  <p>	Uttar Dhoka, Lazimpat <br/> Kathmandu, Nepal </p>
					</div>
					<div style={{...fontStyles.mediumRegular, color:"#99999F"}} className="container-info-main-contact">
						<img src={mailIcon} alt='mail' />
						contact@songsnepal.com
					</div>
					<div style={{...fontStyles.mediumRegular, color:"#04158566"}} className="container-info-main-contact">
						<img src={callIcon} alt='call' />
						+977-01-4419229
					</div>
					</div>
					<div className="container-info-socialLinks">
						<div className="container-info-socialLinks-icon">
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://www.facebook.com/SongsNepal"
						>
							<img src={fbIcon} alt='fb' />
						</a>
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://twitter.com/SongsNepal"
						>
							<img src={twitterIcon} alt='twitter' />
						</a>
						<a
							target="_blank"
							rel="noreferrer noopener"
							href="https://www.instagram.com/songsnepal/"
						>
							<img src={instaIcon} alt='instagram' />
						</a>
						</div>
						<div style={{color:"#99999F"}} className="container-info-socialLinks-footer">
						  SongsNepal App - Operated & Owned by Geet Sangeet Pvt. Ltd.
						</div>
					</div>
				</div>
				<div className="container-form">
					<div className="container-form-main">
						<div className="container-form-main-content">
							<p style={{...fontStyles.mediumRegular}}> Your name </p>
							<div className="container-form-main-content-input">
							<Input placeholder="" bordered={false} onChange={e => setName(e.target.value)} />
							</div>
						</div>
						<div className="container-form-main-content">
							<p style={{...fontStyles.mediumRegular}}> Email </p>
							<div className="container-form-main-content-input">
							<Input placeholder=""  bordered={false} onChange={e=> setEmail(e.target.value)} />
							</div>
						</div>
						<div className="container-form-main-content">
							<p style={{...fontStyles.mediumRegular}}> Message </p>
							<div className="container-form-main-content-inputMessage">
							<Input rows={4} bordered={false} onChange={e => setMessage(e.target.value)} />
							</div>
						</div>
						
						<SpinButton
							text="Send Message"
							className="sendMessageBtn"
							style={{...fontStyles.mediumRegular}}
							//onSubmit={sendMessage}
							type='submit' 
							onClick={handleClick} 
						/>
						
					</div>
			</div>
		</div>	
		</ApplicationLayout>
	)
}

export default ContactUs
