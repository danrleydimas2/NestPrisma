FROM  node:lts-alpine
RUN apk add --no-cache bash

RUN  yarn add @nestjs/cli -g

USER node
WORKDIR /home/node/app
