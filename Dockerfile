FROM node:8.16.2-alpine
WORKDIR /app
COPY . . 
RUN npm install

CMD ["sh"]