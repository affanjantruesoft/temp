import CircularProgress from '../charts/CircularProgress';

export default function PerformanceSummary() {
  return (
    <div
      className="bg-white shadow-sm overflow-hidden"
      style={{
        width: '100%',
        height: '386px',
        borderRadius: '17px',
      }}
    >
      {/* Header */}
      <div className="drag-handle flex items-center gap-3 mb-5 px-6 py-4">
        <span className="text-xl">⚙️</span>
        <h2
          className="text-[24px] font-medium leading-none shrink-0"
          style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}
        >
          Performance Summary
        </h2>
        <div className="flex-1" style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }} />
      </div>

      {/* Content */}
      <div
        className="bg-white flex items-center justify-center"
        style={{
          gap: '42px',
          width: '100%',
          height: 'calc(100% - 80px)',
          padding: '0 20px'
        }}
      >
        {/* Left: Goal Completion */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: '187.45px',
            height: '243.44px',
          }}
        >
          <div style={{ transform: 'scale(1.35)' }}>
            <CircularProgress value={72} />
          </div>
          <p
            className="font-medium text-center"
            style={{
              fontFamily: 'Poppins',
              fontSize: '20px',
              color: '#000000',
              lineHeight: '100%',
              marginTop: '36px'
            }}
          >
            Goal Completion
          </p>
        </div>

        {/* Vertical Divider */}
        <div style={{ width: '1px', height: '243.44px', backgroundColor: '#E5E7EB' }} />

        {/* Right: Details */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: '187.45px',
            height: '243.44px'
          }}
        >
          <div style={{ transform: 'scale(1.35)' }}>
            <CircularProgress value={72} isHalfCircle />
          </div>
          <div className="text-center" style={{ fontFamily: 'Poppins', marginTop: '24px' }}>
            <p style={{ fontSize: '16px', color: '#000000', marginBottom: '8px' }}>In Progress: 62</p>
            <p style={{ fontSize: '16px', color: '#000000', marginBottom: '8px' }}>Finalized: 81</p>
            <p style={{ fontSize: '16px', color: '#000000' }}>Draft: 14</p>
          </div>
        </div>
      </div>
    </div>
  );
}