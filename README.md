<img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=0:1e3a5f,100:0ea5e9&text=Lab%20Archiv%C3%ADstica%20UD&fontAlign=50&fontAlignY=40&fontSize=45&fontColor=ffffff&desc=Frontend%20%E2%80%94%20Universidad%20Distrital&descAlignY=65&descSize=18" width="100%" alt="Lab Archivística UD" />

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-7.1.6-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-22c55e?logo=open-source-initiative&logoColor=white)](LICENSE)

</div>

Interfaz web del Laboratorio de Archivística y Tecnologías Digitales de la **Universidad Distrital Francisco José de Caldas**. Espacio académico para la gestión, análisis y transformación de la información con tecnología, innovación y compromiso social.

<br />

---

## Stack

| Herramienta | Versión | Propósito |
| :--- | :--- | :--- |
| **Astro** | v7 | Framework web y generador de sitios estáticos |
| **React** | 19 | Componentes interactivos (formularios, solicitudes) |
| **Tailwind CSS** | v4 | Estilos utilitarios con sistema de diseño propio |
| **TypeScript** | 5 | Tipado estático y seguridad en desarrollo |

## Estructura del proyecto

```
src/
├── assets/                  # Imágenes y recursos estáticos
├── components/              # Componentes reutilizables (.astro)
│   ├── Hero.astro           # Carrusel principal con noticias destacadas
│   ├── NewsCard.astro       # Tarjeta de noticia reutilizable
│   ├── NewsSection.astro    # Sección de últimas noticias (homepage)
│   ├── Services.astro       # Cuadrícula de servicios
│   ├── SoftwareEquipment.astro
│   ├── HowToUse.astro       # Guía de uso del laboratorio
│   ├── ContactSection.astro # Formulario y contacto
│   ├── Header.astro         # Navegación principal
│   └── Footer.astro         # Pie de página
├── content/
│   └── news/                # Noticias en Markdown (content collections)
│       ├── config.ts        # Schema de validación con Zod
│       └── *.md             # Cada archivo = una noticia
├── layouts/
│   └── Layout.astro         # Layout base (head, header, footer)
├── pages/                   # Rutas del sitio
│   ├── index.astro          # Landing page
│   ├── noticias/            # Tablón de noticias
│   │   ├── index.astro      # Listado completo
│   │   └── [slug].astro     # Vista individual
│   ├── equipos/             # Catálogo y detalle de equipos
│   ├── servicios/           # Servicios del laboratorio
│   │   └── salas/           # Reserva de salas
│   └── software/            # Catálogo de software
└── styles/
    └── global.css           # Estilos globales + Tailwind
```

## Páginas

| Ruta | Descripción |
| :--- | :--- |
| `/` | Landing page con carrusel, servicios, noticias, software y contacto |
| `/noticias/` | Tablón completo de novedades y anuncios |
| `/noticias/:slug` | Vista individual de una noticia |
| `/servicios` | Servicios del laboratorio (equipos, salas, software) |
| `/equipos` | Catálogo de equipos disponibles para préstamo |
| `/equipos/:id` | Detalle del equipo y solicitud de préstamo |
| `/servicios/salas` | Reserva de salas con enlaces externos |
| `/software` | Catálogo de software con acceso directo a herramientas |

## Requisitos

- **Node.js** 20 o superior (recomendado 22 LTS)
- **npm** 10 o superior

## Desarrollo

```bash
npm ci                 # Instalar dependencias (limpias)
npm run dev            # Servidor de desarrollo → localhost:4321
npm run build          # Build de producción
npm run preview        # Preview del build
```

## Cómo agregar noticias

Las noticias se gestionan mediante **Content Collections** de Astro, usando archivos Markdown con frontmatter.

### 1. Crear un archivo

Dentro de `src/content/news/`, crea un archivo con el formato `YYYY-MM-DD-titulo-corto.md`:

```markdown
---
title: "Título de la noticia"
date: 2026-08-15
excerpt: "Resumen breve que aparece en las tarjetas y vista previa."
author: "Nombre del autor"
---

Aquí va el contenido completo de la noticia en Markdown. Puedes usar **negritas**, *cursivas*,

- listas
- y todo el formato que necesites.

## Subtítulos también funcionan
```

### 2. Campos del frontmatter

| Campo | Tipo | Requerido | Descripción |
| :--- | :--- | :--- | :--- |
| `title` | string | Si | Título visible de la noticia |
| `date` | date | Si | Fecha de publicación (formato ISO: `YYYY-MM-DD`) |
| `excerpt` | string | Si | Resumen corto para tarjetas y previews |
| `author` | string | No | Nombre del autor o redactor |
| `image` | string | No | Ruta a imagen destacada (pendiente de implementar en UI) |

### 3. Publicar

```bash
git add src/content/news/
git commit -m "Feat(News): nueva noticia sobre..."
git push
```

La página se reconstruye automáticamente y la noticia aparece en:
- **Homepage** — sección "Últimas del laboratorio" (máximo 4)
- **Carrusel del Hero** — las 3 noticias más recientes aparecen como slides
- **`/noticias/`** — listado completo tipo tablón
- **`/noticias/:slug`** — vista individual con Markdown renderizado

### Notas

- Las noticias se ordenan por fecha descendente (más reciente primero).
- No hay límite de noticias. El tablón las muestra todas.
- Para editar, solo modifica el archivo `.md` correspondiente.
- Para eliminar, borra el archivo o mueve la fecha al pasado.

<br />

---
<div align="center">
  <sub>Hecho con ❤️ por el <a href="https://github.com/Hexoneira">Hexoneira</a> y el equipo del <a href="https://github.com/Niphony/Lab-Archivistica-Frontend">Laboratorio de Archivística</a></sub>
</div>
