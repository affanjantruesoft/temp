import { useState } from 'react';

export default function WidgetsPanel({ open, onClose }) {
  const [expanded, setExpanded] = useState({
    approvals: true,
    actions: true,
    create: true,
    channels: false,
    favorites: false,
    quickActionsSection: true,
  });

  const toggleSection = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 transition-all duration-300"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
          onClick={onClose}
        />
      )}

      {/* Widget Panel - Level 1: Outer Wrapper (White) */}
      <div
        className="fixed right-6 z-50 transition-all duration-300 ease-out flex flex-col"
        style={{
          top: '150px', 
          bottom: '0',
          width: '532px',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: '30px',
          borderBottomLeftRadius: '30px',
          boxShadow: '-6px 6px 11px 0px #33333326',
          transform: open ? 'translateX(0)' : 'translateX(calc(100% + 24px))',
          pointerEvents: open ? 'auto' : 'none',
          overflow: 'hidden',
        }}

      >

        {/* Fixed Header */}
        <div className="flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center justify-between px-6 py-5">
            <h2
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '100%',
                color: '#035F5B',
              }}
            >
              Widgets Center
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition-colors"
            >
              ×
            </button>
          </div>

          {/* Fixed Search Bar */}
          <div className="px-6 pb-4">
            <div
              className="flex items-center gap-3"
              style={{
                width: '100%',
                height: 42,
                backgroundColor: '#FFFFFF',
                borderRadius: 97,
                border: '1px solid #E5E7EB',
                padding: '10px 18px',
              }}
            >
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search here"
                className="bg-white outline-none flex-1 text-sm border-none"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto pb-6 pt-2 dashboard-scroll">
          <div
            className="rounded-3xl space-y-4"
            style={{
              backgroundColor: '#B3E2DE',
              width: '508px',
              margin: '0 12px',
              padding: '24px 16px',
            }}
          >
            {/* Quick Actions Section Header */}
            <button
              onClick={() => toggleSection('quickActionsSection')}
              className="w-full flex items-center justify-between mb-2"
            >
              <h2
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '28px',
                  lineHeight: '100%',
                  color: '#035F5B',
                }}
              >
                Quick Actions
              </h2>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${expanded.quickActionsSection ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#035F5B' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {expanded.quickActionsSection && (
              <>
                {/* Level 3: White Widget Card - My Pending Approvals */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    borderRadius: '17px',
                    width: '483.39px',
                  }}
                >
                  <button
                    onClick={() => toggleSection('approvals')}
                    className="w-full flex items-center justify-between px-5 hover:bg-gray-50 transition-colors"
                    style={{ paddingTop: '30px', paddingBottom: '16px' }}
                  >
                    <h3
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '24px',
                        color: 'var(--color-primary-darkest)',
                        lineHeight: '100%',
                      }}
                    >
                      <span>👥</span> My Pending Approvals
                    </h3>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${expanded.approvals ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--color-primary-darkest)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Divider Line */}
                  <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '0 20px' }} />

                  {expanded.approvals && (
                    <div className="px-5 pb-5">
                      {/* Leave Request */}
                      <div className="mb-4">
                        <h4
                          style={{
                            color: 'var(--color-primary-dark)',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '100%',
                            marginBottom: '16px',
                            marginTop: '16px',
                          }}
                        >
                          Leave Request
                        </h4>
                        <div
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '18px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '437.71px',
                            height: '78.03px',
                            opacity: 0.7,
                          }}
                          className="p-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex-1">
                              <p
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 400,
                                  fontSize: '18px',
                                  lineHeight: '100%',
                                  color: '#000000',
                                }}
                              >
                                Ayesha Khan
                              </p>
                              <p
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 400,
                                  fontSize: '15px',
                                  lineHeight: '100%',
                                  color: '#333333',
                                  marginTop: '4px',
                                }}
                              >
                                Dec 03–Dec 05
                              </p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                              <button className="bg-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-teal-600 transition-colors">Approve</button>
                              <button className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-red-600 transition-colors">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timesheet */}
                      <div className="mb-4">
                        <h4
                          style={{
                            color: 'var(--color-primary-dark)',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '100%',
                            marginBottom: '8px',
                          }}
                        >
                          Timesheet
                        </h4>
                        <div
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '18px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '437.71px',
                            height: '78.03px',
                            opacity: 0.7,
                          }}
                          className="p-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex-1">
                              <p
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 400,
                                  fontSize: '18px',
                                  lineHeight: '100%',
                                  color: '#000000',
                                }}
                              >
                                Bilal Ahmed
                              </p>
                              <p
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 400,
                                  fontSize: '15px',
                                  lineHeight: '100%',
                                  color: '#333333',
                                  marginTop: '4px',
                                }}
                              >
                                Week of Dec 23
                              </p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                              <button className="bg-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-teal-600 transition-colors">Approve</button>
                              <button className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-red-600 transition-colors">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Claim */}
                      <div>
                        <h4
                          style={{
                            color: 'var(--color-primary-dark)',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '100%',
                            marginBottom: '8px',
                          }}
                        >
                          Claim
                        </h4>
                        <div
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '18px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '437.71px',
                            height: '78.03px',
                            opacity: 0.7,
                          }}
                          className="p-3"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex-1">
                              <p
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 400,
                                  fontSize: '18px',
                                  lineHeight: '100%',
                                  color: '#000000',
                                }}
                              >
                                Sara Iqbal
                              </p>
                              <p
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 400,
                                  fontSize: '15px',
                                  lineHeight: '100%',
                                  color: '#333333',
                                  marginTop: '4px',
                                }}
                              >
                                Medical reimbursement
                              </p>
                              <p
                                style={{
                                  fontFamily: 'Poppins',
                                  fontWeight: 400,
                                  fontSize: '15px',
                                  lineHeight: '100%',
                                  color: '#333333',
                                  marginTop: '4px',
                                }}
                              >
                                12,500 PKR
                              </p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                              <button className="bg-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-teal-600 transition-colors">Approve</button>
                              <button className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-red-600 transition-colors">Reject</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Level 3: White Widget Card - Quick Actions */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    borderRadius: '17px',
                    width: '483.39px',
                  }}
                >
                  <button
                    onClick={() => toggleSection('actions')}
                    className="w-full flex items-center justify-between px-5 hover:bg-gray-50 transition-colors"
                    style={{ paddingTop: '30px', paddingBottom: '16px' }}
                  >
                    <h3
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '24px',
                        color: 'var(--color-primary-darkest)',
                        lineHeight: '100%',
                      }}
                    >
                      <span>⚡</span> Quick Actions
                    </h3>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${expanded.actions ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--color-primary-darkest)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Divider Line */}
                  <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '0 20px' }} />

                  {expanded.actions && (
                    <div className="px-5 pb-5" style={{ marginTop: '16px' }}>
                      <div className="grid grid-cols-2 gap-3 gap-y-10">
                        <button
                          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '12px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '213.15px',
                            height: '62.8px',
                            padding: '12px 16px',
                            opacity: 0.7,
                          }}
                        >
                          <span className="text-2xl">👤</span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '100%',
                              color: '#333333',
                              textAlign: 'left',
                            }}
                          >
                            Add Employee
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '12px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '213.15px',
                            height: '62.8px',
                            padding: '12px 16px',
                            opacity: 0.7,
                          }}
                        >
                          <span className="text-2xl">✓</span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '100%',
                              color: '#333333',
                              textAlign: 'left',
                            }}
                          >
                            Approve Leave
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '12px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '213.15px',
                            height: '62.8px',
                            padding: '12px 16px',
                            opacity: 0.7,
                          }}
                        >
                          <span className="text-2xl">📋</span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '100%',
                              color: '#333333',
                              textAlign: 'left',
                            }}
                          >
                            Create Requisition
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '12px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '213.15px',
                            height: '62.8px',
                            padding: '12px 16px',
                            opacity: 0.7,
                          }}
                        >
                          <span className="text-2xl">💰</span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '100%',
                              color: '#333333',
                              textAlign: 'left',
                            }}
                          >
                            Run Payroll
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '12px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '213.15px',
                            height: '62.8px',
                            padding: '12px 16px',
                            opacity: 0.7,
                          }}
                        >
                          <span className="text-2xl">📅</span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '100%',
                              color: '#333333',
                              textAlign: 'left',
                            }}
                          >
                            Schedule Interview
                          </span>
                        </button>
                        <button
                          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
                          style={{
                            backgroundColor: 'var(--color-primary-lightest)',
                            borderRadius: '12px',
                            border: '1px solid var(--color-primary-lightest)',
                            width: '213.15px',
                            height: '62.8px',
                            padding: '12px 16px',
                            opacity: 0.7,
                          }}
                        >
                          <span className="text-2xl">🎯</span>
                          <span
                            style={{
                              fontFamily: 'Poppins',
                              fontWeight: 400,
                              fontSize: '16px',
                              lineHeight: '100%',
                              color: '#333333',
                              textAlign: 'left',
                            }}
                          >
                            Create Goal Cycle
                          </span>
                        </button>
                      </div>

                      <button className="w-full text-teal-700 text-sm font-medium hover:opacity-70 mt-3">
                        More ...
                      </button>
                    </div>
                  )}
                </div>

                {/* Level 3: White Widget Card - Quick Create */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                    borderRadius: '17px',
                    width: '483.39px',
                  }}
                >
                  <button
                    onClick={() => toggleSection('create')}
                    className="w-full flex items-center justify-between px-5 hover:bg-gray-50 transition-colors"
                    style={{ paddingTop: '30px', paddingBottom: '16px' }}
                  >
                    <h3
                      className="flex items-center gap-2"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        fontSize: '24px',
                        color: 'var(--color-primary-darkest)',
                        lineHeight: '100%',
                      }}
                    >
                      <span>✨</span> Quick Create
                    </h3>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${expanded.create ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: 'var(--color-primary-darkest)' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Divider Line */}
                  <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '0 20px' }} />

                  {expanded.create && (
                    <div className="px-5 pb-5" style={{ marginTop: '16px' }}>
                      <div className="space-y-2">
                        <button className="w-full flex items-center transition-colors p-0" style={{ gap: '12px', paddingTop: '12px', paddingBottom: '12px' }}>
                          <span className="text-lg flex-shrink-0">📋</span>
                          <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '100%', color: '#333333', textAlign: 'left' }}>New job requisition</span>
                        </button>
                        <button className="w-full flex items-center  transition-colors p-0" style={{ gap: '12px', paddingTop: '12px', paddingBottom: '12px' }}>
                          <span className="text-lg flex-shrink-0">📚</span>
                          <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '100%', color: '#333333', textAlign: 'left' }}>New course</span>
                        </button>
                        <button className="w-full flex items-center transition-colors p-0" style={{ gap: '12px', paddingTop: '12px', paddingBottom: '12px', backgroundColor: 'rgba(179, 226, 222, 0.2)', padding: '12px 12px' }}>
                          <span className="text-lg flex-shrink-0">📄</span>
                          <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '100%', color: '#333333', textAlign: 'left' }}>New policy document</span>
                        </button>
                        <button className="w-full flex items-center  transition-colors p-0" style={{ gap: '12px', paddingTop: '12px', paddingBottom: '12px' }}>
                          <span className="text-lg flex-shrink-0">⏰</span>
                          <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '100%', color: '#333333', textAlign: 'left' }}>New shift rule</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Extra padding at bottom to allow scrolling past the floating button */}
            <div style={{ height: '10px' }}></div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          className="absolute bottom-20 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
          style={{
            backgroundColor: '#035F5B',
            color: '#FFFFFF',
          }}
        >
          <span className="text-2xl font-light">+</span>
        </button>
      </div>


    </>
  );
}