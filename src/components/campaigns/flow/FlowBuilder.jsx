
'use client';

import FlowNode from './FlowNode';
import { Plus, Play, Save, ZoomIn, ZoomOut } from 'lucide-react';

const FlowBuilder = () => {
    // Mock positioning
    const nodes = [
        { id: 1, type: 'trigger', title: 'Nouvelle Inscription', subtitle: 'Source: Website', x: 50, y: 300 },
        { id: 2, type: 'email', title: 'Email Bienvenue', subtitle: 'Délai: Immédiat', x: 400, y: 300 },
        { id: 3, type: 'condition', title: 'Mail Ouvert ?', subtitle: '', x: 750, y: 280 }, // Diamond shape adjusted visual
        { id: 4, type: 'wait', title: 'Attendre 2 jours', subtitle: '', x: 950, y: 150 },
        { id: 5, type: 'email', title: 'Envoyer Promo', subtitle: 'Remise: 20%', x: 1250, y: 150 },
        { id: 6, type: 'sms', title: 'Relance SMS', subtitle: 'Wazzap AI', x: 950, y: 500 },
    ]

    return (
        <div className="h-[700px] bg-gray-50 rounded-3xl border border-gray-200 relative overflow-hidden shadow-inner group">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#3590E3 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />

            {/* Controls Overlay */}
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                <button className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:text-pulsai-blue"><ZoomIn size={20} /></button>
                <button className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-600 hover:text-pulsai-blue"><ZoomOut size={20} /></button>
                <div className="h-full w-[1px] bg-gray-300 mx-2" />
                <button className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 flex items-center gap-2">
                    <Save size={18} />
                    Sauvegarder
                </button>
                <button className="px-4 py-2 bg-pulsai-blue rounded-lg shadow-lg shadow-pulsai-blue/30 text-white font-bold hover:bg-pulsai-blue/90 flex items-center gap-2">
                    <Play size={18} />
                    Activer
                </button>
            </div>

            {/* Sidebar Tools */}
            <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-white/60 shadow-lg flex flex-col gap-2">
                <ToolIcon icon={MousePointerClick} label="Trigger" color="blue" />
                <ToolIcon icon={Mail} label="Email" color="purple" />
                <ToolIcon icon={MessageCircle} label="SMS" color="pink" />
                <ToolIcon icon={Clock} label="Wait" color="amber" />
            </div>

            {/* Nodes */}
            <div className="absolute inset-0 overflow-auto">
                {/* SVG Connections (Static Simplified for Demo) */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    {/* Trigger -> Email */}
                    <path d="M 330 340 C 350 340, 360 340, 400 340" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                    {/* Email -> Condition */}
                    <path d="M 660 340 C 680 340, 710 340, 750 340" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                    {/* Condition -> Yes (Wait) */}
                    <path d="M 850 340 C 880 340, 880 190, 950 190" stroke="#10B981" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    {/* Condition -> No (SMS) */}
                    <path d="M 800 380 C 800 500, 850 540, 950 540" stroke="#EF4444" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                    {/* Wait -> Sending Promo */}
                    <path d="M 1200 190 C 1220 190, 1230 190, 1250 190" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                </svg>

                {nodes.map(node => (
                    <FlowNode
                        key={node.id}
                        type={node.type}
                        title={node.title}
                        subtitle={node.subtitle}
                        position={{ x: node.x, y: node.y }}
                    />
                ))}
            </div>
        </div>
    );
};

const ToolIcon = ({ icon: Icon, color, label }) => (
    <div className={`p-3 rounded-xl bg-white shadow-sm border border-gray-100 hover:scale-110 transition-transform cursor-grab active:cursor-grabbing text-${color}-600 group tooltip-container`}>
        <Icon size={20} />
    </div>
)
import { Mail, MessageCircle, Clock, MousePointerClick } from 'lucide-react'; // Import for tools

export default FlowBuilder;
