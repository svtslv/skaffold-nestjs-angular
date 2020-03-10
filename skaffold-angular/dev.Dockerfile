FROM node:12-alpine

WORKDIR /app
EXPOSE 4200

COPY package* ./
RUN apk update && apk add --no-cache --virtual .build-deps make gcc g++ python \
 && npm ci \
 && npm run ngcc \
 && apk del .build-deps
COPY . .

CMD ["npm", "run", "ng", "serve"]
# CMD ["npm", "run", "ng", "serve", "--", "--host=0.0.0.0", "--disable-host-check"]
