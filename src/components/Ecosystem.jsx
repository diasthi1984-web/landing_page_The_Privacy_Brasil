import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const Ecosystem = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="ecossistema" className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h4 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Ecossistema Integrado</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">Soluções Completas</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {/* Main Column - The Privacy Brasil */}
                    <div className="lg:col-span-1 bg-white rounded-3xl p-8 shadow-xl border-t-8 border-secondary-start flex flex-col relative overflow-hidden group">

                        <h3 className="text-2xl font-bold text-primary mb-4">The Privacy Brasil</h3>
                        <p className="text-text-secondary mb-8 flex-grow">
                            Nossa vertical de consultoria e educação corporativa. Desenvolvemos programas completos de conscientização, materiais digitais, treinamentos e campanhas interativas.
                        </p>

                        <ul className="space-y-4 mb-8 text-primary/80">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                Materiais Educativos
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                Treinamentos In-company
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                Campanhas de Engajamento
                            </li>
                        </ul>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 text-secondary-start font-bold group-hover:gap-4 transition-all"
                        >
                            Saiba mais <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Secondary Column - Privacidade Escancarada */}
                    <div className="lg:col-span-1 bg-gray-100/50 rounded-3xl p-8 border border-gray-200 flex flex-col opacity-75 hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-500">Privacidade<br />Escancarada</h3>
                            <span className="px-3 py-1 bg-gray-200 text-gray-500 text-xs font-bold rounded-full">EM BREVE</span>
                        </div>
                        <p className="text-gray-400 mb-8 flex-grow">
                            Canal de comunicação descontraído sobre privacidade. Democratizando o assunto para o público geral.
                        </p>
                    </div>

                    {/* Tertiary Column - Sistema GRC */}
                    <div className="lg:col-span-1 bg-gray-100/50 rounded-3xl p-8 border border-gray-200 flex flex-col opacity-75 hover:opacity-100 transition-opacity">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-gray-500">Sistema GRC</h3>
                            <span className="px-3 py-1 bg-gray-200 text-gray-500 text-xs font-bold rounded-full">EM BREVE</span>
                        </div>
                        <p className="text-gray-400 mb-8 flex-grow">
                            Plataforma modular de Governança, Riscos e Compliance. Gestão integrada e inteligente.
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal / Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-scale-up">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-12">
                            <h3 className="text-3xl font-bold text-primary mb-6">Programa de Conscientização The Privacy Brasil</h3>

                            <div className="space-y-6 text-text-secondary leading-relaxed">
                                <p>
                                    Nossos programas são desenhados sob medida para transformar a cultura da sua organização. Utilizamos a metodologia de <strong className="text-secondary-start">Privacy by Design</strong> aplicada à educação corporativa.
                                </p>

                                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                                    <h4 className="font-bold text-primary mb-2">O que entregamos:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✓</span>
                                            <span>Gamificação e campanhas interativas</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✓</span>
                                            <span>Pílulas de conhecimento (microlearning)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✓</span>
                                            <span>Workshops práticos para lideranças e times operacionais</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✓</span>
                                            <span>Métricas de engajamento e absorção de conhecimento</span>
                                        </li>
                                    </ul>
                                </div>

                                <p>
                                    Quer levar essa metodologia para sua empresa? Entre em contato conosco e solicite uma demonstração do nosso portfólio de materiais.
                                </p>

                                <div className="pt-4">
                                    <a
                                        href="#contato"
                                        onClick={() => setIsModalOpen(false)}
                                        className="btn-primary inline-flex items-center gap-2"
                                    >
                                        Falar com um consultor <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Ecosystem;
