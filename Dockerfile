FROM node:alpine as build
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:1.13.12-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]