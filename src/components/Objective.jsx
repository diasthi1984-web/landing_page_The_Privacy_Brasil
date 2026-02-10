import React from 'react';

const Objective = () => {
    return (
        <section id="objetivo" className="section-padding bg-primary text-white relative overflow-hidden">
            {/* Circuit Board Background Pattern (CSS based) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #b8d944 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            ></div>

            <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                <h4 className="text-accent font-bold tracking-wider uppercase text-sm mb-6">Nosso Propósito</h4>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                    Democratizar o conhecimento sobre <span className="text-accent">privacidade</span> e <span className="text-accent">governança corporativa</span>.
                </h2>

                <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto mb-8"></div>

                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                    Tornamos o compliance acessível, prático e integrado à cultura das organizações, transformando obrigações em valores sustentáveis.
                </p>
            </div>
        </section>
    );
};

export default Objective;
