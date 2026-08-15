#!/bin/bash
# capturas.sh - Genera capturas del portal para los manuales (Edge headless).
# Uso: bash docs/scripts/capturas.sh [directorio_de_salida]
set -e

EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
PORT=4325
BASE="http://localhost:$PORT"
OUT="${1:-docs/manual-usuario/capturas}"

if [ ! -f "$EDGE" ]; then
    echo "Error: no se encontró Microsoft Edge en $EDGE" >&2
    exit 1
fi

mkdir -p "$OUT"
OUT_ABS=$(cygpath -w "$(pwd)/$OUT")

echo "Iniciando preview en el puerto $PORT..."
npm run preview -- --port "$PORT" >/tmp/lab-preview-capturas.log 2>&1 &
PID=$!
trap "kill $PID 2>/dev/null" EXIT
sleep 5

shot() {
    local out_win; out_win="$OUT_ABS\\$1"
    local profile; profile=$(cygpath -w "$(mktemp -d)")
    "$EDGE" \
        --headless \
        --disable-gpu \
        --hide-scrollbars \
        --user-data-dir="$profile" \
        --window-size=1440,900 \
        --screenshot="$out_win" \
        "$BASE$2" >/dev/null 2>&1
    echo "  OK $1  ($2)"
}

shot portada.png "/"
shot equipos.png "/equipos/"
shot equipo.png "/equipos/1/"
shot software.png "/software/"
shot salas.png "/servicios/salas/"
shot sala.png "/servicios/salas/1/"
shot noticias.png "/noticias/"
shot noticia.png "/noticias/2026-08-15-taller-preservacion/"
shot investigacion.png "/investigacion/"

echo "Capturas generadas en: $OUT"