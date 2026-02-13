import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import SearchBar from './components/SearchBar';
import FilterButton from './components/FilterButton';
import Breadcrumb from './components/Breadcrumb';
import WorkforceOverview from './components/cards/WorkforceOverview';
import RecruitmentMetrics from './components/cards/RecruitmentMetrics';
import AttendanceAndLeave from './components/cards/AttendanceAndLeave';
import TrainingProgress from './components/cards/TrainingProgress';
import TurnoverRetention from './components/cards/TurnoverRetention';
import PerformanceSummary from './components/cards/PerformanceSummary';
import PayrollSummary from './components/cards/PayrollSummary';
import WidgetsPanel from './components/WidgetsPanel';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
const ResponsiveGridLayout = WidthProvider(Responsive);


// Memoized widget wrappers to avoid unnecessary re-renders
const WorkforceOverviewWidget = React.memo(WorkforceOverview);
const RecruitmentMetricsWidget = React.memo(RecruitmentMetrics);
const AttendanceAndLeaveWidget = React.memo(AttendanceAndLeave);
const TrainingProgressWidget = React.memo(TrainingProgress);
const TurnoverRetentionWidget = React.memo(TurnoverRetention);
const PerformanceSummaryWidget = React.memo(PerformanceSummary);
const PayrollSummaryWidget = React.memo(PayrollSummary);

const DEFAULT_LAYOUTS = {
    lg: [
      { i: 'workforce', x: 0, y: 0, w: 4, h: 8, minW: 3, minH: 6 },
      { i: 'recruitment', x: 4, y: 0, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'attendance', x: 0, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'training', x: 2, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'turnover', x: 4, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'performance', x: 0, y: 16, w: 3, h: 7, minW: 2, minH: 5 },
      { i: 'payroll', x: 3, y: 16, w: 3, h: 5, minW: 2, minH: 4 },
    ],
    md: [
      { i: 'workforce', x: 0, y: 0, w: 4, h: 8, minW: 3, minH: 6 },
      { i: 'recruitment', x: 4, y: 0, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'attendance', x: 0, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'training', x: 2, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'turnover', x: 4, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'performance', x: 0, y: 16, w: 3, h: 7, minW: 2, minH: 5 },
      { i: 'payroll', x: 3, y: 16, w: 3, h: 5, minW: 2, minH: 4 },
    ],
    sm: [
      { i: 'workforce', x: 0, y: 0, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'recruitment', x: 0, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'attendance', x: 0, y: 16, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'training', x: 0, y: 24, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'turnover', x: 0, y: 32, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'performance', x: 0, y: 40, w: 2, h: 7, minW: 2, minH: 5 },
      { i: 'payroll', x: 0, y: 47, w: 2, h: 5, minW: 2, minH: 4 },
    ],
    xs: [
      { i: 'workforce', x: 0, y: 0, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'recruitment', x: 0, y: 8, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'attendance', x: 0, y: 16, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'training', x: 0, y: 24, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'turnover', x: 0, y: 32, w: 2, h: 8, minW: 2, minH: 6 },
      { i: 'performance', x: 0, y: 40, w: 2, h: 7, minW: 2, minH: 5 },
      { i: 'payroll', x: 0, y: 47, w: 2, h: 5, minW: 2, minH: 4 },
    ],
    xxs: [
      { i: 'workforce', x: 0, y: 0, w: 1, h: 8, minW: 1, minH: 6 },
      { i: 'recruitment', x: 0, y: 8, w: 1, h: 8, minW: 1, minH: 6 },
      { i: 'attendance', x: 0, y: 16, w: 1, h: 8, minW: 1, minH: 6 },
      { i: 'training', x: 0, y: 24, w: 1, h: 8, minW: 1, minH: 6 },
      { i: 'turnover', x: 0, y: 32, w: 1, h: 8, minW: 1, minH: 6 },
      { i: 'performance', x: 0, y: 40, w: 1, h: 7, minW: 1, minH: 5 },
      { i: 'payroll', x: 0, y: 47, w: 1, h: 5, minW: 1, minH: 4 },
    ],
  };

const LOCAL_STORAGE_KEY = 'dashboardLayouts';

function loadStoredLayouts() {
  if (typeof window === 'undefined') return DEFAULT_LAYOUTS;
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return DEFAULT_LAYOUTS;
    const parsed = JSON.parse(raw);
    return parsed || DEFAULT_LAYOUTS;
  } catch {
    return DEFAULT_LAYOUTS;
  }
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [widgetsOpen, setWidgetsOpen] = useState(false);
  const [layouts, setLayouts] = useState(DEFAULT_LAYOUTS);

  // Load saved layouts on mount (client-side only)
  useEffect(() => {
    const stored = loadStoredLayouts();
    setLayouts(stored);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: '#efefef' }} className="pl-2 pt-4 relative overflow-hidden h-screen flex flex-col">
        {/* Breadcrumb Section */}
        <div className="px-6 pt-1.5 -mb-3 border-b border-gray-200">
          <Breadcrumb />
        </div>

        {/* Main + Widgets layout */}
        <div className="flex-1 p-6 pb-5 relative overflow-hidden">
          <div className="h-full">
            {/* Search and Controls Row */}
            <div className="px-6 py-4 bg-[var(--color-primary-medium)] rounded-t-xl">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />
                </div>
                <div className="flex gap-3 items-center">
                  <FilterButton label="Filter & Sort" />
                  <button
                    type="button"
                    onClick={() => setWidgetsOpen(true)}
                    className="flex items-center gap-[6px] h-[42px] px-[20px] py-[10px] text-sm font-medium text-gray-900 bg-[var(--color-primary-lighter)] rounded-[58px] hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add Widgets
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div
              className="max-h-[calc(100vh-240px)] overflow-y-auto dashboard-scroll p-6 rounded-b-xl"
              style={{ backgroundColor: 'var(--color-primary-lightest)' }}
            >
              <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                cols={{ lg: 6, md: 6, sm: 2, xs: 2, xxs: 1 }}
                rowHeight={30}
                margin={[24, 24]}
                draggableHandle=".drag-handle"
                resizeHandles={['se']}
                useCSSTransforms
                isBounded
                compactType="vertical"
                onLayoutChange={(_, allLayouts) => {
                  setLayouts(allLayouts);
                  if (typeof window !== 'undefined') {
                    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allLayouts));
                  }
                }}
              >
                <div key="workforce">
                  <WorkforceOverviewWidget />
                </div>
                <div key="recruitment">
                  <RecruitmentMetricsWidget />
                </div>
                <div key="attendance">
                  <AttendanceAndLeaveWidget />
                </div>
                <div key="training">
                  <TrainingProgressWidget />
                </div>
                <div key="turnover">
                  <TurnoverRetentionWidget />
                </div>
                <div key="performance">
                  <PerformanceSummaryWidget />
                </div>
                <div key="payroll">
                  <PayrollSummaryWidget />
                </div>
              </ResponsiveGridLayout>
            </div>
          </div>

          {/* Slide-in Widgets Panel */}
          <WidgetsPanel open={widgetsOpen} onClose={() => setWidgetsOpen(false)} />
        </div>
      </div>
    </>
  );
}
