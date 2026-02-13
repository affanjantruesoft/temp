import RecruitmentTrendChart from '../charts/RecruitmentTrendChart';

export default function RecruitmentMetrics() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full flex flex-col" style={{ maxHeight: '630px' }}>
      {/* Main Heading */}
      <h2 className="drag-handle text-[24px] font-medium leading-none mb-6 flex items-center gap-2" style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}>
        <span className="w-1 h-6 rounded" style={{ backgroundColor: 'var(--color-primary-darkest)' }}></span>
        Recruitment Metrics
      </h2>

      <div className="flex-1 flex flex-col">
        {/* Time to Hire (Days) Subtitle */}
        <h3
          className="mb-4"
          style={{
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '18.18px',
            lineHeight: '100%',
            color: '#000000'
          }}
        >
          Time to Hire (Days)
        </h3>

        {/* Chart */}
        <div
          className="flex-1"
          style={{
            width: '100%',
            minHeight: '300px'
          }}
        >
          <RecruitmentTrendChart />
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-2 mt-auto justify-center">

          {/* Open Positions Button */}
          <div
            style={{
              // flex: 1,
              width:'200px',
              height: '42px',
              borderRadius: '10px',
              padding: '10px 0px',
              backgroundColor: 'var(--color-primary-darkest)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              Open Positions 23
            </span>
          </div>

          {/* Filled Positions Button */}
          <div
            style={{
              // flex: 1,
              width:'200px',
              height: '42px',
              borderRadius: '10px',
              padding: '10px 10px',
              backgroundColor: '#B3E2DE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px'
            }}
          >
            <span
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#000000'
              }}
            >
              Filled Positions 41
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}