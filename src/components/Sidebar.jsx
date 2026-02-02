import React from 'react';
import { LayoutDashboard, MessageSquare, Users, Settings, Bell, Zap } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <MessageSquare size={20} />, label: 'Messages' },
    { icon: <Users size={20} />, label: 'Contacts' },
    { icon: <Zap size={20} />, label: 'Campagnes' },
    { icon: <Bell size={20} />, label: 'Notifications' },
  ];

  return (
    <div className="h-screen w-64 bg-pulsai-gray-light border-r border-gray-200 flex flex-col p-4">
      {/* Logo PulsAI */}
      <div className="flex items-center gap-2 px-2 mb-10">
        <div className="w-8 h-8 bg-pulsai-blue rounded-lg flex items-center justify-center text-white font-bold">
          P
        </div>
        <span className="text-xl font-bold text-pulsai-blue font-sans">PulsAI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              item.active 
                ? 'bg-pulsai-blue text-white shadow-md' 
                : 'text-gray-500 hover:bg-white hover:text-pulsai-blue'
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Profil / Settings en bas */}
      <div className="border-t pt-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-white rounded-xl transition-all">
          <Settings size={20} />
          <span className="font-medium">Paramètres</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;