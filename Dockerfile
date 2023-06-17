FROM node:16.3.0-alpine3.13

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install 

# add app
COPY . ./

# start app
CMD ["npm", "start"]