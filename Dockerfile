FROM node:24.12.0-alpine3.23

WORKDIR /usr/src/app


COPY . .

EXPOSE 5173
CMD ["sleep", "infinity"]

# yarn dev --host 0.0.0.0 --port 5173