import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * MessageBubble Component
 * 
 * Responsibility: Pure presentation of a single chat message.
 * Follows SRP: Separates message rendering logic from the chat controller logic.
 * 
 * Props:
 * @param {Object} msg - The message object { id, text, sender, time, read }
 * @param {boolean} isLast - Whether this is the last message (for animation)
 */
const MessageBubble = ({ msg, isLast }) => {
    const isMe = msg.sender === 'me';
    const isAi = msg.sender === 'ai';
    const isUser = !isMe && !isAi;

    // Architectural Decision: Use specific styles for different senders to improve UX scanning
    const bubbleStyle = isMe
        ? 'bg-pulsai-blue text-white rounded-br-sm'
        : isAi
            ? 'bg-pulsai-blue/5 dark:bg-pulsai-blue/20 text-gray-900 dark:text-gray-100 rounded-bl-sm border border-pulsai-blue/20 dark:border-pulsai-blue/40'
            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-sm border border-gray-100 dark:border-border';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
        >
            <div className={`flex flex-col max-w-[75%] ${isMe ? 'items-end' : 'items-start'}`}>
                {/* AI Badge */}
                {isAi && (
                    <div className="mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-pulsai-blue" />
                        <span className="text-xs font-bold text-pulsai-blue">Assistant</span>
                    </div>
                )}

                {/* Message Content */}
                <div className={`p-4 rounded-[20px] shadow-sm text-[15px] leading-relaxed relative group ${bubbleStyle}`}>
                    <p>{msg.text}</p>
                </div>

                {/* Meta Data (Time/Status) */}
                <div className="flex items-center gap-1 mt-1.5 px-1">
                    <span className="text-[10px] font-medium text-gray-400 dark:text-gray-500">{msg.time}</span>
                    {isMe && (
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold ml-1">
                            {msg.read ? 'Lu' : 'Envoyé'}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default MessageBubble;
