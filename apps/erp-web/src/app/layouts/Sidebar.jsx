import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  ChevronDown,
  ChevronRight,
  Settings,
  LogOut,
  Workflow,
  Cog,
} from 'lucide-react';

const hrMenuData = [
  {
    id: 'hr-dashboard',
    label: 'Dashboard',
    path: '/hr/dashboard',
    level: 1
  },
  {
    id: 'employee-mgmt',
    label: 'Employee Management',
    path: '/hr/employee-management',
    level: 1,
    hasChildren: true
  },
  {
    id: 'directory',
    label: 'Directory',
    path: '/hr/directory',
    level: 2,
    parentId: 'employee-mgmt'
  },
  {
    id: 'employee-profile',
    label: 'Employee Profile',
    path: '/hr/employee-profile',
    level: 2,
    parentId: 'employee-mgmt'
  },
  {
    id: 'self-service',
    label: 'Self service portal',
    path: '/hr/self-service',
    level: 2,
    parentId: 'employee-mgmt'
  },
  {
    id: 'manager-view',
    label: 'Manager View',
    path: '/hr/manager-view',
    level: 2,
    parentId: 'employee-mgmt'
  },
  {
    id: 'org-chart',
    label: 'Organization Chart',
    path: '/hr/org-chart',
    level: 2,
    parentId: 'employee-mgmt'
  },
  {
    id: 'management',
    label: 'Management',
    path: '/hr/management',
    level: 2,
    parentId: 'employee-mgmt',
    isLastChild: true
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    path: '/hr/recruitment',
    level: 1
  },
  {
    id: 'onboarding',
    label: 'Onboarding',
    path: '/hr/onboarding',
    level: 1
  },
  {
    id: 'time-attendance',
    label: 'Time & attendance',
    path: '/hr/time-attendance',
    level: 1
  },
  {
    id: 'payroll',
    label: 'Payroll',
    path: '/hr/payroll',
    level: 1
  },
  {
    id: 'performance',
    label: 'Performance Management',
    path: '/hr/performance',
    level: 1
  },
  {
    id: 'learning',
    label: 'Learning & Development',
    path: '/hr/learning-development',
    level: 1
  },
  {
    id: 'compliance',
    label: 'Compliance & Reporting',
    path: '/hr/compliance',
    level: 1
  },
  {
    id: 'roles',
    label: 'Roles & Permissions',
    path: '/hr/roles-permissions',
    level: 1
  },
  {
    id: 'notifications',
    label: 'Notification & Alert',
    path: '/hr/notifications',
    level: 1
  },
  {
    id: 'integrations',
    label: 'Integrations',
    path: '/hr/integrations',
    level: 1
  },
];

