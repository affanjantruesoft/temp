import { useNavigate } from 'react-router-dom';

export default function Breadcrumb() {
  const navigate = useNavigate();

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'HR', path: '/hr' },
    { label: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1">
        {breadcrumbs.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <button
              onClick={() => navigate(item.path)}
              className={`transition-colors ${index === breadcrumbs.length - 1
                  ? 'text-[var(--color-primary-darkest)] bg-[var(--color-primary-lightest)] px-1.5 py-[1px] rounded-[2px] text-[14px] leading-none'
                  : 'text-[#333333] hover:text-gray-900 text-[11px] leading-none'
                }`}
              style={{ fontFamily: 'Poppins' }}
            >
              {item.label}
            </button>
            {index < breadcrumbs.length - 1 && (
              <span className="text-gray-400 text-[10px]">•</span>
            )}
          </div>
        ))}
      </nav>

      {/* Dashboard Title */}
      <h1
        className="text-[24px] font-medium text-[var(--color-primary-darkest)] mt-1.5 leading-none"
        style={{ fontFamily: 'Poppins' }}
      >
        Dashboard
      </h1>

      {/* Bottom Border Line */}
      <div className="mt-1 border-b border-[#AFAFAF]"></div>
    </div>
  );
}