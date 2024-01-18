import React from 'react'
import {Link} from 'react-router-dom'
import './navbarstyles.scss'
import logo from '../../../assets/images/Logo/logo.png'
import bellIcon from '../../../assets/Icons/bell (1).png'
import { BellOutlined, SettingOutlined } from '@ant-design/icons'


function index() {
    return (
        <div className="NavBar">
            <div className="logo">
                <img src={logo} alt='logo' className="logo-img" />
            </div>
            <div className="actionItems">
                <img src={bellIcon} alt='notification' className="actionItems-notification" />
                
                <SettingOutlined className="actionItems-setting" style={{fontSize:"20px"}}/>
            </div>
        </div>
            
    )
}

export default index