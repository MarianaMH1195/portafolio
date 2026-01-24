import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                'service_i4rwroq',
                'template_y7uw3ac',
                formRef.current!,
                'UJ4d38O0qxq13im0J'
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nombre
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Escribe tu mensaje aqui..."
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {status === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-center">
                    Mensaje enviado correctamente! Te respondere pronto.
                </div>
            )}

            {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center">
                    Error al enviar el mensaje. Por favor, intenta de nuevo.
                </div>
            )}
        </form>
    );
};

export default ContactForm;
