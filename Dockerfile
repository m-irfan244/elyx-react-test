# build environment
FROM node:16.9.1 as builder

# To specify the IP on which the backend will run as a docker container.
ARG elyxserver=127.0.0.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY client/ /usr/src/app

# To connect to Backend running on Docker.
RUN sed -i "0,/157.230.248.195/s/157.230.248.195/${elyxserver}/" /usr/src/app/.env

RUN npm install --silent
RUN npm run-script build


# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
