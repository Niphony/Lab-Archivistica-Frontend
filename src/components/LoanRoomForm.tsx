interface Props { roomId: number; roomName: string; }

export default function LoanRoomForm({ roomName }: Props) {
  return (
    <div class="text-center py-6 space-y-4">
      <div class="bg-accent-500/10 border border-accent-400/20 rounded-lg p-3">
        <p class="text-accent-300 text-sm font-medium">Sala: <span class="text-white">{roomName}</span></p>
      </div>
      <p class="text-white/60 text-sm">
        Para reservar esta sala, utiliza el formulario de reserva externo.
      </p>
      <a
        href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=74gT1bBqY0OflNVmRKRZcCYdtW4rSUhOkGItZSP0FSVUMkxQQTdaVUxZMlg4RTIyMFhJMTNJUU5RRC4u&route=shorturl"
        target="_blank"
        class="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
      >
        Ir al formulario
      </a>
    </div>
  );
}
