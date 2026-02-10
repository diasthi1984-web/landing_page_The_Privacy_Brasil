import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        empresa: '',
        telefone: '',
        mensagem: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            console.log('Form Submitted:', formData);
            setStatus('success');
            setFormData({ nome: '', email: '', empresa: '', telefone: '', mensagem: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1000);
    };

    return (
        <section id="contato" className="section-padding bg-background">
            <div className="container-custom max-w-4xl">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Contact Info / Side */}
                    <div className="bg-primary p-10 md:w-2/5 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
                            <p className="text-gray-300 mb-8">
                                Pronto para elevar o nível de governança da sua empresa? Preencha o formulário e entraremos em contato.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm text-gray-400">
                            <p>contato@theprivacybrasil.com</p>
                            <p>São Paulo, SP</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 md:w-3/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="nome" className="text-sm font-medium text-text-secondary">Nome Completo</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    required
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-secondary-start focus:ring-2 focus:ring-secondary-start/20 outline-none transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email Corporativo</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-secondary-start focus:ring-2 focus:ring-secondary-start/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="telefone" className="text-sm font-medium text-text-secondary">Telefone</label>
                                    <input
                                        type="tel"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-secondary-start focus:ring-2 focus:ring-secondary-start/20 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="empresa" className="text-sm font-medium text-text-secondary">Empresa</label>
                                <input
                                    type="text"
                                    id="empresa"
                                    name="empresa"
                                    value={formData.empresa}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-secondary-start focus:ring-2 focus:ring-secondary-start/20 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="mensagem" className="text-sm font-medium text-text-secondary">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows={4}
                                    required
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-secondary-start focus:ring-2 focus:ring-secondary-start/20 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {status === 'submitting' ? 'Enviando...' : (
                                    status === 'success' ? <span className="flex items-center gap-2"><CheckCircle size={20} /> Mensagem Enviada!</span> :
                                        <span className="flex items-center gap-2">Enviar Mensagem <Send size={18} /></span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
