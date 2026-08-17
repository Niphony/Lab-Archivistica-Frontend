FROM alpine:3.19

LABEL org.opencontainers.image.title="ExifTool"
LABEL org.opencontainers.image.description="Herramienta CLI para lectura, escritura y manipulación de metadatos"
LABEL org.opencontainers.image.source="https://exiftool.org"

RUN apk add --no-cache perl exiftool

WORKDIR /data

ENTRYPOINT ["exiftool"]
CMD ["--help"]
