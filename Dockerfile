FROM node:10.16.0-alpine
WORKDIR /app
COPY package.json /app
COPY servidor.js /app
RUN npm install
EXPOSE 8080
ENTRYPOINT ["node","servidor"]
