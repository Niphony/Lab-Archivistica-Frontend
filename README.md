# Lab Archivística UD — Frontend

Interfaz web del Laboratorio de Archivística y Humanidades Digitales de la Universidad Distrital Francisco José de Caldas.

## Stack

- **Astro** v6 — Framework web y generador de sitios estáticos
- **React** 19 — Componentes interactivos (formularios)
- **Tailwind CSS** v4 — Estilos utilitarios
- **TypeScript** — Tipado estático

## Estructura del proyecto

```
src/
├── assets/            # Imágenes y recursos estáticos
├── components/        # Componentes reutilizables (.astro y .tsx)
├── layouts/           # Layout base (Layout.astro)
├── pages/             # Rutas del sitio
│   ├── equipos/       # Catálogo y detalle de equipos
│   ├── investigacion/ # Líneas de investigación
│   ├── servicios/     # Servicios del laboratorio
│   │   └── salas/     # Reserva de salas
│   └── software/      # Catálogo de software
└── styles/            # Estilos globales (Tailwind)
```

## Páginas

| Ruta | Descripción |
| :--- | :--- |
| `/` | Landing page con hero, servicios, software y contacto |
| `/servicios` | Servicios del laboratorio (equipos, salas, software) |
| `/equipos` | Catálogo de equipos disponibles para préstamo |
| `/equipos/:id` | Detalle del equipo y solicitud de préstamo |
| `/servicios/salas` | Reserva de salas con enlaces externos |
| `/software` | Catálogo de software con acceso directo a herramientas |
| `/investigacion` | Líneas y proyectos de investigación |

## Requisitos

- Node.js 20 o superior (recomendado 22 LTS)
- npm 10 o superior

## Desarrollo

```bash
npm ci              # Instalar dependencias
npm run dev         # Servidor de desarrollo (localhost:4321)
npm run build       # Build de producción
npm run preview     # Preview del build
```
