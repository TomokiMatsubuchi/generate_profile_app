FROM node:18

WORKDIR /frontend

COPY package*.json ./
RUN yarn install

COPY . ./

EXPOSE 8080
