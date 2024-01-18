import React, {useState} from 'react'
//import Select from '../Select'
import Select from 'react-select'
import './styles.scss'
import YearlyChart from '../Chart/YearlyChart'
import WeeklyChart from '../Chart/WeeklyChart'
import MonthlyChart from '../Chart/MonthlyChart'
import {Card} from 'antd'
import { fontStyles } from '../../../../styles/fonts'


const customStyles = {
    
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 130,
      height:30,
      padding:0,
      display: 'flex',
      flexDirection: 'row'
      
    }),
    
  }



const OverviewCard =() => {

    var chartlist = [
        {
            value:1,
            label:'Week',
            chart:<WeeklyChart/>
        },
        {
            value:2,
            label:'Month',
            chart: <MonthlyChart />
        },
        {
            value:3,
            label:'Year',
            chart: <YearlyChart />
        },
    ]

    
    const [clicked, setClicked] =useState(true)
    const [result, chartValue] = useState(chartlist.chart);

    const handler = e => {
        setClicked(false)
        chartValue(e.chart);
    
        
    }

   
   
    return (
        <div className='overviewCard'>
            <div className='overviewCard-header' style={fontStyles.mediumSemiBold}>
                <p style={fontStyles.mediumSemiBold}>Overview</p>
                <div style={{background:'white ', borderRadius:17, fontFamily:'Sofia Pro'}}>
                    <Select 
                       defaultValue={chartlist[0]}  
                       options={chartlist} 
                       onChange={handler} 
                       styles={customStyles}
                       isSearchable={false}
                       theme={theme => ({
                       ...theme,
                        borderRadius: 10,
                        width:80,
                        colors: {
                          ...theme.colors,
                        //  primary25: 'priamry25',
                          primary: 'lightgray',
                        }, 
                      })} 
                    />
                </div>
                
            </div>
            <div className='overviewCard-chart'>
            <Card style={{padding:10, borderRadius:10}}>
              <p style={{...fontStyles.mediumRegular}}>Listeners/ Streams</p>
              { 
                clicked ?  <WeeklyChart /> : ''
              }
              {result}
            </Card>
            </div>
       
      </div>
    )
}

export default OverviewCard