import ReactECharts from 'echarts-for-react';
import { GraduationCap } from 'lucide-react';

export default function TrainingProgress() {
  const chartOption = {
  grid: {
    left: 30,
    right: 30,
    top: 10,
    bottom: 0,
    boundaryGap: false
  },

  xAxis: {
    type: 'category',
    data: ['', '', '', ''],
    boundaryGap: false, // 🔥 VERY IMPORTANT
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
  },

  yAxis: {
    type: 'value',
    min: 58,
    max: 70,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { show: false },
    splitLine: { show: false },
  },

  series: [
  {
    data: [61, 63, 67, 68],
    type: 'line',
    smooth: 0.35,
    clip: true,   // prevents drawing outside
    symbol: 'circle',
    symbolSize: 8,
    lineStyle: {
      color: 'var(--color-primary-medium)',
      width: 2.73,
    },
    itemStyle: {
      color: '#ffffff',
      borderColor: 'var(--color-primary-medium)',
      borderWidth: 2,
    },
    label: {
      show: true,
      position: 'top',
      formatter: '{c}%',
      offset: [0, -8],
    },
  },
],

  tooltip: { show: false },
};


  return (
    <div
      className="bg-white rounded-[17px] border border-gray-200 p-6 flex flex-col"
      style={{ height: '496px', width: '100%' }}
    >
      {/* Header */}
      <div className="drag-handle flex items-center gap-3 mb-6">
        <GraduationCap
          className="w-6 h-6 shrink-0"
          style={{ color: 'var(--color-primary-medium)' }}
        />
        <h2
          className="text-[24px] font-medium leading-none shrink-0"
          style={{
            fontFamily: 'Poppins',
            color: 'var(--color-primary-darkest)'
          }}
        >
          Training Progress
        </h2>
        <div
          className="flex-1"
          style={{
            height: '1px',
            backgroundColor: 'var(--color-primary-darkest)'
          }}
        />
      </div>

      {/* Main Metric - LEFT ALIGNED */}
      <div className="mb-6">
        <p
          className="font-bold leading-none"
          style={{
            fontSize: '96px',
            fontFamily: 'Poppins',
            color: 'var(--color-primary-dark)',
            lineHeight: '100%',
          }}
        >
          312
        </p>
        <p
          className="mt-2"
          style={{
            fontSize: '20px',
            fontWeight: 400,
            fontFamily: 'Poppins',
            color: '#AFAFAF',
            lineHeight: '100%',
          }}
        >
          Active Enrollments
        </p>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <div
          className="w-full"
          style={{
            height: '210px',   // closer to your Figma spec
          }}
        >
          <ReactECharts
            option={chartOption}
            style={{ height: '100%', width: '100%' }}
            opts={{ renderer: 'svg' }}
          />
        </div>

        <p
          className="text-center mt-3"
          style={{
            fontSize: '20px',
            fontWeight: 500,
            fontFamily: 'Poppins',
            color: 'var(--color-primary-darkest)',
            lineHeight: '100%',
          }}
        >
          Completion rate trend
        </p>
      </div>

    </div>
  );
}