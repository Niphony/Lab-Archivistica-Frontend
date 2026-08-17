FROM node:19-alpine

RUN apk add --no-cache git openssh

ARG SOCKETS_REPO=https://github.com/skinatech/orfeong_sockets.git
ARG SOCKETS_BRANCH=main

RUN git clone --depth 1 -b $SOCKETS_BRANCH $SOCKETS_REPO /app

WORKDIR /app

RUN npm install

EXPOSE 3005

CMD ["npm", "start"]
