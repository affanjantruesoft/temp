import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const AppShell = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    // Global app background (keep this white so colored sections sit on top)
    <div className="min-h-screen bg-white">
      <Header onMenuClick={toggleSidebar} />

      <div className="flex pt-16">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <main className="flex-1 lg:ml-0">
          {children}
        </main>

      </div>
    </div>
  );
};
