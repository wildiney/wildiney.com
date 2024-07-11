FROM node:21-alpine

ENV NODE_ENV development

RUN npm install -g vite

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["vite", "--host", "0.0.0.0"]