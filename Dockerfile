FROM node:18

WORKDIR /front

COPY package*.json ./
RUN yarn install

COPY . ./

EXPOSE 8080