const MenuItem = ({ icon: Icon, label, path, onClick, isCollapsed }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  if (isCollapsed) {
    return (
      <Link
        to={path}
        onClick={onClick}
        className={`flex items-center justify-center py-3 transition-colors ${
          isActive 
            ? 'text-[var(--color-primary-light)] font-medium border-l-4 border-[var(--color-primary-light)]' 
            : 'text-white hover:bg-white/10'
        }`}
        title={label}
      >
        {Icon && <Icon className="w-5 h-5" />}
      </Link>
    );
  }

  return (
    <Link
      to={path}
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-3 text-sm transition-colors ${
        isActive 
          ? 'text-[var(--color-primary-light)] font-medium border-l-4 border-[var(--color-primary-light)]' 
          : 'text-white hover:bg-white/10'
      }`}
    >
      {Icon && <Icon className="w-[18px] h-[18px]" />}
      <span>{label}</span>
    </Link>
  );
};

// Fixed Tree Rail System
const TreeRailItem = ({ item, index, allItems, onLinkClick, hasChildren, isExpanded, onToggleChildren, childrenItems, isLastInSection }) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;
  const isLevel1 = item.level === 1;
  const isLevel2 = item.level === 2;

  const isFirstItem = index === 0;
  const isLastItem = index === allItems.length - 1;

  const employeeMgmtChildren = childrenItems || [];
  const isFirstChild = employeeMgmtChildren[0]?.id === item.id;
  const isLastChild = employeeMgmtChildren[employeeMgmtChildren.length - 1]?.id === item.id;

  // If this item has children, make it clickable to toggle
  if (hasChildren) {
    return (
      <div>
        <div
          onClick={onToggleChildren}
          className={`flex items-center justify-between text-sm transition-colors relative cursor-pointer ${
            isLevel1 ? 'pl-[52px] pr-4 py-1' : 'pl-[76px] pr-4 py-0.5'
          } ${
            isActive
              ? 'text-[var(--color-primary-light)] font-medium bg-white/10'
              : 'text-white/90 hover:text-white hover:bg-white/5'
          }`}
        >
          {/* TREE RAIL SYSTEM */}
          <div className="absolute left-0 top-0 bottom-0 pointer-events-none w-full h-full">
            {/* Top half of outer rail */}
            {!isFirstItem && (
              <div className="absolute left-[29.5px] top-0 h-1/2 w-px bg-white/30"></div>
            )}
            
            {/* Bottom half - render unless this is the last item in section AND not expanded */}
            {(!isLastInSection || isExpanded) && (
              <div className="absolute left-[29.5px] bottom-0 h-1/2 w-px bg-white/30"></div>
            )}

            {/* Dot ON the line */}
            {isLevel1 && (
              <div className="absolute left-[26.5px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white/80 rounded-full z-10"></div>
            )}
          </div>

          <span className="relative z-10">
            {item.label}
          </span>

          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>

        {/* Children items */}
        {isExpanded && employeeMgmtChildren.map((childItem, childIndex) => (
          <TreeRailItem
            key={childItem.id}
            item={childItem}
            index={childIndex}
            allItems={employeeMgmtChildren}
            onLinkClick={onLinkClick}
            childrenItems={employeeMgmtChildren}
            isLastInSection={false}
          />
        ))}
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      onClick={onLinkClick}
      className={`flex items-center text-sm transition-colors relative ${
        isLevel1 ? 'pl-[52px] pr-4 py-1' : 'pl-[76px] pr-4 py-0.5'
      } ${
        isActive
          ? 'text-[var(--color-primary-light)] font-medium bg-white/10'
          : 'text-white/90 hover:text-white hover:bg-white/5'
      }`}
    >
      {/* TREE RAIL SYSTEM */}
      <div className="absolute left-0 top-0 bottom-0 pointer-events-none w-full h-full">

        {/* === OUTER RAIL (Main Vertical Line) === */}
        {/* Top half - don't render for first item at level 1 */}
        {!(isLevel1 && isFirstItem) && (
          <div className="absolute left-[29.5px] top-0 h-1/2 w-px bg-white/30"></div>
        )}

        {/* Bottom half - render for all except truly last item in section */}
        {!isLastInSection && (
          <div className="absolute left-[29.5px] bottom-0 h-1/2 w-px bg-white/30"></div>
        )}

        {/* === LEVEL 1: Dot ON the line === */}
        {isLevel1 && (
          <div className="absolute left-[26.5px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-white/80 rounded-full z-10"></div>
        )}

        {/* === INNER RAIL (Children Rail - only for Level 2 items) === */}
        {isLevel2 && (
          <>
            {/* Inner vertical rail */}
            <div
              className={`absolute w-px bg-white/30 left-[50px] ${isFirstChild ? 'top-1/2' : 'top-0'} ${isLastChild ? 'bottom-1/2' : 'bottom-0'}`}
            ></div>

            {/* Horizontal connector from inner rail to text */}
            <div className="absolute left-[50px] top-1/2 w-4 h-px bg-white/30"></div>
          </>
        )}
      </div>

      <span className="relative z-10">
        {item.label}
      </span>
    </Link>
  );
};

const ExpandableMenuItem = ({ icon: Icon, label, items, isCollapsed, onLinkClick, isExpanded, onToggle, employeeMgmtExpanded, onToggleEmployeeMgmt }) => {
  const location = useLocation();
  const isInSection = items.some((item) => location.pathname === item.path);

  if (isCollapsed) {
    return (
      <div
        className={`flex items-center justify-center py-3 text-white hover:bg-white/10 transition-colors ${isInSection ? 'bg-white/5' : ''
          }`}
        title={label}
      >
        <Icon className="w-5 h-5" />
      </div>
    );
  }

  // Get level 1 items and children
  const level1Items = items.filter(item => item.level === 1);
  const employeeMgmtChildren = items.filter(item => item.parentId === 'employee-mgmt');

  return (
    <div>
      {/* HR Header with Outward Bulge Shape */}
      <div 
        className="relative w-full my-1 overflow-hidden cursor-pointer"
        onClick={onToggle}
      >
        {/* Background Shape using SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 278 44"
        >
          <path d="M252.845 7.7027C267.293 7.37838 275.635 2.43243 278 0V45C273.872 38.8378 259.51 36.4865 252.845 36.0811H0V7.7027C78.2614 7.83784 238.396 8.02703 252.845 7.7027Z" fill="var(--color-primary-light)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between px-6 py-2 text-sm font-medium text-[var(--color-primary-darkest)]">
          <div className="flex items-center gap-1">
            <Icon className="w-[18px] h-[18px]" />
            <span>{label}</span>
          </div>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </div>
      </div>

      {/* Dropdown Content - Only show when expanded */}
      {isExpanded && (
        <div className="bg-[var(--color-primary-darkest)] py-0.5">
          {level1Items.map((item, index) => (
            <TreeRailItem
              key={item.id}
              item={item}
              index={index}
              allItems={level1Items}
              onLinkClick={onLinkClick}
              hasChildren={item.hasChildren}
              isExpanded={item.id === 'employee-mgmt' ? employeeMgmtExpanded : false}
              onToggleChildren={item.id === 'employee-mgmt' ? onToggleEmployeeMgmt : undefined}
              childrenItems={item.id === 'employee-mgmt' ? employeeMgmtChildren : []}
              isLastInSection={index === level1Items.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const RoundedDropdownItem = ({ icon: Icon, label, onClick, isCollapsed }) => {
  if (isCollapsed) {
    return (
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center py-3 text-white hover:bg-white/10 transition-colors"
        title={label}
      >
        <Icon className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-[calc(100%-2.5rem)] mx-5 mb-3 flex items-center justify-between px-3 py-2 text-white border border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all"
    >
      <div className="flex items-center gap-2">
        <Icon className="w-5 h-5" />
        <span className="font-normal text-[15px] leading-[100%]">
          {label}
        </span>
      </div>
      <ChevronDown className="w-3 h-3" />
    </button>
  );
};

const SimpleMenuItem = ({ icon: Icon, label, onClick, isCollapsed }) => {
  if (isCollapsed) {
    return (
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center py-3 text-white hover:bg-white/10 transition-colors"
        title={label}
      >
        <Icon className="w-[18px] h-[18px]" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-1 px-5 py-2 text-white hover:bg-white/10 transition-colors"
    >
      <Icon className="w-[18px] h-[18px]" />
      <span className="font-normal text-[17px] leading-[100%]">
        {label}
      </span>
    </button>
  );
};

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHRExpanded, setIsHRExpanded] = useState(false);
  const [isEmployeeMgmtExpanded, setIsEmployeeMgmtExpanded] = useState(false);
  const location = useLocation();

  // Auto-expand HR menu if user is on an HR page
  useEffect(() => {
    const isOnHRPage = hrMenuData.some(item => location.pathname === item.path);
    if (isOnHRPage) {
      setIsHRExpanded(true);
      
      // Also expand Employee Management if on a child page
      const isOnEmployeeMgmtPage = hrMenuData.some(
        item => item.parentId === 'employee-mgmt' && location.pathname === item.path
      );
      if (isOnEmployeeMgmtPage) {
        setIsEmployeeMgmtExpanded(true);
      }
    }
  }, [location.pathname]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleHRMenu = () => {
    setIsHRExpanded(!isHRExpanded);
  };

  const toggleEmployeeMgmt = () => {
    setIsEmployeeMgmtExpanded(!isEmployeeMgmtExpanded);
  };

  return (
    <div className={`sticky top-16 left-0 bottom-0 h-[calc(100vh-4rem)] z-40 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-72'
      }`}>

      {/* Main Sidebar */}
      <aside
        className={`w-full h-full bg-[var(--color-primary-darkest)] text-white overflow-hidden flex flex-col`}
      >
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pt-4">
          <nav className="flex flex-col h-full relative">
            <div className="py-2">
              <div className="pt-2">
                <MenuItem
                  icon={LayoutDashboard}
                  label="Dashboard"
                  path="/dashboard"
                  isCollapsed={isCollapsed}
                />
              </div>

              <ExpandableMenuItem
                icon={Users}
                label="Human Resources"
                items={hrMenuData}
                isCollapsed={isCollapsed}
                isExpanded={isHRExpanded}
                onToggle={toggleHRMenu}
                employeeMgmtExpanded={isEmployeeMgmtExpanded}
                onToggleEmployeeMgmt={toggleEmployeeMgmt}
              />
            </div>

            <div className="absolute bottom-3 w-full">
              <RoundedDropdownItem
                icon={Workflow}
                label="BCP"
                isCollapsed={isCollapsed}
              />
              <RoundedDropdownItem
                icon={Cog}
                label="Publisher"
                isCollapsed={isCollapsed}
              />

              <SimpleMenuItem
                icon={Settings}
                label="Settings"
                isCollapsed={isCollapsed}
              />
              <SimpleMenuItem
                icon={LogOut}
                label="Logout"
                isCollapsed={isCollapsed}
              />
            </div>
          </nav>
        </div>
      </aside>

      {/* Sidebar Toggle Button (Green Chevron) - Visible on ALL screen sizes */}
      <button
        onClick={toggleCollapse}
        className="flex absolute items-center justify-center bg-[var(--color-primary-darkest)] text-white hover:opacity-90 transition-opacity z-50 w-6 h-9 top-2.5 -right-5 rounded-r-full border border-white/20 border-l-0"
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <ChevronRight className={`transform transition-transform duration-300 ${isCollapsed ? 'rotate-0' : 'rotate-180'}`} />
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};