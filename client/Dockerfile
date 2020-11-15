FROM node:latest

ENV APP_ROOT /usr/src/client

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm generate
RUN npm run build

ENV HOST 0.0.0.0