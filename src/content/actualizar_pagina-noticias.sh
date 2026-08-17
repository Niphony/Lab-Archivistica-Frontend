#!/bin/bash

# Ruta absoluta al frontend
FRONTEND_DIR="/var/www/Lab-Archivistica-Frontend"

# Ir a la carpeta del proyecto
if ! cd "$FRONTEND_DIR"; then
    echo " Error: No se pudo acceder al directorio $FRONTEND_DIR, revise directorio del proyecto"
    exit 1
fi

echo "Trabajando en: $(pwd)"

# Verificar si se pasó el argumento --no-cache
if [ "$1" == "--no-cache" ]; then
    echo "▶ Construyendo 'astro-frontend' SIN caché..."
    docker compose build --no-cache astro-frontend
else
  echo "▶ Construyendo 'Pagina (actualizando)'..."
    docker compose build astro-frontend
fi

echo "▶ Recreando y actualizando paginas..."
docker compose up -d --no-deps astro-frontend

echo " Frontend construido y actualizado exitosamente."
