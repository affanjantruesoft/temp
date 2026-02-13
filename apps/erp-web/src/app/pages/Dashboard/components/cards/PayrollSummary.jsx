import { Settings } from 'lucide-react';

export default function PayrollSummary() {
  return (
    <div className="bg-white rounded-[17px] shadow-sm border border-gray-200 p-6 inline-block w-full" style={{ height: '290px' }}>
      {/* Header */}
      <div className="drag-handle flex items-center gap-3 mb-4">
        <Settings className="w-5 h-5 text-[var(--color-primary-medium)] shrink-0" />
        <h2
          className="text-[24px] font-medium text-[var(--color-primary-darkest)] leading-none shrink-0"
          style={{ fontFamily: 'Poppins' }}
        >
          Payroll Summary
        </h2>
        <div className="flex-1" style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }} />
      </div>

      {/* Next Payroll Date */}
      <div className="flex items-center gap-2 py-4">
        <span
          className="text-[20px] font-medium text-gray-700"
          style={{ fontFamily: 'Poppins' }}
        >
          Next Payroll Date:
        </span>
        <span
          className="text-[20px] font-bold text-[var(--color-primary-darkest)]"
          style={{ fontFamily: 'Poppins' }}
        >
          10 January 2026
        </span>
      </div>

      <div
        className="w-full"
        style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }}
      />

      {/* Status */}
      <div className="flex items-center gap-3 py-6">
        <span className="text-[20px] font-medium text-gray-700" style={{ fontFamily: 'Poppins' }}>Status:</span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium bg-[var(--color-primary-lightest)] text-[var(--color-primary-darkest)]" style={{ fontFamily: 'Poppins' }}>
          Processing
        </span>
      </div>
      <div className="w-full" style={{ height: '1px', backgroundColor: 'var(--color-primary-darkest)' }} />

      {/* Approvals */}
      <div className="flex flex-wrap gap-2 pt-6">
        <span className="px-3 py-1.5 text-[14px] font-medium rounded-full bg-[var(--color-primary-medium)] text-white" style={{ fontFamily: 'Poppins' }}>
          Pending Approvals: 7
        </span>
        <button className="px-3 py-1.5 text-[14px] font-medium rounded-full bg-[var(--color-primary-darkest)] text-white hover:opacity-90 transition-opacity" style={{ fontFamily: 'Poppins' }}>
          Review Payroll
        </button>
      </div>
    </div>
  );
}