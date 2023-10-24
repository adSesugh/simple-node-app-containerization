FROM node:alpine3.18

WORKDIR /app

COPY *.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]