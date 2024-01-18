import React from 'react'
import './styles.scss'
import Icon from '../../../../assets/images/laptop.png'



function TopAlbums() {
    return (
        <div className='TopAlbums'>
            <text>Store Statistics</text>
            <div className='albums'>
                <div className='albums-info'>
                    <p>albums</p>
                    <text>3666</text>
                </div>
                <div className='albums-image'>
                   <img src={Icon} alt='order icon' />
                </div>
                
            </div>
            <div className='albums'>
                <div className='albums-info'>
                    <p>Customers</p>
                    <text>6666</text>
                </div>
                <div className='albums-image'>
                   <img src={Icon} alt='customersIcon' />
                </div>
                
            </div>
            <div className='albums'>
                <div className='albums-info'>
                    <p>Products</p>
                    <text>1000</text>
                </div>
                <div className='albums-image'>
                   <img src={Icon} alt='productIcon' />
                </div>  
            </div>
            <div className='albums'>
                <div className='albums-info'>
                    <p>Categoreis</p>
                    <text>50</text>
                </div>
                <div className='albums-image'>
                   <img src={Icon} alt='categoriesIcon' />
                </div>
                
            </div>
        </div>
    )
}

export default TopAlbums