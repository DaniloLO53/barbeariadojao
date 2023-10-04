FROM node

WORKDIR /usr/src

COPY . .

RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]