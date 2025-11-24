import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ModCard from './components/ModCard';
import ModDetail from './components/ModDetail'; // Import the new Article Page
import Hero from './components/Hero';
import { MOCK_MODS } from './constants';
import { SortOption, Mod } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<SortOption>('updated');
  
  // "Router" State
  const [activeMod, setActiveMod] = useState<Mod | null>(null);

  const filteredMods = useMemo(() => {
    let mods = [...MOCK_MODS];
    
    // Filter by Category
    if (selectedCategory) {
      mods = mods.filter(m => m.category === selectedCategory);
    }

    // Sort Logic
    switch (selectedSort) {
      case 'downloads':
        mods.sort((a, b) => b.downloads - a.downloads);
        break;
      case 'newest':
        // Mock parsing for demo purposes
        mods.sort((a, b) => parseInt(b.id) - parseInt(a.id)); 
        break;
      case 'updated':
      default:
        // Mock sort, in real app would parse dates
        mods.sort((a, b) => a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1);
        break;
    }
    
    return mods;
  }, [selectedCategory, selectedSort]);

  const handleModClick = (mod: Mod) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveMod(mod);
  };

  const handleBackToHome = () => {
    setActiveMod(null);
  };

  return (
    <div className="min-h-screen bg-background text-gray-200 font-sans selection:bg-primary/30 selection:text-white">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 
         WORDPRESS THEME SIMULATION:
         Conditional rendering determines if we are on the "Archive" (Home) or "Single" (Article) page.
      */}
      {activeMod ? (
        <ModDetail mod={activeMod} onBack={handleBackToHome} />
      ) : (
        <main className="flex flex-col md:flex-row">
          {/* Sidebar Navigation - only visible on Home/Archive view in this theme design */}
          <Sidebar 
            isOpen={isSidebarOpen} 
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedSort={selectedSort}
            onSelectSort={setSelectedSort}
          />

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            {!selectedCategory && <Hero />}
            
            <div className="p-4 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {selectedCategory 
                    ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Mods` 
                    : 'Trending Mods'
                  }
                </h2>
                <span className="text-sm text-gray-500">Showing {filteredMods.length} results</span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredMods.map(mod => (
                  <ModCard 
                    key={mod.id} 
                    mod={mod} 
                    onClick={handleModClick} // Pass the click handler
                  />
                ))}
                
                {/* Duplicate cards to fill grid for demo visual appeal */}
                {!selectedCategory && MOCK_MODS.slice(0, 4).map(mod => (
                  <ModCard 
                    key={`dup-${mod.id}`} 
                    mod={{...mod, id: `dup-${mod.id}`, title: `${mod.title} (Vol 2)`}} 
                    onClick={handleModClick}
                  />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                 <button className="rounded-md border border-gray-700 bg-surface px-6 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:bg-surfaceHighlight hover:text-white">
                   Load More Mods
                 </button>
              </div>
            </div>

            <footer className="border-t border-border bg-surface mt-auto py-12">
              <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="max-w-sm">
                     <h3 className="text-xl font-bold text-white mb-4">FORGE</h3>
                     <p className="text-sm text-gray-500">
                       The premier community platform for Single Player Tarkov modifications. 
                       Built by the community, for the community.
                     </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-sm text-gray-400">
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold text-white">Resources</h4>
                      <a href="#" className="hover:text-primary">Documentation</a>
                      <a href="#" className="hover:text-primary">API</a>
                      <a href="#" className="hover:text-primary">Status</a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold text-white">Community</h4>
                      <a href="#" className="hover:text-primary">Discord</a>
                      <a href="#" className="hover:text-primary">Reddit</a>
                      <a href="#" className="hover:text-primary">GitHub</a>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h4 className="font-semibold text-white">Legal</h4>
                      <a href="#" className="hover:text-primary">Terms</a>
                      <a href="#" className="hover:text-primary">Privacy</a>
                      <a href="#" className="hover:text-primary">Cookies</a>
                    </div>
                  </div>
                </div>
                <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
                  &copy; 2024 Forge Platform. Not affiliated with Battlestate Games.
                </div>
              </div>
            </footer>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;