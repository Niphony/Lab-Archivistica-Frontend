#!/bin/bash

# Gestor de servicios del Lab: AtoM y Archivematica

ACTION=$1

if [[ "$ACTION" != "up" && "$ACTION" != "down" ]]; then
    echo "Error: Argumento inválido o ausente."
    echo "Uso: $0 {up|down}"
    exit 1
fi

ROOT="$(cd "$(dirname "$0")" && pwd)"
ATOM_COMPOSE="$ROOT/AtoM/docker/docker-compose.yml"
AM_COMPOSE="$ROOT/Archivematica/archivematica/hack/docker-compose.lab.yml"

if [ "$ACTION" == "up" ]; then
    DOCKER_ARGS="up -d"

    # Prerrequisitos idempotentes (red y volúmenes externos)
    docker network create lab-network >/dev/null 2>&1 || true
    docker volume create am-pipeline-data >/dev/null 2>&1 || true
    docker volume create ss-location-data >/dev/null 2>&1 || true
else
    DOCKER_ARGS="down"
fi

echo "==================================================="
echo " Ejecutando 'docker compose $DOCKER_ARGS' en el Lab"
echo "==================================================="

# 1. AtoM
echo -e "\n▶ [1/3] Procesando AtoM..."
docker compose -f "$ATOM_COMPOSE" $DOCKER_ARGS

# 2. Archivematica
echo -e "\n▶ [2/3] Procesando Archivematica..."
docker compose -f "$AM_COMPOSE" $DOCKER_ARGS

# 3. Stack general (lab-proxy, astro, dspace, tika) — sin build
echo -e "\n▶ [3/3] Procesando stack general..."
cd "$ROOT" || exit 1
docker compose $DOCKER_ARGS

echo -e "\n Operación '$ACTION' completada."
