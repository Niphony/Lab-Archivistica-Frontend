export interface Equipo {
  id: number;
  name: string;
  description: string;
  available: boolean;
  category: string;
}

export const equipos: Equipo[] = [
  {
    id: 1,
    name: 'Computadores',
    description: 'Equipo de cómputo de alta gama para procesamiento de datos y digitalización documental.',
    available: true,
    category: 'Cómputo',
  },
  {
    id: 2,
    name: 'Escáneres',
    description: 'Escáner de alta resolución para digitalización de documentos históricos en gran formato.',
    available: true,
    category: 'Digitalización',
  },
  {
    id: 3,
    name: 'Colección Bibliográfica',
    description: 'Colección de documentos para libre consulta, préstamo otorgado por la universidad.',
    available: true,
    category: 'Digitalización',
  },
];