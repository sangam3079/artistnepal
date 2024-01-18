import React from 'react'
import { Menu } from 'antd';
import {Link } from 'react-router-dom'
import './styles.scss'
import logo from '../../../assets/images/Logo/logo-secondary.png'
import {
  HomeOutlined,
  UserOutlined,
  SoundOutlined,
	LineChartOutlined ,
  MoneyCollectOutlined
} from '@ant-design/icons';
import { fontStyles } from "../../../styles/fonts"



function index() {
    return (
        <Menu style={{ ...fontStyles.mediumRegular}} style={{...fontStyles.mediumRegular, margin:"30px 0 0 20px",}}>   
						<Menu.Item key="1" icon={<HomeOutlined style={{fontSize:"20px"}} />} className="menuItem">
								<Link to ='/artist-dashboard'>
										Dashboard
								</Link>
						</Menu.Item>
            
            <Menu.Item key="2" icon={<LineChartOutlined style={{fontSize:"20px"}}/>} className="menuItem">
                <Link to ='/home/dashboard'>
                  Analytics
                </Link>
               
            </Menu.Item>
            <Menu.Item key="3" icon={<SoundOutlined style={{fontSize:"20px"}} />} className="menuItem">
                <Link to ='/home/'>
                  My Music
                </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<MoneyCollectOutlined style={{fontSize:"20px"}} />} className="menuItem">
                <Link to ='/home/'>
                  Payout
                </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined style={{fontSize:"20px"}} />} className="menuItem">
                <Link to ='/home/'>
                  My Profile
                </Link>
            </Menu.Item>
            
            
            
        </Menu>
    )
}

export default index