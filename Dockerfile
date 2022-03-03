FROM node:16
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN yarn install
# Bundle app source
COPY . .

CMD ["node", "src/app.js"]
