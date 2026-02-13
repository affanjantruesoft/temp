import ReactECharts from 'echarts-for-react';

export default function TrainingProgressChart() {
  const option = {
    grid: {
      left: 20,
      right: 10,
      top: 10,
      bottom: 10,
      containLabel: false,
    },
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: {
        lineStyle: {
          color: '#E5E7EB',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        data: [35, 45, 52, 68],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#3FB5B0',
          width: 2,
        },
        symbol: 'circle',
        symbolSize: 3,
        itemStyle: {
          color: '#3FB5B0',
        },
        areaStyle: {
          color: 'rgba(63, 181, 176, 0.08)',
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: {
        color: '#fff',
      },
      formatter: '{c0}%',
    },
  };

  return (
    <div className="w-full h-20">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
