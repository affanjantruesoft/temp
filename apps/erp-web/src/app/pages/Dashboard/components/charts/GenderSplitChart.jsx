import ReactECharts from 'echarts-for-react';

export default function GenderSplitChart() {
  const option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      textStyle: { color: '#fff' },
      formatter: '{b}: {c}%'
    },
    graphic: [
    {
      type: 'text',
      left: 90,
      top: 162,
      style: {
        text: 'Gender\nSplit',
        textAlign: 'center',
        textVerticalAlign: 'middle',
        fill: '#000',
        fontSize: 32,
        fontWeight: 600,
        fontFamily: 'Poppins',
        lineHeight: 40,
      },
    },
  ],
    series: [
      {
        name: 'Gender Split',
        type: 'pie',
        radius: ['50%', '75%'],
        center: ['40%', '50%'],
        startAngle: 0,
        avoidLabelOverlap: true,
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 3,
        },
        label: {
          show: true,
          position: 'outside',
          formatter: function (params) {
            let icon = '⚥';
            if (params.name === 'Male') icon = '♂';
            if (params.name === 'Females') icon = '♀';
            return '{icon|' + icon + '} {percent|' + params.percent + '%}';
          },
          rich: {
            icon: {
              fontSize: 24,
              color: '#035F5B',
            },
            percent: {
              fontSize: 24,
              fontWeight: 'bold',
              color: '#035F5B',
              fontFamily: 'Poppins',
              padding: [0, 0, 0, 5]
            }
          },
          backgroundColor: '#E8F5F4',
          padding: [10, 14],
          borderRadius: 8,
        },
        labelLine: {
          show: true,
          length: 20,
          length2: 15,
          lineStyle: { color: '#ccc' }
        },
        emphasis: {
          scale: true,
          scaleSize: 5,
        },
        data: [
          { value: 58, name: 'Male', itemStyle: { color: '#035F5B' } },
          { value: 42, name: 'Females', itemStyle: { color: '#3FB5B0' } },
        ],
      },
    ],
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '16px',
        width: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Legend */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#035F5B' }} />
          <span style={{ fontFamily: 'Poppins', fontSize: '14px' }}>Male</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#3FB5B0' }} />
          <span style={{ fontFamily: 'Poppins', fontSize: '14px' }}>Females</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#B3E2DE' }} />
          <span style={{ fontFamily: 'Poppins', fontSize: '14px' }}>Other</span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ width: '400px', height: '400px' }}>
        <ReactECharts
          option={option}
          style={{ height: '100%', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </div>
  );
}