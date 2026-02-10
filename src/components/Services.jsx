import React from 'react';
import { Lock, AlertTriangle, FileCheck, Scale, RefreshCw } from 'lucide-react';

const Services = () => {
    const pillars = [
        {
            icon: <Lock size={32} />,
            title: "Cultura de Privacidade",
            description: "Programas de conscientização e treinamento em Proteção de Dados e Segurança da Informação para engajar colaboradores."
        },
        {
            icon: <AlertTriangle size={32} />,
            title: "Educação em Riscos",
            description: "Workshops e campanhas para identificar e comunicar riscos corporativos de forma eficaz."
        },
        {
            icon: <FileCheck size={32} />,
            title: "Comunicação de Controles",
            description: "Treinamentos para disseminar a importância dos controles internos na rotina das áreas."
        },
        {
            icon: <Scale size={32} />,
            title: "Aculturamento em Compliance",
            description: "Materiais educativos sobre ética, integridade, e canais de denúncia."
        },
        {
            icon: <RefreshCw size={32} />,
            title: "Gestão do Conhecimento",
            description: "Conteúdos sobre continuidade de negócios e resiliência organizacional."
        }
    ];

    return (
        <section id="servicos" className="section-padding bg-background relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h4 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Conhecimento e Prática</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">Nossos Pilares de Atuação</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/50 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="mb-6 text-secondary-end group-hover:text-accent transition-colors duration-300 bg-secondary-start/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary/5">
                                {pillar.icon}
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-3 group-hover:translate-x-2 transition-transform duration-300">
                                {pillar.title}
                            </h3>

                            <p className="text-text-secondary group-hover:text-primary/80 transition-colors">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
