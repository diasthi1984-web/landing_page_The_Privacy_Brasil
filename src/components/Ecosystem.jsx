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
                            <h3 className="text-3xl font-bold text-primary mb-2">Portfólio de Soluções</h3>
                            <h4 className="text-xl font-semibold text-secondary-start mb-6">Transformando obrigações regulatórias em cultura corporativa</h4>

                            <div className="space-y-8 text-text-secondary leading-relaxed">

                                {/* QUEM SOMOS */}
                                <section>
                                    <h5 className="font-bold text-primary mb-2 text-lg">QUEM SOMOS</h5>
                                    <p>
                                        A The Privacy Brasil é a sua parceira estratégica na construção de uma cultura organizacional robusta e resiliente. Somos especialistas em traduzir temas complexos – como jurídico, segurança da informação e compliance – para uma linguagem acessível e humana, garantindo que a mensagem ressoe do chão de fábrica ao Conselho de Administração. Nosso propósito é capacitar pessoas e proteger o valor do seu negócio.
                                    </p>
                                </section>

                                {/* NOSSA ABORDAGEM */}
                                <section className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                                    <h5 className="font-bold text-primary mb-2 text-lg">NOSSA ABORDAGEM: O Diferencial que Gera Resultados</h5>
                                    <p className="mb-4">
                                        Nossa metodologia é desenhada para ir além da conformidade, focando na mitigação efetiva do Risco Humano. Entendemos que a maior vulnerabilidade de uma organização reside na falta de conscientização.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1 font-bold">•</span>
                                            <span><strong>Metodologia Integrada:</strong> Unimos a solidez técnica da Governança com a criatividade e o engajamento, transformando requisitos em hábitos.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1 font-bold">•</span>
                                            <span><strong>Soluções Modulares e Adaptáveis:</strong> Nossas ofertas são flexíveis, ajustando-se à maturidade, cultura e necessidades específicas de cada cliente, garantindo relevância e impacto.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1 font-bold">•</span>
                                            <span><strong>Foco em Comportamento:</strong> Não apenas informamos, mas inspiramos a mudança de comportamento, criando defensores da privacidade e segurança em todos os níveis.</span>
                                        </li>
                                    </ul>
                                </section>

                                {/* PILARES DE ATUAÇÃO */}
                                <section>
                                    <h5 className="font-bold text-primary mb-4 text-lg uppercase tracking-wide">PILARES DE ATUAÇÃO: Sua Jornada para uma Cultura Consciente</h5>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* A. ESTRATÉGIA */}
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <h6 className="font-bold text-secondary-start mb-2">A. ESTRATÉGIA & GOVERNANÇA (A Base)</h6>
                                            <p className="text-sm mb-3">Construímos o alicerce para um programa sustentável.</p>
                                            <ul className="text-sm space-y-2 list-disc list-inside text-gray-600">
                                                <li>Diagnóstico de Cultura e Risco Humano</li>
                                                <li>Design do Plano Anual de Conscientização</li>
                                                <li>Adaptação de Políticas e Normas (Playbooks)</li>
                                                <li>Definição de KPIs e Relatórios Executivos</li>
                                            </ul>
                                        </div>

                                        {/* B. TRILHA EDUCACIONAL */}
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <h6 className="font-bold text-secondary-start mb-2">B. TRILHA EDUCACIONAL (O Conteúdo)</h6>
                                            <p className="text-sm mb-3">Conteúdo educacional segmentado.</p>
                                            <ul className="text-sm space-y-2 list-disc list-inside text-gray-600">
                                                <li>Executive Briefing (C-Level e Board)</li>
                                                <li>Treinamentos Operacionais (EAD/Presencial)</li>
                                                <li>Workshops Táticos (Liderança)</li>
                                                <li>Onboarding de Cultura (Novos colaboradores)</li>
                                            </ul>
                                        </div>

                                        {/* C. COMUNICAÇÃO */}
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <h6 className="font-bold text-secondary-start mb-2">C. COMUNICAÇÃO & CAMPANHAS (O Engajamento)</h6>
                                            <p className="text-sm mb-3">Campanhas vibrantes e contínuas.</p>
                                            <ul className="text-sm space-y-2 list-disc list-inside text-gray-600">
                                                <li>Campanhas Sazonais Completas</li>
                                                <li>Endomarketing Tangível (Brindes visuais)</li>
                                                <li>Pílulas de Conhecimento (Microlearning)</li>
                                            </ul>
                                        </div>

                                        {/* D. GAMIFICAÇÃO */}
                                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                                            <h6 className="font-bold text-secondary-start mb-2">D. GAMIFICAÇÃO & VIVÊNCIA (A Fixação)</h6>
                                            <p className="text-sm mb-3">Transformamos aprendizado em experiência.</p>
                                            <ul className="text-sm space-y-2 list-disc list-inside text-gray-600">
                                                <li>Workshops Gamificados</li>
                                                <li>Quiz Show e Competições</li>
                                                <li>Simulações de Realidade (Phishing, etc)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* TEMAS DE ESPECIALIZAÇÃO */}
                                <section>
                                    <h5 className="font-bold text-primary mb-3 text-lg">TEMAS DE ESPECIALIZAÇÃO</h5>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2">
                                            <span className="font-bold text-accent">1.</span>
                                            <span>Privacidade de Dados Pessoais (LGPD/GDPR)</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold text-accent">2.</span>
                                            <span>Segurança da Informação e Higiene Cibernética</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold text-accent">3.</span>
                                            <span>Compliance, Ética e Integridade (Anticorrupção/PLD)</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold text-accent">4.</span>
                                            <span>Riscos Corporativos e Controles Internos</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="font-bold text-accent">5.</span>
                                            <span>Continuidade de Negócios</span>
                                        </li>
                                    </ul>
                                </section>

                                {/* POR QUE A THE PRIVACY BRASIL? */}
                                <section className="bg-primary/5 p-6 rounded-xl">
                                    <h5 className="font-bold text-primary mb-3 text-lg">POR QUE A THE PRIVACY BRASIL?</h5>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-secondary-start mt-1">✓</span>
                                            <span>Não entregamos apenas treinamentos; entregamos <strong>redução de risco e mudança de comportamento</strong>. Nosso foco é o impacto real no seu negócio.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-secondary-start mt-1">✓</span>
                                            <span>Do técnico ao lúdico, <strong>falamos a língua da sua empresa</strong>. Adaptamos a comunicação para garantir que todos compreendam e se engajem.</span>
                                        </li>
                                    </ul>
                                </section>

                                <div className="pt-4 border-t border-gray-100 mt-8">
                                    <a
                                        href="#contato"
                                        onClick={() => setIsModalOpen(false)}
                                        className="btn-primary w-full md:w-auto justify-center md:justify-start inline-flex items-center gap-2"
                                    >
                                        Solicitar Proposta <ArrowRight size={18} />
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
