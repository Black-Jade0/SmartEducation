// src/components/MainLayout.tsx
import React, { useState } from 'react';
import { Award, Briefcase, FileText, HelpCircle, LayoutDashboard, Settings, User, type LucideIcon } from 'lucide-react';

interface NavItem {
  icon: LucideIcon;
  label: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Briefcase, label: 'Jobs' },
  { icon: FileText, label: 'Applications' },
  { icon: Award, label: 'Certificates' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
];

// The active page is now passed as a prop
interface MainLayoutProps {
  children: React.ReactNode;
  activePage: string;
  onPageChange?: (page: string) => void;
}

export const MainLayout = ({ children, activePage, onPageChange }: MainLayoutProps) => {
  // You can still manage the state here if needed, or just use the prop
  const [activeNav, setActiveNav] = useState(activePage);

  const handleNavClick = (label: string) => {
    setActiveNav(label);
    if (onPageChange) {
      onPageChange(label);
    }
  };

  return (
    <div className="flex min-h-screen bg-background font-display">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 flex-col bg-card/50 p-4 border-r border-border hidden lg:flex justify-between">
        <div>
          <div className="flex items-center gap-3 mb-10">
             <div className="bg-accent p-2 rounded-lg"><Briefcase className="text-white"/></div>
            <h1 className="text-lg font-bold text-text-primary">Placement Portal</h1>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label)}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 text-left ${
                  activeNav === item.label
                    ? 'bg-accent text-white'
                    : 'hover:bg-card text-text-secondary hover:text-text-primary'
                }`}
              >
                <item.icon className="size-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-300 text-left w-full hover:bg-card text-text-secondary hover:text-text-primary">
            <HelpCircle className="size-5 flex-shrink-0" />
            <span className="text-sm font-medium">Help and FAQs</span>
          </button>
        </div>
      </aside>

      {/* ===== MAIN CONTENT (Your Page) ===== */}
      {/* The 'children' prop renders the specific page component here */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};