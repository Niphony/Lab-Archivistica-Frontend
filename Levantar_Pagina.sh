#!/bin/bash

# Verificar si se pasó el argumento --no-cache para forzar una construcción limpia
if [ "$1" == "--no-cache" ]; then
    echo "▶ Construyendo 'astro-frontend' SIN caché..."
    docker compose build --no-cache astro-frontend
else
    echo "▶ Construyendo 'astro-frontend'..."
    docker compose build astro-frontend
fi

echo "▶ Recreando y levantando el contenedor..."
# --no-deps evita que se reinicien las dependencias o redes asociadas
docker compose up -d --no-deps astro-frontend

echo "✅ Frontend construido y corriendo exitosamente."
