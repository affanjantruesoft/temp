export default function AttendanceAndLeave() {
  const barMaxWidth = 260;

  return (
    <div
      className="bg-white shadow-sm border border-gray-200 p-6 flex flex-col"
      style={{ borderRadius: '17px', height: '496px', width: '100%' }}
    >
      {/* Header */}
      <div className="drag-handle flex items-center gap-3 mb-5">
        <svg className="w-5 h-5 shrink-0 text-[var(--color-primary-medium)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
        <h2
          className="text-[24px] font-medium leading-none shrink-0"
          style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)' }}
        >
          Attendance & Leave
        </h2>
        <div className="flex-1" style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }} />
      </div>

      {/* Today's Absences */}
      <div className="mb-4">
        <h3 className="text-base font-medium text-gray-800 mb-4" style={{ fontFamily: 'Poppins' }}>Today's Absences</h3>

        {/* Row 1 - Mehak */}
        <div className="flex items-center py-3" style={{ borderBottom: '1px solid #e5e7eb' }}>
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0 mr-3">
            <img src="https://i.pravatar.cc/40?img=47" alt="Mehak" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Poppins', width: '120px', flexShrink: 0 }}>Mehak Mirral</span>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full text-white whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: 'var(--color-primary-dark)' }}>
              Sick Leave
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full text-white whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: 'var(--color-primary-light)' }}>
              Approved
            </span>
          </div>
        </div>

        {/* Row 2 - Armash */}
        <div className="flex items-center py-3">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-gray-200 shrink-0 mr-3">
            <img src="https://i.pravatar.cc/40?img=12" alt="Armash" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Poppins', width: '120px', flexShrink: 0 }}>Armash Arif</span>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: 'var(--color-primary-lightest)', color: 'var(--color-primary-darkest)' }}>
              PTO
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full text-white whitespace-nowrap" style={{ fontFamily: 'Poppins', backgroundColor: '#EF4444' }}>
              Disapproved
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3" style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }} />

      {/* Monthly Leave Days */}
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-base font-medium text-gray-800 mb-3 self-start" style={{ fontFamily: 'Poppins' }}>Monthly Leave Days</h3>

        <div style={{ width: `${barMaxWidth}px` }}>
          <div className="relative mb-1" style={{ height: '20px' }}>
            <span className="absolute text-xs font-medium" style={{ left: '0%', fontFamily: 'Poppins', color: 'var(--color-primary-dark)' }}>210</span>
            <span className="absolute text-xs font-medium" style={{ left: '50%', transform: 'translateX(-50%)', fontFamily: 'Poppins', color: 'var(--color-primary-dark)' }}>245</span>
            <span className="absolute text-xs font-medium" style={{ right: '0%', fontFamily: 'Poppins', color: 'var(--color-primary-dark)' }}>260</span>
          </div>

          <div style={{ width: '100%', height: '28px', borderRadius: '6px', background: 'linear-gradient(90deg, var(--color-primary-dark) 0%, var(--color-primary-light) 100%)', marginBottom: '8px' }} />
          <div style={{ width: '75%', height: '28px', borderRadius: '6px', background: 'linear-gradient(90deg, var(--color-primary-dark) 0%, var(--color-primary-light) 100%)' }} />

          <div className="relative mt-1" style={{ height: '20px' }}>
            <span className="absolute text-xs font-medium" style={{ left: '0%', fontFamily: 'Poppins', color: 'var(--color-primary-dark)' }}>SEP</span>
            <span className="absolute text-xs font-medium" style={{ left: '50%', transform: 'translateX(-50%)', fontFamily: 'Poppins', color: 'var(--color-primary-dark)' }}>OCT</span>
            <span className="absolute text-xs font-medium" style={{ right: '0%', fontFamily: 'Poppins', color: 'var(--color-primary-dark)' }}>NOV</span>
          </div>
        </div>
      </div>
    </div>
  );
}