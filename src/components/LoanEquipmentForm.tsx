import { useState } from 'react';
import { equiposApi, type LoanEquipmentDto } from '../lib/api';

interface Props { equipmentId: number; equipmentName: string; }

export default function LoanEquipmentForm({ equipmentId, equipmentName }: Props) {
  const [form, setForm] = useState<Omit<LoanEquipmentDto, 'equipmentId'>>({
    studentId: '', studentName: '', startDate: '', endDate: '', purpose: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await equiposApi.loan({ equipmentId, ...form });
      setStatus('success');
      setMsg('¡Solicitud enviada! Te contactaremos para confirmar el préstamo.');
    } catch (err: any) {
      setStatus('error');
      setMsg(err.message || 'Error al enviar la solicitud. Intenta de nuevo.');
    }
  };

  if (status === 'success') return (
    <div class="bg-green-500/10 border border-green-400/30 rounded-xl p-6 text-center">
      <svg class="w-12 h-12 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <p class="text-green-300 font-semibold">{msg}</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-accent-500/10 border border-accent-400/20 rounded-lg p-3 mb-2">
        <p className="text-accent-300 text-sm font-medium">Equipo: <span className="text-white">{equipmentName}</span></p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Código estudiantil *</label>
          <input
            type="text" required placeholder="20231234567"
            value={form.studentId}
            onChange={e => setForm(f => ({ ...f, studentId: e.target.value }))}
            className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Nombre completo *</label>
          <input
            type="text" required placeholder="Tu nombre"
            value={form.studentName}
            onChange={e => setForm(f => ({ ...f, studentName: e.target.value }))}
            className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Fecha de inicio *</label>
          <input
            type="date" required min={new Date().toISOString().split('T')[0]}
            value={form.startDate}
            onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
            className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent-400 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Fecha de devolución *</label>
          <input
            type="date" required min={form.startDate || new Date().toISOString().split('T')[0]}
            value={form.endDate}
            onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))}
            className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-accent-400 text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/70 mb-1">Propósito del préstamo *</label>
        <textarea
          required rows={3} placeholder="Describe brevemente para qué usarás el equipo..."
          value={form.purpose}
          onChange={e => setForm(f => ({ ...f, purpose: e.target.value }))}
          className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-2">{msg}</p>
      )}

      <button
        type="submit" disabled={status === 'loading'}
        className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors text-sm"
      >
        {status === 'loading' ? 'Enviando solicitud...' : 'Solicitar Préstamo'}
      </button>
    </form>
  );
}
