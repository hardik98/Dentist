import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';

const faqs = [
    {
        question: "What should I expect during my first visit?",
        answer: "Your first visit includes a comprehensive examination, digital X-rays if needed, and a consultation to discuss your oral health goals. We'll review your medical history, perform a thorough cleaning, and create a personalized treatment plan tailored to your needs."
    },
    {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting every 6 months for routine cleanings and check-ups. However, some patients may need more frequent visits based on their specific oral health needs. Your dentist will recommend the best schedule for you."
    },
    {
        question: "Do you offer sedation dentistry?",
        answer: "Yes, we offer various sedation options including nitrous oxide (laughing gas), oral sedation, and IV sedation for patients with dental anxiety or those undergoing extensive procedures. We'll discuss the best option for you during your consultation."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, cash, checks, HSA/FSA cards, and most dental insurance plans. We also offer flexible financing options through third-party providers to make treatment affordable."
    },
    {
        question: "How do I handle a dental emergency?",
        answer: "For dental emergencies, call our emergency line at (555) 123-4567 immediately. We offer same-day emergency appointments and 24/7 emergency care. If you have a knocked-out tooth, try to place it back in the socket or keep it in milk until you can see us."
    },
    {
        question: "Do you see children?",
        answer: "Yes, we welcome patients of all ages, including children. Our team is experienced in pediatric dentistry and creating a comfortable, positive experience for young patients. We recommend children have their first dental visit by age 1 or within 6 months of their first tooth."
    },
    {
        question: "What safety measures do you have in place?",
        answer: "We follow strict infection control protocols including sterilization of all instruments, use of disposable materials where appropriate, and maintaining a clean, sanitized environment. Our team is trained in the latest safety standards and we stay current with all health regulations."
    },
    {
        question: "Can I get cosmetic dentistry services?",
        answer: "Absolutely! We offer a full range of cosmetic services including teeth whitening, veneers, bonding, Invisalign, and smile makeovers. During your consultation, we'll discuss your aesthetic goals and create a treatment plan to achieve your perfect smile."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-32 gradient-faq relative overflow-hidden">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={10} />
            </div>
            <div className="absolute inset-0 bg-white/60 -z-10" />
            
            <div className="container mx-auto px-4 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <HelpCircle className="w-8 h-8 text-accent-navy" />
                        <span className="section-tag">Common Questions</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                        Frequently Asked <br />
                        <span className="italic font-normal text-accent-navy">Questions</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Find answers to common questions about our services, procedures, and policies.
                    </p>
                </motion.div>
                
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="clinical-card bg-white/95 backdrop-blur-sm overflow-hidden border-2 border-white/50 hover:border-pink-300/50 transition-all duration-300 hover:shadow-xl"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-bg-accent transition-colors"
                                >
                                    <span className="text-lg font-semibold text-text-main pr-8">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="shrink-0"
                                    >
                                        <ChevronDown className="w-5 h-5 text-accent-navy" />
                                    </motion.div>
                                </button>
                                
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-border-thin">
                                                <p className="text-text-muted leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-text-muted mb-6">
                            Still have questions? We're here to help!
                        </p>
                        <button className="btn-premium">
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

