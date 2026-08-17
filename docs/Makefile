# Compila los manuales del Laboratorio con latexmk.
# En Windows use docs/compilar.sh (make no está disponible).
LATEXMK   := latexmk
LATEXFLAGS := -pdf -interaction=nonstopmode -halt-on-error -shell-escape
TEXINPUTS := ../;

.PHONY: all usuario tecnico capturas clean

all: usuario tecnico

usuario:
	cd manual-usuario && TEXINPUTS="$(TEXINPUTS)" $(LATEXMK) $(LATEXFLAGS) main.tex

tecnico:
	cd manual-tecnico && TEXINPUTS="$(TEXINPUTS)" $(LATEXMK) $(LATEXFLAGS) main.tex

capturas:
	bash scripts/capturas.sh docs/manual-usuario/capturas

clean:
	cd manual-usuario && $(LATEXMK) -C 2>/dev/null || true
	cd manual-tecnico && $(LATEXMK) -C 2>/dev/null || true
	rm -f manual-usuario/main.pdf manual-tecnico/main.pdf