import React, { Component } from 'react'
import { connect } from 'react-redux'

import Highcharts from 'react-highcharts'

const mapStateToProps = ({}) => ({
})

class App extends Component {
  render() {
    return (
      <Highcharts 
        config={{
          chart: {
            type: 'column',
            inverted: 
          },
          title: {
            text: '実験結果'
          },
          xAxis: {
            type: 'category',
          },
          yAxis: {
            min: 0,
            title: {
              text: '人数'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            enabled: false
          },
          series: [{
            name: '人数',
            data: [
              ['プログラマ', 23],
              ['銀行員', 16],
              ['プログラマで環境保護活動家', 14]
            ],
            dataLabels: {
              enabled: true,
              color: '#000',
              align: 'center',
              format: '{point.y}',
            }
          }]
        }} 
      />
    )
  }
}

export default connect(mapStateToProps)(App)
