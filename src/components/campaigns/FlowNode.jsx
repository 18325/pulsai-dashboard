
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, Check, X, MousePointerClick } from 'lucide-react';

const FlowNode = ({ type, title, subtitle, position, isGhost }) => {
    const getIcon = () => {
        switch (type) {
            case 'trigger': return <MousePointerClick className="text-blue-600" />;
            case 'email': return <Mail className="text-purple-600" />;
            case 'wait': return <Clock className="text-amber-600" />;
            case 'condition': return <div className="text-pulsai-green rotate-45 border-2 border-pulsai-green w-3 h-3" />; // Custom shape usually
            case 'sms': return <MessageCircle className="text-pink-600" />;
            default: return <Mail />;
        }
    };

    const getColors = () => {
        switch (type) {
            case 'trigger': return 'bg-blue-50 border-blue-200';
            case 'email': return 'bg-white border-purple-100';
            case 'condition': return 'bg-white border-gray-200';
            case 'wait': return 'bg-amber-50 border-amber-200';
            default: return 'bg-white border-gray-200';
        }
    };

    if (type === 'condition') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute z-10 w-32 h-32 flex items-center justify-center"
                style={{ left: position.x, top: position.y }}
            >
                <div className="w-24 h-24 bg-white border-2 border-gray-200 rotate-45 flex items-center justify-center shadow-lg hover:border-pulsai-blue transition-colors cursor-pointer group">
                    <div className="-rotate-45 text-center">
                        <p className="text-xs font-bold text-gray-700">Ouvert ?</p>
                    </div>
                </div>
                {/* Branch Labels */}
                <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Oui</div>
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded">Non</div>
            </motion.div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            drag={!isGhost}
            className={`absolute z-10 w-64 p-4 rounded-2xl shadow-lg cursor-grab active:cursor-grabbing border ${getColors()} ${isGhost ? 'opacity-50 dashed border-2' : ''}`}
            style={{ left: position.x, top: position.y }}
        >
            <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100`}>
                    {getIcon()}
                </div>
                <div>
                    <h4 className="font-bold text-gray-800 text-sm">{title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
                </div>
            </div>

            {/* Connectors */}
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-blue-400 rounded-full" />
            {type !== 'trigger' && <div className="absolute top-1/2 -left-1 w-2 h-2 bg-gray-300 rounded-full" />}
        </motion.div>
    );
};

export default FlowNode;
