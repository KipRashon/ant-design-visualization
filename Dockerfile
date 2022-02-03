#Stage 1
FROM node:14-alpine AS builder

RUN mkdir /usr/app

COPY . /usr/app 

WORKDIR /usr/app 

RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH 

RUN npm run build

#Stage 2
FROM  nginx:alpine

COPY --from=builder /usr/app/build .

ENTRYPOINT [ "nginx","-g","daemon off;" ]