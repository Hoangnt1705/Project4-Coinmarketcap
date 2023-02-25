import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ChartComponent(props) {
  const chartRef = useRef();
  let { labels, data } = props
  useEffect(() => {
    const chartConfig = {
      type: 'line',
      data: {
        labels: props.labels,
        datasets: [
          {
            label: 'Price',
            data: props.data,
            backgroundColor: 'rgba(0, 0, 0, 0)', // transparent background color
            borderColor: getLineColor(props.data), // initial line color based on data
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            grid: {
              color: getLineColor(props.data),
            },
          },
        },
      },
    };
    function getLineColor(data) {
      // return green if line goes up, red if line goes down
      if (data.length > 1 && data[data.length - 1] > data[data.length - 2]) {
        return 'green';
      } else {
        return 'red';
      }
    }

    // create the chart instance
    const myChart = new Chart(chartRef.current, chartConfig);
    
    // store the chart object in a ref
    chartRef.current.chart = myChart;

    return () => {
      // destroy the chart instance when the component unmounts
      myChart.destroy();
    };
  }, []);

  useEffect(() => {
    // update the chart data
    if (chartRef.current.chart) {
      chartRef.current.chart.data.datasets[0].data = data;
      chartRef.current.chart.data.datasets[0].borderColor = getLineColor(data);
      chartRef.current.chart.update();
    }
  }, [data]);

  function getLineColor(data) {
    // return green if line goes up, red if line goes down
    if (data.length > 1 && data[data.length - 1] > data[data.length - 2]) {
      return 'green';
    } else {
      return 'red';
    }
  }

  return <canvas ref={chartRef} />;
}
export default ChartComponent;