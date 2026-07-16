FROM php:8.1-fpm-alpine AS builder

RUN apk add --no-cache git openssh unzip linux-headers oniguruma-dev icu-dev libzip-dev \
    libpng-dev libjpeg-turbo-dev freetype-dev imap-dev openssl-dev krb5-dev \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-configure imap --with-imap-ssl --with-kerberos \
    && docker-php-ext-install pdo pdo_mysql mbstring intl bcmath zip gd imap

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

ARG BACKEND_REPO=https://github.com/skinatech/orfeong_backend.git
ARG BACKEND_BRANCH=main

RUN git clone --depth 1 -b $BACKEND_BRANCH $BACKEND_REPO /app

WORKDIR /app

RUN composer install --no-dev --optimize-autoloader --no-interaction --no-security-blocking

RUN cp api/web/index.php.dist api/web/index.php

RUN php init --env=Production --overwrite=All --no-interaction

RUN chmod 0777 api/runtime api/web/assets backend/runtime backend/web/assets \
    console/runtime frontend/runtime frontend/web/assets

FROM php:8.1-fpm-alpine

RUN apk add --no-cache git openssh nginx supervisor oniguruma-dev icu-dev libzip-dev \
    libpng-dev libjpeg-turbo-dev freetype-dev imap-dev linux-headers openssl-dev krb5-dev \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-configure imap --with-imap-ssl --with-kerberos \
    && docker-php-ext-install pdo pdo_mysql mbstring intl bcmath zip gd imap

COPY --from=builder /app /app
COPY php.ini /usr/local/etc/php/conf.d/orfeo.ini
COPY nginx.conf /etc/nginx/http.d/default.conf
COPY supervisord.conf /etc/supervisor.d/orfeo.ini
COPY entrypoint.sh /entrypoint.sh
COPY create-admin.php /app/create-admin.php

WORKDIR /app

RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]
