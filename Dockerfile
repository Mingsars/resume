FROM nginx
MAINTAINER Mings
COPY dist  /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.vh.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon dock;"]


