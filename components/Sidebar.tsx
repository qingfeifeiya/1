import React from 'react';
import { Filter, ChevronDown, Check } from 'lucide-react';
import { CATEGORIES } from '../constants';
import { Category, SortOption } from '../types';

interface SidebarProps {
  isOpen: boolean;
  selectedCategory: string | null;
  onSelectCategory: (id: string | null) => void;
  selectedSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  selectedCategory, 
  onSelectCategory,
  selectedSort,
  onSelectSort
}) => {
  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-background transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:static md:translate-x-0 md:h-[calc(100vh-4rem)] md:sticky md:top-16
      `}
    >
      <div className="h-full overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-800">
        
        {/* Sort Section */}
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Sort By</h3>
          <div className="space-y-1">
            {[
              { id: 'updated', label: 'Last Updated' },
              { id: 'downloads', label: 'Most Downloaded' },
              { id: 'newest', label: 'Newest' },
              { id: 'rating', label: 'Highest Rated' },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => onSelectSort(option.id as SortOption)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                  selectedSort === option.id 
                    ? 'bg-surfaceHighlight text-white' 
                    : 'text-gray-400 hover:bg-surfaceHighlight/50 hover:text-white'
                }`}
              >
                {option.label}
                {selectedSort === option.id && <Check size={14} className="text-primary" />}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Categories</h3>
          <div className="space-y-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id === 'all' ? null : cat.id)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                  (selectedCategory === cat.id) || (selectedCategory === null && cat.id === 'all')
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-400 hover:bg-surfaceHighlight/50 hover:text-white'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs text-gray-600">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Version Filter - Visual Only for Demo */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            <h3>Game Version</h3>
            <ChevronDown size={14} />
          </div>
          <div className="space-y-2">
            {['3.8.0', '3.7.6', '3.7.4'].map((ver) => (
              <label key={ver} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer group">
                <input type="checkbox" className="rounded border-gray-700 bg-surface text-primary focus:ring-primary/20" defaultChecked={ver === '3.8.0'} />
                <span className="group-hover:translate-x-0.5 transition-transform">{ver}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;