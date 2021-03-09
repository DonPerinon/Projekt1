FROM node
#ENV
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --ignore-scripts
COPY . .
CMD [ "node", "dist/index.js" ]