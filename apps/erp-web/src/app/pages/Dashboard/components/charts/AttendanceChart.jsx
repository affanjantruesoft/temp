import ReactECharts from 'echarts-for-react';

export default function AttendanceChart() {
  const option = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: false,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    series: [
      {
        data: [65, 75, 55, 70, 85],
        type: 'bar',
        itemStyle: {
          color: '#3FB5B0',
          borderRadius: [4, 4, 0, 0],
        },
        barWidth: '60%',
      },
    ],
  };

  return (
    <div className="w-full h-32">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
