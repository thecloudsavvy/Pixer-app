FROM nginx
COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN apt update
RUN apt upgrade -y
RUN apt install vim -y
EXPOSE 80