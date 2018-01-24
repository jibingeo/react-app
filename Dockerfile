FROM node:9-alpine
WORKDIR /code
COPY  ./yarn.lock ./package.json /code/
RUN yarn install
COPY . /code
RUN yarn build

FROM nginx:1-alpine
COPY --from=0 /code/dist /usr/share/nginx/html
