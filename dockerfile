FROM node:23.7.0-alpine3.20 AS front-builder

WORKDIR /app

COPY ./site/package*.json ./

RUN npm install .

COPY ./site/ .

RUN npm run build

###################################

FROM rust:1.84.1-slim-bullseye AS back-builder

WORKDIR /app

COPY ./webserver/Cargo.toml ./webserver/Cargo.lock ./

RUN mkdir src && echo "fn main() {println!(\"if you see this, the build broke\")}" > src/main.rs

RUN cargo build --release

RUN rm -f target/release/deps/webserver*

COPY ./webserver/ .

RUN cargo build --release

###################################

FROM ubuntu:25.04

WORKDIR /app

COPY --from=front-builder /app/dist /app/dist
COPY --from=back-builder /app/target/release/webserver /app/webserver

EXPOSE 8080

ENV BLOG_SERVER_STATIC_PATH=/app/dist

CMD [ "./webserver" ]
