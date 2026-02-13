import { Bell } from 'lucide-react';

export const Header = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-gray-lightest)]">
      <div className="h-[73px] flex items-center justify-between relative px-5">
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative">
            <img
              src="/trusoft_logo.png"
              alt="TruSoft Logo"
              className="w-[133px] h-[37px] object-contain"
              height={37}
              width={133}
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Bell icon */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-[28px] h-[27.6px] text-[var(--color-black)] fill-[var(--color-black)]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User info */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Avatar */}
            <div className="w-[33px] h-[33px] bg-[var(--color-primary-dark)] rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">JP</span>
            </div>

            {/* Name & Email */}
            <div className="hidden md:flex flex-col justify-center">
              <p className="font-medium text-[14px] text-[var(--color-primary-darkest)]">
                Jason Stratham
              </p>
              <p className="font-medium text-[14px] text-[var(--color-black)]">
                jason@trusoft.pk
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};