import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
    ['x', 'dogs'],
    [0, 0],
    [1, 5],
    [2, 23000],

]
const LineChartOptions = {
    // hAxis: {
    //     title: 'Time',
    // },
    // vAxis: {
    //     title: 'Popularity',
    // },
    series: {
        1: { curveType: 'function' },
    },
}
class SimpleLineChart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <Chart
                    maxWidth={'700px'}
                    width={'400px'}
                    height={'110px'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={LineData}
                    options={LineChartOptions}
                    rootProps={{ 'data-testid': '2' }}
                />
            </div>
        )
    }
}
export default SimpleLineChart;