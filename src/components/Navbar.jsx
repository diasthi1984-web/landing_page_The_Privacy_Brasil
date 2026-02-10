import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Quem Somos', href: '#sobre' },
        { name: 'Propósito', href: '#objetivo' },
        { name: 'Pilares', href: '#servicos' },
        { name: 'Diferenciais', href: '#diferenciais' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo Placeholder */}
                <a href="#" className="flex items-center gap-2 z-50">
                    <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-white' : 'text-primary'}`}>
                        The Privacy <span className="text-accent">Brasil</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium hover:text-accent transition-colors ${scrolled ? 'text-gray-300' : 'text-primary'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contato" className="btn-primary py-2 px-4 shadow-none">
                        Fale Conosco
                    </a>
                </div>

                {/* Mobile Filter Button */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} className={scrolled ? 'text-white' : 'text-primary'} />}
                </button>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-primary/95 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-white mb-8 hover:text-accent"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
