import { useState } from 'react';
import { contactoApi, type ContactDto } from '../lib/api';

export default function ContactForm() {
  const [form, setForm] = useState<ContactDto>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await contactoApi.send(form);
      setStatus('success');
      setMsg('¡Mensaje enviado! Te responderemos pronto.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setMsg(err.message || 'Error al enviar el mensaje.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'success' && (
        <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-4 flex items-center gap-3">
          <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p className="text-green-300 text-sm">{msg}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Nombre completo *</label>
          <input type="text" required value={form.name}
            onChange={e => setForm(f => ({...f, name: e.target.value}))}
            className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm"
            placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Correo electrónico *</label>
          <input type="email" required value={form.email}
            onChange={e => setForm(f => ({...f, email: e.target.value}))}
            className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm"
            placeholder="tu@correo.edu.co" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-1">Asunto *</label>
        <input type="text" required value={form.subject}
          onChange={e => setForm(f => ({...f, subject: e.target.value}))}
          className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm"
          placeholder="¿En qué podemos ayudarte?" />
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-1">Mensaje *</label>
        <textarea required rows={5} value={form.message}
          onChange={e => setForm(f => ({...f, message: e.target.value}))}
          className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm resize-none"
          placeholder="Escribe tu mensaje aquí..." />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-2">{msg}</p>
      )}
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors">
        {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </form>
  );
}
