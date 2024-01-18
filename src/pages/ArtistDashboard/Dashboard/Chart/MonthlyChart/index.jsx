import React from 'react'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import data from './data.json'
import '../stylesmodules.scss'


const options = {
  chartPadding: {
    right: 40,
    left: 5,
    top: 35,
    bottom: 5,
  },
  fullWidth: true,
  showPoint: true,
  lineSmooth: true,
  axisY: {
    showGrid: true,
    showLabel: true,
    offset: 50,
  },
  axisX: {
    showGrid: false,
    showLabel: true,
    offset: 20,
  },
  showArea: false,
  plugins: [
    ChartistTooltip({
      anchorToPoint: false,
      appendToBody: true,
      seriesName: false,
    }),
  ],
}

const MonthlyChart = () => {
  return (
    <ChartistGraph
      //className="revenueCard-chart"
      style={{height:300}} 
      data={data}
      options={options}
      type="Line"
    />
  )
}

export default MonthlyChart