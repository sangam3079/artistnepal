import React from 'react'
import './TrendingSongDetails.scss'

function TopProductDetail(props) {
    const { index, imgSrc, name, Artist, streams } = props;
    return (
        <div className='topProductDetail'>
            <div className='topProductDetail-left'>
                <div className='topProductDetail-left-image'>
                    <img src={imgSrc} alt='productImg' />
                </div>
                <div className='topProductDetail-left-info'>
                  <text className='topProductDetail-left-info-name'>{name}</text>
                  <text className='topProductDetail-left-info-artist'> {Artist}</text>
                </div>
            </div>
            <div className='topProductDetail-right'>
                <text className='topProductDetail-right-info-streams'>{streams}</text>
            </div>
        </div>
    )
}

export default TopProductDetail