FROM node:20 as base
RUN npm i -g nx@16.6.0

FROM base
WORKDIR /app
COPY . .
RUN npm i