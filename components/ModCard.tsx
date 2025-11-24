import React from 'react';
import { Download, Calendar, Tag } from 'lucide-react';
import { Mod } from '../types';

interface ModCardProps {
  mod: Mod;
  onClick: (mod: Mod) => void;
}

const ModCard: React.FC<ModCardProps> = ({ mod, onClick }) => {
  return (
    <div 
      onClick={() => onClick(mod)}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-all hover:border-gray-600 hover:shadow-lg hover:shadow-black/50 cursor-pointer"
    >
      
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-surfaceHighlight">
        <img 
          src={mod.imageUrl} 
          alt={mod.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
        
        {mod.isFeatured && (
          <div className="absolute top-2 right-2 rounded bg-amber-500/90 px-2 py-0.5 text-xs font-bold text-black uppercase tracking-wide backdrop-blur-sm">
            Featured
          </div>
        )}
        
        <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
          <div className="flex gap-2">
            {mod.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-medium text-gray-300 backdrop-blur-md">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between gap-4">
          <div>
            <h3 className="line-clamp-1 font-bold text-gray-100 group-hover:text-primary transition-colors">
              {mod.title}
            </h3>
            <p className="text-xs text-gray-500">
              by <span className="text-gray-300 hover:underline cursor-pointer">{mod.author}</span>
            </p>
          </div>
          <div className="shrink-0 rounded border border-gray-800 bg-surfaceHighlight px-1.5 py-0.5 text-xs font-mono text-gray-400">
            {mod.version}
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-gray-400">
          {mod.description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-3 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Download size={14} />
            <span>{(mod.downloads / 1000).toFixed(1)}k</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>{mod.updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModCard;