FROM node:16.11.0-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY src ./src
COPY public ./public
EXPOSE 3021

CMD ["npm", "start"]