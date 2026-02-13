import ReactECharts from 'echarts-for-react';

export default function RecruitmentTrendChart({ height = '400px' }) {
  const option = {
    grid: {
      left: 10,
      right: 20,
      top: 10,
      bottom: 20,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
      axisLine: { 
        show: true,
        lineStyle: {
          color: '#AFAFAF',
          width: 0.91,
        }
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#9CA3AF',
        fontSize: 12.73,
        fontFamily: 'Poppins',
        fontWeight: 400,
        lineHeight: 1,
      },
    },
    yAxis: {
      type: 'value',
      max: 10,
      axisLine: { 
        show: true,
        lineStyle: {
          color: '#AFAFAF',
          width: 0.91,
        }
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#9CA3AF',
        fontSize: 12.73,
        fontFamily: 'Poppins',
        fontWeight: 400,
        lineHeight: 1,
      },
      splitLine: {
        lineStyle: {
          color: '#E5E7EB',
        },
      },
    },
    series: [
      {
        data: [1, 2.5, 4.5, 6.5, 4.5, 7, 6.5, 8],
        type: 'line',
        smooth: false,
        lineStyle: {
          color: '#3FB5B0',
          width: 2.73,
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#3FB5B0',
          borderColor: '#3FB5B0',
          borderWidth: 2,
        },
        areaStyle: {
          color: 'rgba(63, 181, 176, 0.1)',
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: 8,
      textStyle: {
        color: '#fff',
      },
      formatter: (params) => {
        return `${Math.round(params[0].value)}`;
      },
    },
  };

  return (
    <div className="w-full" style={{ height }}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}