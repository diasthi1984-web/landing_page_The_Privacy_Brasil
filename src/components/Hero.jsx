import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const FRAME_COUNT = 31;
const SCROLL_HEIGHT = 3000; // Total scroll distance for the animation in px

const Hero = () => {
    const [currentFrame, setCurrentFrame] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef(null);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const promises = [];
            for (let i = 1; i <= FRAME_COUNT; i++) {
                const img = new Image();
                const frameNum = i.toString().padStart(3, '0');
                img.src = `/frames/ezgif-frame-${frameNum}.png`;
                promises.push(new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if error
                }));
            }
            await Promise.all(promises);
            setIsLoading(false);
        };

        preloadImages();
    }, []);

    // Scroll animation logic
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top } = containerRef.current.getBoundingClientRect();
            const scrollPosition = -top;

            // Calculate progress (0 to 1)
            // We start animating when the top of the container hits the top of the viewport
            // The animation ends when we've scrolled (SCROLL_HEIGHT - window.innerHeight)
            const maxScroll = SCROLL_HEIGHT - window.innerHeight;
            let progress = scrollPosition / maxScroll;

            // Clamp progress
            progress = Math.max(0, Math.min(1, progress));

            // Calculate frame
            const frameIndex = Math.floor(progress * (FRAME_COUNT - 1)) + 1;
            setCurrentFrame(frameIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getFrameUrl = (index) => {
        const frameNum = index.toString().padStart(3, '0');
        return `/frames/ezgif-frame-${frameNum}.png`;
    };

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: `${SCROLL_HEIGHT}px` }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-background flex flex-col">
                {/* Animation Layer - Occupies top space */}
                <div className="relative flex-grow flex items-center justify-center overflow-hidden py-4">
                    {!isLoading && (
                        <img
                            src={getFrameUrl(currentFrame)}
                            alt={`Animation frame ${currentFrame}`}
                            className="w-full h-full object-contain max-h-[60vh] md:max-h-[70vh]" // Limit height to ensure space for text
                        />
                    )}
                </div>

                {/* Content Layer - Occupies bottom space */}
                <div className="relative z-10 w-full flex-none bg-background/5 backdrop-blur-sm border-t border-white/5 pb-10 pt-6 px-4 text-center shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
                    <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-accent mb-2 uppercase animate-fade-in-up">
                        Governança. Riscos. Compliance.
                    </h2>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <span className="text-primary inline-block">The PRIVACY</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-start to-secondary-end inline-block ml-2">
                            BRASIL
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-6 font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        A privacidade que cria raiz
                    </p>

                    <a
                        href="#servicos"
                        className="btn-primary animate-fade-in-up shadow-lg shadow-accent/20 text-sm md:text-base px-6 py-2"
                        style={{ animationDelay: '0.6s' }}
                    >
                        Conheça nossos serviços
                    </a>

                    {/* Scroll Indicator embedded in bottom section */}
                    <div className="mt-4 animate-bounce text-primary/50 flex justify-center">
                        <ChevronDown size={24} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
