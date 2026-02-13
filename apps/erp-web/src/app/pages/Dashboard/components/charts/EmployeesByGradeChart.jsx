export default function EmployeesByGradeChart() {
  const grades = [
    { name: 'G1', count: 120, percent: 25 },
    { name: 'G2', count: 310, percent: 60 },
    { name: 'G3', count: 540, percent: 85 },
    { name: 'G4', count: 277, percent: 40 },
  ];

  const ProgressBar = ({ label, count, percent }) => (
    <div style={{ width: '407px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <span
        className="text-sm font-medium"
        style={{
          fontFamily: 'Poppins',
          color: 'var(--color-primary-darkest)'
        }}
      >
        {label}
      </span>
      <div className="flex items-center gap-2 w-full">
        <div
          className="flex-1 rounded-full overflow-hidden"
          style={{
            height: '13px',
            backgroundColor: '#E0F2F1'
          }}
        >
          <div
            className="rounded-full h-full"
            style={{
              width: `${percent}%`,
              backgroundColor: 'var(--color-primary-darkest)'
            }}
          />
        </div>
        <span
          className="text-sm font-medium shrink-0 w-10 text-right"
          style={{
            fontFamily: 'Poppins',
            color: 'var(--color-primary-darkest)'
          }}
        >
          {count}
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-4" style={{ marginLeft: 'auto' }}>
      <h3
        className="text-[24px] font-medium"
        style={{
          fontFamily: 'Poppins',
          lineHeight: '22px',
          color: 'var(--color-primary-darkest)',
          marginTop: '82px',
        }}
      >
        Employees by Grade
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {grades.map((grade, idx) => (
          <ProgressBar key={idx} label={grade.name} count={grade.count} percent={grade.percent} />
        ))}
      </div>
    </div>
  );
}