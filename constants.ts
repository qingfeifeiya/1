import { Mod, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Mods', count: 1245 },
  { id: 'client', name: 'Client Mods', count: 450 },
  { id: 'server', name: 'Server Mods', count: 320 },
  { id: 'items', name: 'Custom Items', count: 150 },
  { id: 'maps', name: 'Maps', count: 85 },
  { id: 'ui', name: 'User Interface', count: 240 },
];

export const MOCK_MODS: Mod[] = [
  {
    id: '1',
    title: 'SAIN 2.0 - Solarint AI Modification',
    author: 'Solarint',
    version: '2.1.5',
    gameVersion: '3.8.0',
    description: 'Complete overhaul of AI behavior. Enemies are smarter, flank more, and use cover effectively. Essential for a challenging experience.',
    fullContent: `
      <p class="lead">SAIN 2.0 represents a complete rewrite of the Tarkov AI logic. We have moved away from the simple state machines of the past to a complex behavior tree system that allows bots to make tactical decisions in real-time.</p>
      
      <h2>Introduction</h2>
      <p>Have you ever felt that the vanilla AI is just... lacking? They either stare at walls or laser you from 100 meters away. SAIN aims to fix that by introducing human-like behaviors.</p>
      
      <img src="https://picsum.photos/800/400?random=10" alt="AI Flanking" />
      <p><em>Above: Visualization of the new cover system logic.</em></p>

      <h2>Key Features</h2>
      <h3>1. Flanking Maneuvers</h3>
      <p>Bots will now actively try to flank your position if they are suppressed. If you pin a bot down, expect his friends to circle around.</p>
      
      <h3>2. Dynamic Cover Usage</h3>
      <ul>
        <li><strong>Hard Cover:</strong> Bots prefer solid objects like concrete walls.</li>
        <li><strong>Soft Cover:</strong> Bushes are used for concealment but not protection.</li>
        <li><strong>Retreat:</strong> If overwhelmed, bots will sprint to safety.</li>
      </ul>

      <blockquote>
        "This is the single most important mod for SPT. It changes the game entirely."
        <br/><cite>- AnyUser123</cite>
      </blockquote>

      <h2>Configuration</h2>
      <p>You can press <strong>F6</strong> in-game to open the configuration menu. Adjust difficulty, aggression, and vision distance on the fly.</p>
      
      <p>This mod requires <strong>Waypoints</strong> and <strong>BigBrain</strong> to function correctly. Please ensure those are installed first.</p>
    `,
    installation: `
      <ol>
        <li>Download the zip file from the link above.</li>
        <li>Extract the contents into your <code>/user/mods/</code> folder in your SPT directory.</li>
        <li><strong>Important:</strong> Ensure BepInEx plugins are placed in <code>/BepInEx/plugins/</code>. The folder structure should look like this:
          <pre style="background:#111; padding: 10px; border-radius: 5px; margin-top:10px;">
/user/mods/zSolarint-SAIN/
/BepInEx/plugins/SAIN.dll
          </pre>
        </li>
        <li>Run the server and check for red error text.</li>
      </ol>
      <p>If you encounter issues, check the <code>server.log</code> file.</p>
    `,
    downloads: 154200,
    updatedAt: '2 hours ago',
    category: 'client',
    imageUrl: 'https://picsum.photos/400/225?random=1',
    tags: ['AI', 'Hardcore', 'Overhaul', 'Essential'],
    isFeatured: true,
    fileSize: '4.5 MB',
    comments: [
      { id: 'c1', user: 'TarkovChad', avatar: 'TC', date: '1 hour ago', content: 'This mod changed my life. I actually die now. The flanking behavior is insane, I got pinned down at dorms and they actually used grenades to flush me out.' },
      { id: 'c2', user: 'RatAttack', avatar: 'RA', date: '3 hours ago', content: 'Is this compatible with Looting Bots? I noticed some frame drops when both are active.' },
      { id: 'c3', user: 'Solarint', avatar: 'S', date: '2 hours ago', content: '@RatAttack Yes, it is fully compatible. Make sure you are using the latest version of BigBrain.' }
    ]
  },
  {
    id: '2',
    title: 'Amands Graphics',
    author: 'Amands',
    version: '1.4.2',
    gameVersion: '3.8.0',
    description: 'Improves lighting, removes fog, and adds various post-processing effects to make the game look stunning without heavy performance cost.',
    fullContent: `<p>Amands Graphics is designed to fix the lackluster lighting in the base game. We remove the distance fog and clean up the ambient lighting to provide a crisp, clear image.</p>`,
    installation: `<p>Drag and drop into BepInEx/plugins.</p>`,
    downloads: 128500,
    updatedAt: '1 day ago',
    category: 'client',
    imageUrl: 'https://picsum.photos/400/225?random=2',
    tags: ['Graphics', 'Visuals', 'QoL'],
    isFeatured: true,
    fileSize: '1.2 MB',
    comments: []
  },
  {
    id: '3',
    title: 'SVM - Server Value Modifier',
    author: 'GhostFenixx',
    version: '1.8.1',
    gameVersion: '3.8.0',
    description: 'The ultimate tool for tweaking server settings. Loot rates, bot difficulty, hideout craft times, and much more in one GUI.',
    fullContent: `<p>SVM acts as a bridge between the user and the server configuration files.</p>`,
    installation: `<p>Install to user/mods.</p>`,
    downloads: 210000,
    updatedAt: '3 days ago',
    category: 'server',
    imageUrl: 'https://picsum.photos/400/225?random=3',
    tags: ['Tools', 'Config', 'Server'],
    fileSize: '8.5 MB',
    comments: []
  },
  {
    id: '4',
    title: 'MoreCheckmarks',
    author: 'Viper',
    version: '1.5.6',
    gameVersion: '3.7.6',
    description: 'Adds color-coded checkmarks to items indicating if they are needed for hideout, quests, or wishlists.',
    fullContent: `<p>Never sell a quest item again.</p>`,
    installation: `<p>Standard mod installation.</p>`,
    downloads: 89000,
    updatedAt: '1 week ago',
    category: 'ui',
    imageUrl: 'https://picsum.photos/400/225?random=4',
    tags: ['UI', 'QoL', 'Helper'],
    fileSize: '200 KB',
    comments: []
  },
  {
    id: '5',
    title: 'Realism Mod',
    author: 'Fontaine',
    version: '0.9.8',
    gameVersion: '3.8.0',
    description: 'Complete overhaul of ballistics, health, movement, and recoil to mimic real-life mechanics. Not for the faint of heart.',
    fullContent: `<p>Realism brings simulated ballistics and medical systems.</p>`,
    installation: `<p>Complex installation, read the PDF.</p>`,
    downloads: 65000,
    updatedAt: '5 hours ago',
    category: 'server',
    imageUrl: 'https://picsum.photos/400/225?random=5',
    tags: ['Hardcore', 'Realism', 'Mechanics'],
    fileSize: '45 MB',
    comments: []
  },
  {
    id: '6',
    title: 'Item Info',
    author: 'TarkovDev',
    version: '2.0.1',
    gameVersion: '3.8.0',
    description: 'Extends item description windows with detailed stats including penetration, damage, and armor class.',
    fullContent: `<p>See exactly what your ammo does.</p>`,
    installation: `<p>Client side mod.</p>`,
    downloads: 42000,
    updatedAt: '2 days ago',
    category: 'ui',
    imageUrl: 'https://picsum.photos/400/225?random=6',
    tags: ['UI', 'Stats'],
    fileSize: '500 KB',
    comments: []
  },
  {
    id: '7',
    title: 'Waypoints',
    author: 'DrakiaXYZ',
    version: '1.2.0',
    gameVersion: '3.8.0',
    description: 'Expanded navmesh and waypoints for bots, allowing them to traverse maps more freely and access previously restricted areas.',
    fullContent: `<p>Expands navmesh.</p>`,
    installation: `<p>BepInEx plugin.</p>`,
    downloads: 78000,
    updatedAt: '1 week ago',
    category: 'server',
    imageUrl: 'https://picsum.photos/400/225?random=7',
    tags: ['AI', 'Navmesh'],
    fileSize: '15 MB',
    comments: []
  },
  {
    id: '8',
    title: 'Looting Bots',
    author: 'Skwizzy',
    version: '1.3.4',
    gameVersion: '3.8.0',
    description: 'Bots will now loot bodies, containers, and loose loot, making the world feel more alive and competitive.',
    fullContent: `<p>Bots now steal your loot.</p>`,
    installation: `<p>Server and Client mod.</p>`,
    downloads: 95000,
    updatedAt: '4 days ago',
    category: 'server',
    imageUrl: 'https://picsum.photos/400/225?random=8',
    tags: ['AI', 'Loot', 'Immersion'],
    fileSize: '2.3 MB',
    comments: []
  },
];