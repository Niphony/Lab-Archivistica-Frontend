# OrfeoNG — Gestión Documental (SGDEA)

Despliegue Dockerized de **OrfeoNG**, el Sistema de Gestión Documental y Archivo Electrónico (SGDEA) desarrollado por [Skina Technologies SAS](https://skinatech.com). Cumple con la normatividad colombiana (AGN) y estándar MOREQ.

## Stack Tecnológico

| Componente | Tecnología | Puerto |
|------------|------------|--------|
| **Backend** | PHP 8.1 + Yii2 Framework | `:64000/ng_backend/` |
| **Frontend** | Angular 14 | `:64000/orfeo-ng/` |
| **Sockets** | Node.js + Socket.io | `:64000/socket/` |
| **Base de Datos** | MySQL 5.7 | `:3307` (interno) |
| **Proxy** | Nginx 1.25 | `:64000` |

## Requisitos

- Docker Engine >= 24
- Docker Compose >= 2.20
- Git
- 4 GB RAM disponible (para compilar Angular)

## Inicio Rápido

```bash
# 1. Clonar el repositorio (si no lo has hecho)
git clone <repo-url> labbarchivisticapagina
cd labbarchivisticapagina/orfeo

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env si es necesario (puertos, contraseñas, etc.)

# 3. Iniciar todos los servicios
docker compose up --build -d

# 4. Ver logs
docker compose logs -f

# 5. Acceder a OrfeoNG
#    http://localhost:64000
```

## Credenciales por Defecto

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| `admin` | `admin123--` | Administrador del Sistema |

> **⚠️ Importante:** Cambiar la contraseña y la `AES_KEY` en producción.

## Estructura del Proyecto

```
orfeo/
├── .env                    # Variables de entorno (no versionar)
├── .env.example            # Plantilla para .env
├── docker-compose.yml      # Orquestación de servicios
├── README.md               # Esta documentación
│
├── backend/                # PHP 8.1 + Yii2 (API REST)
│   ├── Dockerfile          # Construcción multi-etapa
│   ├── entrypoint.sh       # Inicialización: migraciones + seed admin
│   ├── create-admin.php    # Script de creación del usuario admin
│   ├── nginx.conf          # Configuración Nginx interno
│   ├── php.ini             # Configuración PHP
│   └── supervisord.conf    # Supervisor para PHP-FPM + Nginx
│
├── frontend/               # Angular 14
│   ├── Dockerfile          # Build multi-etapa (Node → Nginx)
│   └── nginx.conf          # Configuración Nginx para SPA
│
├── sockets/                # Node.js + Socket.io
│   └── Dockerfile          # Servicio de tiempo real
│
├── nginx/
│   └── default.conf        # Reverse proxy unificado
│
└── db/
    └── init.sql            # Inicialización de BD y usuario
```

## Arquitectura

```
Usuario → :64000
    │
    ├── /orfeo-ng/*    → frontend:80     (Angular SPA)
    ├── /ng_backend/*   → backend:80      (PHP-FPM + Nginx)
    ├── /socket/*       → sockets:3005    (WebSocket)
    ├── /socket.io/*    → sockets:3005    (WebSocket)
    │
    backend:80  → MySQL:3306 (internal)
```

## Comandos Útiles

```bash
# Iniciar servicios
docker compose up --build -d

# Detener servicios
docker compose down

# Ver logs en tiempo real
docker compose logs -f

# Ver logs de un servicio específico
docker compose logs -f backend

# Ejecutar migraciones manualmente
docker compose exec backend php /app/yii migrate

# Acceder a la base de datos
docker compose exec mysql mysql -u orfeo -p orfeoNG_db

# Reconstruir un servicio específico
docker compose up --build -d frontend

# Limpiar volúmenes (borra datos de BD)
docker compose down -v
```

## Uso de Repositorios Privados

Por defecto se usan los repositorios públicos de SkinaTech en GitHub. Si tienes acceso a los repositorios oficiales en `aruba.skinatech.com`, edita el archivo `.env`:

```env
BACKEND_REPO=https://aruba.skinatech.com/Orfeo-NG/ng_backend.git
FRONTEND_REPO=https://aruba.skinatech.com/Orfeo-NG/ng_frontend.git
SOCKETS_REPO=https://aruba.skinatech.com/Orfeo-NG/ng_sockets.git
```

> **Nota:** Los repositorios privados requieren autenticación. Asegúrate de tener credenciales Git configuradas.

## Solución de Problemas

### Error: "npm ERR! could not determine executable to run"

Angular CLI requiere Node 19. Asegúrate de tener la versión correcta:

```bash
docker compose build --no-cache frontend
```

### Error: "Connection refused" al iniciar backend

MySQL tarda en inicializar la primera vez. El backend espera automáticamente, pero si persiste:

```bash
docker compose restart backend
```

### Error: Usuario admin no funciona

Si el usuario admin no fue creado (por ejemplo, si las migraciones fallaron):

```bash
docker compose exec backend php /app/create-admin.php
```

### Error: Recaptcha no configurado

Desactivar recaptcha desde la base de datos:

```bash
docker compose exec mysql mysql -u orfeo -p orfeoNG_db -e "UPDATE csInicial SET estadoCsInicial = '0' WHERE idCsInicial = 1;"
```

## Variables de Entorno

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `DB_HOST` | Host de MySQL | `mysql` |
| `DB_PORT` | Puerto de MySQL | `3306` |
| `DB_NAME` | Nombre de BD | `orfeoNG_db` |
| `DB_USER` | Usuario de BD | `orfeo` |
| `DB_PASS` | Contraseña de BD | `orfeo123` |
| `MYSQL_ROOT_PASSWORD` | Contraseña root MySQL | `root_secret_2026` |
| `AES_KEY` | Llave de encriptación AES | `aegoh3quai3Aijum7cae0theifo_uv` |
| `SERVER_URL` | URL pública del servicio | `http://localhost:64000` |
| `BACKEND_REPO` | Repositorio del backend | `https://github.com/...` |
| `FRONTEND_REPO` | Repositorio del frontend | `https://github.com/...` |
| `SOCKETS_REPO` | Repositorio de sockets | `https://github.com/...` |

## Licencia

OrfeoNG tiene licenciamiento dual (AGPL para personas naturales, comercial para personas jurídicas). Ver [LICENSE.md](https://github.com/skinatech/orfeong_backend/blob/main/LICENSE.md) para más detalles.
