FROM node:11.13.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade
RUN apk add git python make g++

COPY . /usr/src/nuxt-app/

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=80

EXPOSE 80
CMD [ "nuxt", "--hostname 0.0.0.0", "--port 80" ]
CMD [ "npm", "start" ]
