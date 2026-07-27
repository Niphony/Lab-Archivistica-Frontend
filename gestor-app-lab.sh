#!/bin/bash

# Capturar la acción (up o down)
ACTION=$1

# Validar que se haya pasado un argumento correcto
if [[ "$ACTION" != "up" && "$ACTION" != "down" ]]; then
    echo "Error: Argumento inválido o ausente."
    echo "Uso: $0 {up|down}"
    exit 1
fi

# Configurar los argumentos para docker compose
if [ "$ACTION" == "up" ]; then
    DOCKER_ARGS="up -d"
else
    DOCKER_ARGS="down"
fi

echo "==================================================="
echo " Ejecutando 'docker compose $DOCKER_ARGS' en el Lab"
echo "==================================================="

# 1. Lab-Archivistica-Frontend
echo -e "\n▶ [1/3] Procesando Lab-Archivistica-Frontend..."
cd /var/www/Lab-Archivistica-Frontend || exit 1
docker compose $DOCKER_ARGS

# 2. Archivematica
echo -e "\n▶ [2/3] Procesando Archivematica..."
cd /var/www/Lab-Archivistica-Frontend/archivematica/hack || exit 1
docker compose $DOCKER_ARGS

# 3. AtoM
echo -e "\n▶ [3/3] Procesando AtoM..."
cd /var/www/Lab-Archivistica-Frontend/atom || exit 1
# Se declara la variable en la misma línea de ejecución para aislarla a este proceso
COMPOSE_FILE="$PWD/docker/docker-compose.dev.yml" docker compose $DOCKER_ARGS

echo -e "\n Operación '$ACTION' completada en los 3 directorios."
