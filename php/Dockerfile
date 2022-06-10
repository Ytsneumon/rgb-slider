ARG PHP_VERSION=""
FROM php:7-fpm-bullseye

RUN apk update; \
    apk upgrade;

RUN docker-php-ext-install mysqli
