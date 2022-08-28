FROM node:alpine

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "mongodb.js"]