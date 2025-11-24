import React, { useState } from 'react';
import { ArrowLeft, Download, Calendar, User, Eye, MessageSquare, Shield, FolderOpen, Heart, Share2, AlertTriangle, FileText, Tag, Link as LinkIcon } from 'lucide-react';
import { Mod } from '../types';

interface ModDetailProps {
  mod: Mod;
  onBack: () => void;
}

const ModDetail: React.FC<ModDetailProps> = ({ mod, onBack }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'installation' | 'versions'>('overview');

  return (
    <div className="animate-fade-in min-h-screen pb-12 bg-background">
      {/* Hero / Header Area */}
      <div className="relative bg-surface border-b border-border overflow-hidden">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={mod.imageUrl} className="w-full h-full object-cover blur-3xl" alt="" />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
          >
            <div className="p-1 rounded-full bg-surfaceHighlight border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
              <ArrowLeft size={14} /> 
            </div>
            Back to Archive
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="relative shrink-0 group">
               <img 
                 src={mod.imageUrl} 
                 alt={mod.title} 
                 className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border-2 border-surfaceHighlight shadow-2xl transition-transform group-hover:scale-105"
               />
               {mod.isFeatured && (
                 <div className="absolute -top-3 -right-3 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded shadow-lg transform rotate-12">
                   FEATURED
                 </div>
               )}
             </div>

             <div className="flex-1 min-w-0">
               <div className="flex flex-wrap items-center gap-3 mb-3">
                 <span className="bg-primary/10 text-primary border border-primary/20 text-xs px-2.5 py-0.5 rounded-full font-medium uppercase tracking-wider">
                   {mod.category}
                 </span>
                 {mod.tags.slice(0, 3).map(tag => (
                   <span key={tag} className="bg-surfaceHighlight border border-border text-gray-400 text-xs px-2 py-0.5 rounded-full">
                     #{tag}
                   </span>
                 ))}
               </div>

               <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                 {mod.title}
               </h1>
               
               <p className="text-lg text-gray-400 mb-6 leading-relaxed border-l-4 border-primary/50 pl-4">
                 {mod.description}
               </p>
               
               <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500 border-t border-white/5 pt-4">
                 <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">
                     {mod.author.charAt(0)}
                   </div>
                   <span>By <span className="text-gray-200 font-medium hover:text-primary cursor-pointer transition-colors">{mod.author}</span></span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Calendar size={16} className="text-gray-600" />
                   <span>{mod.updatedAt}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Shield size={16} className={mod.gameVersion === '3.8.0' ? 'text-emerald-500' : 'text-amber-500'} />
                   <span>Compatible: <span className="text-gray-300">{mod.gameVersion}</span></span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Article Column */}
          <div className="lg:col-span-8">
            
            {/* Tabs Navigation */}
            <div className="flex items-center gap-1 border-b border-border mb-8 overflow-x-auto no-scrollbar">
              {[
                { id: 'overview', label: 'Article', icon: FileText },
                { id: 'installation', label: 'Setup Guide', icon: Download },
                { id: 'versions', label: 'Changelog', icon: Eye }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`
                    flex items-center gap-2 px-4 py-3 font-medium text-sm transition-all relative
                    ${activeTab === tab.id 
                      ? 'text-white' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-surfaceHighlight/50 rounded-t-lg'
                    }
                  `}
                >
                  <tab.icon size={16} className={activeTab === tab.id ? 'text-primary' : ''} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary shadow-[0_-2px_10px_rgba(59,130,246,0.5)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content Area */}
            <div className="bg-surface/50 border border-border rounded-xl p-6 md:p-8 min-h-[400px] shadow-sm relative">
              
              {activeTab === 'overview' && (
                <article className="prose prose-invert prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-gray-200 prose-a:text-primary prose-img:rounded-xl prose-img:border prose-img:border-border">
                  {/* WordPress Content Injection Point */}
                  <div dangerouslySetInnerHTML={{ __html: mod.fullContent }} />
                  
                  {/* Gallery Section */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <FolderOpen className="text-primary" size={20} />
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-video bg-black/50 rounded-lg overflow-hidden border border-border group cursor-pointer">
                        <img src={mod.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" alt="Gallery 1" />
                      </div>
                      <div className="aspect-video bg-surfaceHighlight rounded-lg border border-border flex flex-col items-center justify-center text-gray-500 hover:bg-surfaceHighlight/80 transition-colors cursor-pointer group">
                        <Eye size={32} className="mb-2 group-hover:text-white transition-colors" />
                        <span className="text-sm font-medium">View Full Gallery</span>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {activeTab === 'installation' && (
                 <div className="prose prose-invert prose-blue max-w-none">
                   <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-5 mb-8 flex gap-4">
                     <div className="bg-blue-500/20 p-2 rounded-md h-fit">
                        <AlertTriangle className="text-blue-400" size={20} />
                     </div>
                     <div>
                       <h4 className="text-blue-100 font-bold m-0 mb-1">Before you start</h4>
                       <div className="text-sm text-blue-200/80 m-0">
                         Ensure you have the latest version of <strong>BepInEx</strong> installed. Back up your profile before installing complex server mods.
                       </div>
                     </div>
                   </div>
                   
                   <div className="space-y-2">
                     <h3 className="text-gray-100">Step-by-Step Instructions</h3>
                     <div dangerouslySetInnerHTML={{ __html: mod.installation }} />
                   </div>
                 </div>
              )}

              {activeTab === 'versions' && (
                <div>
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-bold text-white m-0">Release History</h3>
                     <button className="text-xs font-medium text-primary border border-primary/30 px-3 py-1 rounded-full hover:bg-primary/10 transition-colors">
                       Subscribe to Updates
                     </button>
                   </div>
                   
                   <div className="relative border-l-2 border-border ml-3 space-y-8 pb-4">
                     {/* Latest Version */}
                     <div className="relative pl-6">
                       <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                         <div className="flex items-center gap-3">
                           <span className="text-lg font-bold text-white">v{mod.version}</span>
                           <span className="bg-green-500/20 text-green-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-green-500/20">Current</span>
                         </div>
                         <span className="text-sm text-gray-500 font-mono">{mod.updatedAt}</span>
                       </div>
                       <div className="bg-surfaceHighlight/30 rounded-lg p-4 text-sm text-gray-400 border border-border/50">
                         <p className="mb-2 text-gray-300 font-medium">Major Update:</p>
                         <ul className="list-disc list-inside space-y-1 ml-1">
                           <li>Improved AI pathfinding logic</li>
                           <li>Fixed compatibility with 3.8.0</li>
                           <li>Reduced memory usage by 15%</li>
                         </ul>
                       </div>
                     </div>

                     {/* Previous Version */}
                     <div className="relative pl-6 opacity-60 hover:opacity-100 transition-opacity">
                       <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-gray-700 border-2 border-background"></div>
                       <div className="flex items-center gap-3 mb-1">
                         <span className="font-bold text-gray-300">v{mod.version.split('.').map((n, i) => i === 2 ? Math.max(0, parseInt(n)-1) : n).join('.')}</span>
                         <span className="text-xs text-gray-600">Previous Release</span>
                       </div>
                       <p className="text-sm text-gray-500">Initial beta release for testing.</p>
                     </div>
                   </div>
                </div>
              )}
            </div>

            {/* Comments Section (WordPress Style) */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <div className="bg-surfaceHighlight p-2 rounded-lg">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  Discussion
                  <span className="text-base font-normal text-gray-500">({mod.comments.length})</span>
                </h3>
              </div>
              
              {/* Comment Form */}
              <div className="bg-surface border border-border rounded-xl p-1 mb-10 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
                <textarea 
                  className="w-full bg-surfaceHighlight/20 border-0 rounded-lg p-4 text-white placeholder:text-gray-600 focus:outline-none focus:bg-surfaceHighlight/50 transition-colors min-h-[120px] resize-none"
                  placeholder="Join the discussion... (Markdown supported)"
                ></textarea>
                <div className="flex justify-between items-center px-4 py-2 bg-surfaceHighlight/30 border-t border-border/50 rounded-b-lg">
                  <span className="text-xs text-gray-500">Log in to post</span>
                  <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-md text-sm font-bold transition-colors">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Comment List */}
              <div className="space-y-8">
                {mod.comments.length > 0 ? (
                  mod.comments.map(comment => (
                    <div key={comment.id} className="group flex gap-4 animate-fade-in">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-surfaceHighlight border border-border flex items-center justify-center text-sm font-bold text-gray-400 shadow-sm">
                        {comment.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="bg-surface border border-border/50 rounded-r-xl rounded-bl-xl p-4 relative group-hover:border-border transition-colors">
                          <div className="flex items-center justify-between mb-2">
                             <div className="flex items-center gap-2">
                               <span className="font-bold text-gray-200 hover:text-primary cursor-pointer transition-colors">{comment.user}</span>
                               {comment.user === 'Solarint' && <span className="text-[10px] bg-primary/20 text-primary px-1.5 rounded border border-primary/20">AUTHOR</span>}
                             </div>
                             <span className="text-xs text-gray-600">{comment.date}</span>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed">{comment.content}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 ml-1">
                          <button className="text-xs font-medium text-gray-500 hover:text-white transition-colors">Reply</button>
                          <button className="text-xs font-medium text-gray-500 hover:text-white transition-colors">Report</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16 bg-surfaceHighlight/10 border border-dashed border-border rounded-xl">
                    <MessageSquare size={48} className="mx-auto text-gray-700 mb-4" />
                    <p className="text-gray-500">No comments yet.</p>
                    <p className="text-sm text-gray-600">Be the first to share your thoughts on this mod!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar / Widgets Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Action Card */}
            <div className="bg-surface border border-border rounded-xl p-6 shadow-xl sticky top-24 z-10">
              <div className="text-center mb-6">
                 <div className="text-3xl font-bold text-white mb-1">{mod.version}</div>
                 <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Latest Version</div>
              </div>

              <button className="w-full group relative overflow-hidden bg-primary hover:bg-blue-600 text-white font-bold py-4 px-4 rounded-lg flex items-center justify-center gap-3 transition-all shadow-[0_4px_20px_rgba(59,130,246,0.3)] mb-4">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <Download size={20} className="group-hover:scale-110 transition-transform" />
                <span>Download Now</span>
              </button>
              
              <div className="text-center text-xs text-gray-500 mb-6 flex justify-center gap-4">
                <span>{mod.fileSize}</span>
                <span>•</span>
                <span>Zip Archive</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="flex flex-col items-center justify-center gap-1 py-3 bg-surfaceHighlight/50 border border-border rounded-lg text-sm text-gray-400 hover:text-white hover:bg-surfaceHighlight hover:border-gray-600 transition-all">
                  <Heart size={18} />
                  <span className="text-xs">Endorse</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-1 py-3 bg-surfaceHighlight/50 border border-border rounded-lg text-sm text-gray-400 hover:text-white hover:bg-surfaceHighlight hover:border-gray-600 transition-all">
                  <Share2 size={18} />
                  <span className="text-xs">Share</span>
                </button>
              </div>

              <div className="bg-background rounded-lg p-4 border border-border space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Total Downloads</span>
                  <span className="text-gray-200 font-mono">{(mod.downloads / 1000).toFixed(1)}k</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Unique Users</span>
                  <span className="text-gray-200 font-mono">{(mod.downloads * 0.75 / 1000).toFixed(1)}k</span>
                </div>
                <div className="h-px bg-border my-2" />
                 <div className="flex justify-between text-sm">
                  <span className="text-gray-500">License</span>
                  <span className="text-gray-200">MIT</span>
                </div>
              </div>
            </div>

            {/* Author Widget */}
            <div className="bg-surface border border-border rounded-xl p-6">
              <h4 className="font-bold text-gray-200 mb-4 text-xs uppercase tracking-wider flex items-center justify-between">
                <span>Created By</span>
                <LinkIcon size={12} className="text-gray-600" />
              </h4>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-surfaceHighlight to-black border-2 border-surfaceHighlight flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {mod.author.substring(0, 1)}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{mod.author}</div>
                  <div className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit">Modder Lvl 10</div>
                </div>
              </div>
              <div className="flex gap-2">
                 <button className="flex-1 bg-white text-black font-bold py-2 rounded text-sm hover:bg-gray-200 transition-colors">Follow</button>
                 <button className="flex-1 border border-border text-gray-300 font-bold py-2 rounded text-sm hover:bg-surfaceHighlight transition-colors">Donate</button>
              </div>
            </div>

            {/* Related Posts / Mods Widget */}
            <div className="bg-surface border border-border rounded-xl p-6">
              <h4 className="font-bold text-gray-200 mb-4 text-xs uppercase tracking-wider">Related Content</h4>
              <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="flex gap-3 group cursor-pointer">
                     <div className="w-16 h-12 bg-surfaceHighlight rounded overflow-hidden">
                        <img src={`https://picsum.photos/100/100?random=${parseInt(mod.id) + i}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt="" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <div className="text-sm font-medium text-gray-300 group-hover:text-primary truncate transition-colors">Recommended Mod {i}</div>
                       <div className="text-xs text-gray-600">Updated 2 days ago</div>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ModDetail;