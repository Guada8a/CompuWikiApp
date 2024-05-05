FROM php:7.4-fpm-alpine

WORKDIR /var/www/html

# Install PHP extensions
RUN docker-php-ext-install pdo pdo_mysql

# Copy nginx configuration
COPY ./nginx/default.conf /etc/nginx/nginx.conf

EXPOSE 85

CMD ["nginx", "-g", "daemon off;"]
