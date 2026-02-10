import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="section-padding bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-start/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h4 className="text-accent font-bold tracking-wider uppercase text-sm">Quem Somos</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Especialistas em <br />
                            <span className="text-secondary-end">Cultura de Privacidade</span>
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            O <span className="font-semibold text-primary">The Privacy Brasil</span> é um grupo corporativo dedicado a programas de conscientização em privacidade, riscos, compliance e governança corporativa.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            Nossa expertise está em traduzir temas técnicos, jurídicos e regulatórios complexos em uma linguagem acessível e engajadora para todos os níveis organizacionais.
                        </p>

                        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <Shield className="text-secondary-end w-8 h-8 mb-2" />
                                <span className="text-sm font-medium text-primary">Segurança</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <Users className="text-secondary-end w-8 h-8 mb-2" />
                                <span className="text-sm font-medium text-primary">Pessoas</span>
                            </div>
                            <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <Globe className="text-secondary-end w-8 h-8 mb-2" />
                                <span className="text-sm font-medium text-primary">Compliance</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract/Modern representation since we don't have a specific image yet */}
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary-start p-1">
                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 opacity-10 bg-[url('/circuit-board.svg')]"></div>
                                <div className="text-center p-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">The Privacy Brasil</h3>
                                    <p className="text-text-secondary">Conectando governança e pessoas</p>
                                </div>
                            </div>
                        </div>
                        {/* Floating Leaf Element (CSS shape) */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-tr-3xl rounded-bl-3xl opacity-80 z-[-1]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
