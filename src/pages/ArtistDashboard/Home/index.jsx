import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout,} from 'antd';
import Menu from '../Menu'
import NavBar from '../NavBar'
import Dashboard from '../Dashboard'
import './styles.scss'

const { Header, Content, Footer, Sider } = Layout;




function index() {
    
    return (
        <Layout style={{height:"100%", width:"100%"}}>
            <Header style={{backgroundColor:"white", margin:0}}><NavBar/></Header>
            <Layout>
                <Sider style={{backgroundColor:"white"}}><Menu/></Sider>
                <Content style={{backgroundColor:"#E9E8F2"}}><Dashboard/></Content>
            </Layout>
        </Layout>
    )
}

export default index