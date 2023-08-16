FROM nx-base:1.0

WORKDIR /app

COPY . .

RUN npm i