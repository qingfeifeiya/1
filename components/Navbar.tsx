import React from 'react';
import { Menu, Search, User, Hammer, Bell } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick} 
            className="md:hidden p-2 hover:bg-surfaceHighlight rounded-md text-gray-400 hover:text-white"
          >
            <Menu size={20} />
          </button>
          
          <button onClick={() => window.location.reload()} className="flex items-center gap-2 font-bold text-xl tracking-tight text-white mr-6">
            <Hammer className="text-primary" size={24} />
            <span>FORGE</span>
          </button>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#" className="text-white transition-colors hover:text-primary">Mods</a>
            <a href="#" className="transition-colors hover:text-white">Collections</a>
            <a href="#" className="transition-colors hover:text-white">Activity</a>
            <a href="#" className="transition-colors hover:text-white">Developers</a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden lg:flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-gray-400 focus-within:border-primary focus-within:text-white">
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Search mods..." 
              className="flex-1 bg-transparent placeholder:text-gray-500 focus:outline-none"
            />
            <span className="flex items-center text-xs text-gray-600 border border-gray-700 rounded px-1.5">⌘K</span>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          
          <button className="flex items-center gap-2 pl-2 text-sm font-medium text-gray-400 hover:text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surfaceHighlight border border-border text-primary">
              <User size={16} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;