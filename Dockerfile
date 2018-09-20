FROM node:8 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["npm", "start"]

EXPOSE 9100