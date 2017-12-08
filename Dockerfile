FROM node:8.8.1

WORKDIR /gittoken-mailer

ADD . .

RUN npm install
RUN npm run build

ENTRYPOINT npm run start

EXPOSE 8686
