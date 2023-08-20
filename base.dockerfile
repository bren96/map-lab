FROM node:20
RUN npm i -g nx@16.6.0

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm i --cache-only
