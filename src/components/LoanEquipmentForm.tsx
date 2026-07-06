import { useState } from 'react';

interface Props { equipmentId: number; equipmentName: string; }

export default function LoanEquipmentForm({ equipmentName }: Props) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  if (status === 'success') return (
    <div class="bg-green-500/10 border border-green-400/30 rounded-xl p-6 text-center">
      <svg class="w-12 h-12 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <p class="text-green-300 font-semibold">Redirigiendo al formulario de solicitud...</p>
    </div>
  );

  return (
    <div class="text-center py-6 space-y-4">
      <div class="bg-accent-500/10 border border-accent-400/20 rounded-lg p-3 mb-2">
        <p class="text-accent-300 text-sm font-medium">Equipo: <span class="text-white">{equipmentName}</span></p>
      </div>
      <p class="text-white/60 text-sm">
        Para solicitar el préstamo de este equipo, contáctanos directamente.
      </p>
      <a
        href="mailto:labarchivistica@udistrital.edu.co"
        class="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
      >
        Solicitar por correo
      </a>
    </div>
  );
}
