import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12 border-t border-white/10">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">The Privacy Brasil</h3>
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://www.linkedin.com/company/the-privacy-brasil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:contato@theprivacybrasil.com" className="text-gray-400 hover:text-accent transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
