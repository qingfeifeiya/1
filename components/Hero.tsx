import React from 'react';
import { Search, TrendingUp, Download, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative border-b border-border bg-surface overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-indigo-500 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:px-8 md:py-24">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
          Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Tarkov</span> Experience
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
          The community-driven modding platform for Single Player Tarkov. Discover thousands of mods, from gameplay overhauls to quality of life improvements.
        </p>

        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for mods, authors, or categories..." 
              className="w-full rounded-xl border border-gray-700 bg-background/50 py-4 pl-12 pr-4 text-lg text-white placeholder:text-gray-500 shadow-xl backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            <span>Popular:</span>
            {['SAIN', 'Amands Graphics', 'Realism', 'SVM'].map(tag => (
              <button key={tag} className="text-gray-300 hover:text-primary hover:underline transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-primary">
              <Download size={20} />
              <span className="text-2xl font-bold text-white">2.4M+</span>
            </div>
            <span className="text-sm text-gray-500">Total Downloads</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp size={20} />
              <span className="text-2xl font-bold text-white">1.2k+</span>
            </div>
            <span className="text-sm text-gray-500">Active Mods</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-primary">
              <Users size={20} />
              <span className="text-2xl font-bold text-white">45k+</span>
            </div>
            <span className="text-sm text-gray-500">Community Members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;