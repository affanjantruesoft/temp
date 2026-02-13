import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export default function TurnoverChart() {
  const departments = [
    { name: 'Sales', value: 8.2 },
    { name: 'IT', value: 5.5 },
    { name: 'Engineering', value: 6.8 },
    { name: 'Operations', value: 4.2 },
  ];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: {
        color: '#fff',
      },
      formatter: '{b0}: {c0}%',
    },
    grid: {
      left: 80,
      right: 20,
      top: 10,
      bottom: 20,
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#9CA3AF',
        fontSize: 12,
      },
      splitLine: {
        lineStyle: {
          color: '#E5E7EB',
        },
      },
      max: 10,
    },
    yAxis: {
      type: 'category',
      data: departments.map((d) => d.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#6B7280',
        fontSize: 12,
        fontWeight: 500,
      },
    },
    series: [
      {
        data: departments.map((d) => d.value),
        type: 'bar',
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#64E2D3' },
            { offset: 1, color: '#3FB5B0' },
          ]),
          borderRadius: [0, 4, 4, 0],
        },
        barWidth: '50%',
      },
    ],
  };

  return (
    <div className="w-full h-48">
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
