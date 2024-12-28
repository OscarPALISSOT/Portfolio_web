FROM node:latest

WORKDIR /app

COPY . .

ARG NEXT_PUBLIC_DIRECTUS_URL
ARG NEXT_PUBLIC_ASSETS_URL

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
