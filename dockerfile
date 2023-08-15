FROM map-lab-nx-base:latest

WORKDIR /app

COPY . .

RUN npm i