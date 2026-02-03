'use client';

import { useState, useEffect } from 'react';
import { Send, Paperclip, Smile, Sparkles, MoreVertical, Phone, Video, Search, Mic, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import AvatarLetter from './shared/AvatarLetter';
import MessageBubble from './MessageBubble';

const ChatWindow = ({ contact, onBack, onShowContact }) => {
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
            <div className="flex-1 flex items-center justify-center h-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
                <p className="text-gray-500 dark:text-gray-400">Sélectionnez une conversation</p>
            </div>
        );
    }

    const handleSend = () => {
        if (!inputText.trim()) return;
        setMessages([...messages, { id: Date.now(), text: inputText, sender: 'me', time: 'Now', read: false }]);
        setInputText('');
    };

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-gray-50/30 to-white dark:from-gray-800/30 dark:to-gray-900">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 flex-shrink-0">
                <div className="flex items-center gap-3">
                    {/* Back Button for mobile */}
                    <button
                        onClick={onBack}
                        className="md:hidden p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors" onClick={onShowContact}>
                        <div className="relative">
                            <AvatarLetter letter={contact.avatar} size="lg" />
                            {contact.online && (
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-pulsai-green border-2 border-white dark:border-gray-800 rounded-full" />
                            )}
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">{contact.name}</h3>
                            <span className={`text-xs font-medium flex items-center gap-1 ${contact.online ? 'text-pulsai-green' : 'text-gray-500'}`}>
                                • {contact.online ? 'En ligne' : 'Hors ligne'}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
                        <Phone size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
                        <Video size={18} />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-5 space-y-5 overflow-y-auto custom-scrollbar min-h-0">
                {/* Date Separator */}
                <div className="flex justify-center">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                        Aujourd'hui
                    </span>
                </div>

                {/* Architectural Decision: Separated MessageRendering to specific component to respect SRP */}
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} msg={msg} />
                ))}

                {/* AI Summary - at the end */}
                {contact.summary && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-4 flex items-start gap-3 shadow-sm"
                    >
                        <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">Résumé IA</p>
                            <p className="text-sm text-blue-600 dark:text-blue-200">{contact.summary}</p>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* AI Suggestion Bar */}
            <div className="px-5 pb-3 pt-0 bg-gradient-to-t from-white/80 to-transparent dark:from-gray-900/80">
                <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    <button
                        onClick={() => setInputText("Je vérifie votre dossier immédiatement.")}
                        className="flex-shrink-0 px-3 py-1.5 bg-white dark:bg-gray-700 border border-pulsai-blue/30 dark:border-pulsai-blue/50 rounded-full text-xs font-medium text-pulsai-blue hover:bg-pulsai-blue/5 dark:hover:bg-pulsai-blue/20 hover:border-pulsai-blue transition-all duration-200 shadow-sm flex items-center gap-1 cursor-pointer"
                    >
                        <Sparkles size={12} className="text-pulsai-blue" />
                        Vérifier dossier
                    </button>
                    <button
                        onClick={() => setInputText("Pouvez-vous confirmer votre email ?")}
                        className="flex-shrink-0 px-3 py-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600/50 transition-all duration-200 shadow-sm"
                    >
                        Confirmer email
                    </button>
                </div>
            </div>

            {/* Rich Input Area */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-end gap-2 bg-gray-100 dark:bg-gray-700/50 p-2 rounded-2xl border border-gray-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-pulsai-blue/20 focus-within:border-pulsai-blue focus-within:bg-white dark:focus-within:bg-gray-700 transition-all duration-200 shadow-sm">
                    {/* Attachments */}
                    <div className="flex items-center pb-1 pl-1 gap-1">
                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-600 rounded-full transition-all duration-200">
                            <Paperclip size={18} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-600 rounded-full transition-all duration-200">
                            <Smile size={18} />
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
                        }}
                        placeholder="Écrivez votre message..."
                        className="flex-1 bg-transparent focus:outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none py-2 max-h-32 min-h-[40px]"
                        rows={1}
                        style={{ height: 'auto', minHeight: '40px' }} />

                    {/* Right Actions */}
                    <div className="flex items-center pb-1 pr-1 gap-1">
                        {inputText.length === 0 && (
                            <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-600 rounded-full transition-all duration-200">
                                <Mic size={18} />
                            </button>
                        )}
                        <button
                            onClick={handleSend}
                            className={`p-2.5 rounded-xl transition-all duration-200 ${inputText.trim()
                                ? 'bg-pulsai-blue text-white hover:bg-pulsai-blue/90 shadow-md shadow-pulsai-blue/20'
                                : 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'}`}
                            disabled={!inputText.trim()}
                        >
                            <Send size={16} className={inputText.trim() ? 'ml-0.5' : ''} />
                        </button>
                    </div>
                </div>
                <div className="text-center mt-2 flex justify-between px-2 text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                    <span>Entrée ↵</span>
                    <span>Shift + Entrée pour nouvelle ligne</span>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
