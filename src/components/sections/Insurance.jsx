import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, CreditCard, FileText } from 'lucide-react';
import { GradientOrbs } from '../ui/GradientOrbs';
import { Sparkles } from '../ui/Sparkles';

const insuranceProviders = [
    'Aetna', 'Cigna', 'Delta Dental', 'MetLife', 'UnitedHealthcare',
    'Blue Cross Blue Shield', 'Humana', 'Guardian', 'Principal', 'Anthem'
];

const paymentOptions = [
    { icon: CreditCard, title: 'Credit Cards', desc: 'Visa, Mastercard, Amex, Discover' },
    { icon: FileText, title: 'Payment Plans', desc: 'Flexible financing options available' },
    { icon: Shield, title: 'Insurance Accepted', desc: 'Most major insurance plans' },
    { icon: CheckCircle, title: 'HSA/FSA', desc: 'Health savings accounts accepted' },
];

export function Insurance() {
    return (
        <section className="py-32 gradient-insurance relative overflow-hidden">
            {/* Subtle Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <GradientOrbs />
            </div>
            <div className="absolute inset-0 opacity-30">
                <Sparkles count={12} />
            </div>
            <div className="absolute inset-0 bg-white/60 -z-10" />
            
            <div className="container mx-auto px-4 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="section-tag">Financial Options</span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                        Insurance & <br />
                        <span className="italic font-normal text-accent-navy">Payment Options</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        We make quality dental care accessible with flexible payment options and acceptance of most insurance plans.
                    </p>
                </motion.div>
                
                <div className="max-w-6xl mx-auto">
                    {/* Insurance Providers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="clinical-card bg-white/95 backdrop-blur-sm p-10 mb-12 border-2 border-white/50 shadow-2xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-xl bg-bg-accent flex items-center justify-center">
                                <Shield className="w-7 h-7 text-accent-navy" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif mb-1">Accepted Insurance Plans</h3>
                                <p className="text-sm text-text-muted">We work with most major insurance providers</p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                            {insuranceProviders.map((provider, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-bg-accent rounded-lg p-4 text-center hover:bg-accent-navy hover:text-white transition-all duration-300 cursor-default"
                                >
                                    <p className="font-semibold text-sm">{provider}</p>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="bg-bg-accent rounded-xl p-6 border border-border-thin">
                            <p className="text-sm text-text-muted leading-relaxed">
                                <strong className="text-text-main">Don't see your insurance?</strong> We accept most PPO plans and can help verify your coverage. 
                                Contact us to check if your specific plan is accepted. We also offer competitive self-pay rates and can work with out-of-network benefits.
                            </p>
                        </div>
                    </motion.div>
                    
                    {/* Payment Options */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {paymentOptions.map((option, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="clinical-card bg-white/95 backdrop-blur-sm p-8 text-center group hover:border-accent-navy transition-all duration-300 border-2 border-white/50 hover:shadow-xl hover:scale-105"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-bg-accent flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-navy group-hover:text-white transition-all duration-300">
                                    <option.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-serif mb-3 group-hover:text-accent-navy transition-colors">
                                    {option.title}
                                </h4>
                                <p className="text-sm text-text-muted">{option.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    
                    {/* Financing Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 clinical-card bg-gradient-to-br from-accent-navy to-accent-blue p-10 text-white"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-3xl font-serif mb-4">Flexible Financing Available</h3>
                                <p className="text-white/90 leading-relaxed mb-6">
                                    We understand that dental care is an investment in your health. That's why we offer flexible payment plans 
                                    to make treatment affordable. Apply for financing with no interest options available.
                                </p>
                                <button className="bg-white text-accent-navy px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300">
                                    Learn About Financing
                                </button>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <h4 className="font-semibold mb-4 text-lg">Financing Benefits</h4>
                                <ul className="space-y-3 text-white/90">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span>No interest options available</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span>Quick approval process</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span>Flexible monthly payments</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span>No prepayment penalties</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

