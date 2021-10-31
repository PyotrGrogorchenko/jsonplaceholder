FROM node:14.17.3-alpine as build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
