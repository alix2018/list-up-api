FROM node:lts

WORKDIR /list-up-api

COPY package.json .

RUN npm install

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "start"]