FROM node:9.5-alpine

RUN apk update && \
  apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat && \
  apk add git && \
  apk add python && \
  rm -rf /var/cache/apk/*

RUN npm install --global gatsby --no-optional gatsby@1.9 

WORKDIR /app
COPY . .

ENV NODE_ENV="production"
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]