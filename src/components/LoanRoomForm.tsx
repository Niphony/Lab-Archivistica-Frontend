import { useState } from 'react';
import { salasApi, type LoanRoomDto } from '../lib/api';

interface Props { roomId: number; roomName: string; }

export default function LoanRoomForm({ roomId, roomName }: Props) {
  const [form, setForm] = useState<Omit<LoanRoomDto, 'roomId'>>({
    studentId: '', studentName: '', date: '', startTime: '', endTime: '', purpose: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await salasApi.loan({ roomId, ...form });
      setStatus('success');
      setMsg('¡Reserva realizada! Recibirás confirmación pronto.');
    } catch (err: any) {
      setStatus('error');
      setMsg(err.message || 'Error al realizar la reserva.');
    }
  };

  if (status === 'success') return (
    <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-6 text-center">
      <p className="text-green-300 font-semibold">{msg}</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-accent-500/10 border border-accent-400/20 rounded-lg p-3">
        <p className="text-accent-300 text-sm font-medium">Sala: <span className="text-white">{roomName}</span></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Código estudiantil', key: 'studentId', type: 'text', placeholder: '20231234567' },
          { label: 'Nombre completo', key: 'studentName', type: 'text', placeholder: 'Tu nombre' },
          { label: 'Fecha', key: 'date', type: 'date', placeholder: '' },
          { label: '', key: '', type: '', placeholder: '' }, // spacer
          { label: 'Hora de inicio', key: 'startTime', type: 'time', placeholder: '' },
          { label: 'Hora de fin', key: 'endTime', type: 'time', placeholder: '' },
        ].filter(f => f.key).map(({ label, key, type, placeholder }) => (
          <div key={key}>
            <label className="block text-sm text-white/70 mb-1">{label} *</label>
            <input
              type={type} required placeholder={placeholder}
              min={key === 'date' ? new Date().toISOString().split('T')[0] : undefined}
              value={(form as any)[key]}
              onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm"
            />
          </div>
        ))}
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-1">Propósito *</label>
        <textarea
          required rows={3} placeholder="Motivo de la reserva..."
          value={form.purpose}
          onChange={e => setForm(f => ({ ...f, purpose: e.target.value }))}
          className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 focus:outline-none focus:border-accent-400 text-sm resize-none"
        />
      </div>
      {status === 'error' && <p className="text-red-400 text-sm bg-red-500/10 border border-red-400/20 rounded-lg px-4 py-2">{msg}</p>}
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
        {status === 'loading' ? 'Reservando...' : 'Reservar Sala'}
      </button>
    </form>
  );
}
