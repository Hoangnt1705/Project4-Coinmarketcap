import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const LineChart = ({ data }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
      rightPriceScale: {
        scaleMargins: {
          top: 0.1,
          bottom: 0.2,
        },
      },
      watermark: {
        visible: true,
        fontSize: 24,
        horzAlign: 'center',
        vertAlign: 'center',
        color: 'rgba(171, 71, 188, 0.5)',
        text: 'Coinmarket of Mr Hoang',
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
    });
    lineSeries.setData(data);
    lineSeries.applyOptions({
      lastValueVisible: false, // hide the last value label on the chart
    });

  }, [data]);

  return (
    <div ref={chartContainerRef}></div>
  );
};

export default LineChart;