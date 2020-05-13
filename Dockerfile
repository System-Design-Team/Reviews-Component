# Download base image ubuntu 16.04
FROM alpine:3.7

# list maintainer
LABEL MAINTAINER=AUTOMAUS

# Update ubuntu and install node and npm
RUN apk update
RUN apk add --update nodejs nodejs-npm

WORKDIR /review-component

ENV PATH /node_modules/.bin:$PATH

COPY /package.json ./
COPY /package-lock.json ./

#  install dependancies
RUN npm install;

#copy source code into container
COPY . ./

# run webpack and start server
RUN npm run dev;


# select port
EXPOSE 9004

# run commands to start app
CMD ["npm", "run", "start:server"]