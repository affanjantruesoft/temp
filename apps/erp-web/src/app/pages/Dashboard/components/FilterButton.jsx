import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FilterButton({ label }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [filters, setFilters] = React.useState({
    dateRange: 'Last 30 days',
    department: 'support',
    businessUnit1: 'support',
    businessUnit2: 'Platform A',
    status: 'Active',
  });

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFilters({
      dateRange: 'Last 30 days',
      department: 'support',
      businessUnit1: 'support',
      businessUnit2: 'Platform A',
      status: 'Active',
    });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 h-[42px] px-[16px] py-[10px] text-sm font-medium text-gray-900 bg-[var(--color-primary-lighter)] rounded-[97px] hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4h18M3 4v2.586a1 1 0 00.293.707l6.414 6.414a1 1 0 01.293.707V19l4-4v-4.586a1 1 0 01.293-.707l6.414-6.414A1 1 0 0021 6.586V4M3 4a1 1 0 011-1h16a1 1 0 011 1"
          />
        </svg>
        <span>{label}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0" />
      </button>

      {isOpen && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 mt-3 w-[290px] rounded-[24px] shadow-lg z-50 flex flex-col p-5 gap-4 overflow-hidden"
          style={{ backgroundColor: '#EDEDED' }}
        >
          {/* Scrollable inner content */}
          <div 
            className="flex flex-col gap-4 max-h-[500px] overflow-y-auto dashboard-scroll"
          >
            {/* Date Range */}
            <div 
              className="w-full rounded-[16px] p-4 flex flex-col gap-3"
              style={{ backgroundColor: 'var(--color-primary-lightest)' }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-[18px] font-semibold"
                  style={{ 
                    color: 'var(--color-primary-darkest)',
                    fontFamily: 'Poppins'
                  }}
                >
                  Date Range
                </span>
                <span className="text-xl">📅</span>
              </div>
              <select
                value={filters.dateRange}
                onChange={(e) => handleChange('dateRange', e.target.value)}
                className="w-full h-[38px] rounded-[8px] border-none bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                style={{ fontFamily: 'Poppins' }}
              >
                <option value="Last 30 days">Last 30 days</option>
                <option value="Last 7 days">Last 7 days</option>
                <option value="Last 90 days">Last 90 days</option>
              </select>
            </div>

            {/* Department */}
            <div 
              className="w-full rounded-[16px] p-4 flex flex-col gap-3"
              style={{ backgroundColor: 'var(--color-primary-lightest)' }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-[18px] font-semibold"
                  style={{ 
                    color: 'var(--color-primary-darkest)',
                    fontFamily: 'Poppins'
                  }}
                >
                  Department
                </span>
                <span className="text-xl">🎧</span>
              </div>
              <select
                value={filters.department}
                onChange={(e) => handleChange('department', e.target.value)}
                className="w-full h-[38px] rounded-[8px] border-none bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                style={{ fontFamily: 'Poppins' }}
              >
                <option value="support">support</option>
                <option value="sales">sales</option>
                <option value="hr">HR</option>
              </select>
            </div>

            {/* Business Unit 1 */}
            <div 
              className="w-full rounded-[16px] p-4 flex flex-col gap-3"
              style={{ backgroundColor: 'var(--color-primary-lightest)' }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-[18px] font-semibold"
                  style={{ 
                    color: 'var(--color-primary-darkest)',
                    fontFamily: 'Poppins'
                  }}
                >
                  Business Unit
                </span>
                <span className="text-xl">⚙️</span>
              </div>
              <select
                value={filters.businessUnit1}
                onChange={(e) => handleChange('businessUnit1', e.target.value)}
                className="w-full h-[38px] rounded-[8px] border-none bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                style={{ fontFamily: 'Poppins' }}
              >
                <option value="support">support</option>
                <option value="platform-a">Platform A</option>
                <option value="platform-b">Platform B</option>
              </select>
            </div>

            {/* Business Unit 2 */}
            <div 
              className="w-full rounded-[16px] p-4 flex flex-col gap-3"
              style={{ backgroundColor: 'var(--color-primary-lightest)' }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-[18px] font-semibold"
                  style={{ 
                    color: 'var(--color-primary-darkest)',
                    fontFamily: 'Poppins'
                  }}
                >
                  Business Unit
                </span>
                <span className="text-xl">⚙️</span>
              </div>
              <select
                value={filters.businessUnit2}
                onChange={(e) => handleChange('businessUnit2', e.target.value)}
                className="w-full h-[38px] rounded-[8px] border-none bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                style={{ fontFamily: 'Poppins' }}
              >
                <option value="Platform A">Platform A</option>
                <option value="Platform B">Platform B</option>
              </select>
            </div>

            {/* Status */}
            <div 
              className="w-full rounded-[16px] p-4 flex flex-col gap-3"
              style={{ backgroundColor: 'var(--color-primary-lightest)' }}
            >
              <div className="flex items-center justify-between">
                <span 
                  className="text-[18px] font-semibold"
                  style={{ 
                    color: 'var(--color-primary-darkest)',
                    fontFamily: 'Poppins'
                  }}
                >
                  Status
                </span>
                <span className="text-xl">👤</span>
              </div>
              <select
                value={filters.status}
                onChange={(e) => handleChange('status', e.target.value)}
                className="w-full h-[38px] rounded-[8px] border-none bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                style={{ fontFamily: 'Poppins' }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-center pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="w-full h-[44px] rounded-[12px] text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: 'var(--color-primary-darkest)',
                fontFamily: 'Poppins'
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}


    </div>
  );
}