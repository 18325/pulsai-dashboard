"use client";

import React, { useState, useEffect } from 'react';
import { Send, Paperclip, Smile, Sparkles, MoreVertical, Phone, Video, Search, Mic } from 'lucide-react';
import { motion } from 'framer-motion';
import AvatarLetter from './AvatarLetter';

const ChatWindow = ({ contact }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    // Update messages when contact changes
    useEffect(() => {
        if (contact && contact.messages) {
            setMessages(contact.messages);
        }
    }, [contact]);

    if (!contact) {
        return (
            <div className="flex-1 flex items-center justify-center h-full bg-[#FAFAFA]">
                <p className="text-gray-400">Sélectionnez une conversation</p>
            </div>
        );
    }

    const handleSend = () => {
        if (!inputText.trim()) return;
        setMessages([...messages, { id: Date.now(), text: inputText, sender: 'me', time: 'Now', read: false }]);
        setInputText('');
    };

    return (
        <div className="flex flex-col h-full bg-[#FAFAFA]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white shadow-sm z-10 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <AvatarLetter letter={contact.avatar} size="lg" />
                        {contact.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                        )}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{contact.name}</h3>
                        <span className={`text-xs font-bold flex items-center gap-1 ${contact.online ? 'text-green-600' : 'text-gray-400'}`}>
                            • {contact.online ? 'En ligne' : 'Hors ligne'}
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <Search size={20} />
                    </button>
                    <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <Phone size={20} />
                    </button>
                    <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <Video size={20} />
                    </button>
                    <div className="w-px h-6 bg-gray-200 mx-1"></div>
                    <button className="p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-all">
                        <MoreVertical size={20} />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-8 space-y-6 bg-[#FAFAFA] overflow-y-auto custom-scrollbar min-h-0">
                {/* Date Separator */}
                <div className="flex justify-center">
                    <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wide">Aujourd'hui</span>
                </div>

                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'me' || msg.sender === 'ai' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex flex-col max-w-[65%] ${msg.sender === 'me' || msg.sender === 'ai' ? 'items-end' : 'items-start'}`}>
                            {msg.sender === 'ai' && (
                                <div className="mb-1 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-indigo-600" />
                                    <span className="text-xs font-bold text-indigo-600">Assistant</span>
                                </div>
                            )}
                            <div className={`p-4 rounded-[20px] shadow-sm text-[15px] leading-relaxed relative group ${
                                    msg.sender === 'me'
                                    ? 'bg-pulsai-blue text-white rounded-br-sm'
                                    : msg.sender === 'ai'
                                    ? 'bg-indigo-50 text-indigo-900 rounded-bl-sm border border-indigo-100'
                                    : 'bg-white text-gray-800 rounded-bl-sm border border-gray-100'
                                }`}>
                                <p>{msg.text}</p>
                            </div>
                            <div className="flex items-center gap-1 mt-1.5 px-1">
                                <span className="text-[10px] font-medium text-gray-400">{msg.time}</span>
                                {msg.sender === 'me' && (
                                    <span className="text-[10px] text-gray-400 font-bold ml-1">
                                        {msg.read ? 'Lu' : 'Envoyé'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* AI Summary - at the end */}
                {contact.summary && (
                    <div className="bg-blue-50 border border-blue-100 rounded-[16px] p-4 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs font-bold text-blue-700 mb-1">Résumé IA</p>
                            <p className="text-sm text-blue-600">{contact.summary}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* AI Suggestion Bar */}
            <div className="px-8 pb-2 pt-0 bg-[#FAFAFA]">
                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    <button
                        onClick={() => setInputText("Je vérifie votre dossier immédiatement.")}
                        className="flex-shrink-0 px-4 py-2 bg-white border border-indigo-100 rounded-full text-xs font-semibold text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all shadow-sm flex items-center gap-1.5"
                    >
                        <Sparkles size={12} className="text-indigo-500" />
                        Je vérifie votre dossier immédiatement.
                    </button>
                    <button
                        onClick={() => setInputText("Pouvez-vous confirmer votre email ?")}
                        className="flex-shrink-0 px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-all shadow-sm"
                    >
                        Pouvez-vous confirmer votre email ?
                    </button>
                </div>
            </div>

            {/* Rich Input Area */}
            <div className="p-6 bg-white border-t border-gray-100">
                <div className="flex items-end gap-3 bg-gray-50 p-2 rounded-[24px] border border-gray-200 focus-within:ring-2 focus-within:ring-pulsai-blue/10 focus-within:border-pulsai-blue transition-all shadow-inner">

                    {/* Attachments */}
                    <div className="flex items-center pb-2 pl-2 gap-1">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 rounded-full transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 rounded-full transition-colors">
                            <Smile size={20} />
                        </button>
                    </div>

                    {/* Text Area */}
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        } }
                        placeholder="Écrivez votre message..."
                        className="flex-1 bg-transparent focus:outline-none text-[15px] text-gray-700 placeholder-gray-400 resize-none py-3 max-h-32 min-h-[48px]"
                        rows={1}
                        style={{ height: 'auto', minHeight: '48px' }} />

                    {/* Right Actions */}
                    <div className="flex items-center pb-2 pr-2 gap-2">
                        {inputText.length === 0 && (
                            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 rounded-full transition-colors">
                                <Mic size={20} />
                            </button>
                        )}
                        <button
                            onClick={handleSend}
                            className={`p-3 rounded-xl transition-all shadow-md ${inputText.trim()
                                ? 'bg-pulsai-blue text-white hover:bg-pulsai-blue/90 shadow-blue-500/20'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            disabled={!inputText.trim()}
                        >
                            <Send size={18} className={inputText.trim() ? 'ml-0.5' : ''} />
                        </button>
                    </div>
                </div>
                <div className="text-center mt-2 flex justify-between px-4 text-[10px] text-gray-400 font-medium">
                    <span>Entrée pour envoyer</span>
                    <span>Shift + Entrée pour nouvelle ligne</span>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
