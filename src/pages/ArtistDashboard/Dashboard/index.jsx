import React from 'react'
import {Row, Col, Card, Divider} from 'antd'
import './styles.scss'
import { fontStyles } from "../../../styles/fonts"
import OverView from './Overview'
import TrendingSongs from './TrendingSongs'
import TopAlbums from './TopAlbums'
import { InfoCircleOutlined } from '@ant-design/icons';

function index() {
	return (
		<div className='dashboard'>
      <div className='dashboard-heading' style={fontStyles.mediumSemiBold}>Summary</div>
      
      <Row gutter={[40,40]}>
        <Col xs={24} md={12} lg={6}>
          <Card className='infocard' style={{borderRadius:10}} >
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title' style={fontStyles.smallLight}>Listening Now</text>
                <text className='miniCard-info-number'>512,666</text>
              </div>
              <div className='miniCard-graph'>
               {/* <img className='miniCard-graph-chart' src={positiveGraph} alt='postiveGraph' />*/}
                <div className='miniCard-graph-detail'>
                  {/*<img className='miniCard-graph-detail-arrow' src={arrowUp} alt='up arrow' />*/}
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card className='infocard' style={{borderRadius:10}}>
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title' style={fontStyles.smallLight}>Streaming Now</text>
								<text className='miniCard-info-number'>512,009</text>
              </div>
              <div className='miniCard-graph'>
               {/* <img className='miniCard-graph-chart' src={negativeGraph} alt='negativeGraph' />*/}
                <div className='miniCard-graph-detail'>
             
                  {/*<img className='miniCard-graph-detail-arrow' src={arrowDown} alt='down arrow' />*/}
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card className='infocard' style={{borderRadius:10}}>
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title' style={fontStyles.smallLight}>Monthly Listeners</text>
                <text className='miniCard-info-number'> 2664</text>
              </div>
              <div className='miniCard-graph'>
               {/* <img className='miniCard-graph-chart' src={positiveGraph} alt='postiveGraph' />*/}
                <div className='miniCard-graph-detail'>
                 
                 {/* <img className='miniCard-graph-detail-arrow' src={arrowUp} alt='up arrow' />*/}
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card className='infocard' style={{borderRadius:10}}>
            <div className='miniCard'>
              <div className='miniCard-info'>
                <text className='miniCard-info-title' style={fontStyles.smallLight}>Followers</text>
                <text className='miniCard-info-number'>3044</text>
              </div>
              <div className='miniCard-graph'>
                {/*<img className='miniCard-graph-chart' src={positiveGraph} alt='postiveGraph' /> */}
                <div className='miniCard-graph-detail'>
                
                 {/* <img className='miniCard-graph-detail-arrow' src={arrowUp} alt='up arrow' />*/}
                </div>
              </div>
            </div>
          </Card>
        </Col>
				 {/*--------2nd row---------*/}
				 <Col span={24}>
          <OverView  />
        </Col>
        {/*-------3rd row----------*/ }
        <Col xs={24} md={18} lg={12}>
          <div className="card-title" >
            <div style={fontStyles.mediumSemiBold}>Trending Songs</div>
            <InfoCircleOutlined style={{fontSize:18}}/>
          </div>
         <Card>
           <TrendingSongs />
         </Card>
        </Col>
        <Col xs={24} md={18} lg={12}>
        <div className="card-title" >
          <div style={fontStyles.mediumSemiBold}>Top Albums</div>
          <InfoCircleOutlined style={{fontSize:18}}/>
          </div>
          <Card>
            <TrendingSongs />
          </Card>
        </Col>
				</Row>
		</div>
	)
}

export default index
