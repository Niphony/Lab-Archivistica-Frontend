const API_BASE = import.meta.env.PUBLIC_API_URL || 'http://localhost:8080/api';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `Error ${res.status}`);
  }
  return res.json();
}

// ── Equipos 
export const equiposApi = {
  getAll: () => request<Equipment[]>('/equipment'),
  getById: (id: number) => request<Equipment>(`/equipment/${id}`),
  loan: (data: LoanEquipmentDto) => request('/loans/equipment', { method: 'POST', body: JSON.stringify(data) }),
};

// ── Salas 
export const salasApi = {
  getAll: () => request<Room[]>('/rooms'),
  getById: (id: number) => request<Room>(`/rooms/${id}`),
  loan: (data: LoanRoomDto) => request('/loans/room', { method: 'POST', body: JSON.stringify(data) }),
};

// ── Software
export const softwareApi = {
  getAll: () => request<Software[]>('/software'),
};

// ── Contacto
export const contactoApi = {
  send: (data: ContactDto) => request('/contact', { method: 'POST', body: JSON.stringify(data) }),
};

// ── Types
export interface Equipment {
  id: number; name: string; description: string;
  available: boolean; category: string; imageUrl?: string;
}
export interface Room {
  id: number; name: string; capacity: number;
  available: boolean; description: string; imageUrl?: string;
}
export interface Software {
  id: number; name: string; version: string;
  description: string; category: string; licenseType: string;
}
export interface LoanEquipmentDto {
  equipmentId: number; studentId: string;
  studentName: string; startDate: string; endDate: string; purpose: string;
}
export interface LoanRoomDto {
  roomId: number; studentId: string;
  studentName: string; date: string; startTime: string; endTime: string; purpose: string;
}
export interface ContactDto {
  name: string; email: string; subject: string; message: string;
}
