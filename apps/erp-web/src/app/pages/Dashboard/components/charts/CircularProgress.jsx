import ReactECharts from 'echarts-for-react';

export default function CircularProgress({ value = 72, isHalfCircle = false, color1, color2 }) {
  const defaultColor1 = '#00918D';
  const defaultColor2 = '#EDEDED';

  const activeColor = color1 || defaultColor1;
  const inactiveColor = color2 || defaultColor2;

  const option = isHalfCircle
    ? {
        series: [
          // ── Outer arc: dark teal progress ──
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 290,
            radius: '90%',
            center: ['50%', '75%'],
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                width: 36,
                color: [
                  [value / 100, activeColor],
                  [1, 'transparent'],
                ],
                roundCap: true,
              },
            },
            pointer: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: { show: false },
            data: [{ value }],
          },
          // ── Inner arc: full light teal background ──
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            radius: '62%',
            center: ['50%', '75%'],
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                width: 30,
                color: [[1, inactiveColor]],
                roundCap: true,
              },
            },
            pointer: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: {
              valueAnimation: true,
              formatter: '{value}%',
              color: '#035F5B',
              fontSize: 32,
              fontWeight: 700,
              fontFamily: 'Poppins',
              offsetCenter: [0, '45%'],
            },
            data: [{ value }],
          },
        ],
      }
    : {
        series: [
          {
            type: 'gauge',
            startAngle: 140,
            endAngle: -270,
            radius: '85%',
            center: ['50%', '50%'],
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                width: 20,
                color: [
                  [value / 100, activeColor],
                  [1, inactiveColor],
                ],
              },
            },
            pointer: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { show: false },
            detail: {
              valueAnimation: true,
              formatter: '{value}%',
              color: '#035F5B',
              fontSize: 32,
              fontWeight: 600,
              fontFamily: 'Poppins',
              offsetCenter: [0, '0%'],
            },
            data: [{ value }],
          },
        ],
      };

  return (
    <div
      className={isHalfCircle ? 'w-64 h-36' : 'w-32 h-32'}
      style={{ transform: 'scale(1.015)' }}
    >
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}