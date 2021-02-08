FROM node:14.15-alpine as frontend-stage

LABEL maintainer="ddrrpg"

WORKDIR /var/frontend

COPY . .

EXPOSE 3000

COPY package*.json ./

RUN npm install

CMD [ "npm", "run", "dev" ]
