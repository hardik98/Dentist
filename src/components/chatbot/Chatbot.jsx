import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const dentalResponses = {
    greeting: [
        "Hello! I'm here to help with your dental care questions. How can I assist you today?",
        "Hi there! Welcome to our dental clinic. What would you like to know?",
        "Good day! I'm your dental assistant. Feel free to ask me anything about our services."
    ],
    services: [
        "We offer a wide range of dental services including preventive care, cosmetic dentistry, restorative treatments, orthodontics, oral surgery, and emergency care. Which service are you interested in?",
        "Our services include regular cleanings, teeth whitening, veneers, dental implants, braces, Invisalign, root canals, and more. What would you like to know more about?",
        "We provide comprehensive dental care from routine check-ups to advanced cosmetic procedures. Would you like details on a specific treatment?"
    ],
    appointment: [
        "To book an appointment, you can call us at (555) 123-4567, use our online booking form, or click the 'Book Online' button in the navigation. We're available Monday-Friday 8am-6pm and Saturday 9am-3pm.",
        "Scheduling is easy! You can book online through our website, call us directly, or visit our office. We offer same-day appointments for emergencies.",
        "We'd love to see you! Book your appointment online or give us a call. New patients are always welcome!"
    ],
    emergency: [
        "For dental emergencies, please call us immediately at (555) 123-4567. We offer 24/7 emergency care for severe pain, trauma, infections, or knocked-out teeth.",
        "Dental emergency? Don't wait! Call our emergency line at (555) 123-4567. We provide same-day emergency appointments and are available 24/7 for urgent situations.",
        "If you're experiencing a dental emergency, call us right away at (555) 123-4567. We're here to help with immediate care."
    ],
    insurance: [
        "We accept most major insurance plans including Aetna, Cigna, Delta Dental, MetLife, UnitedHealthcare, and Blue Cross Blue Shield. We also offer flexible payment plans and financing options.",
        "Yes, we accept most dental insurance plans! We can verify your coverage when you book an appointment. We also accept HSA/FSA cards and offer payment plans.",
        "We work with most major insurance providers. Contact us to verify if your specific plan is accepted. We also have competitive self-pay rates."
    ],
    hours: [
        "Our office hours are: Monday-Thursday 8:00 AM - 6:00 PM, Friday 8:00 AM - 5:00 PM, and Saturday 9:00 AM - 3:00 PM. We're closed on Sundays, but emergency care is available 24/7.",
        "We're open Monday through Friday 8am-6pm, Saturday 9am-3pm. Emergency services are available 24/7. Would you like to schedule a visit?",
        "Regular hours: Mon-Thu 8am-6pm, Fri 8am-5pm, Sat 9am-3pm. Closed Sundays, but emergency care is always available!"
    ],
    location: [
        "We're located at 123 Main Street, Suite 100, City, State 12345. We have convenient parking and are easily accessible by public transportation.",
        "Our clinic is at 123 Main Street, Suite 100. We offer valet parking and are near public transit. Would you like directions?",
        "Find us at 123 Main Street, Suite 100. Easy parking available and close to public transportation."
    ],
    default: [
        "I'm here to help! You can ask me about our services, appointments, insurance, office hours, emergencies, or location. What would you like to know?",
        "That's a great question! I can help with information about services, booking appointments, insurance, hours, emergencies, or our location. What interests you?",
        "I'd be happy to help! Feel free to ask about our dental services, how to book an appointment, insurance coverage, office hours, or anything else dental-related."
    ]
};

const quickQuestions = [
    "What services do you offer?",
    "How do I book an appointment?",
    "Do you accept insurance?",
    "What are your hours?",
    "Emergency care available?"
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "Hello! 👋 I'm your dental assistant. How can I help you today?",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const getResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return dentalResponses.greeting[Math.floor(Math.random() * dentalResponses.greeting.length)];
        } else if (lowerMessage.includes('service') || lowerMessage.includes('treatment') || lowerMessage.includes('procedure')) {
            return dentalResponses.services[Math.floor(Math.random() * dentalResponses.services.length)];
        } else if (lowerMessage.includes('appointment') || lowerMessage.includes('book') || lowerMessage.includes('schedule')) {
            return dentalResponses.appointment[Math.floor(Math.random() * dentalResponses.appointment.length)];
        } else if (lowerMessage.includes('emergency') || lowerMessage.includes('urgent') || lowerMessage.includes('pain')) {
            return dentalResponses.emergency[Math.floor(Math.random() * dentalResponses.emergency.length)];
        } else if (lowerMessage.includes('insurance') || lowerMessage.includes('payment') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
            return dentalResponses.insurance[Math.floor(Math.random() * dentalResponses.insurance.length)];
        } else if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('close') || lowerMessage.includes('time')) {
            return dentalResponses.hours[Math.floor(Math.random() * dentalResponses.hours.length)];
        } else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
            return dentalResponses.location[Math.floor(Math.random() * dentalResponses.location.length)];
        } else {
            return dentalResponses.default[Math.floor(Math.random() * dentalResponses.default.length)];
        }
    };

    const handleSend = (text = null) => {
        const messageText = text || inputValue.trim();
        if (!messageText) return;

        // Add user message
        const userMessage = {
            type: 'user',
            text: messageText,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Simulate bot thinking
        setTimeout(() => {
            const botResponse = {
                type: 'bot',
                text: getResponse(messageText),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
        }, 500);
    };

    const handleQuickQuestion = (question) => {
        setInputValue(question);
        handleSend(question);
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300 group"
                aria-label="Open chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border-2 border-gray-100 flex flex-col overflow-hidden"
                    >
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-4 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Dental Assistant</h3>
                                    <p className="text-xs text-white/80">We're online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                                            message.type === 'user'
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                                                : 'bg-white text-gray-800 shadow-md border border-gray-100'
                                        }`}
                                    >
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Questions */}
                        {messages.length === 1 && (
                            <div className="px-4 py-2 bg-white border-t border-gray-100">
                                <p className="text-xs text-gray-500 mb-2 font-semibold">Quick questions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quickQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleQuickQuestion(question)}
                                            className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-700"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

