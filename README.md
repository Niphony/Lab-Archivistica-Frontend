# Lab Archivística UD — Frontend

Interfaz web (UI) del sistema de gestión para el Laboratorio de Archivística de la Universidad Distrital Francisco José de Caldas. 

## Stack

* **Astro** (Framework web y generador de sitios)
* **Tailwind CSS** (Framework de estilos de utilidad)
* **Node.js** (Entorno de ejecución)

## Módulos

| Módulo | Descripción |
| :--- | :--- |
| **Autenticación** | Vistas de login y registro para usuarios (dominio `@udistrital.edu.co`) |
| **Equipos** | Vista en catálogo de los equipos de cómputo y digitalización del laboratorio |
| **Software** | Portafolio visual del software especializado disponible para uso |
| **Documentos** | Interfaz para la consulta, lectura y descarga de reglamentos y protocolos |
| **Aplicativos** | Portal de acceso y enlaces directos a las herramientas archivísticas del ecosistema (AtoM, Archivematica, DSpace) |


## Requisitos

- Node.js 20 o superior (recomendado 22 LTS) - versión usada 26.1.0
- npm 10 o superior

## Configuración

### 1) Instalar dependencias

```bash
npm ci
```

### 2) Ejecutar en desarrollo - Para tener preview en localhost

```bash
npm run dev
```

### 3) Build de produccion

```bash
npm run build 
```

### 4) Preview local

```bash
npm run preview
```
