#!/bin/bash
# compilar.sh - Compila los manuales del Laboratorio con latexmk.
# Uso: bash docs/compilar.sh [usuario|tecnico|todos]
set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET="${1:-todos}"

cd "$DIR"

compilar() {
    local dir=$1
    echo "Compilando $dir..."
    (cd "$dir" && latexmk -pdf -interaction=nonstopmode -halt-on-error main.tex)
}

case "$TARGET" in
    usuario) compilar manual-usuario ;;
    tecnico) compilar manual-tecnico ;;
    todos)
        compilar manual-usuario
        compilar manual-tecnico
        ;;
    *)
        echo "Uso: bash docs/compilar.sh [usuario|tecnico|todos]"
        exit 1
        ;;
esac

echo "Listo. PDFs en docs/manual-usuario/main.pdf y docs/manual-tecnico/main.pdf"