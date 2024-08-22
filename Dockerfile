FROM node:20

WORKDIR /usr/etc/app

COPY . . 

RUN npm i

EXPOSE 5173

CMD ["npm","run","deploy"]
