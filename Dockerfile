FROM node:12-alpine as build

WORKDIR /

COPY package.json /

RUN npm install

COPY ./ /

RUN npm run build

FROM nginx:1.15

COPY --from=build /build /usr/share/nginx/html

COPY ./nginx.conf /etc/share/nginx/conf.d/default.conf


