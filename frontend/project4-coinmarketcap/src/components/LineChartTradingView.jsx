import React, { useState, useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const LineChartTradingView = (props) => {
  let { sparkline } = props;
  let arrayData = [];
  sparkline.map((element, index) => {
    arrayData.push({ time: index, value: element });
  })
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 200,
      height: 60,
      rightPriceScale: {
        scaleMargins: {
          top: 0,
          bottom: 0,
        },
      },
      timeScale: {
        visible: false,
      },
      rightPriceScale: {
        visible: false,
      },
      watermark: {
        visible: true,
        fontSize: 24,
        horzAlign: 'center',
        vertAlign: 'center',
        color: 'rgba(171, 71, 188, 0.5)',
        text: 'emyeuchi',
      },
      layout: {
        backgroundColor: '#ffffff',
        textColor: '#333',
      },
      grid: {
        horzLines: {
          color: '#eee',
        },
        vertLines: {
          color: '#ffffff',
        },
      },
    });
    const lineSeries = chart.addAreaSeries({
      topColor: 'rgba(171, 71, 188, 0.56)',
      bottomColor: 'rgba(171, 71, 188, 0.04)',
      lineColor: 'rgba(171, 71, 188, 1)',
      lineWidth: 2,
      symbol: 'AAPL',
      timeVisible: false, // hide the x-axis label
    });
    lineSeries.setData(arrayData);
    lineSeries.applyOptions({
      lastValueVisible: false, // hide the last value label on the chart
    });

  }, []);

  return (
    <div ref={chartContainerRef}></div>
  );
};

export default LineChartTradingView;