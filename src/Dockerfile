FROM php:7.4-fpm-alpine

# Instalar dependencias necesarias y Nginx
RUN apk update && \
    apk add --no-cache nginx && \
    apk add --no-cache nginx-mod-http-headers-more && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /run/nginx

WORKDIR /var/www/html

# Instalar extensiones de PHP
RUN docker-php-ext-install pdo pdo_mysql

# Copiar la configuración de Nginx
COPY ./nginx/default.conf /etc/nginx/nginx.conf

# Exponer el puerto 85
EXPOSE 85

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
