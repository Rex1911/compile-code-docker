#Using the nodejs base image file
FROM rex1911/compile-code-base:latest

#Setting the working diectory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000
CMD ["node", "app.js"]