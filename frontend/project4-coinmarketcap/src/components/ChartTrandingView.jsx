import React from 'react';
import LineChartTradingView from './LineChartTradingView';

const data = [
    { time: '2018-10-19', value: 75.46 },
    { time: '2018-10-22', value: 76.69 },
    { time: '2018-10-23', value: 73.82 },
    { time: '2018-10-24', value: 71.50 },
    { time: '2018-10-25', value: 72.74 },
    { time: '2018-10-26', value: 72.06 },
    { time: '2018-10-29', value: 70.56 },
];

// const data  = [ // of Candlestick 
//     { time: '2019-04-11', open: 80.01, high: 85.35, low: 78.65, close: 83.95 },
//     { time: '2019-04-12', open: 83.95, high: 97.22, low: 82.15, close: 96.80 },
//     { time: '2019-04-13', open: 96.80, high: 97.20, low: 85.21, close: 89.79 },
//     { time: '2019-04-14', open: 89.79, high: 91.15, low: 84.03, close: 86.07 },
//     { time: '2019-04-15', open: 86.07, high: 93.25, low: 85.25, close: 92.24 },
//     { time: '2019-04-16', open: 92.24, high: 94.62, low: 89.19, close: 91.43 },
//     { time: '2019-04-17', open: 91.43, high: 100.34, low: 89.30, close: 99.92 },
//     { time: '2019-04-18', open: 99.92, high: 107.98, low: 97.30, close: 107.68 },
//     { time: '2019-04-19', open: 107.68, high: 118.43, low: 105.48, close: 117.95 },
//     { time: '2019-04-20', open: 117.95, high: 125.00, low: 115.00, close: 120.55 },
// ];

const ChartTrandingView = () => {
    return (
        <div>
            <LineChartTradingView data={data} />
        </div>
    );
};

export default ChartTrandingView;