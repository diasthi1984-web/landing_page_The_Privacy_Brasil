import React from 'react';
import { Zap, Puzzle, Users, Lightbulb } from 'lucide-react';

const Differentials = () => {
    const differentials = [
        {
            icon: <Zap size={24} />,
            title: "Abordagem Descomplicada",
            description: "Simplificamos o complexo sem perder a profundidade técnica."
        },
        {
            icon: <Puzzle size={24} />,
            title: "Customização Ágil",
            description: "Soluções adaptadas à realidade e cultura de cada cliente."
        },
        {
            icon: <Users size={24} />,
            title: "Democratização",
            description: "Conhecimento acessível para todos os níveis hierárquicos."
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Criatividade Aplicada",
            description: "Inovação em formatos e metodologias de conscientização."
        }
    ];

    return (
        <section id="diferenciais" className="py-20 bg-primary text-white relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary-start opacity-90"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/3">
                        <h4 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Por que nós?</h4>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Nossos Diferenciais</h2>
                        <p className="text-gray-300 text-lg">
                            Não entregamos apenas conformidade. Entregamos cultura e valor sustentável para o seu negócio.
                        </p>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {differentials.map((item, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10">
                                <div className="text-accent shrink-0 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentials;
