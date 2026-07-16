#!/bin/sh
set -e

DB_HOST="${DB_HOST:-mysql}"
DB_PORT="${DB_PORT:-3306}"
DB_NAME="${DB_NAME:-orfeoNG_db}"
DB_USER="${DB_USER:-orfeo}"
DB_PASS="${DB_PASS:-orfeo123}"
AES_KEY="${AES_KEY:-aegoh3quai3Aijum7cae0theifo}uv}"
SERVER_URL="${SERVER_URL:-http://localhost:64000}"

echo "Waiting for MySQL at $DB_HOST:$DB_PORT..."
until nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; do
    sleep 2
done
echo "MySQL is ready."

cat > /app/common/config/main-local.php <<PHPEOF
<?php
return [
    'name' => 'OrfeoNg',
    'components' => [
        'db' => [
            'class' => 'yii\\db\\Connection',
            'dsn' => 'mysql:host=$DB_HOST;dbname=$DB_NAME',
            'username' => '$DB_USER',
            'password' => '$DB_PASS',
            'charset' => 'utf8',
        ],
        'mailer' => [
            'class' => \\yii\\symfonymailer\\Mailer::class,
            'viewPath' => '@common/mail',
            'useFileTransport' => true,
        ],
    ],
];
PHPEOF

cat > /app/api/config/params-local.php <<PHPEOF
<?php
return [
    'llaveAES' => '$AES_KEY',
    'debugAES' => false,
    'ipServer' => '$SERVER_URL/orfeo-ng/#/',
    'urlBaseApiPublic' => '$SERVER_URL/ng_backend/frontend/web/',
    'motorDB' => 'MYSQL',
    'userPublicPage' => 'anonimo',
    'passwordPublicPage' => '4n0N1m0\$',
    'separadorEstructuraRadicado' => '-',
    'tipoConsecutivoRadicado' => 'tipoRad&regional',
    'activateRadiTmp' => true,
    'CgTipoRadicado' => [
        'radiSalida' => 'SAL',
        'radiEntrada' => 'ENT',
        'comunicacionInterna' => 'INT',
        'radiPqrs' => 'PQR',
    ],
];
PHPEOF

cat > /app/common/config/params-local.php <<PHPEOF
<?php
return [];
PHPEOF

echo "Running Yii2 migrations..."
php /app/yii migrate --interactive=0 2>&1 || echo "Migrations may have already run."

echo "Seeding admin user..."
php /app/create-admin.php

echo "Creating API directories..."
mkdir -p /app/api/web/trd_formats /app/api/web/tmp_mail /app/api/web/bodega \
    /app/api/web/expendientes_paz_y_salvo /app/api/web/bar_code_consecutivos \
    /app/api/web/actas /app/api/web/cuadro_documental /app/api/web/documentos \
    /app/api/web/plantillas /app/api/web/tmp_docs /app/api/web/tmp_masiva \
    /app/api/web/user_formats /app/api/web/usuarios /app/api/web/gestion_archivo
chmod -R 0777 /app/api/web /app/api/runtime

echo "Starting services..."
exec /usr/bin/supervisord -c /etc/supervisor.d/orfeo.ini -n
