FROM node:12-alpine
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install --only=production
RUN npx frontity build
EXPOSE 8080
CMD ["node", "server.js"]