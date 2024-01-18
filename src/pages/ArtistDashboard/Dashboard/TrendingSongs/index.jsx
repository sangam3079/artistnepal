import React from 'react'
import './styles.scss'
import TopProductDetail from './TrendingSongsDetails'
import {TopSongsData} from './topSongsData'
import {Card} from 'antd'


function TopProducts() {

    return (
        <div className='topProducts'>
            <div className='topProducts-header'>
                <text>songs</text>
                <text>streams</text>
                  
            </div>
            <div className='topProducts-list'>
                { TopSongsData.map(item =>(
                    <TopProductDetail
                       key={item.index}
                       name={item.name}
                       Artist={item.Artist}
                       imgSrc={item.imgSrc}
                       streams={item.streams}
                    />
                )) } 
            </div>
        </div>
    )
}

export default TopProducts